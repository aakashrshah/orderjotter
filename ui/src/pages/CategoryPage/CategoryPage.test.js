/* global describe, expect, it */
import React from 'react';
import { shallow } from 'enzyme';

import { CategoryPage } from './CategoryPage';

describe('CategoryPage', () => {
  it('should match a snapshot', () => {
    expect(shallow(<CategoryPage />)).toMatchSnapshot();
  });
});
