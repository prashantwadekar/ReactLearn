import './card.css';
function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.src} alt="load"></img>

          <div className="card_info">
            <span className="movie_name">
              <h5>{props.mname}</h5>
            </span>
            <p className="movie_desc">{props.desc}</p>
            <a href={props.href} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
