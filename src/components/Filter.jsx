function Filter({ filter, setFilter, setSort }) {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-option">
        <p>Ststus:</p>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incompleted">Incompletas</option>
        </select>
      </div>
      <div>
        <p>Ordem alfabética</p>
        <button onClick={() => setSort("Asc")}>Asc</button>
        <button onClick={() => setSort("Des")}>Des</button>
      </div>
    </div>
  )
}

export default Filter
