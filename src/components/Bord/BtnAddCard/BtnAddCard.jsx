import Icon from 'components/Icon/Icon';
import s from './BtnAddCard.module.scss';


const BtnAddCard = () => {

  return (
    <button className={s.btnAddCard}>
          <div className={s.btnAddCardW}>
            <Icon
              name='icon-plus-dark'
              width={14}
              height={14}
              secondaryClassName={s.iconPlus}
            />
          </div>
            Add another card
        </button>
  )
}

export default BtnAddCard;
