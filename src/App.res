open Reducer

@react.component
let make = () => {
  let (state, dispatch) = reducer->React.useReducer({
    todos: [],
    nextId: 1,
  })

  let onAdd = value => {
    switch value {
    | Some(str) =>
      if Js.String.trim(str) != "" {
        str->AddTodo->dispatch
      }
    | None => ()
    }
  }

  <div className="p-6">
    <h1 className="text-3xl font-semibold text-center"> {"TO DO LIST"->React.string} </h1>
    <div className="w-2/5 h-full min-h-28 shadow-xl my-5 mx-auto">
      //-------------------- components ------------------------------
      <AddToDo onAdd />
      <ToDoList todos={state.todos} onDispatch={dispatch} />
    </div>
  </div>
}
