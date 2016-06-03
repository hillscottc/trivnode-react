import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import ClueContainer from './ClueContainer';

describe('<ClueContainer/>', function () {

  it('should work', function () {
    const wrapper = shallow(<ClueContainer/>);

    // console.log("TESTING!");
    // expect(wrapper.find('img')).to.have.length(1);

  });

  // it('should have props for email and src', function () {
  //   const wrapper = shallow(<Avatar/>);
  //   expect(wrapper.props().email).to.be.defined;
  //   expect(wrapper.props().src).to.be.defined;
  // });
});