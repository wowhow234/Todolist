import React, { useEffect, useState } from "react";

const TodoEdit = ({ setTodoList, todoList, todoListId }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isContent, setIsContent] = useState();

  useEffect(() => {
    // isEdit && console.log("---수정 on ---isEdit", isEdit);
    if (isEdit === true) {
      console.log("---수정창 열림 ---isEdit", isEdit);
    } else console.log("---수정창 닫힘 ---isEdit", isEdit);
  }, [isEdit]);

  const onEdit = () => {
    setIsEdit(true);
    console.log("-----아이디 찾자.....", todoListId);
    // console.log("수정하기 버튼 클릭!!---isEdit---", isEdit);
  };

  const onEditYes = () => {
    const newEditTodoList = todoList.map((item) =>
      item.id === todoListId ? { ...item, todo: isContent } : item
    );
    // setTodoList(
    //   todoList.map((item) =>
    //     item.id === todoListId ? { ...item, todo: isContent } : item
    //   )
    // );
    setTodoList(newEditTodoList);
    setIsEdit(false);
    console.log("수정 완---NEW투두리스트뜨나??", newEditTodoList);
    console.log("-----수정내용----->", isContent);
  };

  const onEditNo = () => {
    setIsEdit(false);
    setIsContent("");
    console.log("수정 안함---isEdit---", isEdit);
  };

  const onChange = (e) => {
    setIsContent(e.target.value);
    console.log("수정내용-----", isContent);
  };

  return (
    <>
      {isEdit ? (
        <>
          <textarea onChange={onChange} value={isContent}></textarea>
          <button type="button" onClick={onEditYes}>
            수정완료
          </button>
          <button type="button" onClick={onEditNo}>
            수정취소
          </button>
        </>
      ) : (
        <button type="button" onClick={onEdit}>
          수정하기
        </button>
      )}
    </>
  );
};

export default TodoEdit;
