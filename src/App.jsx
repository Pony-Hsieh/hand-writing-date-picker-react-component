import { useState } from 'react';
import dayjs from 'dayjs';
import Calendar1 from './components/Calendar1';
import Calendar2 from './components/Calendar2';
import './styles/App.scss';

function App() {
  const [selectedDates1, setSelectedDates1] = useState([]);
  const [selectedDates2, setSelectedDates2] = useState([]);

  return (
    <div className="wrapper">
      <h1>This is a page that includes Calendar Component</h1>

      <div className="calendarWrapper">
        <h2>Task - 1</h2>
        <Calendar1
          initDate={dayjs()}
          // initDate={dayjs('2024-05')}
          selectedDates={selectedDates1}
          setSelectedDates={setSelectedDates1}
        />
        <p className="dateRange">
          selected date range:
          <br />
          {selectedDates1.length > 0 ? (
            <>
              {selectedDates1?.[0].format('YYYY/MM/DD')} -{' '}
              {selectedDates1?.[1].format('YYYY/MM/DD')}
            </>
          ) : null}
        </p>
      </div>

      <div className="calendarWrapper">
        <h2>Task - 2</h2>
        <Calendar2
          initDate={dayjs()}
          selectedDates={selectedDates2}
          setSelectedDates={setSelectedDates2}
        />
        <p className="dateRange">
          selected date range:
          <br />
          {selectedDates2.length > 0 ? (
            <>
              {selectedDates2?.[0].format('YYYY/MM/DD')} -{' '}
              {selectedDates2?.[1].format('YYYY/MM/DD')}
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
}

export default App;
