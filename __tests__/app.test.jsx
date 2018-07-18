import App from '../src/app';
import React from 'react';
import { shallow } from 'enzyme';

let wrapper;

beforeEach(()=> {
  wrapper = shallow((
    <App/>
  ));
});

it('it renders a title of NASA Search', () => {
  const title = wrapper.find('h1.title').text();
  expect(title).toEqual('NASE Search');
});

it('has a query input that set query state on change', () => {
  const wrapper = shallow((
    <App />
  ));

expect(wrapper.state('query')).toEqual('foo');

const Search = wrapper.state('query')).toEqual('');

// On change 
search.simulate('change', { target: { value: 'foo'} });

expect(wrapper.state('query')).toEqual('foo');
}