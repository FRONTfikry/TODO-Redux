import styles from './styles.module.css'


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}


export const FormButton: React.FC<Props> = ({children}) => {
    return (
        <button className={styles.btn}>
            {children}
        </button>
    )
}