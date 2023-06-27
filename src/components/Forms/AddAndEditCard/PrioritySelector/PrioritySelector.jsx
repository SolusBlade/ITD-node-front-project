import { priorityOptions } from 'services/priorityOptions';
import s from './PrioritySelector.module.scss';

const PrioritySelector = ({ field }) => {

  return (
    <div className={s.prioritySelector}>
      {priorityOptions.map(option => (
        <div
          key={option.value}
          className={`${s.priorityOption} ${field.value === option.value ? s.selected : ''}`}
          style={{ backgroundColor: option.color }}
          onClick={() => field.onChange(field.name)(option.value)}
        />
      ))}
    </div>
  );
};

export default PrioritySelector;
