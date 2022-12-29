import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  const deleteToDo = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
  };
  const deleteAll = () => {
    setToDos([]);
  };
  return (
    <div>
      <h1>My To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <button onClick={deleteAll}>Delete All</button>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteToDo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
