import React from "react";
import CourseCard from "./CourseCard";
import LoadingCourseCard from "../components/LoadingCourseCard";
import Error from "../components/Error";

function CoursesContainer({ courses, loading, error }) {
  const createCoursesCards = () => {
    return courses.map((course) => {
      return loading ? (
        <LoadingCourseCard key={course.id} />
      ) : error ? (
        <Error key={course.id} />
      ) : (
        <CourseCard
          image={course.image}
          title={course.title}
          presenter={course.instructor[0].name}
          rate={5}
          price={course.price}
          key={course.id}
          courseId={course.id}
        ></CourseCard>
      );
    });
  };

  return <div className="coursesCards">{createCoursesCards()}</div>;
}

export default CoursesContainer;
