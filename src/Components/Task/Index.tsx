import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Index.module.css'
import { useState } from 'react'

interface TaskProps {
  content: string
  onDeleteTask: (task: string) => void
}

export function Task({ content, onDeleteTask }: TaskProps) {
  const [isTaskDone, setIsTaskDone] = useState(false)
  const [numberOfTasksDone, setNumberOfTasksDone] = useState(0)

  function handleMarkTaskAsDone() {
    setIsTaskDone(true)
    setNumberOfTasksDone((state) => {
      return state + 1
    })
  }

  function handleMarkTaskAsUndone() {
    setIsTaskDone(false)
    setNumberOfTasksDone((state) => {
      return state - 1
    })
  }

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskBox}>
        {isTaskDone ? (
          <div className={styles.taskCompleteBox}>
            <button onClick={handleMarkTaskAsUndone}>
              <CheckCircle size={24} weight="fill" />
            </button>
            <p>{content}</p>
          </div>

        ) : (
          <div className={styles.taskIncompleteBox}>
            <button onClick={handleMarkTaskAsDone} className={styles.buttonTaskIncomplete}>
              <Circle size={24} />
            </button>
            <p>{content}</p>
          </div>
        )}
        <button onClick={handleDeleteTask} className={styles.deleteTaskButton} title="Deletar comentário">
          <Trash size={24} />
        </button>
      </div>

    </div >
  )
}