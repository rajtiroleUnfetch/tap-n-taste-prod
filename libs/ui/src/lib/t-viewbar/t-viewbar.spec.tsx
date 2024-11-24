import { render } from '@testing-library/react';

import TViewBar from './t-viewbar';

describe('TViewBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TViewBar />);
    expect(baseElement).toBeTruthy();
  });
});
