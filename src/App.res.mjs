// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as AddToDo from "./Components/AddToDo.res.mjs";
import * as Reducer from "./Reducer.res.mjs";
import * as ToDoList from "./Components/ToDoList.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";

function App(props) {
  var match = React.useReducer(Reducer.reducer, {
        todos: [],
        nextId: 1
      });
  var dispatch = match[1];
  var onAdd = function (value) {
    if (value !== undefined && value.trim() !== "") {
      return dispatch({
                  TAG: "AddTodo",
                  _0: value
                });
    }
    
  };
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx("h1", {
                      children: "TO DO LIST",
                      className: "text-3xl font-semibold text-center"
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx(AddToDo.make, {
                              onAdd: onAdd
                            }),
                        JsxRuntime.jsx(ToDoList.make, {
                              todos: match[0].todos,
                              onDispatch: dispatch
                            })
                      ],
                      className: "w-2/5 h-full min-h-28 shadow-xl my-5 mx-auto"
                    })
              ],
              className: "p-6"
            });
}

var make = App;

export {
  make ,
}
/* react Not a pure module */
