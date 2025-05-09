function generateDummyData({
   start,      // Date, начало периода
   end,        // Date, конец периода
   perMonth = 15,
   minAmount = 10000,
   maxAmount = 250000
 } : {
   start: Date;
   end: Date;
   perMonth?: number;
   minAmount?: number;
   maxAmount?: number;
 }) {
   const data = [];
   let current = new Date(start.getFullYear(), start.getMonth(), 1);
   const endMonth = new Date(end.getFullYear(), end.getMonth(), 1);
 
   while (current <= endMonth) {
     for (let i = 0; i < perMonth; i++) {
       // Генерируем случайный день в текущем месяце
       const daysInMonth = new Date(
         current.getFullYear(),
         current.getMonth() + 1,
         0
       ).getDate();
       const randomDay = Math.floor(Math.random() * daysInMonth) + 1;
       const randomDate = new Date(
         current.getFullYear(),
         current.getMonth(),
         randomDay,
         Math.floor(Math.random() * 24),
         Math.floor(Math.random() * 60),
         Math.floor(Math.random() * 60)
       );
 
       data.push({
         division: Math.random() < 0.5 ? 'B2B' : 'B2C',
         date: randomDate.toISOString(),
         amount: String(
           Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount
         ),
         type: Math.random() < 0.5 ? 'income' : 'expanses'
       });
     }
     // Переходим к следующему месяцу
     current = new Date(current.getFullYear(), current.getMonth() + 1, 1);
   }
 
   return { data };
 }
 
 export default generateDummyData;

 // вызов (тест)
 const dummy = generateDummyData({
   start: new Date('2024-01-01'),
   end: new Date('2024-12-31'),
   perMonth: 15,
   minAmount: 10000,
   maxAmount: 250000
 });
 console.log(JSON.stringify(dummy, null, 2));