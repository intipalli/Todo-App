import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TodoDetails = () => {
  const { id } = useParams();
  const { data: todo, error, isPending } = useFetch('http://localhost:8000/todos/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/todos/' + todo.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="todo-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { todo && (
        <article>
          <h2>{ todo.title }</h2>
          <div>{ todo.body }</div>
          <button onClick={handleClick}>Mark As Completed</button>
        </article>
      )}
    </div>
  );
}
 
export default TodoDetails;