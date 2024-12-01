import { render } from '@testing-library/react';

import TPriceRange from './t-pricerange';

describe('TPriceRange', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TPriceRange />);
    expect(baseElement).toBeTruthy();
  });
});
