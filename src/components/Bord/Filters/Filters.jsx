import Icon from 'components/Icon/Icon';
import s from './Filter.module.scss';

const Filters = () => {
  return (
    <div>
      <button className={s.dashboardFilter}>
        <Icon
          name='icon-Vector'
          width={12}
          height={13}
          secondaryClassName={s.iconVector}
        />
        Filters
      </button>
    </div>
  )
}

export default Filters;
