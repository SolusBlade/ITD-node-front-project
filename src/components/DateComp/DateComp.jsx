import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateComp.scss';
import Icon from '../Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
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

const DateComp = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
      // isLoggedIn &&
      //   dispatch(getDynamicsByMonth(changedDateForApi(selectedDate)));
  }, [isLoggedIn, dispatch, selectedDate]);

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


  // eslint-disable-next-line
  const changedDateForPicker = newDate => {
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    return `${months[month]}, ${year}`;
  };

  // eslint-disable-next-line
  const changedDateForApi = newDate => {
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    return { year, month: month + 1 };
  };

  const handleCloseCalendar = date => {
    if (isDirty) {
      return;
    }
    // dispatch(getTransaction(changedDateForApi(date)));
    setIsDirty(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
