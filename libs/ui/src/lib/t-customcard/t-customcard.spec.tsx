import { render } from '@testing-library/react';

import TCustomCard from './t-customcard';

describe('TCustomCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TCustomCard />);
    expect(baseElement).toBeTruthy();
  });
});
