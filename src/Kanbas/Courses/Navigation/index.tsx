import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";
import { courses } from "../../Database";
function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
  const { pathname } = useLocation();
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="wd-whole-navigation">
      <p>{course?.number}</p>
      <ul className="wd-navigation">
        {links.map((link, index) => (
          <li
            key={index}
            className={pathname.includes(link) ? "wd-active" : ""}
          >
            <Link to={link}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CourseNavigation;
