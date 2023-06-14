import { FormEvent, useRef } from 'react'

import { useAppDispatch } from 'shared/lib/store-hooks'
import { addTask } from 'entities/task/model'

import { FormInput } from 'shared/ui/FormInput'
import { FormButton } from 'shared/ui/FormButton'

import styles from './styles.module.css'

import plusImg from 'shared/assets/images/Vector.svg'


export const AddTaskForm: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const dispatch = useAppDispatch()

    function submitHandler(event: FormEvent) {
        event.preventDefault()

        if (inputRef.current) {
            dispatch(addTask({text: inputRef.current.value.trim()}))

            inputRef.current.value = ''
        }
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <FormInput ref={inputRef} type="text" className={styles.input} placeholder="Enter task..."/>
            <FormButton type='submit' className={styles.btn}>
                <img src={plusImg} className={styles.img} />
                Create new task
            </FormButton>
        </form>
    )
}