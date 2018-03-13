import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import Tab from './Tab';


test('render a tab',() => {
	const wrapper = shallow(
		<Tab> Hello Tab! </Tab>
	);
	expect(wrapper).toMatchSnapshot();
});

test('render a tab with default ')



			// test('Tab this.prop.isActive becomes positive when tab clicked', () => {
			// 	const tabComponent = shallow(<Tab isActive='false' />);
			// 	expect(tabComponent.text()).toEqual('false');
			// 	tabComponent.find('j')
			// 	expect(tabComponent.tex``t()).toEqual('true');
			//
			// 		});
			//
