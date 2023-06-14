import React from 'react'

import { TaskProps } from "../model"

import { TaskCheckbox } from "features/TaskCheckbox"
import { DeleteTaskButton } from "features/DeleteTaskButton"
import { EditTaskModule } from "widgets/EditTaskModule"

import styles from './styles.module.css'


export const Task: React.FC<TaskProps> = React.memo(({id, text, completed}) => {
    return (
        <div className={styles.item}>
            <TaskCheckbox id={id} completed={completed}/>

            <div className={styles.info}>
                <h1 className={`${styles.title} ${ completed ? styles.linethrough : ""}`}>{text}</h1>
            </div>
            
            <EditTaskModule id={id}/>

            <DeleteTaskButton id={id}/>
        </div>
    )
})

