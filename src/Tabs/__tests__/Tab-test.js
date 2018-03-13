import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import Tab from '../Tab';

describe('Tab', () => {
	describe('on mount'), () => {
		test('render a tab',() => {
			const wrapper = shallow( <Tab value='Hello Tab!' /> );
			expect(wrapper).toMatchSnapshot();
		});

		test('All tabs should have class 'tab' ', () => {
			const wrapper = mount(<Tab/>);
			expect(wrapper.props().className).toBe('tab');
		});

		test(`click on tab should add className = 'is-active'`, () => {
			const wrapper = mount
		});
	});
});
		// test('render a tab with is-active class', () => {
// 	const wrapper = mount(<Tab />);
//
// })



			// test('Tab this.prop.isActive becomes positive when tab clicked', () => {
			// 	const tabComponent = shallow(<Tab isActive='false' />);
			// 	expect(tabComponent.text()).toEqual('false');
			// 	tabComponent.find('j')
			// 	expect(tabComponent.tex``t()).toEqual('true');
			//
			// 		});
			//
