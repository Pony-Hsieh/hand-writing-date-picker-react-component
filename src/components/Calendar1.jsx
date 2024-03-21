import { useState } from 'react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { getDatesOfMonth, getFirstDayOfMonth } from '../scripts/utils';
import '../styles/components/Calendar1.scss';

dayjs.extend(isBetween);

let clickCounter = 0;

function Calendar1(props) {
  const { initDate = dayjs(), selectedDates, setSelectedDates } = props;

  const [date] = useState(initDate);

  const handleSelectedDates = (e) => {
    const choosingDate = dayjs(`${e.target.dataset.thisDate}`);

    if (clickCounter === 0) {
      clickCounter = 1;
      setSelectedDates([choosingDate, choosingDate]);
      return;
    }

    if (clickCounter === 1 && choosingDate.isSame(selectedDates[0], 'day')) {
      clickCounter = 0;
      setSelectedDates([choosingDate, choosingDate]);
      return;
    }

    if (clickCounter === 1 && choosingDate.isBefore(selectedDates[0], 'day')) {
      clickCounter = 1;
      setSelectedDates([choosingDate, choosingDate]);
      return;
    }

    if (clickCounter === 1 && choosingDate.isAfter(selectedDates[0], 'day')) {
      clickCounter = 0;
      setSelectedDates([selectedDates[0], choosingDate]);
      return;
    }
  };

  const renderDates = () => {
    const datesArr = [];

    const datesCount = getDatesOfMonth(date.year(), date.month() + 1);
    const firstDayOfThisMonth = getFirstDayOfMonth(
      date.year(),
      date.month() + 1,
    );
    const lastDateOfLastMonth = getDatesOfMonth(
      date.subtract(1, 'month').year(),
      date.subtract(1, 'month').month() + 1,
    );

    // 這個月所有天數
    for (let i = 1; i <= datesCount; i++) {
      let classList = 'date currentMonthDate';

      const thisDate = dayjs(`${date.year()}-${date.month() + 1}-${i}`);

      if (thisDate.isSame(dayjs(), 'day')) {
        classList = classList.concat(' today');
      }
      if (
        selectedDates.length > 0 &&
        thisDate.isBetween(selectedDates[0], selectedDates[1], 'day', '[]')
      ) {
        classList = classList.concat(' selected');
      }

      datesArr.push(
        <div
          data-this-date={`${dayjs(thisDate).format('YYYY/MM/DD')}`}
          key={i}
          className={classList}
          onClick={(e) => {
            handleSelectedDates(e);
          }}
        >
          {i}
        </div>,
      );
    }

    // 上個月最後幾天
    for (let i = 1; i < firstDayOfThisMonth; i++) {
      datesArr.unshift(
        <div key={Math.random()} className="date lastMonthDate">
          {lastDateOfLastMonth + 1 - i}
        </div>,
      );
    }

    // 下個月前幾天
    let nextMonthDateflag = 1;
    while (datesArr.length % 7 !== 0) {
      datesArr.push(
        <div key={Math.random()} className="date nextMonthDate">
          {nextMonthDateflag}
        </div>,
      );
      nextMonthDateflag++;
    }

    return datesArr;
  };

  return (
    <div className="calendar1">
      <div className="header">
        <button className="prevMonth" type="button">
          &lt;
        </button>
        <div>
          {date.year()}年{date.month() + 1}月
        </div>
        <button className="nextMonth" type="button">
          &gt;
        </button>
      </div>
      <div className="dateWrapper">{renderDates()}</div>
    </div>
  );
}

export default Calendar1;
