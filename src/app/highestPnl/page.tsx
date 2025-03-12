"use client";

import styles from "./index.module.scss";
import Image from "next/image";
import EnBanner from "./assets/en.jpg";
import KoBanner from "./assets/ko.jpg";
import RuBanner from "./assets/ru.jpg";
import Nav from "@/compoents/Nav";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
const Detail = () => {
  const { i18n, t } = useTranslation();
  const memoImg = useMemo(() => {
    if (i18n.language === "ru") return RuBanner;
    if (i18n.language === "ko") return KoBanner;
    return EnBanner;
  }, [i18n.language]);

  return (
    <>
      <Nav title={t("highest_pnl_title")} />
      <div className={styles["container"]}>
        <div className={styles["banner-wrap"]}>
          <Image src={memoImg} alt="" />
        </div>
        <div className={styles["detail-info"]}>
          <p className={styles["title"]}>{t("highest_pnl_title")}</p>
          <p className={styles["date"]}>{t("highest_pnl_date")}</p>
          {i18n.language === "ru" ? (
            <>
              <p className={styles["desc"]}>
                Волатильность? Неважно, взлетает рынок или опускается, - в
                Tradoor вы получите прибыль в любом случае.
              </p>
              <p className={styles["desc"]}>
                Соревнуйтесь за самый высокий PnL% в нашей трехдневной акции
                Trade Off, чтобы получить шанс выиграть до 500 USDT! В конкурсе
                участвуют как сделки с Perps, так и сделки с опционами.
              </p>
              <div>
                <p className={styles["sub-title"]}>💡 Новичок?</p>
                <p className={styles["desc"]}>
                  Если ваша первая сделка (Perps или Options) окажется
                  прибыльной, вы станете участником нашего розыгрыша призов:
                </p>
                <p className={styles["desc"]}>
                  Options Торговые ваучеры - $5, $10, $50
                </p>
                <p className={styles["desc"]}>
                  USDT Награды - $5, $50, $100 или $500
                </p>
                <p className={styles["desc"]}>
                  Скидки на торговые комиссии - 20% или 50%
                </p>
              </div>
              <div>
                <p className={styles["sub-title"]}>
                  ⚡ Хотите получить преимущество?
                </p>
                <p className={styles["desc"]}>
                  Торгуйте одной из новых монет DeFi в разделе «DeFi» и получите
                  БЕСПЛАТНЫЙ ваучер на 30% на опционы, чтобы получить 30% скидки
                  на премию при торговле опционами!
                </p>
              </div>
              <p className={styles["desc"]}>
                В настоящее время в список включены монеты $ENA, $AAVE, $LDO,
                $LINK и $PENDLE. Но не теряйте бдительности, так как в течение
                следующих нескольких дней будет добавлено больше монет DeFi.
              </p>
            </>
          ) : i18n.language === "ko" ? (
            <>
              <p className={styles["desc"]}>변동성? 걱정 마세요!</p>
              <p className={styles["desc"]}>
                시장이 상승하든 하락하든, Tradoor에서는 언제든지 수익을 낼 수
                있습니다!
              </p>
              <p className={styles["desc"]}>최고 수익률(PnL%)을 기록하세요!</p>
              <div>
                <p className={styles["desc"]}>
                  Three Day Trade Off에서 경쟁하고 최대 500 USDT를 획득하세요!
                </p>
                <p className={styles["desc"]}>
                  Perps 및 Options 거래 모두 포함됩니다!
                </p>
              </div>
              <p className={styles["desc"]}>⸻</p>
              <div>
                <p className={styles["sub-title"]}>💡 Tradoor가 처음인가요?</p>
                <p className={styles["desc"]}>
                  첫 거래(Perps 또는 Options)에서 수익을 내면 자동으로 행운의
                  추첨 이벤트에 참가하실 수 있습니다!
                </p>
                <p className={styles["desc"]}>행운의 추첨 보상:</p>
                <p className={styles["desc"]}>
                  - Options 트레이딩 바우처 – $5, $10, $50
                </p>
                <p className={styles["desc"]}>
                  - USDT 리워드 – $5, $50, $100, $500
                </p>
                <p className={styles["desc"]}>
                  - 거래 수수료 할인 – 20% 또는 50% 할인혜택
                </p>
              </div>
              <p className={styles["desc"]}>⸻</p>
              <div>
                <p className={styles["sub-title"]}>
                  ⚡ 추가 혜택을 원하시나요?
                </p>
                <p className={styles["desc"]}>
                  지금 “DeFi” 섹션의 신규 상장 코인을 거래하고 30% 옵션 할인
                  바우처를 무료로 받으세요!
                </p>
                <p className={styles["desc"]}>
                  현재 상장된 코인: $ENA, $AAVE, $LDO, $LINK, $PENDLE
                </p>
                <p className={styles["desc"]}>
                  앞으로 더 많은 DeFi 코인이 상장될 예정이니, 놓치지 마세요!
                </p>
              </div>
              <p className={styles["desc"]}>⸻</p>
              <div>
                <p className={styles["sub-title"]}>📅 이벤트 기간:</p>
                <p className={styles["desc"]}>
                  2025년 3월 12일 12AM UTC ~ 3월 16일 12AM UTC
                </p>
                <p className={styles["desc"]}>
                  지금 바로 거래를 시작하세요! 🚀
                </p>
              </div>
            </>
          ) : (
            <>
              <p className={styles["desc"]}>
                Volatility? Whether the market soars or sinks, take profit
                either way at Tradoor.
              </p>
              <p className={styles["desc"]}>
                Compete for the highest PnL% in our Three Day Trade Off to stand
                a chance to win up to 500 USDT! Both Perps and Options trades
                are eligible.
              </p>
              <div>
                <p className={styles["sub-title"]}>💡 New here?</p>
                <p className={styles["desc"]}>
                  If your first trade (either Perps or Options) is a profitable
                  one, you will be entered into our lucky draw to win:
                </p>
                <p className={styles["desc"]}>
                  Trading Vouchers – $5, $10, $50
                </p>
                <p className={styles["desc"]}>
                  USDT Rewards – $5, $50, $100, or $500
                </p>
                <p className={styles["desc"]}>
                  Trading Fee Discounts – 20% or 50% off
                </p>
              </div>
              <div>
                <p className={styles["sub-title"]}>⚡Want an edge?</p>
                <p className={styles["desc"]}>
                  Trade one of the newly listed DeFi coins in the &#34;DeFi&#34;
                  section and grab a FREE 30% Options Voucher to get 30% off
                  your premium in your Options trades!
                </p>
              </div>
              <p className={styles["desc"]}>
                Currently, coins listed are $ENA, $AAVE, $LDO, $LINK and
                $PENDLE. But keep your eyes peeled, as more DeFi coins are going
                to be listed in the course of the next few days.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Detail;
