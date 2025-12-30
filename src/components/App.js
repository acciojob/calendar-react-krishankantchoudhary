import React, { useState } from "react";

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const App = () => {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [isEditingYear, setIsEditingYear] = useState(false);

  // number of days in selected month & year
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // generate days array
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // month navigation
  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div>
      {/* Heading */}
      <h1 id="calendar-heading">Calendar</h1>

      {/* Month Dropdown */}
      <select
        id="month-select"
        value={month}
        onChange={(e) => setMonth(Number(e.target.value))}
      >
        {months.map((m, index) => (
          <option key={index} value={index}>
            {m}
          </option>
        ))}
      </select>

      {/* Year Display / Edit */}
      {!isEditingYear ? (
        <span
          id="year-text"
          onDoubleClick={() => setIsEditingYear(true)}
          style={{ marginLeft: "10px", cursor: "pointer" }}
        >
          {year}
        </span>
      ) : (
        <input
          id="year-input"
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          onBlur={() => setIsEditingYear(false)}
          autoFocus
        />
      )}

      {/* Navigation Buttons */}
      <div>
        <button id="prev-month" onClick={prevMonth}>
          Prev Month
        </button>

        <button id="next-month" onClick={nextMonth}>
          Next Month
        </button>

        <button id="prev-year" onClick={() => setYear(year - 1)}>
          Prev Year
        </button>

        <button id="next-year" onClick={() => setYear(year + 1)}>
          Next Year
        </button>
      </div>

      {/* Calendar Table */}
      <table id="calendar-table" border="1">
        <tbody>
          <tr>
            {daysArray.map((day) => (
              <td key={day}>{day}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
