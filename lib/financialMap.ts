import { Data } from "./types"

export function dataSorter(unsortedData: Data) {
   const sortedByMonth = [...unsortedData].sort((a, b) => normalizeDate(a.date).getMonth() - normalizeDate(b.date).getMonth())

   let b2bME = []
   let b2bMI = []
   let b2bProf = []

   let b2cME = []
   let b2cMI = []
   let b2cProf = []

   let problems = []

   let idx = 0

   for (let month = 0; month < 12; month++) {

   let b2bExp = 0, b2bInc = 0, b2cExp = 0, b2cInc = 0

   while (
      idx < sortedByMonth.length &&
      normalizeDate(sortedByMonth[idx].date).getMonth() === month
   ) {
      let item = sortedByMonth[idx]
      let amt  = Number(item.amount)

      if (amt >= 10000 && item.type === 'expanses') problems.push(item)

      if (item.division === 'B2B') {
         item.type === 'income' ? b2bInc += amt : b2bExp += amt;
      } else {
         item.type === 'income' ? b2cInc += amt : b2cExp += amt;
      }

      idx++
   }
   
   b2bME.push(b2bExp);
   b2bMI.push(b2bInc);
   b2cME.push(b2cExp);
   b2cMI.push(b2cInc);
   }
   
   b2bProf = b2bMI.map((num, i) => num - b2bME[i])
   b2cProf = b2cMI.map((num, i) => num - b2cME[i])

   const combinedExpenses = b2bME.map((num, i) => num + b2cME[i])
   const combinedIncome = b2bMI.map((num, i) => num + b2cMI[i])
   const combinedProfit = b2bProf.map((num, i) => num + b2cProf[i])

   let b2bTE = reduceToTotal(b2bME);
   let b2bTI = reduceToTotal(b2bMI);
   let b2bTP = reduceToTotal(b2bProf);

   let b2cTE = reduceToTotal(b2cME);
   let b2cTI = reduceToTotal(b2cMI);
   let b2cTP = reduceToTotal(b2cProf);

   let combTE = b2bTE + b2cTE;
   let combTI = b2bTI + b2cTI;
   let combTP = b2bTP + b2cTP;

   function reduceToTotal(arr: number[]) {
      return arr.reduce((acc, val) => acc + val, 0)
   }

   return {
      problemZones: problems,

      b2bMonthlyExpenses: b2bME,
      b2bTotalExpenses: b2bTE,
      b2bMonthlyIncome: b2bMI,
      b2bTotalIncome: b2bTI,
      b2bMonthlyProfit: b2bProf,
      b2bTotalProfit: b2bTP,

      b2cMonthlyExpenses: b2cME,
      b2cTotalExpenses: b2cTE,
      b2cMonthlyIncome: b2cMI,
      b2cTotalIncome: b2cTI,
      b2cMonthlyProfit: b2cProf,
      b2cTotalProfit: b2cTP,

      combinedMonthlyExpenses: combinedExpenses,
      combinedTotalExpenses: combTE,
      combinedMonthlyIncome: combinedIncome,
      combinedTotalIncome: combTI,
      combinedMonthlyProfit: combinedProfit,
      combinedTotalProfit: combTP
   }
}

function normalizeDate(date: string) {
   return new Date(date)
}