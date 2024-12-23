import { render } from '@testing-library/react';

import TSortPopUp from './t-sort-popup';

describe('TSortPopUp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TSortPopUp />);
    expect(baseElement).toBeTruthy();
  });
});
