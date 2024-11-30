import { render } from '@testing-library/react';

import TSubmit from './t-submit';

describe('TSubmit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TSubmit />);
    expect(baseElement).toBeTruthy();
  });
});
