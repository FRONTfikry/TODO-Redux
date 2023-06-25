import { useDeleteTaskMutation } from 'entities/task/api'

import { TaskButton } from 'shared/ui/TaskButton'

import deleteImg from 'shared/assets/images/Vector-2.svg'



interface Props {
    id: string
}


export const DeleteTaskButton: React.FC<Props> = ({id}) => {

    const [deleteTask] = useDeleteTaskMutation()

    function clickHandler() {
        deleteTask({id})
    }

    return (
        <TaskButton onClick={clickHandler}>
            <img src={deleteImg}/>
        </TaskButton>
    )
}