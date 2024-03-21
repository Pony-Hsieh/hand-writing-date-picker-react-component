import { useState } from 'react';
import Calendar from './components/Calender';
import dayjs from 'dayjs';
import './styles/App.scss';

function App() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedDates2, setSelectedDates2] = useState([]);

  return (
    <div className="wrapper">
      <h1>This is a page that includes Calendar Component</h1>

      <div className="calendarWrapper">
        <h2>init date: today</h2>
        <Calendar
          initDate={dayjs()}
          selectedDates={selectedDates}
          setSelectedDates={setSelectedDates}
        />
      </div>

      <div className="calendarWrapper">
        <h2>init date: 2022-07-22</h2>
        <Calendar
          initDate={dayjs('2022-07-22')}
          selectedDates={selectedDates2}
          setSelectedDates={setSelectedDates2}
        />
      </div>
    </div>
  );
}

export default App;
