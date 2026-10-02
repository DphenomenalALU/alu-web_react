import * as notificationsModule from '../../../notifications.json';

const notifications = notificationsModule.default || notificationsModule;

export function getAllNotificationsByUser(userId) {
  return notifications
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

export default getAllNotificationsByUser;
