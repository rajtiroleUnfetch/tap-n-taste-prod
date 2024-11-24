import { render } from '@testing-library/react';

import TBarButton from './t-barbutton';

describe('TBarButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TBarButton />);
    expect(baseElement).toBeTruthy();
  });
});
