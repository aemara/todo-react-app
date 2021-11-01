import React from 'react'

const TodoFilter = ({filterChange, filterState, onMobile, theme}) => {

    const handleFilterChange = (state) => {
      filterChange(state);
    }

    return (
      <div
        className={`todo-filter ${onMobile ? "container" : ""}`}
        style={theme === "dark" ? { background: "#25273D", boxShadow: 'none' } : {}}
      >
        <button
          className={`filter-btn all-filter ${
            theme === "dark" ? "filter-btn-dark" : ""
          }`}
          onClick={() => handleFilterChange("all")}
          style={filterState === "all" ? { color: "#3A7CFD" } : {}}
        >
          All
        </button>
        <button
          className={`filter-btn all-filter ${
            theme === "dark" ? "filter-btn-dark" : ""
          }`}
          onClick={() => handleFilterChange("active")}
          style={filterState === "active" ? { color: "#3A7CFD" } : {}}
        >
          Active
        </button>
        <button
          className={`filter-btn completed-filter ${
            theme === "dark" ? "filter-btn-dark" : ""
          }`}
          onClick={() => handleFilterChange("completed")}
          style={filterState === "completed" ? { color: "#3A7CFD" } : {}}
        >
          Completed
        </button>
      </div>
    );
}

export default TodoFilter
