import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import {
  FaBook,
  FaBullhorn,
  FaCheck,
  FaCog,
  FaComment,
  FaCrosshairs,
  FaFile,
  FaFolder,
  FaHome,
  FaPeopleCarry,
  FaPizzaSlice,
  FaPlug,
  FaRegFile,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function MobileCourseNav() {
  return (
    <ul className="wd-mobile-course-nav">
      <li>
        <Link to="#/Home">
          <FaHome />
          Home
        </Link>
      </li>
      <li>
        <Link to="#/Kanbas/Courses/RS101/Modules">
          <FaCrosshairs />
          Modules
        </Link>
      </li>
      <li>
        <Link to="https://piazza.com/class/lqlwl9wn2q969r">
          <FaPizzaSlice />
          Piazza
        </Link>
      </li>
      <li>
        <Link to="#">
          <FaPlug />
          Zoom Meetings
        </Link>
      </li>
      <li>
        <Link to="#">
          <FaBook />
          Assignments
        </Link>
      </li>
      <li>
        <Link to="#">
          <FaBook />
          Quizzes
        </Link>
      </li>
      <li>
        <Link to="#">
          <FaFile />
          Grades
        </Link>
      </li>
      <li>
        <Link to="#">
          <FaPeopleCarry />
          People
        </Link>
      </li>
      <li>
        <Link to="#">
          <FaPlug />
          Panapto Video
        </Link>
      </li>
      <li>
        <Link to="#">
          <FaComment />
          Discussions
        </Link>
      </li>
      <li>
        <Link to="#">
          <FaBullhorn />
          Announcements
        </Link>
      </li>
      <li>
        <Link to="#">
          <FaRegFile />
          Pages
        </Link>
      </li>
      <li>
        <Link to="#">
          <FaFolder />
          Files
        </Link>
      </li>
      <li>
        <Link to="#">
          <FaFolder />
          Rubrics
        </Link>
      </li>
      <li>
        <Link to="#">
          <FaCheck />
          Outcomes
        </Link>
      </li>
      <li>
        <Link to="#">
          <FaPeopleCarry />
          Collaborations
        </Link>
      </li>
      <li>
        <Link to="#">
          <FaFile />
          Syllabus
        </Link>
      </li>
      <li>
        <Link to="#">
          <FaCog />
          Settings
        </Link>
      </li>
    </ul>
  );
}

export default MobileCourseNav;
