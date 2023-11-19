import React from "react";
function TaskInputForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder="add new task" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
export default TaskInputForm;