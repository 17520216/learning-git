import { useState, useRef, useEffect } from "react";
import { gsap, TimelineLite } from "gsap";
const style = {
  label: {
    marginRight: "30px",
  },
};
export default function Calculators() {
  let [state, setState] = useState("0");
  let calRef = useRef();

  const cal = (prev, next, status) => {
    if (status === "+") {
      return prev + next;
    }
    if (status === "-") {
      return prev - next;
    }
    return null;
  };

  const getValue = (e) => {
    let value = e.target.value;
    console.log("state", state);
    if (state === "0") state = "";
    setState(state.concat(value));
  };

  function run() {
    setState(eval(state).toString());
  }

  useEffect(() => {
    gsap.from(calRef.current, { y: 100, duration: 0.6, opacity: 0 });
  }, []);

  return (
    <>
      <h2>Calculators</h2>
      <section className="cal" ref={calRef}>
        <div className="container" style={style.container}>
          <input className="cal-result" type="text" value={state} />
          <label>Result</label>

          <div className="cal-wrap">
            <input
              onClick={getValue}
              type="submit"
              className="input-custom input1"
              value={1}
            />
            <input
              onClick={getValue}
              type="submit"
              className="input-custom input2"
              value={2}
            />
            <input
              onClick={getValue}
              type="submit"
              className="input-custom input3"
              value={3}
            />
            <input
              onClick={getValue}
              type="submit"
              className="input-custom input4"
              value={4}
            />
            <input
              onClick={getValue}
              type="submit"
              className="input-custom input5"
              value={5}
            />
            <input
              onClick={getValue}
              type="submit"
              className="input-custom input6"
              value={6}
            />
            <input
              onClick={getValue}
              type="submit"
              className="input-custom input7"
              value={7}
            />
            <input
              onClick={getValue}
              type="submit"
              className="input-custom input8"
              value={8}
            />
            <input
              onClick={getValue}
              type="submit"
              className="input-custom input9"
              value={9}
            />
            <input
              onClick={getValue}
              type="submit"
              className="input-custom input0"
              value={0}
            />
            <input
              type="submit"
              className="input-custom input-maths input-plus"
              value="+"
              onClick={getValue}
            />
            <input
              type="submit"
              className="input-custom input-maths input-minus"
              value="-"
              onClick={getValue}
            />
            <input
              type="submit"
              className="input-custom input-maths input-equal"
              value="="
              onClick={run}
            />
            <input
              type="submit"
              className="input-custom input-maths input-multiply"
              value="*"
            />
            <input
              type="submit"
              className="input-custom input-maths input-division"
              value="/"
            />
            <input
              type="submit"
              className="input-custom  input-maths input-remove"
              value="C"
            />
          </div>
        </div>
      </section>
      <div className="text" >
        text
      </div>
      {/* <style jsx>
        {`
        .text{background: red}
        `}
      </style> */}
    </>
  );
}
