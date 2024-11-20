import { render } from '@testing-library/react';

import TFooter from './t-footer';

describe('TFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TFooter />);
    expect(baseElement).toBeTruthy();
  });
});
