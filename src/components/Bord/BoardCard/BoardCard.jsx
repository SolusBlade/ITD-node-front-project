import IconBtn from 'components/IconBtn/IconBtn';
import s from './BoardCard.module.scss';

const BoardCard = () => {

  const cards = [
    {
      title: "The Watch Spot Design",
      id: 1,
      text: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
      priority: "",
      deadline: "12/05/2023",
      createdAt: "2023-06-21T18:25:45.953+00:00",
      updatedAt: "2023-06-21T18:25:45.953+00:00",
    // {title: "Work" , id: 2},
    // {title: "Progress" , id: 3},
    // {title: "Done" , id: 4},
    },
    {
      title: "The Watch Spot Design",
      id: 2,
      text: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
      priority: "",
      deadline: "12/05/2023",
      createdAt: "2023-06-21T18:25:45.953+00:00",
      updatedAt: "2023-06-21T18:25:45.953+00:00",
    // {title: "Work" , id: 2},
    // {title: "Progress" , id: 3},
    // {title: "Done" , id: 4},
    }
  ]

  return (
    <ul className={s.cardList}>
      {cards.map((card) => (
        <li className={s.cardToDo} key={card.id}>
          <h2 className={s.titleCard}>{card.title}</h2>
          <p className={s.textCard}>{card.text}</p>
          <div className={s.line}></div>
          {/* <hr className={s.line} /> */}
          <div className={s.bottomMenuCard}>
            <div className={s.textBottomMenuCard}>
              <div>
                <h3 className={s.titleBottomMenuCard}>Priority</h3>
                <p className={s.discriptionBottomMenuCard}>{card.priority} Low</p>
              </div>
              <div>
                <h3 className={s.titleBottomMenuCard}>Deadline</h3>
                <p className={s.discriptionBottomMenuCard}>{card.deadline}</p>
              </div>
            </div>

            <div className={s.iconToDo}>
              <IconBtn
                name='icon-arrow'
                width={16}
                height={16}
                secondaryClassName={s.iconArrow}
              />
              <IconBtn
                name='icon-pencil'
                width={16}
                height={16}
                secondaryClassName={s.iconPencil}
              />
              <IconBtn
                name='icon-trash'
                width={16}
                height={16}
                secondaryClassName={s.iconTrash}
              />
              </div>
            </div>
        </li>
      ))}
    </ul>
  )
}

export default BoardCard;
