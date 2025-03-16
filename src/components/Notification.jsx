import { useNotification } from '../store/useNotification';

export default function NotificationList() {
    const notifications = useNotification((state) => state.notifications);
    const removeNotification = useNotification((state) => state.removeNotification);

    return (
        <div className="fixed bottom-0 right-0 m-4 space-y-2">
            {notifications.map((notification) => (
                <div key={notification.id} className="bg-gray-800 text-white p-3 rounded shadow">
                    {notification.message}
                    <button onClick={() => removeNotification(notification.id)} className="ml-2 text-red-500">X</button>
                </div>
            ))}
        </div>
    );
}