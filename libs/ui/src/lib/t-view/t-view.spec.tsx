import { render } from '@testing-library/react';

import TView from './t-view';

describe('TView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TView />);
    expect(baseElement).toBeTruthy();
  });
});
