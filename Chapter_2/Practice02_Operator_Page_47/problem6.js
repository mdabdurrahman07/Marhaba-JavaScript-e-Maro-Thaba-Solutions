// tor kache 500 taka aache, protibar tui 75 taka khoroch korbi| koybar khoroch korte parbi ar sesh koy taka baki thakbe, sheta ber korar ekti program likh| 

// ANS

const haveMoney = 500;

const usageOfTaka_A_Time = 75;

const totalUsage = haveMoney / usageOfTaka_A_Time;

console.log(totalUsage);

const leftOverMoney = haveMoney - (totalUsage*usageOfTaka_A_Time);

console.log(leftOverMoney);