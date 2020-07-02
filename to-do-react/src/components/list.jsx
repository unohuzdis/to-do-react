import React from "react";
import Item from "./item";
// import dateformat from "dateformat";
// import todo from "./mockData";

// import PropTypes from "prop-types";
// import Item from "./item";

function List({ items }) {
  if (items.length === 0) {
    return (
      <div className="alert alert-success" role="alert">
        Todo list is empty!
      </div>
    );
  }
  return (
    <ul className="list-group">
      {items.Items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}
// List.propTypes = {
//   items: PropTypes.array.isRequired,
//   completeItem: PropTypes.func.isRequired,
// };

export default List;
