export const Statistics = ({ title, status }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {status.map((info) => {
          return (<li className="item" key={info.id}>
            <span className="label">{info.label} </span> 
            <span className="percentage"> {info.percentage}%</span>
          </li>)
        })}
      </ul>
    </section>
  );
};
