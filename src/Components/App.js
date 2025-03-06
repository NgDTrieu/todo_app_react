import logo from '../Images/logo.svg';
import '../Styles/App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Todo App</div>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
