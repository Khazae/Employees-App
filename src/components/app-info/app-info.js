import "./app-info.css";

const AppInfo = ({ personCount, riseCount }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании E</h1>
      <h2>Общее чилсо сотрудников: {personCount}</h2>
      <h2>Премию получат: {riseCount}</h2>
    </div>
  );
};

export default AppInfo;
