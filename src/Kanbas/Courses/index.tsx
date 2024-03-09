import { courses } from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
  Link,
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import "./index.css";
import CourseNavigation from "./Navigation";
import { IoIosArrowForward } from "react-icons/io";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAngleDown, FaBars } from "react-icons/fa";

function Courses({ courses }: { courses: any[] }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();
  return (
    <>
      <div className="wd-display-md-show d-none">
        <div className="d-flex wd-mobile-nav">
          <div className="col-1 text-center">
            <Link to="">
              <button
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobileKanbasNav"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <FaBars />
              </button>
            </Link>
          </div>
          <div className="col-10 text-center wd-mobile-nav-title">
            <a href="MobileCourseNav/">
              <div>{course?.number}</div>
              <div>Modules</div>
            </a>
          </div>
          <div className="col-1 text-center">
            <Link to="">
              <button
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobileCourseNavigation"
                aria-expanded="false"
                aria-controls="mobileCourseNavigation"
              >
                <FaAngleDown />
              </button>
            </Link>
          </div>
        </div>
        <div className="collapse" id="mobileCourseNavigation"></div>
      </div>
      <h1 className="wd-course-top wd-course-header">
        <HiMiniBars3 className="wd-course-mini-bar" /> Course {course?.name}{" "}
        <div className="wd-course-breadcrumb">
          <IoIosArrowForward className="wd-course-arrow" />
          {path}
        </div>
      </h1>
      <div className="wd-course-content">
        <div className=" d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default Courses;
