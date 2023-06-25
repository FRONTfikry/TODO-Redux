import { forwardRef } from 'react'

import styles from './styles.module.css'


interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

type Ref = HTMLInputElement


export const FormInput = forwardRef<Ref, Props>(({className, ...props}, ref) => {
    return (
        <input ref={ref} className={`${styles.input} ${className}`} {...props}/>
    )
})