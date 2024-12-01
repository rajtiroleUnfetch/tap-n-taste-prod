import { render } from '@testing-library/react';

import TCounter from './t-counter';

describe('TCounter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TCounter />);
    expect(baseElement).toBeTruthy();
  });
});
