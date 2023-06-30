import { priorityOptions } from 'services/priorityOptions';
import s from './PrioritySelector.module.scss';
import clsx from 'clsx';
import { getFormattedValue } from 'services/priorityChange';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/board/boardOperations';
import { useState } from 'react';

const PrioritySelector = ({ field, filter }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    field.onChange(field.name)(option.value);
    setSelectedOption(option.value);
    if (filter) {
      dispatch(changeFilter(option.value));
    }
  };

  return (
    <div className={clsx(s.prioritySelector, filter && s.prioritySelectorFilter)}>
      {priorityOptions.map((option) => (
        <div key={option.value} className={s.priorityOptionWrapper} onClick={() => handleOptionClick(option)}>
          <div
            className={clsx(
              s.priorityOption,
              field.value === option.value && s.selected
            )}
            style={{ backgroundColor: option.color }}
            
          >
            {selectedOption === option.value && (
              <div className={s.colorIndicator} />
            )}
          </div>
          {filter && (
            <p className={s.optionText}>
              {getFormattedValue(option.value) === 'Without'
                ? 'Without priority'
                : getFormattedValue(option.value)}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PrioritySelector;
