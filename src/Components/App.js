import About from "./About";
import '../Styles/App.css';
import TodoList from './TodoList';
import Nav from './Nav';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Todo" element={<TodoList />} />
            <Route path="/About" element={<About />} />
            <Route path="/User" element={<ListUser />} />
            <Route path="/User/:id" element={<DetailUser />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
