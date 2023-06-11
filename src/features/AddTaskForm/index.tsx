import { FormEvent, useRef } from 'react'

import { useAppDispatch, useAppSelector } from 'shared/lib/store-hooks'
import { addTask } from 'entities/task/model'

import styles from './styles.module.css'

import plusImg from 'shared/assets/images/Vector.svg'

export const AddTaskForm = () => {

    const dispatch = useAppDispatch()

    const inputRef = useRef<HTMLInputElement>(null)

    function submitHandler(event: FormEvent) {
        event.preventDefault()

        if (inputRef.current != null) {
            dispatch(addTask(inputRef.current.value.trim()))

            inputRef.current.value = ''
        }
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <input ref={inputRef} type="text" className={styles.input} placeholder="Enter task..."/>
            <button type='submit' className={styles.btn}>
                <img src={plusImg} className={styles.img} />
                Create new task
            </button>
        </form>
    )
}