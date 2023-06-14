import { TaskButton } from '../../shared/ui/TaskButton';

import styles from './styles.module.css'

import editImg from 'shared/assets/images/Vector-1.svg'


interface Props {
    setOpened: (state: boolean) => void;
}

export const ShowModalButton: React.FC<Props> = ({setOpened}) => {
    return (
        <TaskButton onClick={() => setOpened(true)}>
            <img src={editImg} alt="" />
        </TaskButton>
    )
}