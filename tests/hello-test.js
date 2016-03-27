import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Root from '../components/Hello';

describe('root', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    expect(root).toBeDefined();
  });
});
