import React from "react";
import PageHeader from "../common/pageHeader";
import CardExtends from "../common/Cards/CardExtends";
import Cards from "../common/Cards/cards";
import { Navigate } from "react-router-dom";
import { getLikedCards } from "../../services/cardService";

class MyFavoriteCards extends CardExtends {
  state = {
    data: [],
    cards: [],
    isMount: false,
  };

  async componentDidMount() {
    try {
      const { data } = await getLikedCards();
      this.setState({ data, cards: data, isMount: true });
    } catch (error) {
      console.log(error.message);
    }
  }
  render() {
    const { user } = this.props;
    if (!user || (user && !user.biz)) return <Navigate replace to="/" />;

    const cards = [...this.state.cards];
    const { isMount } = this.state;
    if (!isMount) return null;

    return (
      <React.Fragment>
        <PageHeader
          title="My Favorites Cards"
          subTitle="Here you can find your favorites cards"
        />
        <div className="container">
          <Cards
            cards={cards}
            handleDelete={this.handleDelete}
            changeLikeStatus={this.changeLikeStatus}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default MyFavoriteCards;
