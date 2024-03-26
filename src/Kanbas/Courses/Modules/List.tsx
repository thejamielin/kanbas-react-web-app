import React, { useState, useEffect } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import { findModulesForCourse, createModule } from "./client";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules.filter((module) => module.course === courseId)
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  return (
    <div className="flex-fill">
      <ul className="list-group wd-modules-list">
        <li className="list-group-item">
          <div className="wd-module-form">
            <div className="wd-module-form-fields">
              <input
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                }
              />
              <textarea
                value={module.description}
                onChange={(e) =>
                  dispatch(
                    setModule({ ...module, description: e.target.value })
                  )
                }
              />
            </div>
            <div>
              <button
                className="wd-white-on-blue"
                onClick={() => dispatch(updateModule(module))}
              >
                Update
              </button>

              <button className="wd-white-on-green" onClick={handleAddModule}>
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
                    onClick={() => dispatch(deleteModule(m._id))}
                  >
                    Delete
                  </button>
                  <button
                    className="wd-white-on-green"
                    onClick={() => dispatch(setModule(m))}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <ul className="list-group">
              {m.lessons?.map(
                (lesson: {
                  name:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | null
                    | undefined;
                }) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                )
              )}
            </ul>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;
