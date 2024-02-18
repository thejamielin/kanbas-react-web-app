import ModuleList from "../Modules/List";
import "./index.css";
import Status from "../Status";

function Home() {
  return (
    <div className="wd-modules-status">
      <ModuleList />
      <Status />
    </div>
  );
}
export default Home;
