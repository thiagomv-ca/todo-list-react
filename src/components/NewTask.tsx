import { useState } from 'react';

import styles from './NewTask.module.css';

import plusIcon from '../assets/plus.svg';

interface NewTaskProps {
  createTask: (text: string) => void;
}

export function NewTask({ createTask }: NewTaskProps) {
  const [text, setText] = useState('');

  function handleCreateTask() {
    createTask(text);
    setText('');
  }

  return (
    <div className={styles.wrapper}>
      <input 
        className={styles.input}
        placeholder="Add a new task"
        value={text}
        onChange={(event) => setText(event.target.value)} 
      />
      <button
        className={styles.button}
        onClick={handleCreateTask}
      >
        Add
        <img src={plusIcon} alt="Add" />
      </button>
    </div>
  );
}