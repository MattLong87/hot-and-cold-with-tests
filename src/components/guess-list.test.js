import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessList />);
	})

	it('Has the guessBox class', () => {
		const wrapper = shallow(<GuessList />);
		expect(wrapper.hasClass('guessBox')).toEqual(true);
	})
})