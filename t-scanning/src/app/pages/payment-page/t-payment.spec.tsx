import { render } from '@testing-library/react';

import TPayment from './t-payment';

describe('TPayment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TPayment />);
    expect(baseElement).toBeTruthy();
  });
});
