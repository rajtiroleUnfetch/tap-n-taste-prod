import { render } from '@testing-library/react';

import TButton from './t-button';

describe('TButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TButton />);
    expect(baseElement).toBeTruthy();
  });
});
