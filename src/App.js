import { useEffect, useState } from "react";
import Hello from "./Hello";
import TodoEdit from "./TodoEdit";
import "./css/todolist.css";

function App() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

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

  const onCheck = (e) => {
    // todoList.map((item, index) =>
    //   console.log(`item : ${JSON.stringify(item)} / index : ${index}`)
    // );

    // const checkTodo = todoList.map((item) => item);
    // const json = JSON.stringify(checkTodo);
    // console.dir(json);
    // console.log(checkTodo);
    // console.log("아이디되나----", todoList[0].id);
    //------------------------------------------------------------------
    // console.log("------투두리스트----", todoList);
    // const findIndex = todoList.map((item, idx) => {
    //   // console.log("-----item 나와라-----", item.id);
    //   // console.log("------아이디일치??-----", todoList[idx].id);
    //   const index = todoList[idx];
    //   if (item.id === index.id) {
    //     item.checked = !item.checked;
    //     console.log("----item.checked----", item.checked);
    //   } else {
    //     console.log("ㄴㄴ");
    //   }
    //   return idx;
    // });
    // setIsChecked((e) => !e); // isChecked false -> true로
    console.log("---체크함----", e.target.checked); // 정상
    // console.log("--e.target.value--", e.target.value);
    // console.log("---target---", e.target);
    // console.log("------e-----", e);
    //------------------------------------------------------------------

    // setIsChecked(e.target.value);
    console.log("-----input의 value값 가져오기----", e.target.value);

    const targetChecked = e.target.checked;
    // const targetValue = e.target.value;

    // setIsChecked((e) => !e);
    const testTodo = todoList.map((item, index) =>
      // item.id === todoList[index].id
      ({
        ...item,
        checked:
          item.id === todoList[index].id && targetChecked === true
            ? !item.checked
            : item.checked,
      })
    );
    setTodoList(testTodo);
    console.log("----일단todolist에 접근해보기---", testTodo);
    // item.id === todoList[index].id
    //   ? { ...item, checked: !item.checked }
    //   : item

    // console.log("-----id삼항연산자적용하고-----", testTodo);

    // setTodoList(
    //   todoList.map((item) =>
    //     item.id === todoList.id ? { ...item, checked: !item.checked } : item
    //   )
    // );
    // setTodoList(checkTodo);

    // console.log("투두리스트=----", todoList);
    // console.log("-----id객체로넣어는데 되나??----", id);
    // console.log("투두리스트.checked=----", todoList.checked);
    // console.log("-----2------", id);
    // console.log("------3-----", id.target);
  };

  // const onClickCheckbox = () => {
  //   const findIndex = todoList.map((item, idx) => {
  //     // console.log("-----item 나와라-----", item.id);
  //     // console.log("------아이디일치??-----", todoList[idx].id);
  //     const index = todoList[idx];
  //     if (index.id === item.id) {
  //       item.checked = !item.checked;
  //     } else {
  //       console.log("ㄴㄴ");
  //     }
  //     console.log("----item.checked----", item.checked);
  //     console.log("-----findIndex-----", findIndex);
  //   });
  // };

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
                onChange={onCheck}
                value={item.checked}
                // onClick={onClickCheckbox}
              />
              {/* <span className={` ${item.checked ? "checked" : "todospan"}`}> */}
              <span>{item.todo}</span>
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
