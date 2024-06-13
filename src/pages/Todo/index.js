import React from "react";
import Topbar from "../../components/Topbar";
import TodoList from "../../components/Tables/AllTasks";
import CompletedTodoList from "../../components/Tables/CompletedTask";
import "./index.scss";

const Home = () => {
  return (
    <>
      <Topbar />
      <TodoList />
      <CompletedTodoList />
    </>
  );
};

export default Home;
