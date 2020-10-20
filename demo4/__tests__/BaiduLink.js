import BaiduLink from '../BaiduLink';
import React from 'react';
import renderer from 'react-test-renderer';

test('', () => {
    const tree = renderer.create(<BaiduLink/>);
    expect(tree).toMatchSnapshot();
})