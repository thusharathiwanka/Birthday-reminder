import { FaTimes } from "react-icons/fa";

function Card({ image, name, age, id }) {
  return (
    <div className="card-container" key={id}>
      <img src={image} alt={name} />
      <div className="card-info">
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
      <button>
        <FaTimes />
      </button>
    </div>
  );
}

export default Card;
