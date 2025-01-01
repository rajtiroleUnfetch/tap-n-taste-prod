import { render } from '@testing-library/react';

import TFoodItemTypes from './t-food-item-types';

describe('TFoodItemTypes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TFoodItemTypes />);
    expect(baseElement).toBeTruthy();
  });
});
