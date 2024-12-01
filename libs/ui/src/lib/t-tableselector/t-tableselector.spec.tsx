import { render } from '@testing-library/react';

import TTableSelector from './t-tableselector';

describe('TTableSelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TTableSelector />);
    expect(baseElement).toBeTruthy();
  });
});
