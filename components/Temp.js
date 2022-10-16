import { useContext } from "react";
import { Context } from "../pages/temp/context";

const temp = () => {

  const value = useContext(Context)
  console.log(value)

  return ( 
    <>
      <h1>{value}</h1>
    </>
   );
}
 
export default temp;