import { priorityOptions } from 'services/priorityOptions';
import s from './PrioritySelector.module.scss';
import clsx from 'clsx';
import { getFormattedValue } from 'services/priorityChange';

const PrioritySelector = ({ field, filter }) => {
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
            onClick={() => field.onChange(field.name)(option.value)}
          />
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
