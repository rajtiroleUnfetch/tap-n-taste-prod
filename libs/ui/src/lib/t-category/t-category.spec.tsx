import { render } from '@testing-library/react';

import TCategory from './t-category';

describe('TCategory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TCategory />);
    expect(baseElement).toBeTruthy();
  });
});
