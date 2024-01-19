// EmergencyServices.js
import React from 'react';

const EmergencyServices = () => {
  // Replace with actual emergency services data or API integration
  const emergencyServices = [
    { name: 'Emergency Hospital', location: '123 Main St, City' },
    { name: 'Emergency Clinic', location: '456 Oak St, City' },
    { name: 'Ambulance Services', location: '789 Pine St, City' },
  ];

  return (
    <div>
      <h2>Emergency Services</h2>
      <ul>
        {emergencyServices.map((service, index) => (
          <li key={index}>
            <strong>{service.name}</strong>: {service.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyServices;
