import { courses } from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
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
import { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import MobileCourseNav from "./MobileCourseNav";
import MobileKanbasNav from "./MobileKanbasNav";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();
  const [open, setOpen] = useState(false);
  const [openKanbasNav, setOpenKanbasNav] = useState(false);
  return (
    <>
      <div className="wd-display-md-show d-none">
        <div className="d-flex wd-mobile-nav">
          <div className="col-1 text-center">
            <Button
              onClick={() => setOpenKanbasNav(!openKanbasNav)}
              aria-controls="example-collapse-text"
              aria-expanded={openKanbasNav}
            >
              <FaBars />
            </Button>
          </div>
          <div className="col-10 text-center wd-mobile-nav-title">
            <a href="MobileCourseNav/">
              <div>{course?.number}</div>
              <div>Modules</div>
            </a>
          </div>
          <div className="col-1 text-center">
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="wd-courses-mobile-nav"
              aria-expanded={open}
            >
              <FaAngleDown />
            </Button>
          </div>
        </div>
        <Collapse in={openKanbasNav} dimension="width">
          <div id="wd-courses-mobile-nav">
            <MobileKanbasNav />
          </div>
        </Collapse>
        <Collapse in={open}>
          <div id="wd-courses-mobile-nav">
            <MobileCourseNav />
          </div>
        </Collapse>
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
