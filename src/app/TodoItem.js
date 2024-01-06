import React from "react";

function TodoItem({
  todo,
  deleteTodo,
  edit,
  soThutu,
  displayInputSetting,
  change,
  save,
}) {
  return (
    <tr>
      <td>{soThutu + 1}</td>
      <td>
        {displayInputSetting !== soThutu ? (
          todo
        ) : (
          <input onChange={change} value={todo} />
        )}
      </td>
      <td>
        <button onClick={() => deleteTodo(todo)}>Xóa</button>
        <button onClick={edit}>Sửa</button>
        {displayInputSetting === soThutu && (
          <button onClick={save}>Lưu</button>
        )}
      </td>
    </tr>
  );
}

export default TodoItem;