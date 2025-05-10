type Finances = {
   problems: {
       division: string;
       date: string;
       amount: string;
       type: string;
   }[];
   b2bMonthlyExpenses: number[];
   b2bMonthlyIncome: number[];
   b2сMonthlyExpenses: number[];
   b2сMonthlyIncome: number[];
}

export type MoneyMap = {
    problemZones: { 
        division: string; 
        date: string; 
        amount: string; 
        type: string; 
    }[];

    b2bMonthlyExpenses: number[];
    b2bTotalExpenses: number;
    b2bMonthlyIncome: number[];
    b2bTotalIncome: number;
    b2bMonthlyProfit: number[];
    b2bTotalProfit: number;

    b2cMonthlyExpenses: number[];
    b2cTotalExpenses: number;
    b2cMonthlyIncome: number[];
    b2cTotalIncome: number;
    b2cMonthlyProfit: number[];
    b2cTotalProfit: number;

    combinedMonthlyExpenses: number[];
    combinedTotalExpenses: number;
    combinedMonthlyIncome: number[];
    combinedTotalIncome: number;
    combinedMonthlyProfit: number[];
    combinedTotalProfit: number;
 }

export type Data = {
    division: string;
    date: string;
    amount: string;
    type: string;
 }[];

export type ChartData = {
    name: string;
    Выручка: number;
    Затраты: number;
    Прибыль: number;
    Задолженность: number;
    Итого: number;
}[]

export default Finances