import React from 'react';
import './Alert.scss';

interface AlertProps {
  type: 'success' | 'error' | 'warning';
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  return (
    <div className={`custom-alert ${type}`}>
      <span className="icon">⚠️</span>
      <span className="message">{message}</span>
      <button className="close-btn" onClick={onClose}>×</button>
    </div>
  );
};

export default Alert;
