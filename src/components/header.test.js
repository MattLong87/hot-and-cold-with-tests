import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
	it('Renders without crashing', () => {
		shallow(<Header />);
	})

	it('Should reset the game when NewGame is clicked', ()=>{
		const callback = jest.fn();
		const wrapper = mount(<Header onNewGame={callback} />);
		wrapper.find('.new').simulate('click');
		expect(callback).toHaveBeenCalled();
	})
})