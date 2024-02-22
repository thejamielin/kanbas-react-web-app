import "./index.css";

function MobileKanbasNav() {
  return (
    <div className="wd-mobile-kanbas-nav" id="mobileKanbasNav">
      <div className="d-flex wd-mobile-kanbas-nav-header">
        <div className="col-11">
          <img src="/images/canvas.jpg" height="50px" />
        </div>
        <a href="../screen.html">
          <div className="col-1 text-center">
            <button type="button">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </a>
      </div>
      <ul className="wd-mobile-kanbas-nav">
        <li>
          <a href="/Kanbas/Dashboard/screen.html">
            <i className="fa fa-tachometer"></i>Dashboard
          </a>
        </li>
        <li>
          <a href="/Kanbas/Account/Profile/screen.html">
            <i className="fa-regular fa-user"></i>Account
          </a>
        </li>
        <li>
          <a href="/Kanbas/Courses/Home/screen.html">
            <i className="fa-solid fa-book"></i>Courses
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-people-arrows"></i>Groups
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-calendar"></i>Calendar
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-inbox"></i>Inbox
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-right-from-bracket"></i>Commons
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>Studio
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-regular fa-clock"></i>History
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-question-circle"></i>Help
          </a>
        </li>
      </ul>
    </div>
  );
}
export default MobileKanbasNav;
