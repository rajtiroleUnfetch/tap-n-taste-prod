import { render } from '@testing-library/react';

import TFaq from './t-faq';

describe('TFaq', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TFaq />);
    expect(baseElement).toBeTruthy();
  });
});
