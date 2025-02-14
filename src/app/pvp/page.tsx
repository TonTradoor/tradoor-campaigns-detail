"use client";

import styles from "./index.module.scss";
// import { LanguageProviderContext } from "@/contexts/Language";
import Image from "next/image";
import EnBanner from "./assets/en.jpg";
import KoBanner from "./assets/ko.jpg";
import RuBanner from "./assets/ru.jpg";
import Nav from "@/compoents/Nav";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import useWindowSize from "@/hooks/useWindowResize";
import { LINK } from "./consants";
const Detail = () => {
  // const langauge = useContext(LanguageProviderContext);
  const { i18n, t } = useTranslation();
  const { isMobileStyle } = useWindowSize();
  const memoImg = useMemo(() => {
    if (i18n.language === "ru") return RuBanner;
    if (i18n.language === "ko") return KoBanner;
    return EnBanner;
  }, [i18n.language]);

  return (
    <>
      <Nav title={t("pvp_title")} />
      <div className={styles["container"]}>
        <div
          className={styles["banner-wrap"]}
          style={{ height: !isMobileStyle ? "400px" : "185px" }}
        >
          <Image src={memoImg} alt="" />
        </div>
        <div className={styles["detail-info"]}>
          <p className={styles["title"]}>{t("pvp_title")}</p>
          <p className={styles["date"]}>{t("pvp_date")}</p>
          <p className={styles["desc"]}>{t("pvp_desc1")}</p>
          <p className={styles["desc"]}>{t("pvp_desc2")}</p>
        </div>
        <div className={styles["link-info"]}>
          <a className={styles["link"]} href={LINK.TEL} target="_blank">
            - {t("pvp_c1")}
          </a>
          <a className={styles["link"]} href={LINK.DOC} target="_blank">
            - {t("pvp_c2")}
          </a>
          <a className={styles["link"]} href={LINK.RULE} target="_blank">
            - {t("pvp_c3")}
          </a>
        </div>
      </div>
    </>
  );
};

export default Detail;
