import { render } from '@testing-library/react';

import TBookevent3 from './t-bookevent3';

describe('TBookevent3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TBookevent3 />);
    expect(baseElement).toBeTruthy();
  });
});
