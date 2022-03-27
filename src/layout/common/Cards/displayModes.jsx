import PropTypes from "prop-types";
import Cards from "./cards";

import CardsTable from "./cardTable";

const DisplayModes = ({ cards, display, changeLikeStatus, handleDelete }) => {
  if (!cards.length) return <div> No Cards In The DataBase...</div>;

  if (display === "cards")
    return (
      <Cards
        cards={cards}
        changeLikeStatus={changeLikeStatus}
        handleDelete={handleDelete}
      />
    );

  if (display === "table")
    return (
      <CardsTable
        cards={cards}
        changeLikeStatus={changeLikeStatus}
        handleDelete={handleDelete}
      />
    );
};

DisplayModes.propTypes = {
  cards: PropTypes.array.isRequired,
  display: PropTypes.string.isRequired,
  changeLikeStatus: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default DisplayModes;
