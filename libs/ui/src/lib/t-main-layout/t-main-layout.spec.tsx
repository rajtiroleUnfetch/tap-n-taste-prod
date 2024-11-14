import { render } from '@testing-library/react';

import TMainLayout from './t-main-layout';

describe('TMainLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TMainLayout />);
    expect(baseElement).toBeTruthy();
  });
});
