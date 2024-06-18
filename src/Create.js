import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { title, body};

    fetch('http://localhost:8000/todos/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Todo</h2>
      <form onSubmit={handleSubmit}>
        <label>Todo title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Todo Details:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
       
        <button>Add</button>
      </form>
    </div>
  );
}
 
export default Create;