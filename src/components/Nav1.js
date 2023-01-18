import { useState } from "react";

function Nav1() {
  let [name, names] = useState(["소주제1", "소주제2", "소주제3"]);

  return (
    <>
      <h2>components/Nav1</h2>
      <ul>
        <li
          className="li1"
          onClick={() => {
            let sub1 = { ...name };
            sub1[0] = "운전자별 인지능력 평가";
            names(sub1);
          }}
        >
          {name[0]}
        </li>
        <li className="li2">{name[1]}</li>
        <li className="li3">{name[2]}</li>
      </ul>
    </>
  );
}

export default Nav1;