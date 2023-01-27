import "./app-filter.css";

const AppFilter = (props) => {
  const buttonData = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: "на повышение" },
    { name: "moreThen1000", label: "З/П больше 1000$" },
  ];

  const buttons = buttonData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";

    return (
      <button
        onClick={() => props.onFilterSelect(name)}
        className={`btn ${clazz}`}
        type="button"
        key={name}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
