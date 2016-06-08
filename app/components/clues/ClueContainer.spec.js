import React from 'react';
import {expect} from 'chai';
import ClueContainer from './ClueContainer';


describe('<ClueContainer/>', function () {

  it('fuzzy-matching works',  () => {
    expect(ClueContainer.fuzzyMatch("Elep", "elephant")).to.be.true;
    expect(ClueContainer.fuzzyMatch("ele", "elephant")).to.be.false;
  });


});