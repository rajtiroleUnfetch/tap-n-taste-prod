import { render } from '@testing-library/react';

import TNotificationItem from '../t-notificationitem';

describe('TNotificationItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TNotificationItem />);
    expect(baseElement).toBeTruthy();
  });
});
