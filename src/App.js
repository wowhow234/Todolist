import { useEffect, useState } from "react";
import Hello from "./Hello";
import TodoEdit from "./TodoEdit";

function App() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return alert("할 일을 입력하세요");
    }
    // console.log("-----submit-----");
    // console.log("새로 등록한 할 일----->", todo);
    const newTodoList = todoList.concat({
      id: Date.now(),
      todo,
      checked: false,
    });
    setTodoList(newTodoList);
    setTodo("");
    console.log("newtodoList----->", newTodoList);
  };

  useEffect(() => {
    // console.log("할 일 창 활성화 중...", todo);
  }, [todo, todoList]);

  const onCheck = (id) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
    console.log("checked----", id.target.checked);
  };
  // checkbox에 value를 주는 대신에 id를 인자로 줘서 id값이 들어있는 input을 찾는거구나..

  const onDelete = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
    console.log("남아있는 todolist----", todoList);
  };

  return (
    <div>
      <Hello />
      todolist 만들기
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          onChange={onChange}
          value={todo || ""}
        ></input>
        <button>등록하기</button>
        <div>
          {todoList.map((item) => (
            <div key={item.id}>
              <input type="checkbox" onChange={onCheck} value={item.checked} />
              <span>{item.todo}</span>
              <button type="button" onClick={() => onDelete(item.id)}>
                삭제
              </button>
              <TodoEdit />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default App;
