"use client"

import styles from "./page.module.css";
import Sidebar from '../components/Sidebar/Sidebar'
import Header from "@/components/Header/Header";
import TotalsReport from "@/components/Reports/TotalsReport";
import Graph from "@/components/Graph/Graph";
import ProblemZones from "@/components/ProblemZones/ProblemZones"; // a
import { useState } from "react";
import generateDummyData from "@/lib/dataGenerator";
import { dataSorter } from "@/lib/financialMap";
import { MoneyMap } from "@/lib/types";

const segments = {
  b2b: 'B2B',
  b2c: 'B2C',
  total: 'Итоги'
}

const dummy = generateDummyData({
  start: new Date('2024-01-01'),
  end: new Date('2024-12-31'),
  perMonth: 30,
  minAmount: 1000,
  maxAmount: 75000
}).data;

const finances: MoneyMap = dataSorter(dummy)

export default function Home() {

  const [chosen, setChosen] = useState<string>(segments.total)

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.info}>
        <Header />
        <section className={styles.report}>
          <h1>Сводный отчет</h1>
          <div className={styles.tempWrap}>
            <div>
              <TotalsReport financeMap={finances} chosen={chosen} setChosen={setChosen} segments={segments}/>
              <Graph financeMap={finances} chosen={chosen} segments={segments}/>
            </div>
            <ProblemZones problems={finances.problemZones}/>
          </div>
        </section>
      </div>
    </div>
  );
}
