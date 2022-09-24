import MenuTop from "../components/menutop";
import MenuSide from "../components/MenuSide";
import { createContext, useState } from "react";

export const menuState = createContext();

const trial = () => {
  const [open, setOpen] = useState(false);
  return (
    <menuState.Provider value={{open, setOpen}}>
      <section className="h-screen">
        <MenuTop />
        <MenuSide />
      </section>
    </menuState.Provider>
  );
};

export default trial;
