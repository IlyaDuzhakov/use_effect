const Details = ({ info, loading }) => {
  if (!info) {
    return <p className="select-user"> 👤 Выберите пользователя</p>;
  }
  return loading ? (
    <p className="loading">⏳ Идет загрузка...</p>
  ) : (
    <div className="details">
      <img src={info.avatar} alt="" />
      <div>
        <p className="user">{info.name}</p>
      </div>
      <div>
        <p className="city">City: 
          <span className="text">{info.details.city}</span>
        </p>
      </div>
      <div>
        <p className="company">Company: 
          <span className="text">{info.details.company}</span></p>
      </div>
      <div>
        <p className="position">Position: 
          <span className="text">{info.details.position}</span></p>
      </div>
    </div>
  );
};

export default Details;
