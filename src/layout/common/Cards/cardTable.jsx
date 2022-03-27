import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getCurrentUser } from "./../../../services/userService";
import CardControllers from "./CardControllers";

const CardsTable = ({ cards, handleDelete, changeLikeStatus }) => {
  if (!cards.length) return <div>No Cards In The State Object...</div>;

  const user = getCurrentUser();

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Address</th>
          <th scope="col">Phone</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      <tbody>
        {cards.map((card, idx) => {
          return (
            <tr key={idx}>
              <th scope="row">{card.bizNumber}</th>
              <td>
                <Link className="link-dark" to={`/card-info/${card._id}`}>
                  {card.title}
                </Link>
              </td>
              <td>{card.description}</td>
              <td>{card.address}</td>
              <td>{card.phone}</td>
              <td>
                <CardControllers
                  card={card}
                  user={user}
                  changeLikeStatus={changeLikeStatus}
                  handleDelete={handleDelete}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

CardsTable.propTypes = {
  cards: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  changeLikeStatus: PropTypes.func.isRequired,
};

export default CardsTable;
