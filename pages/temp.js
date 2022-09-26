import MenuTop from "../components/menutop";
import MenuSide from "../components/MenuSide";
import { createContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "../styles/Home.module.css";

export const menuState = createContext();

const trial = () => {
  const [open, setOpen] = useState(false);

  // Handle width change
  const useDimensions = (myRef) => {
    const getWidth = () => ({
      width: myRef.current.offsetWidth,
    });

    const [width, setWidth] = useState(0);

    useEffect(() => {
      if (myRef.current) setWidth(getWidth());
      window.addEventListener("resize", () => setWidth(getWidth()));
    }, [myRef]);

    return width;
  };

  const handleWidth = useRef();
  console.log(handleWidth)
  const { width } = useDimensions(handleWidth);
  const [numberOfCards, setNumberOfCards] = useState(0);
  useEffect(() => {
    let n = Math.floor(width / 256);
    width && setNumberOfCards(Number(n));
    console.log(width)
  }, [width]);
  // Done

  return (
    <menuState.Provider value={{ open, setOpen }}>
      <section className="h-screen">
        <MenuTop />
        <div className="flex">
          <div
            className={`${
              open ? "w-[256px]" : "w-[88px]"
            } shrink-0 ease-in-out duration-300`}
          >
            <MenuSide />
          </div>
          <div className="w-full h-[calc(100vh-56px)] overflow-y-auto overflow-x-hidden">
            <div
              ref={handleWidth}
              id="contentList"
              className="ease-in-out duration-300 origin-top-left flex flex-wrap"
              style={{
                transform: `scale(${open ? (width-168)/width : 1})`,
                width: `${open ? width+168 : width}px`
              }}
            >
              <section
                className="w-full p-4"
                style={{
                  width: `${width / numberOfCards}px`,
                }}
              >
                <Link href={"/article/temp"}>
                  <div className="flex flex-col cursor-pointer">
                    <div>
                      <Image src="/image1.png" width={640} height={360} />
                    </div>
                    <div className="flex">
                      <div className="w-10 h-10 bg-black rounded-full absolute"></div>
                      <div className="ml-14">
                        <div className={Styles.h1title}>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ducimus maiores quos obcaecati rem! Adipisci
                          exercitationem esse unde rerum tempora ipsam, magni,
                          eveniet, quam repudiandae praesentium odio eius. Nisi,
                          aliquid cumque!30
                        </div>
                        <div className="text-sm text-gray-800">Dare2Solve</div>
                        <div className="text-sm text-gray-600">
                          10k votes (70%) &#9679; 08 Mar 2001
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </section>
              <section
                className="w-full p-4"
                style={{
                  width: `${width / numberOfCards}px`,
                }}
              >
                <Link href={"/article/temp"}>
                  <div className="flex flex-col cursor-pointer">
                    <div>
                      <Image src="/image1.png" width={640} height={360} />
                    </div>
                    <div className="flex">
                      <div className="w-10 h-10 bg-black rounded-full absolute"></div>
                      <div className="ml-14">
                        <div className={Styles.h1title}>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ducimus maiores quos obcaecati rem! Adipisci
                          exercitationem esse unde rerum tempora ipsam, magni,
                          eveniet, quam repudiandae praesentium odio eius. Nisi,
                          aliquid cumque!30
                        </div>
                        <div className="text-sm text-gray-800">Dare2Solve</div>
                        <div className="text-sm text-gray-600">
                          10k votes (70%) &#9679; 08 Mar 2001
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </section>
              <section
                className="w-full p-4"
                style={{
                  width: `${width / numberOfCards}px`,
                }}
              >
                <Link href={"/article/temp"}>
                  <div className="flex flex-col cursor-pointer">
                    <div>
                      <Image src="/image1.png" width={640} height={360} />
                    </div>
                    <div className="flex">
                      <div className="w-10 h-10 bg-black rounded-full absolute"></div>
                      <div className="ml-14">
                        <div className={Styles.h1title}>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ducimus maiores quos obcaecati rem! Adipisci
                          exercitationem esse unde rerum tempora ipsam, magni,
                          eveniet, quam repudiandae praesentium odio eius. Nisi,
                          aliquid cumque!30
                        </div>
                        <div className="text-sm text-gray-800">Dare2Solve</div>
                        <div className="text-sm text-gray-600">
                          10k votes (70%) &#9679; 08 Mar 2001
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </section>
              <section
                className="w-full p-4"
                style={{
                  width: `${width / numberOfCards}px`,
                }}
              >
                <Link href={"/article/temp"}>
                  <div className="flex flex-col cursor-pointer">
                    <div>
                      <Image src="/image1.png" width={640} height={360} />
                    </div>
                    <div className="flex">
                      <div className="w-10 h-10 bg-black rounded-full absolute"></div>
                      <div className="ml-14">
                        <div className={Styles.h1title}>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ducimus maiores quos obcaecati rem! Adipisci
                          exercitationem esse unde rerum tempora ipsam, magni,
                          eveniet, quam repudiandae praesentium odio eius. Nisi,
                          aliquid cumque!30
                        </div>
                        <div className="text-sm text-gray-800">Dare2Solve</div>
                        <div className="text-sm text-gray-600">
                          10k votes (70%) &#9679; 08 Mar 2001
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </section>
            </div>
          </div>
        </div>
      </section>
    </menuState.Provider>
  );
};

export default trial;
