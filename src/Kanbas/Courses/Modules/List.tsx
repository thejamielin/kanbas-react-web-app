import React, { useState } from "react";
import "./index.css";
import { modules as initialModules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

function ModuleList() {
  const { courseId } = useParams();
  const [moduleList, setModuleList] = useState(
    initialModules.filter((module) => module.course === courseId)
  );
  const [module, setModule] = useState({
    ...initialModules[0],
    name: "New Module",
    description: "New Description",
    _id: new Date().getTime().toString(),
  });
  const addModule = (module: any) => {
    const newModule = { ...module, _id: new Date().getTime().toString() };
    const newModuleList = [newModule, ...moduleList];
    setModuleList(newModuleList);
  };
  const deleteModule = (moduleId: string) => {
    const newModuleList = moduleList.filter(
      (module) => module._id !== moduleId
    );
    setModuleList(newModuleList);
  };
  const updateModule = () => {
    const newModuleList = moduleList.map((m) => {
      if (m._id === module._id) {
        return module;
      } else {
        return m;
      }
    });
    setModuleList(newModuleList);
  };

  return (
    <div className="flex-fill">
      <ul className="list-group wd-modules-list">
        <li className="list-group-item">
          <div className="wd-module-form">
            <div className="wd-module-form-fields">
              <input
                value={module.name}
                onChange={(e) =>
                  setModule({
                    ...module,
                    name: e.target.value,
                  })
                }
              />
              <textarea
                value={module.description}
                onChange={(e) =>
                  setModule({
                    ...module,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <button className="wd-white-on-blue" onClick={updateModule}>
                Update
              </button>

              <button
                className="wd-white-on-green"
                onClick={() => {
                  addModule(module);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </li>

        {moduleList.map((m) => (
          <li className="list-group-item" onClick={() => setModule(m)}>
            <div className="wd-module-header">
              <FaEllipsisV className="me-2" />
              <div className="wd-module-editer">
                <div>{m.name}</div>
                <div>
                  <button
                    className="wd-white-on-red"
                    onClick={() => deleteModule(m._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="wd-white-on-green"
                    onClick={(event) => {
                      setModule(module);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <ul className="list-group">
              {m.lessons?.map((lesson) => (
                <li className="list-group-item">
                  <FaEllipsisV className="me-2" />
                  {lesson.name}
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                </li>
              ))}
            </ul>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;
