

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="card-body">
        <h5 className="card-title">{content}</h5>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">Leer más</button>
      </div>
    </div>
  );
};

export default Card;
