import Icon from 'components/Icon/Icon';
import s from './Filter.module.scss';

const Filters = ({ openModal }) => {
  return (
    <div>
      <button onClick={openModal} type="button" className={s.dashboardFilter}>
        <Icon
          name="icon-filter"
          width={12}
          height={13}
          secondaryClassName={s.iconFilter}
        />
        Filters
      </button>
    </div>
  );
};

export default Filters;
