import About from "./About";
import '../styles/App.css';
import TodoList from './TodoList';
import Nav from './Nav';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import ListUser from "./users/ListUser";
import DetailUser from "./users/DetailUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<ListUser />} />
            <Route path="/user/:id" element={<DetailUser />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;