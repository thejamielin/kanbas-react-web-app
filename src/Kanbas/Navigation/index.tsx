import { Link, useLocation } from "react-router-dom";
import "./index.css";
import "../styles.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaYoutube,
  FaSignOutAlt,
  FaRegQuestionCircle,
  FaRegClock,
  FaNode,
} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "N Fix me", icon: <FaNode className="fs-2" /> },
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2" /> },
    { label: "History", icon: <FaRegClock className="fs-2" /> },
    { label: "Studio", icon: <FaYoutube className="fs-2" /> },
    { label: "Commons", icon: <FaSignOutAlt className="fs-2" /> },
    { label: "Help", icon: <FaRegQuestionCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? "wd-active" : ""}
        >
          <Link to={`/Kanbas/${link.label}`}>
            {link.icon}
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
