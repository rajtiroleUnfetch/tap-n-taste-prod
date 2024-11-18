import { render } from '@testing-library/react';

import TNavbutton from '../t-navbutton';

describe('TNavbutton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TNavbutton />);
    expect(baseElement).toBeTruthy();
  });
});
