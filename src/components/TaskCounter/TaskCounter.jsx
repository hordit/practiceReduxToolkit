// Import the hook
import { useSelector } from 'react-redux';
// import selector
import { getTasks } from 'redux/selectors';
import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  // Get an array of tasks from the Redux state
  const tasks = useSelector(getTasks);
  // Based on the Redux state, get derived data
  const count = tasks.reduce(
    (acc, tasks) => {
      if (tasks.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
