import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification content', () => {
    const notification = new Notification({
      content: new Content('New anomaly'),
      category: 'anomaly',
      recipientId: 'valid-uuid',
    });

    expect(notification).toBeTruthy();
  });
});
