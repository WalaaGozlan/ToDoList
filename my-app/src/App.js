import './App.css';
import Task from "./components/task";
// import TaskList from "./components/taskList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>MANAGE YOUR DAY</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Task} />
          {/* <Route exact path="/task" component={Task} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
