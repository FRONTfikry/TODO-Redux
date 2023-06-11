import { TaskCheckbox } from "features/TaskCheckbox"
import { DeleteTaskButton } from "features/DeleteTaskButton"

import { TaskProps } from "../model"

import styles from './styles.module.css'

export const Task: React.FC<TaskProps> = ({id, text, completed}) => {
    return (
        <div className={styles.item}>
            <TaskCheckbox id={id} completed={completed}/>

            <div className={styles.info}>
                <h1 className={`${styles.title} ${ completed ? styles.linethrough : ""}`}>{text}</h1>
            </div>

            <DeleteTaskButton id={id}/>
        </div>
    )
}