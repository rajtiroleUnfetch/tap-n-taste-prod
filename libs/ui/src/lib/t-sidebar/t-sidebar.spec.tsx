import { render } from '@testing-library/react';

import TScanning from './t-sidebar';

describe('TScanning', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TScanning />);
    expect(baseElement).toBeTruthy();
  });
});
