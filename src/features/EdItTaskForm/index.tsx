import { FormEvent, useRef } from "react"

import { useAppDispatch } from "shared/lib/store-hooks"
import { editTask } from "entities/task/model"

import { FormInput } from "shared/ui/FormInput";
import { FormButton } from "shared/ui/FormButton";

import styles from './styles.module.css'


interface Props {
    id: string;
    setOpened: (opened: boolean) => void;
}


export const EditTaskForm: React.FC<Props> = ({id, setOpened}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const dispatch = useAppDispatch()

    function submitHandler(event: FormEvent) {
        event.preventDefault()

        if(inputRef.current) {
            dispatch(editTask({id: id, text: inputRef.current.value}))

            setOpened(false)
        }
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <FormInput ref={inputRef} type="text" className={styles.input} placeholder="Enter task..."/>
            <FormButton type='submit' className={styles.btn}>
                Edit
            </FormButton>
        </form>
    )
}