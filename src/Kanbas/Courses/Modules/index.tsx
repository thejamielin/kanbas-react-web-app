import ModuleList from "./List";
function Modules() {
  return (
    <div className="wd-modules">
      <button type="button">Collapse All</button>
      <button type="button">View Progress</button>
      <select id="select-one-publish-type">
        <option value="PUBLISHALL">Publish All</option>
        <option value="OTHER">Other</option>
      </select>
      <button type="button">Module</button>
      <ModuleList />
    </div>
  );
}
export default Modules;
