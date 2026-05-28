// 今日の日付
const today = new Date();

// 年・月・日
const year = today.getFullYear();
const month = today.getMonth()+ 1;
const date = today.getDate();
const day = today.getDay();

// 曜日
const week = ["日","月","火","水","木","金","土"];

// HTML要素
const monthEl = document.getElementById("month");
const dateEl = document.getElementById("date");
const dayEl = document.getElementById("day");

monthEl.textContent =`${month}月`;
dateEl.textContent = date;
dayEl.textContent =`${week[day]}曜日`;

dateEl.addEventListener("click", ()=>{
  dateEl.classList.remove("flip");
  void dateEl.offsetWidth;
  dateEl.classList.add("flip");
});