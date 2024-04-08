import { useEffect, useState } from "react";
import Hello from "./Hello";
import TodoEdit from "./TodoEdit";
import "./css/todolist.css";

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
    // console.log("newtodoList----->", newTodoList);
  };

  useEffect(() => {
    // console.log("할 일 창 활성화 중...", todo);
  }, [todo, todoList]);

  const onCheck = (id) => {
    console.log("------e-----", id);
    const testTodo = todoList.map(
      (item) => (item.id === id ? { ...item, checked: !item.checked } : item)
      // ({
      //   ...item,
      //   checked: item.id === id ? !item.checked : item.checked,
      // })
    );
    setTodoList(testTodo);
    console.log("----일단todolist에 접근해보기---", testTodo);
  };

  const onDelete = (id) => {
    const removedTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(removedTodoList);
    console.log("남아있는 todolist----", removedTodoList);
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
              <input
                type="checkbox"
                onChange={() => onCheck(item.id)}
                value={item.checked}
              />
              {/* <span className={` ${item.checked ? "checked" : "todospan"}`}> */}
              <span className={` ${item.checked ? "checked" : "todospan"}`}>
                {item.todo}
              </span>
              <button type="button" onClick={() => onDelete(item.id)}>
                삭제
              </button>
              <TodoEdit
                setTodoList={setTodoList}
                todoList={todoList}
                todoListId={item.id}
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default App;
