function Card({ image, name, age }) {
  return (
    <div className="card-container">
      <img src={image} alt={name} />
      <div className="card-info">
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </div>
  );
}

export default Card;
