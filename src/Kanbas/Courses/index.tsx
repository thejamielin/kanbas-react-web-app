import { courses } from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import "./index.css";
function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="wd-course-top">
      <h1 className="wd-course-header">
        <HiMiniBars3 className="wd-course-mini-bar" /> Course {course?.name}
      </h1>
    </div>
  );
}
export default Courses;
