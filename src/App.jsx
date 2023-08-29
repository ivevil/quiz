import Quiz from "./Quiz";
import { useState, useEffect } from "react";
import Score from "./components/Score";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizTemplate from "./pages/QuizTemplate";
import NoPage from "./pages/NoPage";
import Layout from "./containers/Layout";

function App() {
  const [questions, getQuestions] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [wrong, setWrongAnswers] = useState(0);


  useEffect(() => {
    fetch('./questions.json')
      .then(response => response.json())
      .then(json => getQuestions(json.sort(() => Math.random() - 0.5)));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/quiz" element={<QuizTemplate />} />
          {/* <Route path="/quiz/:id" element={<QuizTemplate />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
