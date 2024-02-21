import ModuleList from "../Modules/List";
import "./index.css";
import Status from "../Status";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="wd-modules-status">
      <div className="wd-home-modules flex-fill">
        <ModuleList />
      </div>
      <div className="d-none d-lg-block">
        <Status />
      </div>
    </div>
  );
}
export default Home;
