import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Todo";
import AddEditToDo from "./pages/Todo/AddEditTodo";
import "./App.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo/addedit" element={<AddEditToDo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
