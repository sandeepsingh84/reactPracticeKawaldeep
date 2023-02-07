import React, { useEffect, useState } from "react";
import axios from "axios";
const TodoList = () => {
  const [todoArray, setTodoArray] = useState([]);
  const [todoFilter, setTodoFilter] = useState({ all: true });

  const [current, setCurrentState] = useState(null);
  // const [array, setArrayState] = useState([""]);
  // console.log('current', current);
  // console.log('array', array)

  const getTodoList = (completed) => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/todos${
          completed === null ? "" : `?completed=${completed}`
        }`
      )
      .then((response) => setTodoArray(response?.data));
    //console.log('todoArray', todoArray)
  };
  const createTodo = (workTitle) => {
    let data = { title: workTitle };
    console.log("data", data);
    axios
      .post(`https://jsonplaceholder.typicode.com/todos`, data)
      .then((response) => setTodoArray((prv)=>[...prv,response?.data]));
  };
  useEffect(() => {
    getTodoList(null);
  }, []);

  return (
    <div className="w-full flex justify-center  ">
      <div className="flex justify-center flex-col bg-red-100 w-9/12">
        <div className="w-full flex justify-center ">
          <div className=" w-full flex  bg-blue-100 py-3  justify-center">
            <div className="w-56 flex  text-4xl items-center font-semibold text-blue-500 font-serif">
              Todo List
            </div>
            <div className="w-96 flex justify-around ">
              <button
                className={`text-blue-500 font-serif font-semibold ${
                  todoFilter?.all && "text-red-400"
                }`}
                onClick={() => {
                  getTodoList(null);
                  setTodoFilter({ all: true });
                }}
              >
                All
              </button>
              <button
                className={`text-blue-500 font-serif font-semibold ${
                  todoFilter?.completed && "text-red-400"
                }`}
                onClick={() => {
                  getTodoList(true);
                  setTodoFilter({ completed: true });
                }}
              >
                completed
              </button>
              <button
                className={`text-blue-500 font-serif font-semibold ${
                  todoFilter?.pending && "text-red-400"
                }`}
                onClick={() => {
                  getTodoList(false);
                  setTodoFilter({ pending: true });
                }}
              >
                pending
              </button>
            </div>

            <div className="flex w-56 justify-end ">
              <input
                className="mr-3 pb-1 pt-1 "
                type="text"
                value={current}
                onChange={(kk) => setCurrentState(kk.target.value)}
              />
              <div
                className="  text-xl mt-2  text-blue-600 "
                onClick={() => {
                  createTodo(current);
                  setCurrentState(" ");
                }}
              >
                Add
              </div>
            </div>
          </div>
        </div>
        <div className="ml-10 border w-8/12 mt-4 pt-4 flex justify-center flex-col pl-20">
          {todoArray?.map((items) => (
            <div className="flex w-full font-serif">
              <div className="mr-10 mt-1">{items?.id}</div>
              <div>{items?.title}</div>
            </div>
          ))}
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
