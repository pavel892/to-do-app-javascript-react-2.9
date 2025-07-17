import './Task.css';

export default function Task({ listItemStyle = '', timeOfCreated, description }) {
  return (
    <li className={listItemStyle}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{description}</span>
          <span className="created">created {timeOfCreated} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
}
