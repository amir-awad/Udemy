import React from "react";
import Header from "../widgets/Header";
import CoursesSection from "../widgets/CoursesSection";
import CoursesContainer from "../widgets/CoursesContainer";

export default function HomePage({ courses, loading, error }) {
  return (
    <>
      <Header />
      <div className="coursesSection">
        <CoursesSection
          title="Expand your career opportunities with Python"
          description="Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike."
          courseName="Python"
        />
        <CoursesContainer courses={courses} loading={loading} error={error} />
      </div>
    </>
  );
}
