import './index.css'

import { withProviders } from './providers'

import { Header } from 'widgets/Header'
import { TasksList } from 'widgets/TasksList'

function App() {
  return (
    <>
      <Header />
      <TasksList />
    </>
  )
}

export default withProviders(App)
