import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "banana", label: "banana" },
  { value: "tomato", label: "tomato" },
];
export default function Find() {
  let [selectOption, setSelectOption] = useState(null);
  let [err, setErr] = useState("");

  let [form, setForm] = useState({
    name: "",
    email: "",
    fruit: "",
  });

  const handleChange = (e) => {
    console.log("sele", e);
    setSelectOption(e);
    setForm({
      ...form,
      fruit: e.value,
    });
  };

  function submit() {
    if (form.fruit !== "") {
      console.log("form", form);
      setErr("");
    } else {
      setErr("Please fill all field");
    }
  }

  return (
    <>
      <h2>Find</h2>
      <div className="div">
        <Select
          value={selectOption}
          onChange={handleChange}
          options={options}
          className="form-input"
        />

        <input
          className="form-input"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="form-input"
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button className="btn" onClick={submit}>
          Submit
        </button>
        {err && <p className="err">{err}</p>}
      </div>
      <style jsx>
        {`
          .div {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .err {
            color: red;
          }
          .form-input {
            width: 400px;
            margin: 10px 0;
            height: 40px;
            .&--pd {
              padding: 20px;
            }
          }
          .btn {
            border: 1px solid #ddd;
            background: rgb(80, 85, 90);
            color: white !important;
            width: 80px !important;
            height: 40px;
          }
        `}
      </style>
    </>
  );
}
