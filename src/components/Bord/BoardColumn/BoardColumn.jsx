import IconBtn from 'components/IconBtn/IconBtn';
import s from './BoardColumn.module.scss';

const BoardColumn = () => {

  const columns = [
    {title: "To Do", id: 1},
    // {title: "Work" , id: 2},
    // {title: "Progress" , id: 3},
    // {title: "Done" , id: 4},
  ]

  return (
    <ul className={s.cumList}>
      {columns.map((column) => (
        <li className={s.titleToDo} key={column.id}>
          <h2 className={s.titleCard}>{column.title}</h2>
          <div className={s.iconToDo}>
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
        </li>
      ))}
    </ul>
  )
}

export default BoardColumn;
