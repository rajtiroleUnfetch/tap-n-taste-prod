import { render } from '@testing-library/react';

import ImageSlider from './t-image-slider';

describe('ImageSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageSlider />);
    expect(baseElement).toBeTruthy();
  });
});
