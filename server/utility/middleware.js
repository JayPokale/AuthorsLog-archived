import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const checkCookie = (req, res, next) => {
  const token = req?.cookies?.user;
  if (!token) {
    res.status(401).send("token not available");
    return;
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    console.log(user);
    req.user = user;
    next()
  } catch (error) {
    console.log({ error });
    res.send("something went wrong");
  }
};

export { checkCookie };
