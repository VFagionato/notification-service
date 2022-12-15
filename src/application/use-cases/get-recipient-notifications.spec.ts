import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient Notification', () => {
  it('should be able to get recipient notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipientId-target',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipientId-target' }),
        expect.objectContaining({ recipientId: 'recipientId-target' }),
      ]),
    );
  });
});
