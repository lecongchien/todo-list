import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [displayInputSetting, setDisplayInputSetting] = useState();
  const [searchTerm, setSearchTerm] = useState("");
    //them
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };
  //xoa
  const deleteTodo = (element) => {
    const filteredTodos = todos.filter((item) => item !== element);
    setTodos(filteredTodos);
  };
  //sua
  const edit = (index) => {
    console.log(index)
    setDisplayInputSetting(index);
  };
  //tim kiem
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

  };

  const filteredTodos = todos.filter((todo) =>
    todo.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //luu
  const save = () => {
    setDisplayInputSetting();
  };
  //thay doi thuọc tinh khi sua
  const handleChange = (event, index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = event.target.value;
    setTodos(updatedTodos);
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Thêm danh sách"
        type="text"
      />
    <button onClick={addTodo}>Thêm</button> 
    <br />
    <input
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Tìm kiếm"
        type="text"
    />

      <table
        style={{ width: "600px", margin: "100px auto", border: "1px solid" }}
      >
        <thead>
          <tr>
            <th>Stt</th>
            <th>Tên Sản phẩm</th>
            <th>Chức Năng</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((element, index) => (
            <TodoItem
              key={index}
              todo={element}
              deleteTodo={deleteTodo}
              soThutu={index}
              edit={() => edit(index)}
              displayInputSetting={displayInputSetting}
              change={(event) => handleChange(event, index)}
              save={save}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;