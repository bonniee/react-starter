import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Hello from '../Hello';

describe('<Hello>', function () {
  it('renders without problems', function () {
    var rendered = TestUtils.renderIntoDocument(<Hello/>);
    expect(rendered).toBeDefined();
  });
});
