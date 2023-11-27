import "./App.css"
import Coin from "./components/coins"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/coindown">
        <Routes>
          <Route path="/" element={<Coin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
