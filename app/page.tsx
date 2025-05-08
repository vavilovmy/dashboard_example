import styles from "./page.module.css";
import Sidebar from '../components/Sidebar/Sidebar'
import Header from "@/components/Header/Header";
import TotalsReport from "@/components/Reports/TotalsReport";
import Graph from "@/components/Graph/Graph";
import ProblemZones from "@/components/ProblemZones/ProblemZones";



export default function Home() {

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.info}>
        <Header />
        <section className={styles.report}>
          <h1>Сводный отчет</h1>
          <div className={styles.tempWrap}>
          <div> {/* мейби сделать на гридах? этот див и выше */}
            <TotalsReport />
          <Graph />
          </div>
          <ProblemZones />
          </div>
        </section>
      </div>
    </div>
  );
}
