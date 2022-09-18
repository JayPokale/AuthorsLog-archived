import express from "express";
import connection from "../config.js";
import { checkCookie } from "../utility/middleware.js";
import { nanoid } from "nanoid";
const postRouter = express.Router();

postRouter.post("/create", checkCookie, (req, res) => {
  try {
    const { title, content, featured_image, tagsArr } = req.body;
    const slug = title.trim().replace(/[/ ]/g, "-").substring(0, 50);
    console.log({ title, content, featured_image, tagsArr });
    const user = req.user;
    // console.log(user.token + randomSTR())
    // let x = tagsArr[1] ? '${tagsArr[1]}' : null
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
      `select p.pid, p.title, p.thumbnail, p.time, p.likes, p.slug,p.dislikes, u.photo, u.name from posts p join users u on p.uid = u.uid where p.disabled = 0 and p.deleted = 0 and u.disabled = 0`,
      (error, result) => {
        if (error) throw error;
        res.send({ result });
      }
    );
  } catch (err) {
    console.log(err);
  }
});

postRouter.get("/:pid/:slug", async (req, res) => {
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

export default postRouter;
