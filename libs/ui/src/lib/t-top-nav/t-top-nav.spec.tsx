import { render } from '@testing-library/react';

import TopNav from './t-top-nav';

describe('TopNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopNav />);
    expect(baseElement).toBeTruthy();
  });
});
