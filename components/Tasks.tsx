import { Task } from './Task';

import  styles from './Tasks.module.css';

interface Task {
  id: string;
  checked: boolean;
  text: string;
}

interface TasksProps {
  tasks: Task[],
  checkedTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function Tasks({ tasks, checkedTask, deleteTask }: TasksProps) {
  const createdTasks = tasks.length;

  const tasksCompleted = tasks.reduce((acc, task) => {
    if(task.checked) {
      return acc + 1
    }
    return acc;
  }, 0);

  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <strong>Created Tasks</strong>
          <span>{createdTasks}</span>
        </div>
        <div className={styles.done}>
          <strong>Completed</strong>
          <span>{tasksCompleted} of {createdTasks}</span>
        </div>
      </div>

      { createdTasks
        ? 
          tasks.map(task => (
            <Task 
              key={task.id} 
              task={task} 
              checkedTask={checkedTask}
              deleteTask={deleteTask}
            />
          ))
        :
          <div className={styles.empty}>
            <strong>You don't have tasks registered yet!</strong>
            <p>Add tasks and organize your to-do items!</p>
          </div>
      }
    </div>
  );
}