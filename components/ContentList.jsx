import Styles from "../styles/Home.module.css"
import Image from "next/image"

const ContentList = () => {
  return (
    <main className={Styles.mainContentList}>
      <div>
        <Image
          src="/image1.png"
          width={160}
          height={90}
        />
        <Image
          src="/image2.png"
          width={160}
          height={90}
        />
        <Image
          src="/image3.png"
          width={160}
          height={90}
        />
        <Image
          src="/image4.png"
          width={160}
          height={90}
        />
      </div>
    </main>
  );
}

export default ContentList;