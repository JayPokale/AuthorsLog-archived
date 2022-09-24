import express from "express";
import connection from "../config.js";
import { checkCookie } from "../utility/middleware.js";
import { nanoid } from "nanoid";
const postRouter = express.Router();

postRouter.post("/create", checkCookie, (req, res) => {
  try {
    const { title, content, featured_image, tagsArr } = req.body;
    const slug = title.trim().replace(/[/ ]/g, "-").substring(0, 50);
    const user = req.user;
    connection.query(
      `insert into posts ( pid, uid, title, slug, content, tag1, tag2, tag3, tag4, tag5, thumbnail ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )`,
      [
        nanoid(10),
        user.token,
        title,
        slug,
        content,
        ...tagsArr,
        featured_image,
      ],
      (err, result) => {
        if (err) {
          res.send({ status: false, message: "Something went wrong :(" });
          console.log(err);
          return;
        }
        res.send({ status: true, message: "Posted successfully :)" });
      }
    );
  } catch (error) {
    console.log({ error });
  }
});

postRouter.get("/allposts", async (req, res) => {
  try {
    let result = await connection.query(
      `select p.pid, p.title, p.thumbnail, p.time, p.likes, p.slug, p.dislikes, u.photo, u.name from posts p join users u on p.uid = u.uid where p.disabled = 0 and p.deleted = 0 and u.disabled = 0`,
      (error, result) => {
        if (error) throw error;
        res.send({ result });
      }
    );
  } catch (err) {
    console.log(err);
  }
});

postRouter.post("/:pid/:slug", async (req, res) => {
  const { pid, slug } = req.params;
  try {
    connection.query(
      `select p.title, p.thumbnail, p.content, p.time, p.likes, p.dislikes, u.photo, u.name, u.followers from posts p join users u on p.uid = u.uid where p.disabled = 0 and p.deleted = 0 and u.disabled = 0 and p.pid = ? and p.slug= ?`,
      [pid, slug],
      (error, result) => {
        if (error) throw error;
        res.send({ post: result[0] });
      }
    );
  } catch (err) {
    console.log(err);
  }
});

postRouter.post("/reaction", async (req, res) => {
  const { pid, uid, rxn } = req.body;
  try {
    connection.query(
      `delete from reaction where pid = ? and uid = ?`,
      [pid, uid],
      (error, result) => {
        if (error) throw error;
        if (rxn == 0 || rxn == 1) {
          connection.query(
            `insert into reaction (pid, uid, reaction) VALUES (?, ?, ?)`,
            [pid, uid, rxn],
            (e, r) => {
              if (e) throw e;
              console.log(r);
              res.send({ reaction: "added" });
            }
          );
        } else {
          res.send({ reaction: "removed" });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});

postRouter.post("/saved", async (req, res) => {
  const { pid, uid } = req.body;
  try {
    connection.query(
      `insert into saved (pid, uid) VALUES (?, ?)`,
      [pid, uid],
      (error, result) => {
        if (error) throw error;
        res.send({ status: "saved" });
      }
    );
  } catch (err) {
    console.log(err);
  }
});

postRouter.post("/unsaved", async (req, res) => {
  const { pid, uid } = req.body;
  try {
    connection.query(
      `delete from saved where pid = ? and uid = ?`,
      [pid, uid],
      (error, result) => {
        if (error) throw error;
        res.send({ status: "unsaved" });
      }
    );
  } catch (err) {
    console.log(err);
  }
});

postRouter.post("/issaved", async (req, res) => {
  const { pid, uid } = req.body;
  try {
    connection.query(
      `select * from saved where pid = ? and uid = ?`,
      [pid, uid],
      (error, result) => {
        if (error) throw error;
        res.send({ status: result[0] ? true : false });
      }
    );
  } catch (err) {
    console.log(err);
  }
});

postRouter.post("/follow", async (req, res) => {
  const { follower, following } = req.body;
  try {
    connection.query(
      `insert into followers (follower, following) VALUES (?, ?)`,
      [follower, following],
      (error, result) => {
        if (error) throw error;
        res.send({ status: "followed" });
      }
    );
  } catch (err) {
    console.log(err);
  }
});

postRouter.post("/unfollow", async (req, res) => {
  const { follower, following } = req.body;
  try {
    connection.query(
      `delete from followers where follower = ? and following = ?`,
      [follower, following],
      (error, result) => {
        if (error) throw error;
        res.send({ status: "unfollowed" });
      }
    );
  } catch (err) {
    console.log(err);
  }
});

postRouter.post("/isfollow", async (req, res) => {
  const { follower, following } = req.body;
  try {
    connection.query(
      `select * from followers where follower = ? and following = ?`,
      [follower, following],
      (error, result) => {
        if (error) throw error;
        res.send({ status: result[0] ? true : false });
      }
    );
  } catch (err) {
    console.log(err);
  }
});

export default postRouter;
