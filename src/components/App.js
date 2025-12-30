import React, { useState } from "react";

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const App = () => {
  const today = new Date();

  const [month, setMonth] = useState(months[today.getMonth()]);
  const [year, setYear] = useState(today.getFullYear());
  const [editYear, setEditYear] = useState(false);

  const monthIndex = months.indexOf(month);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const prevMonth = () => {
    if (monthIndex === 0) {
      setMonth("December");
      setYear(year - 1);
    } else {
      setMonth(months[monthIndex - 1]);
    }
  };

  const nextMonth = () => {
    if (monthIndex === 11) {
      setMonth("January");
      setYear(year + 1);
    } else {
      setMonth(months[monthIndex + 1]);
    }
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

      {/* Year display / input */}
      {!editYear ? (
        <span
          id="year"
          onDoubleClick={() => setEditYear(true)}
        >
          {year}
        </span>
      ) : (
        <input
          id="year-text-box"
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          onBlur={() => setEditYear(false)}
          autoFocus
        />
      )}

      {/* Navigation Buttons */}
      <div>
        <button id="prev-month" onClick={prevMonth}>Prev Month</button>
        <button id="next-month" onClick={nextMonth}>Next Month</button>
        <button id="prev-year" onClick={() => setYear(year - 1)}>Prev Year</button>
        <button id="next-year" onClick={() => setYear(year + 1)}>Next Year</button>
      </div>

      {/* Calendar Table */}
      <table id="calendar-table">
        <tbody>
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
