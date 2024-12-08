import { render } from '@testing-library/react';

import TOrderplaced from './t-orderplaced';

describe('TOrderplaced', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TOrderplaced />);
    expect(baseElement).toBeTruthy();
  });
});
