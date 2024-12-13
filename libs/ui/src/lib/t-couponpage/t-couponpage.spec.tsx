import { render } from '@testing-library/react';

import TCouponpage from './t-couponpage';

describe('TCouponpage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TCouponpage />);
    expect(baseElement).toBeTruthy();
  });
});
