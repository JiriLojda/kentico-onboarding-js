import React, { PropTypes } from 'react';

function DisplayItem(props) {
  let { description, index } = props;
  return (
    <li
      className="list-group-item"
      onClick={() => props.onItemClick(props.index)}>
      {index + 1}.
      {description}
    </li>
  );
}

DisplayItem.propTypes = {
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default DisplayItem;
