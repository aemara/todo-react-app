import Header from './components/Header';
import TodoFilter from './components/TodoFilter';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';



function App() {
  const [todoList, setTodoList] = useState([]);
  const [filterState, setFilterState] = useState('all');
  const [todoCount, setTodoCount] = useState(0);
  const [theme, setTheme] = useState('light');
  const [onMobile, setOnMobile] = useState(
    window.innerWidth > 768 ? false : true
  );

  

  const addTodoItem = (id, todoText, isDone) => {
    const newTodoItem = {
      id: id,
      text: todoText,
      isDone: isDone,
    };

    setTodoList((prevTodoList) => {
      return [...prevTodoList, newTodoItem];
    })
    setTodoCount((prevCount) => prevCount + 1);
  }


  const deleteTodoItem = (id) => {
    const newTodoList = todoList.filter(todoItem => todoItem.id !== id);
    setTodoList(newTodoList);
    setTodoCount((prevCount) => prevCount - 1);
  }

  const toggleCheck = (id) => {
    setTodoList((prevList) => {
      return prevList.map((todoItem) => {
        if (todoItem.id === id) {
          return { ...todoItem, isDone: !todoItem.isDone };
        }
        return todoItem;
      })
    })
  }


  const filterChange = (state) => {
    setFilterState(state);
  }

  const itemCount = (filterState) => {
    let count = 0;
    if(filterState === 'all') {
      todoList.forEach((todoItem) => {
          count++;
      });
    } else if(filterState === 'active') {
      todoList.forEach(todoItem => {
        if(!todoItem.isDone) {
          count++;
        }
      })
    } else {
      todoList.forEach(todoItem => {
        if(todoItem.isDone) {
          count++;
        }
      })
    }

    setTodoCount(count);
  }

  const clearCompleted = () => {
   const newTodoList = todoList.filter((todoItem) => todoItem.isDone === false);
   setTodoList(newTodoList);
  }

  const handleResizing = () => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setOnMobile(false);
      } else {
        setOnMobile(true);
      }
    });
  };

  const changeTheme = () => {
    console.log("Change Theme");
    setTheme((prev) => {
      if(prev === 'dark') return 'light';
      else return 'dark';
    })
  }

  useEffect(() => {
    itemCount(filterState)
  }, [filterState, todoCount, todoList])

  
  useEffect(() => {
    handleResizing();
  }, []);

  return (
    <div
      className="App"
      style={theme === "dark" ? { background: "#171823" } : {}}
    >
      <Header theme={theme} changeTheme={changeTheme} />
      <TodoInput addTodoItem={addTodoItem} todoList={todoList} theme={theme} />
      <TodoList
        todoList={todoList}
        count={todoCount}
        deleteTodoItem={deleteTodoItem}
        toggleCheck={toggleCheck}
        filterState={filterState}
        filterChange={filterChange}
        clearCompleted={clearCompleted}
        onMobile={onMobile}
        theme={theme}
      />
      {onMobile && (
        <TodoFilter
          filterChange={filterChange}
          filterState={filterState}
          onMobile={onMobile}
          theme={theme}
        />
      )}
    </div>
  );
}

export default App;
