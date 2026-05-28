// 日付
const today = new Date();

const todayEl = document.getElementById("today");
const daysEl = document.getElementById("days");

const eventNameEl =
  document.getElementById("event-name");

const eventDateEl =
  document.getElementById("event-date");

const nameInput =
  document.getElementById("name-input");

const dateInput =
  document.getElementById("date-input");

const button =
  document.getElementById("set-btn");

todayEl.textContent =
  today.toLocaleDateString();

button.addEventListener("click", ()=> {

  // 入力値
  const eventName = nameInput.value;

  const targetDate =
    new Date(dateInput.value);

  const diffTime =
    targetDate - new Date();

  const diffDays =
    Math.ceil(
      diffTime / (1000 * 60 * 60 * 24)
    );

  daysEl.textContent = diffDays;

  eventNameEl.textContent = eventName;

  eventDateEl.textContent =
    dateInput.value;

});