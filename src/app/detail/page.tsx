"use client";

import styles from "./index.module.scss";
import { LanguageProviderContext } from "@/contexts/Language";
import { useContext, useMemo } from "react";
import { Language_Data_Map } from "./consants";
import RewardList from "@/compoents/RewardList";

const Detail = () => {
  const langauge = useContext(LanguageProviderContext);

  const data: Record<string, never> = useMemo(() => {
    if (langauge) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return Language_Data_Map[langauge];
    }
    return {};
  }, [langauge]);
  return (
    <div className={styles["container"]}>
      <div className={styles["banner-wrap"]}></div>
      <div className={styles["detail-info"]}>
        <p className={styles["title"]}>{data?.title}</p>
        <p className={styles["date"]}>{data?.date}</p>
        <p className={styles["desc"]}>{data?.desc}</p>
      </div>
      <RewardList />
    </div>
  );
};

export default Detail;
