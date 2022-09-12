import React from "react";
import { useParams } from "react-router-dom";
import CourseTopContainer from "./CourseTopContainer";
import NoMatchPage from "./NoMatchPage";
import ShortcutNavigation from "./ShortcutNavigation";
import CourseSidebarContainer from "./CourseSidebarContainer";
import CourseOverview from "./CourseOverview";
import Requirements from "./Requirements";
import CourseContent from "./CourseContent";
import Description from "./Description";
import ReviewsContainer from "./ReviewsContainer";
import InstructorsCardsContainer from "./InstructorsCardsContainer";
import StudentFeedback from "./StudentFeedback";
import Footer from "./Footer";

export default function CoursePage({ courses }) {
  const { courseId } = useParams();
  const course = courses[courseId - 1];
  return course ? (
    <>
      <CourseSidebarContainer course={course}/>
      <div className="courseTopSection">
        <CourseTopContainer course={course} />
      </div>
      <div className="courseNavigationSection">
        <ShortcutNavigation />
      </div>
      <div className="coursePageContent">
        <CourseOverview overview={course.overview} />
        <CourseContent
          content={course.content}
          sectionsCount={course.sectionsCount}
          lecturesCount={course.lecturesCount}
          totalLength={course.totalLength}
        />
        <Requirements requirements={course.requirements} />
        <Description
          description={course.description}
          targetPeople={course.whoFor}
        />
        <InstructorsCardsContainer instructors={course.instructor} />
        <StudentFeedback
          feedbacks={course.studentFeedback}
          rating={course.rate}
        />
        <ReviewsContainer reviews={course.reviews} />
      </div>
      <Footer />
    </>
  ) : (
    <NoMatchPage />
  );
}
