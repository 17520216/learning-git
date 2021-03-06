import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Sort() {
  let sortRef = useRef();
  let [state, setState] = useState({
    render: true,
    list: [],
  });
  let ref = useRef();
  let list = [];
  function random() {
    return Math.floor(Math.random() * 100);
  }

  function compareNumbers(a, b) {
    return a - b;
  }
  let arr = [];
  const log = (value) => {
    var input = document.createElement("input");
    input.value = value;
    input.setAttribute("class", "input");
    list.push(value);

    let listTemp = list.map((e) => parseInt(e));
    arr = listTemp.sort(compareNumbers);
    ref.current.appendChild(input);
  };

  const sort = () => {
    const myNode = document.getElementById("box");

    for (let i = 0; i < arr.length; i++) {
      myNode.removeChild(myNode.lastChild);
    }

    setState({
      render: !state.render,
      list: arr,
    });
  };

  useEffect(() => {
    gsap.from(sortRef.current, { y: 100, duration: 0.6, opacity: 0 });
  }, []);

  function reset() {
    setState({
      render: !state.render,
      list: [],
    });
  }
  return (
    <>
      <h2>Sort program</h2>
      <section className="sort" ref={sortRef}>
        <div className="container">
          <div className="Box" id="box" ref={ref}>
            {state.list.length === 0
              ? null
              : state.list.map((e) => (
                  <input className="input" type="submit" value={e} />
                ))}
          </div>
          <div className="form">
            {[...Array(20)].map((value) => (
              <input
                className="input"
                type="submit"
                value={random()}
                onClick={(e) => log(e.target.value)}
              />
            ))}
          </div>
          <button className="btn" onClick={sort}>
            SORT
          </button>
          <button className="btn" onClick={reset}>
            RESET
          </button>
        </div>
      </section>
    </>
  );
}
