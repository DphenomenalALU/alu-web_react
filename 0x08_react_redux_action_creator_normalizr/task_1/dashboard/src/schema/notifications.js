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
  return normalized.result
    .filter((notificationId) => normalized.entities.notifications[notificationId].author === userId)
    .map((notificationId) => (
      normalized.entities.messages[normalized.entities.notifications[notificationId].context]
    ));
}

export default normalized;
