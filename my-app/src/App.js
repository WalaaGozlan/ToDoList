import './App.css';
import Task from "./components/task";
import TaskList from "./components/taskList";

function App() {
  return (
    <div className="App">
      <h1>MANAGE YOUR DAY</h1>
      <Task />
      <TaskList />
    </div>
  );
}

export default App;
