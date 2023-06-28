import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateComp.scss';
import Icon from '../Icon/Icon';
import clsx from 'clsx';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function formatDate(date) {
  return months[date.getMonth()] + " " + date.getDate();
}

const DateComp = ({ field }) => {
  const [selectedDate, setSelectedDate] = useState(field.value || new Date());
  const [isDirty, setIsDirty] = useState(false);

  function getDateString(dateStr) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const targetDate = new Date(dateStr);

    if (isSameDate(targetDate, today)) {
      return "Today, " + formatDate(targetDate);
    } else if (isSameDate(targetDate, tomorrow)) {
      return "Tomorrow, " + formatDate(targetDate);
    } else {
      return formatDate(targetDate);
    }
  }

  function isSameDate(date1, date2) {
    return date1.toDateString() === date2.toDateString();
  }

  const handleCloseCalendar = date => {
    if (isDirty) {
      return;
    }
    setIsDirty(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    field.onChange({
      target: {
        name: field.name,
        value: date,
      },
    });
    setIsDirty(true);
  }

  return (
      <div
      className={clsx('calendarWrap')}
    >
      <DatePicker
        selected={selectedDate}
        onChange={date => handleDateChange(date)} // используем setSelectedDate, чтобы обновлять значение выбранной даты
        value={getDateString(selectedDate)}
        onCalendarClose={() => handleCloseCalendar(selectedDate)}
        minDate={new Date()}
      />
      <Icon
        name={'icon-arrow-down'}
        width={'10'}
        height={'7'}
        secondaryClassName={'icon-calendar'}
      />
    </div>
  );
};

export default DateComp;
