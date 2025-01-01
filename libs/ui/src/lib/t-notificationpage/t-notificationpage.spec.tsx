import { render } from '@testing-library/react';

import TNotificationPage from './t-notificationpage';

describe('TNotificationPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TNotificationPage />);
    expect(baseElement).toBeTruthy();
  });
});
