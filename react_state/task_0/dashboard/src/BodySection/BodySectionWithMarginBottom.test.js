import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

test('BodySectionWithMarginBottom renders a BodySection with its props', () => {
  const children = <p>test children node</p>;
  const wrapper = shallow(
    <BodySectionWithMarginBottom title="test title">
      {children}
    </BodySectionWithMarginBottom>,
  );

  expect(wrapper.find('.bodySectionWithMargin')).toHaveLength(1);
  expect(wrapper.find(BodySection)).toHaveLength(1);
  expect(wrapper.find(BodySection).prop('title')).toBe('test title');
  expect(wrapper.find(BodySection).prop('children')).toBe(children);
});
