import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();
import connection from "../config.js";
const LoginRouter = express.Router();
import jwt from "jsonwebtoken";
import { checkCookie } from "../utility/middleware.js";

LoginRouter.post("/login", async (req, res) => {
  const { displayName, photoURL, uid, email = null } = req.body;
  console.log(req.body);  
  if (!displayName || !uid) {
    res.status(201).send({
      ok: false,
      msg: "Invalid creadentials, please try again",
    });
    return;
  }
  const user_token = jwt.sign(
    { name: displayName, token: uid },
    process.env.JWT_SECRET,
    {
      expiresIn: "365days",
    }
  );

  connection.query(
    `insert into users ( uid , name , photo  , email ) VALUES ('${uid}' , '${displayName}' , '${photoURL}' , '${email}')`,
    (error, result) => {
      if (error) {
        if (error.code === "ER_DUP_ENTRY") {
          res.json({
            error,
            ok: true,
            user_token,
            user: { name: displayName, photo: photoURL },
          });
          return;
        }
        res.status(401).send({ error, ok: false });
        return;
      }

      res.status(200).json({
        result,
        ok: true,
        user_token,
        user: { name: displayName, photo: photoURL },
      });
    }
  );
});

// LoginRouter.get("/cookie", checkCookie, (req, res) => {
//   console.log({ cookie: req.cookies.user });
//   res.json({m: "kuch bhi" , r : req.user});
// });
export default LoginRouter;
