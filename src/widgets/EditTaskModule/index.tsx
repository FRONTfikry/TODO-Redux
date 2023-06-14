import { useState } from "react"

import { EditTaskForm } from "features/EdItTaskForm"

import { ShowModalButton } from "features/ShowModalButton"
import { Modal } from "shared/ui/Modal"


interface Props {
    id: string
}

export const EditTaskModule: React.FC<Props> = ({id}) => {
    const [opened, setOpened] = useState<boolean>(false)

    return (
        <>
            <ShowModalButton setOpened={setOpened}/>

            <Modal title="Edit task" opened={opened} setOpened={setOpened}>
                <EditTaskForm id={id} setOpened={setOpened}/>
            </Modal>
        </>
    )
}