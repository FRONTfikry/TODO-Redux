import { useGetTasksQuery } from "entities/task/api"
import { Task } from "entities/task/ui"

import { Container } from "shared/ui/Container"

import styles from './styles.module.css'



export const TasksList: React.FC = () => {

    const {data = []} = useGetTasksQuery()

    return (
        <div className={styles.tasks}>
            <Container>
                <h1 className={styles.title}>My Tasks</h1>

                <div className={styles.list}>
                    {   
                        data
                        ? data.map(task => <Task text={task.text} id={task.id} completed={task.completed} key={task.id}/>)
                        : <p className="tasks__p">No tasks anymore</p>
                    }
                </div>
            </Container>
        </div>
    )
}