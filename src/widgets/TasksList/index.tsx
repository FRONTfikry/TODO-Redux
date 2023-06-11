import { useAppSelector } from "shared/lib/store-hooks"

import { Container } from "shared/ui/Container"

import { Task } from "entities/task/ui"

import styles from './styles.module.css'


export const TasksList: React.FC = () => {

    const tasks = useAppSelector((state) => state.tasks.data)

    return (
        <div className={styles.tasks}>
            <Container>
                <h1 className={styles.title}>My Tasks</h1>

                <div className={styles.list}>
                    {   
                        tasks.length
                        ? tasks.map(task => <Task text={task.text} id={task.id} completed={task.completed} key={task.id}/>)
                        : <p className="tasks__p">No tasks anymore</p>
                    }

                    
                </div>
            </Container>
        </div>
    )
}