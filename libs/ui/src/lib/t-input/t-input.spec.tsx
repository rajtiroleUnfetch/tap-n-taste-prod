import { render } from '@testing-library/react';

import TInput from './t-input';

describe('TInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TInput />);
    expect(baseElement).toBeTruthy();
  });
});
