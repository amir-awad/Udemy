import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CoursePage from "./components/CoursePage";
import NavBar from "./components/NavBar";
import NoMatchPage from "./components/NoMatchPage";
import SearchPage from "./components/SearchPage";

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
      <div>
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
    </div>
  );
}

export default App;
