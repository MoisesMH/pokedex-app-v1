// import './App.css';

import { Navigate, Route, Routes } from "react-router-dom";
import Post from "./components/Post";
import Collection from "./pages/Collection";
import TradeApp from "./pages/TradeApp";

function App() {
  return (
    // Available routes
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/trade" />} />
        <Route path="/trade" element={<TradeApp />} />
        <Route path='/trade/collection' element={<Collection />} />
        <Route path="/trade/post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
