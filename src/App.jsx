import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizTemplate from "./pages/QuizTemplate";
import NoPage from "./pages/NoPage";
import Layout from "./containers/Layout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/quiz" element={<QuizTemplate />} /> */}
          <Route path="/quiz/:id" element={<QuizTemplate />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
