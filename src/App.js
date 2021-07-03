import logo from "./logo.svg";
import "./App.css";

function App() {
  function handleSubmit() {
    alert("Hello")
  }

  return (
    <>
      <div className="App">Pratice Git</div>
      <button style={{ width: "100px", color: "blue" }} onClick={() => { alert('Hello') }}>Huy</button>
      <button onClick={handleSubmit}>Cuong</button>

    </>
  )



}

export default App;
