import styles from './styles.module.css'

interface Props {
    children?: React.ReactNode;
    className?: string
}


export const Container: React.FC<Props> = ({children, className}) => {
    return (
        // ? need trim() here?
        <div className={`${styles.container} ${className}`}>
            {children}
        </div>
    )
}