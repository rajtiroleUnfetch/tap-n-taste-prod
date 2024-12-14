import { render } from '@testing-library/react';

import TNotificationBar from './t-notificationbar';

describe('TNotificationBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TNotificationBar />);
    expect(baseElement).toBeTruthy();
  });
});
