import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [show, setShow] = useState(false);

  const [sArray, setArray] = useState([]);
  const [name, setName] = useState("");

  const [list, setList] = useState([
    {
      name: "n1",
      id: 1
    },
    {
      name: "n2",
      id: 2
    },

    {
      name: "n3",
      id: 3
    },
    {
      name: "n4",
      id: 4
    },

    {
      name: "n5",
      id: 5
    },

    {
      name: "n6",
      id: 6
    },

    {
      name: "n7",
      id: 7
    },

    {
      name: "n8",
      id: 8
    },

    {
      name: "n9",
      id: 9
    },

    {
      name: "n10",
      id: 10
    },

    {
      name: "n11",
      id: 11
    },

    {
      name: "n12",
      id: 11
    },

    {
      name: "n13",
      id: 13
    },

    {
      name: "n14",
      id: 14
    },

    {
      name: "n15",
      id: 15
    }
  ]);

  const update = (e, ele, index) => {
    const isTrue = sArray.includes(ele);

    if (isTrue) {
      sArray.splice(sArray.indexOf(ele), 1);
      setArray([...sArray]);
    } else {
      setArray([...sArray, ele]);
    }
  };

  return (
    <div className="App">
      {list.map((ele, index) => {
        return (
          <React.Fragment>
            <ul>
              <li
                className={
                  sArray.includes(ele.name) ? "text-danger" : "text-success"
                }
                style={{ cursor: "pointer" }}
                value={ele.name}
                key={ele.id}
                id={ele.id}
                onClick={(e) => {
                  update(e, ele.name, index);
                }}
              >
                {ele.name}{" "}
              </li>
            </ul>
          </React.Fragment>
        );
      })}

      <button
        onClick={() => {
          console.log(sArray);
        }}
      >
        click me
      </button>
    </div>
  );
}
