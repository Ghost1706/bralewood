import React from "react";
import Banner from "../../components/banner/Banner";
import Card from "../../components/Card/Card";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home__Container">
      <Banner />
      <div className="home_Wrapper">
        <div>
          <Card
            items={[
              {
                id: 1,
                title: "WHO WE ARE",
                text: "Bralewood Investments Limited is a financial services firm with specialization in Bureau De Change, and Financial Consultancy, and Investments. In Bralewood, we are extremely passionate about SERVICE delivery, as we seek to always enhance our Customer Experience. We will stop at nothing to ensure that all our service touchpoints leave an impression during the each interaction with every customer.",
              },
            ]}
            cardClassWrapper="home__CardContainer"
            cardClass="home__Card"
          />
        </div>
        <div className="home_banner">
          <h2>We are the best Investment Platform</h2>
        </div>
        <h4>WHAT WE DO</h4>
        <Card
          items={[
            {
              id: 4,
              title: "Currency Brokerage",
              image: "/assets/Financials.png",
              text: "As your financial service provider we help you buy and sell currencies, allowing you save up on the cost of international money transfers.",
            },
            {
              id: 5,
              title: "Spot & Forward Transactions",
              image: "/assets/investment.png",
              text: "",
            },
            {
              id: 6,
              title: "Currency Consultancy",
              image: "assets/bureau-de-change.png",
              text: "Get our expertise analysis of financial markets and strategies for investment globally.",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
