"use client";

import styles from "./index.module.scss";
import Image from "next/image";
import EnBanner from "./assets/en.jpg";
import KoBanner from "./assets/ko.jpg";
import RuBanner from "./assets/ru.jpg";
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
      <Nav title={t("valentines_title")} />
      <div className={styles["container"]}>
        <div
          className={styles["banner-wrap"]}
          style={{ height: !isMobileStyle ? "400px" : "185px" }}
        >
          <Image src={memoImg} alt="" />
        </div>
        <div className={styles["detail-info"]}>
          <p className={styles["title"]}>{t("valentines_title")}</p>
          <p className={styles["date"]}>{t("valentines_date")}</p>
          {i18n.language === "ru" ? (
            <>
              <p className={styles["desc"]}>
                Love and Leverage: $5 для новых пользователей, $500 для
                победителей!
              </p>
              <p className={styles["desc"]}>
                Пока другие тратят деньги на дорогие ужины, ты зарабатываешь на
                Tradoor.
              </p>
              <div>
                <p className={styles["sub-title"]}>
                  ✨ Награды для новых пользователей
                </p>
                <p className={styles["desc"]}>
                  Боишься долгосрочных отношений? Не здесь. Глубоко влюбись в
                  Tradoor и получай за это бонусы.
                </p>
                <p className={styles["desc"]}>
                  ВСЕ новые пользователи, присоединившиеся в период кампании,
                  получают ваучер на $5 для опционов и 70% скидки на торговые
                  комиссии.
                </p>
              </div>
              <div>
                <p className={styles["sub-title"]}>
                  🤝 В горе и радости: Соревнование по PnL
                </p>
                <p className={styles["desc"]}>
                  Два трейдера получат по $20 USDT — один за лучший PnL, другой
                  за худший PnL (потому что Tradoor любит всех).
                </p>
              </div>

              <div>
                <p className={styles["sub-title"]}>Как это работает:</p>
                <p className={styles["desc"]}>
                  - Сделай сделку на Tradoor с фьючерсами Perps.
                </p>
                <p className={styles["desc"]}>
                  - Самый высокий PnL среди победивших сделок получит приз за
                  &#34;лучший PnL&#34;.
                </p>
                <p className={styles["desc"]}>
                  - Самый низкий PnL среди неудачных сделок получит приз за
                  &#34;худший PnL&#34;.
                </p>
              </div>
              <div>
                <p className={styles["sub-title"]}>🎟 Бонус: Розыгрыш</p>
                <p className={styles["desc"]}>
                  Забудь о любви, гоняйся за наградами — если ты достаточно
                  смел, участвуйте в розыгрыше.
                </p>
                <p className={styles["desc"]}>
                  Каждый, кто совершит торговый оборот в $10,000 в период акции,
                  получит один шанс в розыгрыше. Без ограничений — за каждые
                  дополнительные $10,000 объема торговли вы получаете еще один
                  шанс!
                </p>
              </div>
              <div>
                <p className={styles["sub-title"]}>🏆 Призы в розыгрыше:</p>
                <p className={styles["desc"]}>
                  - Ваучеры на опционы: $5, $10 или $50
                </p>
                <p className={styles["desc"]}>
                  - Скидки на торговые комиссии: 50% или 80%
                </p>
                <p className={styles["desc"]}>
                  - Награды в USDT: $5, $50, $100 или $500
                </p>
              </div>
              <p className={styles["desc"]}>
                Нет любви, нет проблем. Только риск, награды и плечи. Начни
                торговать на Tradoor прямо сейчас.
              </p>
            </>
          ) : i18n.language === "ko" ? (
            <>
              <p className={styles["desc"]}>
                💖 Love & Leverage: 신규 사용자 $5 보장, 우승자는 최대 $500
                획득!
              </p>
              <p className={styles["desc"]}>
                비싼 발렌타인데이 저녁에 돈을 낭비하는 대신, TRADOOR에서 돈을
                만드는 건 어떤가요?
              </p>
              <div>
                <p className={styles["sub-title"]}>✨ 신규 사용자 보상</p>
                <p className={styles["desc"]}>
                  약속에 문제가 생겼나요? Tradoor에선 그런 걱정이 없습니다!
                </p>
                <p className={styles["desc"]}>
                  TRADOOR에 뛰어들고 보상을 받으시는 건 어떠신가요?
                </p>
                <p className={styles["desc"]}>
                  🎁 이벤트 기간 내 신규 가입자 전원
                </p>
                <p className={styles["desc"]}>✅ $5 옵션 바우처 지급</p>
                <p className={styles["desc"]}>✅ 거래 수수료 70% 할인 제공</p>
              </div>
              <div>
                <p className={styles["sub-title"]}>
                  🤝 PnL 챌린지: 최고 또는 최악의 PnL을 노려라!
                </p>
                <p className={styles["desc"]}>
                  최고의 수익자와 최악의 손실자도 보상받는 이벤트!
                </p>
              </div>
              <div>
                <p className={styles["desc"]}>
                  •최고 PnL 기록자: 가장 높은 수익을 낸 트레이더
                </p>
                <p className={styles["desc"]}>
                  •최악 PnL 기록자: 가장 낮은 손실을 낸 트레이더 (TRADOOR는
                  모두를 사랑합니다!)
                </p>
              </div>
              <div>
                <p className={styles["sub-title"]}>🔥 참여 방법:</p>
                <p className={styles["desc"]}>1️⃣ TRADOOR Perps에서 거래</p>
                <p className={styles["desc"]}>
                  2️⃣ 가장 높은 PnL을 기록한 거래자는 “최고 PnL” 상금 획득
                </p>
                <p className={styles["desc"]}>
                  3️⃣ 가장 낮은 PnL을 기록한 거래자는 “최악 PnL” 상금 획득
                </p>
              </div>
              <div>
                <p className={styles["sub-title"]}>
                  🎟 보너스: 럭키 드로우 이벤트
                </p>
                <p className={styles["desc"]}>
                  로맨스는 뒤로 미뤄두고, 보상을 쫓아보시는 건 어떠신가요?
                  도전할 준비가 되셨나요?!
                </p>
              </div>
              <div>
                <p className={styles["sub-title"]}></p>
                <p className={styles["desc"]}>
                  •$10,000 거래량을 달성하면 럭키 드로우 1회 응모
                </p>
                <p className={styles["desc"]}>
                  •추가 $10,000 거래마다 추가 응모권 획득 (참여 횟수 제한 없음!)
                </p>
              </div>
              <div>
                <p className={styles["sub-title"]}>🏆 럭키 드로우 경품:</p>
                <p className={styles["desc"]}>•옵션 바우처: $5, $10, $50</p>
                <p className={styles["desc"]}>
                  •거래 수수료 할인: 50% 또는 80%
                </p>
                <p className={styles["desc"]}>
                  •USDT 보상: $5, $50, $100, $500
                </p>
              </div>
              <div>
                <p className={styles["desc"]}>
                  사랑이 없다면, 모든 문제가 해결되죠?
                </p>
                <p className={styles["desc"]}>
                  우리에겐 스릴과 보상, 그리고 레버리지만 있으면 됩니다 😎
                </p>
              </div>
              <p className={styles["desc"]}>
                지금 TRADOOR에서 거래를 시작하세요! 🚀
              </p>
            </>
          ) : (
            <>
              <p className={styles["desc"]}>
                Love & Leverage: New Users Claim $5, Winners Walk Away with
                $500!
              </p>
              <p className={styles["desc"]}>
                While others waste money on overpriced dinners, you&#39;re here
                making it all on Tradoor.
              </p>
              <div>
                <p className={styles["sub-title"]}>✨ Rewards for New Users</p>
                <p className={styles["desc"]}>
                  Commitment issues? Not here. Fall hard for Tradoor and get
                  rewarded.
                </p>
                <p className={styles["desc"]}>
                  ALL new users to join us within this campaign period get a $5
                  Options voucher + 70% off trading fees.
                </p>
              </div>
              <div>
                <p className={styles["sub-title"]}>
                  🤝 For Better or For Worse: PnL Showdown
                </p>
                <p className={styles["desc"]}>
                  Two traders will win $20 USDT each—one for the best PnL, one
                  for the worst PnL (because Tradoor loves everybody).{" "}
                </p>
              </div>
              <div>
                <p className={styles["sub-title"]}>How It Works: </p>
                <p className={styles["desc"]}>
                  - Make a trade on Tradoor Perps.{" "}
                </p>
                <p className={styles["desc"]}>
                  - The highest PnL from all winning trades secures the
                  &#34;best PnL&#34; prize.
                </p>
                <p className={styles["desc"]}>
                  - The lowest PnL from all failed trades secures the &#34;worst
                  PnL&#34; prize.
                </p>
              </div>
              <div>
                <p className={styles["sub-title"]}>🎟 Bonus: Lucky Draw </p>
                <p className={styles["desc"]}>
                  Skip the romance, chase the rewards - if you&#39;ve got the
                  guts.
                </p>
                <p className={styles["desc"]}>
                  Anyone who trades $10,000 volume during the event gets one
                  lucky draw entry. No limits—every additional $10,000 volume
                  earns another entry!
                </p>
              </div>
              <div>
                <p className={styles["sub-title"]}>🏆 Lucky Draw Prizes: </p>
                <p className={styles["desc"]}>
                  - Options Vouchers: $5, $10, or $50
                </p>
                <p className={styles["desc"]}>
                  - Trading Fee Discounts: 50% off or 80% off
                </p>
                <p className={styles["desc"]}>
                  - USDT Rewards: $5, $50, $100 or $500
                </p>
              </div>
              <p className={styles["desc"]}>
                No love, no problem. Just risk, reward, and leverage. Start
                trading now on Tradoor.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Detail;
