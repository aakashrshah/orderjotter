/* globals beforeEach, describe, document, expect, it, jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { Link, MemoryRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import store from './store/store';
import App from './App';

import HomePage from './pages/HomePage/HomePage';
import CategoryPage from './pages/CategoryPage/CategoryPage';


describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match a snapshot', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

  it('should have an AppBar that routes to the home page.', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/project/ABC12345']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const iqviaButton = wrapper.find(Button).at(0);
    expect(iqviaButton.prop('to')).toBe('/');
    expect(iqviaButton.prop('component')).toEqual(Link);
  });

  describe('Routing', () => {
    it('should route to the Category page', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/interests']}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );
      expect(wrapper.find(CategoryPage)).toHaveLength(1);
    });
  });
});
