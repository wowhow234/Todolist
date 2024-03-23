import React, { useState } from "react";

const TodoEdit = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isContent, setIsContent] = useState();

  const onToggleEdit = () => {
    setIsEdit((e) => !e);
    console.log("수정하기 on", isEdit);
  };

  const onToggleEditYes = () => {
    console.log("수정 완---");
  };

  const onToggleEditNo = () => {
    setIsEdit(false);
    setIsContent("");
    console.log("수정 안함---", isEdit);
  };

  const onChange = (e) => {
    setIsContent(e.target.value);
    console.log("수정내용-----", isContent);
  };

  return (
    <div>
      {isEdit ? (
        <>
          <textarea onChange={onChange} value={isContent}></textarea>
          <button type="button" onClick={onToggleEditYes}>
            수정완료
          </button>
          <button type="button" onClick={onToggleEditNo}>
            수정취소
          </button>
        </>
      ) : (
        <button type="button" onClick={onToggleEdit}>
          수정하기
        </button>
      )}
    </div>
  );
};

export default TodoEdit;
