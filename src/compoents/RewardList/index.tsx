import styles from "./index.module.scss";
import No1Svg from "@/assets/no1.svg";
import No2Svg from "@/assets/no2.svg";
import No3Svg from "@/assets/no3.svg";
import { useTranslation } from "react-i18next";

const RewardList = () => {
  const { t } = useTranslation();
  return (
    <div className={styles["container"]}>
      <p className={styles["title"]}>Reward User</p>
      <div className={styles["list"]}>
        <div className={styles["thead"]}>
          <p className={styles["item"]}>{t("Rank")}</p>
          <p className={styles["item"]}>{t("Address")}</p>
          <p className={styles["item"]}>{t("Rewards")}</p>
        </div>
      </div>
    </div>
  );
};

export default RewardList;
