import { AddTaskForm } from "features/AddTaskForm"

import { Container } from "shared/ui/Container"

import styles from './style.module.css'


export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <h1 className={styles.title}>TODO</h1>
                <AddTaskForm />
            </Container>
        </header>
    )
}