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

    if (!choosingDate.isSame(date, 'month')) {
      return;
    }

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
    const firstDateOfThisMonth = dayjs(`${date.year()}-${date.month() + 1}-01`);
    const lastDateOfThisMonth = dayjs(
      `${date.year()}-${date.month() + 1}-${datesCount}`,
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
        >
          {i}
        </div>,
      );
    }

    // 上個月最後幾天
    for (let i = 1; i < firstDayOfThisMonth; i++) {
      const thisDate = firstDateOfThisMonth.subtract(i, 'day');
      datesArr.unshift(
        <div
          key={Math.random()}
          className="date lastMonthDate"
          data-this-date={`${dayjs(thisDate).format('YYYY/MM/DD')}`}
        >
          {dayjs(thisDate).date()}
        </div>,
      );
    }

    // 下個月前幾天
    let nextMonthDateflag = 1;
    while (datesArr.length % 7 !== 0) {
      const thisDate = lastDateOfThisMonth.add(nextMonthDateflag, 'day');
      datesArr.push(
        <div
          key={Math.random()}
          className="date nextMonthDate"
          data-this-date={`${dayjs(thisDate).format('YYYY/MM/DD')}`}
        >
          {nextMonthDateflag}
        </div>,
      );
      nextMonthDateflag++;
    }

    return datesArr;
  };

  return (
    <div className="calendar calendar1">
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
      <div
        className="dateWrapper"
        onClick={(e) => {
          handleSelectedDates(e);
        }}
      >
        {renderDates()}
      </div>
    </div>
  );
}

export default Calendar1;
