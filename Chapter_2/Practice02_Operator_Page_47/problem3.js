// tor kache 60 taka aache| tui jodi protibar 15 taka kore khoroch korish, koybar khorch korte parbi ? abong khoroch er por koy taka baki thakbe shieta ber korte ekta program lekh |

const haveMoney = 60;

const usageOfTaka_A_Time = 15;

const totalUsage = haveMoney / usageOfTaka_A_Time;

console.log(totalUsage);

const leftOverMoney = haveMoney - (totalUsage*usageOfTaka_A_Time);

console.log(leftOverMoney);