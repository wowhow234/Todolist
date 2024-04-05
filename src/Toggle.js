import React, { useEffect, useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const onChange = () => {
    setToggle((toggle) => !toggle);
  };

  useEffect(() => {
    if (toggle) {
      console.log("toggle은 True"); // 무엇이
    } else {
      console.log("toggle은 False"); // 나올까요
    }
  }, [toggle]);

  return (
    <div>
      토글박스
      <input type="checkbox" onChange={onChange} />
    </div>
  );
};

export default Toggle;
