import { useAppDispatch } from 'shared/lib/store-hooks'
import { deleteTask } from 'entities/task/model'

import styles from './styles.module.css'

import deleteImg from 'shared/assets/images/Vector-2.svg'

interface Props {
    id: string
}

export const DeleteTaskButton: React.FC<Props> = ({id}) => {

    const dispatch = useAppDispatch()

    function clickHandler() {
        dispatch(deleteTask(id))
    }

    return (
        <button className={styles.btn} onClick={clickHandler}>
            <img src={deleteImg}/>
        </button>
    )
}