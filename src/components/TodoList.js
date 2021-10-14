
import TodoItem from './TodoItem';


const TodoList = ({
  todoList,
  deleteTodoItem,
  toggleCheck,
  filterState,
  count,
  clearCompleted
}) => {

  const handleClearCompleted = () => {
    clearCompleted()
  };

  const renderList = (state) => {
    if (state === "all") {
      return todoList.map((todoItem) => {
        return (
          <TodoItem
            todoItem={todoItem}
            key={todoItem.id}
            deleteTodoItem={deleteTodoItem}
            toggleCheck={toggleCheck}
          
          />
        );
      });
    } else if (state === "active") {
      return todoList.map((todoItem) => {
        if (!todoItem.isDone) {
          return (
            <TodoItem
              todoItem={todoItem}
              key={todoItem.id}
              deleteTodoItem={deleteTodoItem}
              
              toggleCheck={toggleCheck}
              
            />
          );
        }
        return null;
      });
    } else {
      return todoList.map((todoItem) => {
        if (todoItem.isDone) {
          return (
            <TodoItem
              todoItem={todoItem}
              key={todoItem.id}
              deleteTodoItem={deleteTodoItem}
              
              toggleCheck={toggleCheck}
             
            />
          );
        }
        return null;
      });
    }
  };

  return (
    <div className="todo-list container">
      {renderList(filterState)}
      <div className="todo-list-footer">
        <p className="todo-items-count">{count} items left</p>
        <button className="clear-completed-btn" onClick={handleClearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList
