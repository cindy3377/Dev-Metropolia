//App.js
import { useReducer } from "react";
import "./app.css";

function App() {
  function taskReducer(state, action) {
    switch (action.type) {
      case "SET_TASK_INPUT":
        return { ...state, taskInput: action.payload };
      case "ADD_TASK":
        // Implement the logic to add a task in this case block.
        return {
          ...state,
          tasks: [...state.tasks, { text: state.taskInput, completed: false }],
          taskInput: "",
        };
      case "TOGGLE_TASK":
        // Implement the logic to toggle task completion in this case block.
        const updatedTasks = [...state.tasks];
        updatedTasks[action.payload].completed =
          !updatedTasks[action.payload].completed;
        return { ...state, tasks: updatedTasks };
      case "SET_EDITING_TASK":
        // Implement the logic to set the editing task in this case block.
        return { ...state, editingTask: action.payload };
      case "EDIT_TASK":
        // Implement the logic to edit a task in this case block.
        const editedTasks = [...state.tasks];
        editedTasks[action.payload.index].text = action.payload.newText;
        return { ...state, tasks: editedTasks, editingTask: null };
      case "DELETE_TASK":
        // Implement the logic to delete a task in this case block.
        const filteredTasks = state.tasks.filter(
          (_, index) => index !== action.payload
        );
        return { ...state, tasks: filteredTasks };
      case "CLEAR_COMPLETED_TASKS":
        // Implement the logic to clear completed tasks in this case block.
        const activeTasks = state.tasks.filter((task) => !task.completed);
        return { ...state, tasks: activeTasks };
      case "SET_FILTER":
        // Implement the logic to set the filter in this case block.
        return { ...state, filter: action.payload };
      default:
        return state;
    }
  }

  // Initial state for the task reducer

  const initialState = {
    taskInput: "",
    tasks: [],
    editingTask: null,
    filter: "all",
  };

  // State for the task input
  const [state, dispatch] = useReducer(taskReducer, initialState);
  // Function to add a task
  // const addTask = () => {
  //   if (taskInput.trim() !== "") {
  //     setTasks([...tasks, { text: taskInput, completed: false }]);
  //     setTaskInput("");
  //   }
  // };

  const addTask = () => {
    if (state.taskInput.trim() !== "") {
      dispatch({
        type: "ADD_TASK",
        payload: { text: state.taskInput, completed: false },
      });
      dispatch({ type: "SET_TASK_INPUT", payload: "" });
    }
  };

  // Function to toggle task completion
  // const toggleTaskCompletion = (index) => {
  //   const updatedTasks = [...tasks];
  //   updatedTasks[index].completed = !updatedTasks[index].completed;
  //   setTasks(updatedTasks);
  // };

  const toggleTaskCompletion = (index) => {
    state.tasks[index].completed = !state.tasks[index].completed;
    dispatch({ type: "TOGGLE_TASK", payload: index });
  };

  // Function to edit a task
  // const editTask = (index, newText) => {
  //   const updatedTasks = [...tasks];
  //   updatedTasks[index].text = newText;
  //   setTasks(updatedTasks);
  //   setEditingTask(null);
  // };
  const editTask = (index, newText) => {
    console.log(state.editingTask);
    dispatch({ type: "EDIT_TASK", payload: { index, newText } });
  };
  // Function to delete a task
  // const deleteTask = (index) => {
  //   const updatedTasks = [...tasks];
  //   updatedTasks.splice(index, 1);
  //   setTasks(updatedTasks);
  // };
  const deleteTask = (index) => {
    dispatch({ type: "DELETE_TASK", payload: index });
  };

  // Function to clear completed tasks
  // const clearCompletedTasks = () => {
  //   const updatedTasks = tasks.filter((task) => !task.completed);
  //   setTasks(updatedTasks);
  // };
  const clearCompletedTasks = () => {
    dispatch({ type: "CLEAR_COMPLETED_TASKS" });
  };
  const setFilter = (filter) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };
  // Filtered tasks based on the selected filter
  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "completed") return task.completed;
    if (state.filter === "active") return !task.completed;
    return true; // 'all' filter, show all tasks
  });

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a new task"
          value={state.taskInput}
          onChange={(e) =>
            dispatch({ type: "SET_TASK_INPUT", payload: e.target.value })
          }
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="filter">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            {state.editingTask === index ? (
              <input
                type="text"
                value={task.text}
                onChange={(e) => editTask(index, e.target.value)}
                onBlur={() =>
                  dispatch({ type: "SET_EDITING_TASK", index: null })
                }
                autoFocus
              />
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                />
                <span
                  className={task.completed ? "completed" : ""}
                  onClick={() => dispatch({ type: "SET_EDITING_TASK", index })}
                >
                  {task.text}
                </span>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      {state.tasks.some((task) => task.completed) && (
        <button onClick={clearCompletedTasks}>Clear Completed</button>
      )}
    </div>
  );
}

export default App;
