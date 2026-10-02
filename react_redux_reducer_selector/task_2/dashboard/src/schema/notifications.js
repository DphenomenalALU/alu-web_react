import { normalize, schema } from 'normalizr';
import * as notificationsModule from '../../../notifications.json';

const notifications = notificationsModule.default || notificationsModule;
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalized = normalize(notifications, [notification]);

export function getAllNotificationsByUser(userId) {
  const result = [];

  for (const notificationId of normalized.result) {
    const currentNotification = normalized.entities.notifications[notificationId];

    if (currentNotification.author === userId) {
      result.push(normalized.entities.messages[currentNotification.context]);
    }
  }

  return result;
}

export default normalized;
