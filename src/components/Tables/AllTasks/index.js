import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, deleteTask } from "../../../features/taskSlice";
import Loading from "../../../components/Loader";
import "./index.scss";

const TodoList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tasks, status, error } = useSelector((state) => state.tasks);

  // Fetching All Tasks
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Deleting Selected Task
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

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
      <div className="create-to-do-button-container">
        <button
          className="create-to-do-button"
          onClick={() => navigate("/todo/addedit")}
        >
          Add To Do
        </button>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Day</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks
              ?.filter((todo) => todo?.status !== "completed")
              .map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.taskName}</td>
                  <td>{todo.day}</td>
                  <td>{todo.status}</td>
                  <td>
                    <button
                      onClick={() =>
                        navigate("/todo/addedit", {
                          state: { todo },
                        })
                      }
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDelete(todo.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
