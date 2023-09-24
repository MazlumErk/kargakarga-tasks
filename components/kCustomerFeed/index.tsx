import React from "react";

const customerFeeds = [
  {
    title: "High voltage mayonnaise",
  },
  {
    title: "High voltage mayonnaise",
  },
  {
    title: "High voltage mayonnaise",
  },
  {
    title: "High voltage mayonnaise",
  },
  {
    title: "High voltage mayonnaise",
  },
  {
    title: "High voltage mayonnaise",
  },
  {
    title: "High voltage mayonnaise",
  },
];

export default function KCustomerFeed() {
  return (
    <div className="kCustomerFeed">
      {customerFeeds.map((customerfeed, index) => (
        <div className="customerFeedCard" key={index}>
          {customerfeed.title}
        </div>
      ))}
    </div>
  );
}
