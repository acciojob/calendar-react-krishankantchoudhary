import React, { useState } from "react";

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const App = () => {
  const today = new Date();

  const [month, setMonth] = useState(months[today.getMonth()]);
  const [year, setYear] = useState(today.getFullYear());
  const [editYear, setEditYear] = useState(false);

  const monthIndex = months.indexOf(month);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // ❗ NO YEAR CHANGE ON MONTH WRAP
const prevMonth = () => {
  setMonth((currentMonth) => {
    if (currentMonth === "January") return "November";
    if (currentMonth === "February") return "January";
    if (currentMonth === "March") return "February";
    if (currentMonth === "April") return "March";
    if (currentMonth === "May") return "April";
    if (currentMonth === "June") return "May";
    if (currentMonth === "July") return "June";
    if (currentMonth === "August") return "July";
    if (currentMonth === "September") return "August";
    if (currentMonth === "October") return "September";
    if (currentMonth === "November") return "October";
    if (currentMonth === "December") return "November";
    return currentMonth;
  });
};


const nextMonth = () => {
  setMonth((currentMonth) => {
    if (currentMonth === "January") return "February";
    if (currentMonth === "February") return "March";
    if (currentMonth === "March") return "April";
    if (currentMonth === "April") return "May";
    if (currentMonth === "May") return "June";
    if (currentMonth === "June") return "July";
    if (currentMonth === "July") return "August";
    if (currentMonth === "August") return "September";
    if (currentMonth === "September") return "October";
    if (currentMonth === "October") return "November";
    if (currentMonth === "November") return "December";
    if (currentMonth === "December") return "January";
    return currentMonth;
  });
};


  return (
    <div>
      {/* Heading */}
      <h1 id="heading">Calendar</h1>

      {/* Month Dropdown */}
      <select
        id="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      >
        {months.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      <span
  id="year"
  onDoubleClick={() => setEditYear(true)}
  style={{ display: editYear ? "none" : "inline" }}
>
  {year}
</span>

<input
  id="year-text-box"
  type="number"
  value={year}
  style={{ display: editYear ? "inline" : "none" }}
  onChange={(e) => setYear(Number(e.target.value))}
  onBlur={() => setEditYear(false)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      setEditYear(false);
    }
  }}
/>


      {/* Navigation */}
      <div>
        <button id="previous-month" onClick={prevMonth}>&lt;</button>
        <button id="next-month" onClick={nextMonth}>&gt;</button>
        <button id="previous-year" onClick={() => setYear(year - 1)}>&lt;&lt;</button>
        <button id="next-year" onClick={() => setYear(year + 1)}>&gt;&gt;</button>
      </div>

      {/* Calendar Table */}
      <table id="calendar-table">
         <tbody>
          <tr>
            {weekDays.map((d) => (
              <td key={d}>{d}</td>
            ))}
          </tr>
        
       
          <tr>
            {days.map((d) => (
              <td key={d}>{d}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
