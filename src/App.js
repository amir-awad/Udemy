import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CoursePage from "./components/pages/CoursePage";
import NavBar from "./components/widgets/NavBar";
import NoMatchPage from "./components/pages/NoMatchPage";
import SearchPage from "./components/pages/SearchPage";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setError(false);
        setCourses(json);
      })
      .catch(function () {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div className="App">
      <NavBar courses={courses} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage courses={courses} loading={loading} error={error} />
          }
        />
        <Route
          path="/courses/:courseId"
          element={<CoursePage courses={courses} />}
        />
        <Route
          path="/search/:searchParams"
          element={<SearchPage courses={courses} />}
        />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
