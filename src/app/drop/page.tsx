"use client";

import styles from "./index.module.scss";
import Image from "next/image";
import Banner from "./assets/banner.jpg";
import Nav from "@/compoents/Nav";
import { useTranslation } from "react-i18next";
import useWindowSize from "@/hooks/useWindowResize";
const Detail = () => {
  const { i18n } = useTranslation();
  const { isMobileStyle } = useWindowSize();

  return (
    <>
      <Nav title="Degen Drop" />
      <div className={styles["container"]}>
        <div
          className={styles["banner-wrap"]}
          style={{ height: !isMobileStyle ? "400px" : "185px" }}
        >
          <Image src={Banner} alt="" />
        </div>
        <div className={styles["detail-info"]}>
          {i18n.language === "ko" ? (
            <>
              <p className={styles["desc"]}>
                Degen Drop은 트레이더들이 한 달 동안 가장 높은 단일 트레이드
                수익률(% PnL)을 기록하여 경쟁하고, 상금을 받을 수 있는 월간
                챌린지입니다.
              </p>
              <p className={styles["desc"]}>참여 방법</p>
              <p className={styles["desc"]}>
                트레이더들은 매월 단 하나의 목표를 가집니다: Top 3 트레이드
                기록하고 보상을 획득하세요!
              </p>
              <p className={styles["desc"]}>🏆 보상</p>
              <p className={styles["desc"]}>• 🥇 1위: 50 USDT + 100 $DOOR</p>
              <p className={styles["desc"]}>• 🥈 2위: 100 $DOOR</p>
              <p className={styles["desc"]}>• 🥉 3위: 100 $DOOR</p>
              <p className={styles["desc"]}>
                이 챌린지는 단순한 거래량 경쟁이 아니라, 실행력, 전략, 리스크
                관리 능력을 시험하는 대회입니다. 단 한 번의 트레이드로도
                상위권에 오를 수 있습니다.
              </p>
              <p className={styles["desc"]}>Degen Drop을 해야 하는 이유?</p>
              <p className={styles["desc"]}>
                Tradoor는 트레이더를 위한 DEX로, 단순 거래량이 아니라 트레이딩
                실력을 보상합니다. Degen Drop은 트레이더들이 보다 전략적으로
                트레이딩하고, 계산된 리스크를 감수하며, 스마트한 트레이딩 결정을
                내릴 수 있도록 설계되었습니다.
              </p>
              <p className={styles["desc"]}>
                📈 당신의 이름을 리더보드에 올릴 준비가 되었나요?
              </p>
              <p className={styles["desc"]}>지금 거래를 시작하세요!</p>
            </>
          ) : i18n.language === "ru" ? (
            <>
              <p className={styles["desc"]}>
                Degen Drop — это ежемесячный челлендж, где трейдеры соревнуются
                за наибольшую прибыльность одной сделки (% PnL) и зарабатывают
                реальные награды.
              </p>
              <p className={styles["desc"]}>Как это работает</p>
              <p className={styles["desc"]}>
                Каждый месяц у трейдеров одна цель: зафиксировать ТОП-3 сделку и
                получить награды.
              </p>
              <p className={styles["desc"]}>🥇 50 USDT + 100 $DOOR</p>
              <p className={styles["desc"]}>🥈 100 $DOOR</p>
              <p className={styles["desc"]}>🥉 100 $DOOR</p>
              <p className={styles["desc"]}>
                Это испытание на мастерство, стратегию и управление рисками —
                одна успешная сделка может вывести вас в лидеры.
              </p>
              <p className={styles["desc"]}>Почему Degen Drop?</p>
              <p className={styles["desc"]}>
                Tradoor — это DEX, созданный для трейдеров, и мы награждаем
                скилл, а не просто объем торгов. Degen Drop помогает трейдерам
                улучшать навыки, осознанно рисковать и получать награды за
                продуманные торговые решения.
              </p>
              <p className={styles["desc"]}>
                Готовы подняться на вершину рейтинга? Начните торговать прямо
                сейчас!
              </p>
            </>
          ) : (
            <>
              <p className={styles["desc"]}>
                Degen Drop is a monthly challenge where traders compete for the
                highest single trade (% PnL) and earn real rewards.
              </p>
              <p className={styles["desc"]}>How It Works</p>
              <p className={styles["desc"]}>
                Every month, traders have one goal: lock in a Top 3 trade and
                secure rewards.
              </p>
              <p className={styles["desc"]}>🥇 50 USDT + 100 $DOOR</p>
              <p className={styles["desc"]}>🥈 100 $DOOR</p>
              <p className={styles["desc"]}>🥉 100 $DOOR</p>
              <p className={styles["desc"]}>
                It’s a test of execution, strategy, and risk management—one
                trade can put you at the top.
              </p>
              <p className={styles["desc"]}>Why Degen Drop?</p>
              <p className={styles["desc"]}>
                Tradoor is a DEX built for traders, and we believe in rewarding
                skill, not just volume. Degen Drop is designed to push traders
                to improve, take calculated risks, and get rewarded for smart
                trading decisions.
              </p>
              <p className={styles["desc"]}>
                Are you ready to climb the leaderboard? Start trading now!
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Detail;
