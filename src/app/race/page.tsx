"use client";

import styles from "./index.module.scss";
import Image from "next/image";
import EnBanner from "./assets/en.png";
import KoBanner from "./assets/ko.png";
import RuBanner from "./assets/ru.png";
import Nav from "@/compoents/Nav";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import useWindowSize from "@/hooks/useWindowResize";
const Detail = () => {
  const { i18n, t } = useTranslation();
  const { isMobileStyle } = useWindowSize();
  const memoImg = useMemo(() => {
    if (i18n.language === "ru") return RuBanner;
    if (i18n.language === "ko") return KoBanner;
    return EnBanner;
  }, [i18n.language]);

  return (
    <>
      <Nav title={t("power_race_title")} />
      <div className={styles["container"]}>
        <div
          className={styles["banner-wrap"]}
          style={{ height: !isMobileStyle ? "400px" : "185px" }}
        >
          <Image src={memoImg} alt="" />
        </div>
        <div className={styles["detail-info"]}>
          <p className={styles["title"]}>{t("power_race_title")}</p>
          <p className={styles["date"]}>{t("power_race_date")}</p>
          <p className={styles["desc"]}>{t("power_race_phase1_title")}</p>
          <p className={styles["desc"]}>{t("power_race_phase1_desc")}</p>
          <p className={styles["desc"]}>{t("power_race_phase1_top1")}</p>
          <p className={styles["desc"]}>{t("power_race_phase1_top2")}</p>
          <p className={styles["desc"]}>{t("power_race_phase1_top3")}</p>
          <p className={styles["desc"]}>{t("power_race_phase2_title")}</p>
          <p className={styles["desc"]}>{t("power_race_phase2_desc")}</p>
          <p className={styles["desc"]}>{t("power_race_phase2_top1")}</p>
          <p className={styles["desc"]}>{t("power_race_phase2_top2")}</p>
          <p className={styles["desc"]}>{t("power_race_phase2_top3")}</p>
          <p className={styles["desc"]}>{t("power_race_phase3_title")}</p>
          <p className={styles["desc"]}>{t("power_race_phase3_desc")}</p>
          <p className={styles["desc"]}>{t("power_race_phase3_top1")}</p>
          <p className={styles["desc"]}>{t("power_race_bonus")}</p>
          <p className={styles["desc"]}>{t("power_race_bonus_desc")}</p>
          <p className={styles["desc"]}>{t("power_race_desc1")}</p>
          <p className={styles["desc"]}>{t("power_race_desc2")}</p>
          <p className={styles["desc"]}>{t("power_race_desc3")}</p>
          <p className={styles["desc"]}>{t("power_race_desc4")}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
