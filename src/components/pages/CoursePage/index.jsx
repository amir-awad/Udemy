import React from "react";
import { useParams } from "react-router-dom";
import CourseTopContainer from "../../widgets/CourseTopContainer";
import NoMatchPage from "../NoMatchPage";
import ShortcutNavigation from "../../widgets/ShortcutNavigation";
import CourseSidebarContainer from "../../widgets/CourseSidebarContainer";
import CourseOverview from "../../widgets/CourseOverview";
import Requirements from "../../widgets/Requirements";
import CourseContent from "../../widgets/CourseContent";
import Description from "../../widgets/Description";
import ReviewsContainer from "../../widgets/ReviewsContainer";
import InstructorsCardsContainer from "../../widgets/InstructorsCardsContainer";
import StudentFeedback from "../../widgets/StudentFeedback";
import Footer from "../../widgets/Footer";

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
