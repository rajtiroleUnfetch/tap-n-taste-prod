import { render } from '@testing-library/react';

import TReviewpopup from './t-reviewpopup';

describe('TReviewpopup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TReviewpopup />);
    expect(baseElement).toBeTruthy();
  });
});
