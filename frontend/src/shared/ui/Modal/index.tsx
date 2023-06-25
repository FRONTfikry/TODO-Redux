import styles from './styles.module.css'

import closeImg from 'shared/assets/images/Vector-5.svg'


interface Props {
    title?: string;
    opened: boolean;
    setOpened: (opened: boolean) => void;

    children?: React.ReactNode;
}


export const Modal: React.FC<Props> = ({title, opened, setOpened, children}) => {
    if(!opened) return

    return (
        <div className={styles.mask} onClick={() => setOpened(false)}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{title}</h1>

                    <button className={styles.btn} onClick={() => setOpened(false)}>
                        <img src={closeImg} alt="" />
                    </button>
                </div>

                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </div>
    )
}