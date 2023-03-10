import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { Content } from '@application/entities/content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'anomaly',
    content: new Content('You have a new anomaly'),
    recipientId: 'recipientId-target',
    ...override,
  });
}
