import { useAppDispatch } from 'shared/lib/store-hooks'
import { deleteTask } from 'entities/task/model'

import { TaskButton } from 'shared/ui/TaskButton'

import deleteImg from 'shared/assets/images/Vector-2.svg'


interface Props {
    id: string
}


export const DeleteTaskButton: React.FC<Props> = ({id}) => {
    const dispatch = useAppDispatch()

    function clickHandler() {
        dispatch(deleteTask({id: id}))
    }

    return (
        <TaskButton onClick={clickHandler}>
            <img src={deleteImg}/>
        </TaskButton>
    )
}