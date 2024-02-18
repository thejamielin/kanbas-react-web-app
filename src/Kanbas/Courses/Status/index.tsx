import {
  FaBan,
  FaBullhorn,
  FaCalendarDay,
  FaChartBar,
  FaCloudDownloadAlt,
  FaCrosshairs,
  FaDownload,
  FaRegBell,
  FaRegCheckCircle,
  FaRocket,
} from "react-icons/fa";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

function Status() {
  const links = [
    {
      label: "Import Existing Content",
      icon: <FaDownload className="fa" />,
    },
    {
      label: "Import from Commons",
      icon: <FaCloudDownloadAlt className="fa" />,
    },
    { label: "Choose Home Page", icon: <FaCrosshairs className="fa" /> },
    { label: "View Course Stream", icon: <FaChartBar className="fa" /> },
    { label: "New Announcement", icon: <FaBullhorn className="fa" /> },
    { label: "New Analytics", icon: <FaChartBar className="fa" /> },
    {
      label: "View Course Notifications",
      icon: <FaRegBell className="fa" />,
    },
  ];
  const todo = [
    {
      description:
        "EECE2322 30297 Fund Digital Design/Comp Org SEC 01 Spring 2024 [BOS-1-TR]",
      subtitle: "EECE2322.30297.202430",
      datetime: "Feb 19 at 4:30pm",
      icon: <FaCalendarDay className="fa" />,
    },
    {
      description: "CS4550 01 SP24",
      subtitle: "CS4550.39591.202430",
      datetime: "Feb 20 at 3:25pm",
      icon: <FaCalendarDay />,
    },
  ];
  return (
    <div className="wd-status-bar">
      <h4>Course Status</h4>
      <div className="mb-4 wd-status-top-buttons">
        <button type="button">
          <FaBan className="me-1" />
          Unpublish
        </button>
        <button type="button" className="wd-green-button">
          <FaRegCheckCircle className="me-1" />
          Published
        </button>
      </div>
      <div className="mb-4 wd-status-mid-buttons">
        {links.map((link, index) => (
          <button type="button" key={index}>
            {link.icon}
            {link.label}
          </button>
        ))}
      </div>
      <h4 className="wd-status-header">To Do</h4>
      <div className="wd-status-todo-list">
        {todo.map((item, index) => (
          <div className="wd-status-todo-item" key={index}>
            <div className="wd-status-icon">{item.icon}</div>
            <div>
              <p>{item.description}</p>
              <p>{item.subtitle}</p>
              <p>{item.datetime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Status;
