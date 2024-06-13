import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../../features/taskSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Topbar from "../../../components/Topbar";
import "./index.scss";

const AddEditToDo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const taskId = location?.state ? location?.state?.todo?.id : "";

  // Start of Form States
  const [taskName, setTaskName] = useState(
    location?.state ? location?.state?.todo?.taskName : ""
  );
  const [day, setDay] = useState(
    location?.state ? location?.state?.todo?.day : ""
  );
  const [status, setStatus] = useState(
    location?.state ? location?.state?.todo?.status : "pending"
  );
  // End of Form States

  //  Start of HandleSubmit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskId) {
      dispatch(updateTask({ id: taskId, taskName, day, status }));
      window.alert("Task Updated");
    } else {
      dispatch(addTask({ taskName, day, status }));
      window.alert("Task Added");
    }
    navigate("/");
    setTaskName("");
    setDay("");
    setStatus("pending");
  };
  // End of HandleSubmit Function

  return (
    <>
      <Topbar />
      <div className="addedit-main-container">
        <h5 className="heading-todo">
          {location?.state ? "Edit To Do" : "Add To Do"}
        </h5>
        <form className="todo-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="taskName">Task Name</label>
            <input
              type="text"
              id="taskName"
              name="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="day">Day</label>
            <input
              type="text"
              id="day"
              name="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="inProgress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <button type="submit">
            {location?.state ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddEditToDo;
