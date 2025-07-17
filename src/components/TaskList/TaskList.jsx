import Task from './../Task/Task';
import './TaskList.css';

export default function TaskList() {
  return (
    <ul className="todo-list">
      <Task listItemStyle="completed" timeOfCreated="17 seconds" description="Completed task" />

      <Task timeOfCreated="5 minutes" description="Active task" />

      <Task timeOfCreated="5 minutes" description="Active task" />
    </ul>
  );
}
