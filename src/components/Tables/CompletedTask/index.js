import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../../features/taskSlice";
import Loading from "../../../components/Loader";
import "../AllTasks/index.scss";

const CompletedTodoList = () => {
  const dispatch = useDispatch();
  const { tasks, status, error } = useSelector((state) => state.tasks);
  const [completedTask, setCompletedTask] = useState([]);

  //   Fetching All Tasks
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  //   Filtering the Completed Tasks
  useEffect(() => {
    const completeTask = tasks.filter((task) => task.status === "completed");
    setCompletedTask(completeTask);
  }, [tasks]);

  if (status === "loading") {
    return (
      <div>
        <Loading />
      </div> 
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (

    <div className="main-container">
      <div className="create-to-do-button-container">Completed Task</div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Day</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {completedTask.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.taskName}</td>
                <td>{todo.day}</td>
                <td>{todo.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedTodoList;


