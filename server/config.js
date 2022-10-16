import mysql from "mysql"
import dotenv from "dotenv"
dotenv.config();
const connection = mysql.createPool({
  host : process.env.HOST,
  user : process.env.DB_USER,
  password  :process.env.DB_PASS,
  database : process.env.DB,
  port : process.env.PORT
})

// connection.connect(error => {
//   if(error) throw error;
//   console.log("connected to databse")
// });

export default connection