import React from "react";
// import PropTypes from "prop-types";
import dateformat from "dateformat";
// import isOverdue from "./isOverdue";

function Item({ item }) {
    return (
      <li className="list-group-item">
        {`${item.name} - ${dateformat(new Date(item.timestampDue), "dd-mmm-yyyy")}`}
      </li>);
  }

export default Item;
