import { render } from '@testing-library/react';

import TUpcomingEvent from './t-upcomingevent';

describe('TUpcomingEvent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TUpcomingEvent />);
    expect(baseElement).toBeTruthy();
  });
});
