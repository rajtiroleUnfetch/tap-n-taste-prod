import { render } from '@testing-library/react';

import TBookevent4 from './t-bookevent4';

describe('TBookevent4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TBookevent4 />);
    expect(baseElement).toBeTruthy();
  });
});
