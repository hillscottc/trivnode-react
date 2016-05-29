import React, { Component, PropTypes } from 'react'

import { Button } from 'react-bootstrap';

const SampleButton = ({ value, onClick }) => (
    <div>
      <Button bsStyle="success" bsSize="small" onClick={e => onClick(e.target.value)}>
        {value}
      </Button>
    </div>
);


SampleButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};


export default SampleButton;