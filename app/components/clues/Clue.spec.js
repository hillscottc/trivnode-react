import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Clue from './Clue';

describe('<Clue/>', function () {

  it('simulates click events', () => {
    const showAnswerClick = sinon.spy();
    const wrapper = shallow(
        <Clue showAnswerClick={showAnswerClick} />
    );
    wrapper.find('button').simulate('click');
    expect(showAnswerClick.calledOnce).to.equal(true);
  });


  it('renders default question category', () => {
    const wrapper = render(<Clue />);
    expect(wrapper.text()).to.contain("history");
  });


});