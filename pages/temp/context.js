import { createContext } from "react";
import Temp from "../../components/Temp";

export const Context = createContext();

const func = () => {
  // const data = {
  //   "name" : "Jay",
  // }
  return (
    <div>
      <Context.Provider value={"data"}>
        <Temp/>
      </Context.Provider>
    </div>
  );
};
export default func;
