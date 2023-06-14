import styles from './styles.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

export const TaskButton: React.FC<Props> = ({children, className, ...props}) => {
    return (
        <button className={`${styles.btn} ${className}`} {...props}> 
            {children}
        </button> 
    )
}