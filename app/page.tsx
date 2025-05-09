import styles from "./page.module.css";
import Sidebar from '../components/Sidebar/Sidebar'
import Header from "@/components/Header/Header";
import TotalsReport from "@/components/Reports/TotalsReport";
import Graph from "@/components/Graph/Graph";
import ProblemZones from "@/components/ProblemZones/ProblemZones";
import financeMap from "@/lib/financialMap";

const totalsMap = {

}



export default function Home() {

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.info}>
        <Header />
        <section className={styles.report}>
          <h1>Сводный отчет</h1>
          <div className={styles.tempWrap}>
            <div>
              <TotalsReport financeMap={financeMap}/>
              <Graph />
            </div>
            <ProblemZones problems={financeMap.problems}/>
          </div>
        </section>
      </div>
    </div>
  );
}
