
import FilterTodos from "./components/FilterTodos";
import Todos from "./components/Todos";
function App() {
  return (
    <div className="App">
    <div className="header">
    <div className="App-container">
    <h1 className="Title" >To Do List </h1>
    <Todos />
    <FilterTodos/>
    </div>     
    </div>
    </div>
  );
}

export default App;
