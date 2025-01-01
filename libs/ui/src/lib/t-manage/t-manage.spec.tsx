import { render } from '@testing-library/react';

import TManage from './t-manage';

describe('TManage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TManage />);
    expect(baseElement).toBeTruthy();
  });
});
