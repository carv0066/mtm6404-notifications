
import notificationsInfo from './notifications';
import { useState } from 'react';
import './App.css';

const Notification = ({ id, name, message, onClear }) => (
  <div className="notification">
    <h3>{name}</h3>
    <p>{message}</p>
    <button className='clear-btn' onClick={() => onClear(id)}>Clear</button>
  </div>
);

const App = () => {
  //state to hold the notifications
  const [notifications, setNotifications] = useState(notificationsInfo);

  const handleClearNotification = (id) => {
    const modifiedNotifications = [];
    // Loop through current notifications 
    for (let i = 0; i < notifications.length; i++) {
      if (notifications[i].id !== id) {
        modifiedNotifications.push(notifications[i]);
      }
    }
    setNotifications(modifiedNotifications);
  };

  const handleClearAllNotifications = () => {
    //Set notifications to an empty array with no notifications to display
    setNotifications([]);
  };


  const renderedNotifications = [];
  for (let i = 0; i < notifications.length; i++) {
    const notification = notifications[i];
    renderedNotifications.push(
      <Notification
        key={notification.id}
        id={notification.id}
        name={notification.name}
        message={notification.message}
        onClear={handleClearNotification}
      />
    );
  }

  return (
    <div className="app">
      <h1>Notifications ({notifications.length})</h1>
      <div className="notifications-list">
        {/* Render each Notification component manually */}
        {renderedNotifications}
      </div>
      {/* Button to clear all notifications */}
      <button onClick={handleClearAllNotifications} className='clear-all-btn'>Clear All</button>
    </div>
  );
};

export default App;
