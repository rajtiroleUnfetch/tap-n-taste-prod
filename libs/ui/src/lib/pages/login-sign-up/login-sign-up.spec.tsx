import { render } from '@testing-library/react';

import LoginSignUp from './login-sign-up';

describe('LoginSignUp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginSignUp />);
    expect(baseElement).toBeTruthy();
  });
});
