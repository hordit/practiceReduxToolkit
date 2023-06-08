// import hook 
import { useDispatch } from "react-redux";
// Import the action generator
import { deleteTask, toggleCompleted } from "redux/actions";

import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

export const Task = ({ task }) => {
// Get a link to the action dispatch function
const dispatch = useDispatch();

// Call the action generator and pass the task text for the payload field
// Sending the result - task deleted action
const handleDelete = () => dispatch(deleteTask(task.id));
// Send the result - action to switch task status
const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        onChange={handleToggle}
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
