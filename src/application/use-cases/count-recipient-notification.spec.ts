import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient Notification', () => {
  it('should be able to count recipient notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipientId-target' }),
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'recipientId-target' }),
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'another-recipientID' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipientId-target',
    });

    expect(count).toBe(2);
  });
});
