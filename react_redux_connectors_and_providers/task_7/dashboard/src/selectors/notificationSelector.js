export function filterTypeSelected(state) { return state.get('filter'); }

export function getNotifications(state) { return state.get('notifications'); }

export function getUnreadNotifications(state) {
  return getNotifications(state).valueSeq()
    .filter((notification) => notification.get('isRead') === false)
    .toList();
}

export default { filterTypeSelected, getNotifications, getUnreadNotifications };
