import BackSvg from "@/assets/back.svg";
import styles from "./index.module.scss";
import Image from "next/image";

interface IProps {
  title: string;
}

const Nav = ({ title }: IProps) => {
  return (
    <div className={styles["nav"]}>
      <Image
        src={BackSvg}
        width={24}
        height={24}
        alt=""
        onClick={() => window.history.back()}
        className={styles["back"]}
      />
      {title}
    </div>
  );
};

export default Nav;
