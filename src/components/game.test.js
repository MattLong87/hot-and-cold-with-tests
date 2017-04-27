import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
	it('Renders without crashing', () => {
		shallow(<Game />);
	})

	it('Adds a guess to state when submitted', () => {
		const testGuess = 33;
		const wrapper = mount(<Game />);
		wrapper.find('input').node.value = testGuess;
		wrapper.find('form').simulate('submit');
		expect(wrapper.state('guesses')).toEqual([testGuess])
	})
})