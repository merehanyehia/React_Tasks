import DynamicPage from "../pages/dynamicPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DynamicPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
