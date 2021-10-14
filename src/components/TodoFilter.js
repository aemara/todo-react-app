import React from 'react'

const TodoFilter = ({filterChange, filterState}) => {

    const handleFilterChange = (state) => {
      console.log("method called within TodoFilter!")
      filterChange(state);
    }

    return (
      <div className="todo-filter container">
        <button
          className="filter-btn all-filter"
          onClick={() => handleFilterChange("all")}
          style={filterState === "all" ? { color: "#3A7CFD" } : {}}
        >
          All
        </button>
        <button
          className="filter-btn active-filter"
          onClick={() => handleFilterChange("active")}
          style={filterState === "active" ? { color: "#3A7CFD" } : {}}
        >
          Active
        </button>
        <button
          className="filter-btn completed-filter"
          onClick={() => handleFilterChange("completed")}
          style={filterState === "completed" ? { color: "#3A7CFD" } : {}}
        >
          Completed
        </button>
      </div>
    );
}

export default TodoFilter
