import { render } from '@testing-library/react';

import TCoupon from './t-coupon';

describe('TCoupon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TCoupon />);
    expect(baseElement).toBeTruthy();
  });
});
