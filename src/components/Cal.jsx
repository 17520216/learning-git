import { useState } from "react";
const style = {
  container: {
    padding: "40px 100px",
  },
  label: {
    marginRight: "30px",
  },
  input: {
    width: "40px",
    background: "#97cdff",
    margin: "10px 20px",
    textAlign: "center",
  },
};
export default function Calculators() {
  let [state, setState] = useState("0");

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

  //   const handle = (sign) => {
  //     let str = state.toString() + ` ${sign} `;
  //     setState(str);
  //   };
  function run() {
    setState(eval(state).toString());
  }

  return (
    <>
      <h2>Calculators</h2>

      <div style={style.container}>
        <label style={style.label}>KET QUA</label>
        <input style={{ width: "200px" }} type="text" value={state} />

        <div style={{ maxWidth: "300px", marginLeft: "76px" }}>
          <input
            onClick={getValue}
            style={style.input}
            type="submit"
            value={1}
          />
          <input
            onClick={getValue}
            style={style.input}
            type="submit"
            value={2}
          />
          <input
            onClick={getValue}
            style={style.input}
            type="submit"
            value={3}
          />
          <input
            onClick={getValue}
            style={style.input}
            type="submit"
            value={4}
          />
          <input
            onClick={getValue}
            style={style.input}
            type="submit"
            value={5}
          />
          <input
            onClick={getValue}
            style={style.input}
            type="submit"
            value={6}
          />
          <input
            onClick={getValue}
            style={style.input}
            type="submit"
            value={7}
          />
          <input
            onClick={getValue}
            style={style.input}
            type="submit"
            value={8}
          />
          <input
            onClick={getValue}
            style={style.input}
            type="submit"
            value={9}
          />
          <input
            onClick={getValue}
            style={style.input}
            type="submit"
            value={0}
          />
          <input
            style={{ ...style.input, background: "#FE20B2" }}
            text="text"
            value="+"
            onClick={getValue}
          />
          <input
            style={{ ...style.input, background: "#FE20B2" }}
            text="text"
            value="-"
            onClick={getValue}
          />
          <input
            style={{ ...style.input, background: "#FE20B2" }}
            text="number"
            value="="
            onClick={run}
          />
        </div>
      </div>
    </>
  );
}
