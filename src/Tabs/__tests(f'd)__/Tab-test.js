
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';
import { stub } from 'sinon';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('Tab Component', () => {
  it('Should render', () => {
    const component = shallow(<Tab/>)
    expect(tabWrapper).toHaveLength(1);
    expect(component.html()).toMatchSnapshot();
    expect(component.find('.popup-display').exists()).toBe(false);
    expect(component.find('input').exists()).toBe(true);
  });

  it('should display when button is clicked and hide when overlay is clicked', () => {
    const component = shallow(<ReactPopup/>);
    expect(component.find('.popup-display').exists()).toBe(false);
    expect(component.html()).toMatchSnapshot();
    component.find('input').simulate('click');
    expect(component.find('.popup-display').exists()).toBe(true);
    expect(component.html()).toMatchSnapshot();
    component.find('.popup-overlay').simulate('click');
    expect(component.find('.popup-display').exists()).toBe(false);
    expect(component.html()).toMatchSnapshot();
  });

});



var TestUtils;
if (React.version.match(/15.[0-5]/)) {
  TestUtils = require("react-addons-test-utils");
} else {
  TestUtils = require("react-dom/test-utils");
}

// import { mount } from "enzyme";
// import expect from "expect";
//
// jest.dontMock("../Tab.js");
// jest.dontMock("../TabItem.js");
// jest.dontMock("./MockTabs");
// jest.dontMock("../../Util/Util");

// const MockTabs = require('./MockTabs');
const Tab = require('../Tab.js');

describe('Tab', function() {

  let instance;

  beforeEach( function() {
    //what here?
  const renderer = new ShallowRenderer();
  renderer.render(<Tab />);
  const result = renderer.getRenderOutput();
///////////////

     instance = TestUtils.renderIntoDocument(
      <Tab content={MockTab} tag={this.tabTag} />
    );
  });

it('should trigger handler on button click', function() {
  Tab.handleTabChange = sinon.spy();

  const tab = shallowTestUtils.scryRenderedDOMComponentsWithTag(tab, 'Tab')[0];
  ReactTestUtils.Simulate.click(findDOMNode(button));
  expect(Tab.handleTabChange.called);

});
});

// it('should render element for eachtab in "tab array" ', function)() {
//
// });
