import { render } from '@testing-library/react';

import TCard from '../t-card';

describe('TCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TCard />);
    expect(baseElement).toBeTruthy();
  });
});
