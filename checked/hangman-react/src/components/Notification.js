import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>已經輸入過該該字母了...</p>
    </div>
  )
}

export default Notification
