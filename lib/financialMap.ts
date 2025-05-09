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

function filterByType(rawData: Data, transactionType: string) {
   let sortedData = rawData.filter(item => item.type === transactionType)
   return sortedData
}

function filterByMonth(rawData: Data, month: number) {
   let sortedData = rawData.filter(item => (normalizeDate(item.date).getMonth() + 1) === month)
   return sortedData
}

function countFinancials(rawData: Data, seg: string, transactionType: string) {
   let arr = [];
   let counter = 1;
   let sortedData = filterByType(filterBySegment(rawData, seg), transactionType)
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

const problemZones = dummy.filter(item => item.type === 'expanses' && Number(item.amount) >= 10000)

const financeMap = {
   problems: problemZones,
   b2bMonthlyExpenses: countFinancials(dummy, 'B2B', 'expanses'),
   b2bMonthlyIncome: countFinancials(dummy, 'B2B', 'income'),
   b2сMonthlyExpenses: countFinancials(dummy, 'B2C', 'expanses'),
   b2сMonthlyIncome: countFinancials(dummy, 'B2C', 'income'),
}

export default financeMap;
