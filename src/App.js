
import "./App.css";

function App() {
  
  function handleClick(){
    alert ('mai hoa')
  }

 
  function handleSubmit() {
    alert("Hello")
  }

  return (
    <>
      <div className="App">Pratice Git</div>
      <button style={{ width: "100px", color: "blue" }} onClick={() => { alert('Hello') }}>Huy</button>
      <button onClick={handleSubmit}>Cuong</button>
      <button onClick={handleClick}> hoa</button>

    </>
  )



}

export default App;
