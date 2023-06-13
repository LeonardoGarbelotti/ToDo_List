import { Header } from "./Components/Header/Index"

import './global.css'
import styles from './App.module.css'
import { TaskList } from "./Components/TaskList/Index"

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskList />
      </div>
    </div>
  )
}

export default App
