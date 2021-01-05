import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DisplayComponent from './DisplayComponent';

configure({adapter: new Adapter()});

describe('<DisplayComponent />',()=>{
    it('should render <DisplayComponent /> elements if not authenticated',()=>{
        const wrapper = shallow(<DisplayComponent />);
        expect(wrapper.find())
    });
});