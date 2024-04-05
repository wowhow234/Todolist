import React, { useState, useEffect } from "react";

const UseEffectPrac = () => {
  const [name, setName] = useState("기본");

  useEffect(() => {
    console.log("컴포넌트 나타남-----");
    console.log(name);
  }, [name]);

  const onClick = () => {
    setName("하이");
  };

  return (
    <div>
      {name}
      <button onClick={onClick}>변경</button>
    </div>
  );
};

export default UseEffectPrac;
