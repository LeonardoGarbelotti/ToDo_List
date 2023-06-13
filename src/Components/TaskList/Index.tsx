import styles from './Index.module.css'
import { Task } from '../Task/Index'
import { ClipboardText, PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

export function TaskList() {
  const [tasks, setTasks] = useState<string[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTaskText])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <article>
      <header>
        <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
          <input
            type="text"
            name="task"
            value={newTaskText}
            placeholder="Adicione uma nova tarefa..."
            onChange={handleNewTaskChange}
            required
          />
          <button type="submit">
            Criar
            <PlusCircle size={16} weight="bold" />
          </button>
        </form>
      </header>
      <div className={styles.taskInfo}>
        <div className={styles.createdTasks}>
          <strong>Tarefas Criadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.tasksDone}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </div>
      {tasks.length !== 0 ? tasks.map(task => {
        return (
          <Task
            key={task}
            content={task}
            onDeleteTask={deleteTask}
          />
        )
      }) : (
        <div className={styles.contentList}>
          <ClipboardText size={56} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </article>
  )
}