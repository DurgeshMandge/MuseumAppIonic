import React from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import '../style/UpcomingEvents.scss';

const UpcomingEvents: React.FC = () => {
  return (
    <IonContent className="upcoming-events">
      <div className="background-image">
        <div className="grid-container">
          <IonCard className="event-card">
                <IonCardHeader>
                    <IonCardTitle className="event-title">Event 1</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <div className="event-item">
                    <div className="event-info">
                        <h2 className="event-name">Event Name</h2>
                        <p className="event-date">Date: January 1, 2025</p>
                        <p className="event-description">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </div>
                    <div className="event-image">
                    <img src="src\assets\dino.jpg" alt="Event Image" />
                    </div>
                </IonCardContent>
            </IonCard>
          <IonCard className="event-card">
                <IonCardHeader>
                    <IonCardTitle className="event-title">Event 2</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <div className="event-item">
                    <div className="event-info">
                        <h2 className="event-name">Event Name</h2>
                        <p className="event-date">Date: January 1, 2025</p>
                        <p className="event-description">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </div>
                    <div className="event-image">
                    <img src="src\assets\face.jpg" alt="Event Image" />
                    </div>
                </IonCardContent>
            </IonCard>
          <IonCard className="event-card">
                <IonCardHeader>
                    <IonCardTitle className="event-title">Event 3</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <div className="event-item">
                    <div className="event-info">
                        <h2 className="event-name">Event Name</h2>
                        <p className="event-date">Date: January 1, 2025</p>
                        <p className="event-description">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </div>
                    <div className="event-image">
                    <img src="src\assets\doll.jpg" alt="Event Image" />
                    </div>
                </IonCardContent>
            </IonCard>
          <IonCard className="event-card">
                <IonCardHeader>
                    <IonCardTitle className="event-title">Event 4</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <div className="event-item">
                    <div className="event-info">
                        <h2 className="event-name">Event Name</h2>
                        <p className="event-date">Date: January 1, 2025</p>
                        <p className="event-description">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </div>
                    <div className="event-image">
                    <img src="src\assets\gallery.jpg" alt="Event Image" />
                    </div>
                </IonCardContent>
            </IonCard>
        </div>
      </div>
    </IonContent>
  );
};

export default UpcomingEvents;
