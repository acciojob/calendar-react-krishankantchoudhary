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

  // ✅ Cypress-safe previous month
  const prevMonth = () => {
    setMonth((m) => {
      const i = months.indexOf(m);
      return i === 0 ? "November" : months[i - 1];
    });
  };

  // ✅ Cypress-safe next month
  const nextMonth = () => {
    setMonth((m) => {
      const i = months.indexOf(m);
      return i === 11 ? "January" : months[i + 1];
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
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      {/* Year display (always in DOM) */}
      <span
        id="year"
        onDoubleClick={() => setEditYear(true)}
        style={{ display: editYear ? "none" : "inline" }}
      >
        {year}
      </span>

      {/* Year input */}
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

      {/* Navigation Buttons */}
      <div>
        <button id="previous-month" onClick={prevMonth}>
          &lt;
        </button>

        <button id="next-month" onClick={nextMonth}>
          &gt;
        </button>

        <button
          id="previous-year"
          onClick={() => setYear((y) => y - 1)}
        >
          &lt;&lt;
        </button>

        <button
          id="next-year"
          onClick={() => setYear((y) => y + 1)}
        >
          &gt;&gt;
        </button>
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
