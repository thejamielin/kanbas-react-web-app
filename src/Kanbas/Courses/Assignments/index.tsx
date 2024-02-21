import {
  FaCheckCircle,
  FaEllipsisV,
  FaPlus,
  FaPlusCircle,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="wd-all-assignment-content">
      <div className="wd-assignments-top">
        <form>
          <input type="text" placeholder="Search for Assignment" />
        </form>
        <div className="wd-assignments-buttons">
          <button type="button">
            <FaPlus />
            Group
          </button>
          <button className="wd-white-on-red" type="button">
            <FaPlus />
            Assignment
          </button>
          <button type="button">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <div className="wd-assignments">
        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div>
              <FaEllipsisV className="me-2" /> ASSIGNMENTS
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            <ul className="list-group">
              {assignmentList.map((assignment) => (
                <li className="list-group-item">
                  <FaEllipsisV className="me-2" />
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </Link>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Assignments;
