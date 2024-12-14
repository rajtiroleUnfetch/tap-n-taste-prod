import { render } from '@testing-library/react';

import TAbout from './t-about';

describe('TAbout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TAbout />);
    expect(baseElement).toBeTruthy();
  });
});
