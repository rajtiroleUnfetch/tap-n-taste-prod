import { render } from '@testing-library/react';

import TFilterPopUp from './t-filter-popup';

describe('TFilterPopUp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TFilterPopUp />);
    expect(baseElement).toBeTruthy();
  });
});
