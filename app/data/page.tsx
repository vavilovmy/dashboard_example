import styles from "../page.module.css";
import generateDummyData from "@/lib/dataGenerator";

type Data = {
   division: string;
   date: string;
   amount: string;
   type: string;
}[];

const dummy = generateDummyData({
   start: new Date('2024-01-01'),
   end: new Date('2024-12-31'),
   perMonth: 100,
   minAmount: 1000,
   maxAmount: 75000
 }).data;

function filterBySegment(rawData: Data, seg: string) {
   let sortedData = rawData.filter(item => item.division === seg)
   return sortedData;
}

function filterByType(rawData: Data, transaction: string) {
   let sortedData = rawData.filter(item => item.type === transaction)
   return sortedData
}

function filterByMonth(rawData: Data, month: number) {
   let sortedData = rawData.filter(item => (normalizeDate(item.date).getMonth() + 1) === month)
   return sortedData
}

function countFinancials(rawData: Data, seg: string, type: string) {
   let arr = [];
   let counter = 1;
   let sortedData = filterByType(filterBySegment(rawData, seg), type)
   while (counter < 13) {
      let tempArray = filterByMonth(sortedData, counter);
      let sum = 0;
      for (let i = 0; i < tempArray.length; i++) {
         sum += Number(tempArray[i].amount)
      }
      arr.push(sum)
      counter++
   }
   return arr;
}

function normalizeDate(date: string) {
   return new Date(date)
}

const financeMap = {
   b2bExp: countFinancials(dummy, 'B2B', 'expanses'),
   b2bInc: countFinancials(dummy, 'B2B', 'income'),
   b2сExp: countFinancials(dummy, 'B2C', 'expanses'),
   b2сInc: countFinancials(dummy, 'B2C', 'income'),
}



export default function Home() {

  return (
    <div className={styles.container} style={{flexDirection: 'column'}}>
      <h1>123321</h1>
      <ul>
         {dummy.map((item, index) =>
         <li key={index}>{item.division} {item.amount} {item.type} {normalizeDate(item.date).toLocaleDateString()}</li>
         )}
      </ul>
    </div>
  );
}

