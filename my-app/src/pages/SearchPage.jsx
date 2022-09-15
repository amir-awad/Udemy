import React from "react";
import { useParams } from "react-router";
import CoursesContainer from "../widgets/CoursesContainer";
import CoursesSection from "../widgets/CoursesSection";
import Header from "../widgets/Header";
function SearchPage({ courses }) {
  const { searchParams } = useParams();
  const searchKey = searchParams.split("=")[1];
  let filteredCourses = [];
  let searchResult = "";
  for (let course of courses) {
    if (course.title.toLowerCase().includes(searchKey.toLowerCase())) {
      filteredCourses.push(course);
    }
  }
  if (filteredCourses.length > 0)
    searchResult = filteredCourses.length + " results for (" + searchKey + ")";
  else
    searchResult =
      "Sorry, we couldn't find any results for (" + searchKey + ")";
  return (
    <>
      <Header />
      <div className="coursesSection">
        <CoursesSection title={searchResult} courseName="other courses" />
        <CoursesContainer
          courses={filteredCourses}
          loading={false}
          error={false}
        />
      </div>
    </>
  );
}

export default SearchPage;
