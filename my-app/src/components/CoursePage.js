import React from "react";
import { useParams } from "react-router-dom";
import CourseTopContainer from "./CourseTopContainer";
import NoMatchPage from "./NoMatchPage";
import ShortcutNavigation from "./ShortcutNavigation";
import CourseOverview from "./CourseOverview";
import Requirements from "./Requirements";
import CourseContent from "./CourseContent";
import Content from "./Content";

export default function CoursePage({ courses }) {
  const { courseId } = useParams();
  const course = courses[courseId - 1];
  return course ? (
    <>
      <div className="courseTopSection">
        <CourseTopContainer course={course} />
      </div>
      <div className="courseNavigationSection">
        <ShortcutNavigation />
      </div>
      <div className="coursePageContent">
        <CourseOverview overview={course.overview} />
        <CourseContent content={course.content} sectionsCount={course.sectionsCount} lecturesCount={course.lecturesCount} totalLength={course.totalLength}/>
        <Requirements requirements={course.requirements} />
      </div>
    </>
  ) : (
    <NoMatchPage />
  );
}
