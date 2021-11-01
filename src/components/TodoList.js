
import TodoFilter from './TodoFilter';
import TodoItem from './TodoItem';



const TodoList = ({
  todoList,
  deleteTodoItem,
  toggleCheck,
  filterState,
  filterChange,
  count,
  clearCompleted,
  onMobile,
  theme
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
            theme={theme}
          
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
              theme={theme}
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
              theme={theme}
            />
          );
        }
        return null;
      });
    }
  };

  return (
    <div
      className="todo-list container"
      style={theme === "dark" ? { boxShadow: "none" } : {}}
    >
      {renderList(filterState)}
      <div
        className="todo-list-footer"
        style={theme === "dark" ? { background: "#25273D" } : {}}
      >
        <p
          className="todo-items-count"
          style={theme === "dark" ? { color: "#5B5E7E" } : {}}
        >
          {count} items left
        </p>
        {!onMobile && (
          <TodoFilter
            filterChange={filterChange}
            filterState={filterState}
            onMobile={onMobile}
            theme={theme}
          />
        )}
        <button
          className="clear-completed-btn"
          style={theme === "dark" ? { color: "#5B5E7E" } : {}}
          onClick={handleClearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList
