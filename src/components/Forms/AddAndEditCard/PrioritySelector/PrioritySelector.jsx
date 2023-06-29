import { priorityOptions } from 'services/priorityOptions';
import s from './PrioritySelector.module.scss';
import clsx from 'clsx';
import { getFormattedValue } from 'services/priorityChange';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/board/boardOperations';

const PrioritySelector = ({ field, filter }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={clsx(s.prioritySelector, filter && s.prioritySelectorFilter)}
    >
      {priorityOptions.map(option => (
        <div key={option.value} className={s.priorityOptionWrapper}>
          <div
            className={clsx(
              s.priorityOption,
              field.value === option.value && s.selected
            )}
            style={{ backgroundColor: option.color }}
            onClick={
              filter
                ? () => {
                    field.onChange(field.name)(option.value);
                    dispatch(changeFilter(option.value));
                  }
                : () => field.onChange(field.name)(option.value)
            }
            >
            {field.value === option.value && <div className={s.innerCircle} />}
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
