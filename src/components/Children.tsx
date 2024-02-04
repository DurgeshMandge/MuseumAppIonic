// ChildrenArtSection.tsx
import React from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import '../style/Children.scss';

const Tab2: React.FC = () => {
  return (
    <IonContent className="children-art-section">
      <div className="container">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Artistic Concepts for Children</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="concept">
              <img src="src\assets\color.png" alt="Color Theory" />
              <h1 className='para'>Color theory</h1>
              <a className='button' href='https://www.sesamestreet.org/games?id=26835&destination=/home ' type='button' >Lets Play Game !</a>
            </div>
            <div className="concept">
              <img src="https://www.completelykidsrichmond.com/wp-content/uploads/2012/10/P1010003.jpg" alt="Shapes and Forms" />
              <p>Shapes and forms</p>
              <a className='button' href='https://www.starfall.com/h/geometry/3D-space/?' type='button' >Lets Play Game !</a>
            </div>
            <div className="concept">
              <img src="https://www.mothermag.com/wp-content/uploads/2015/09/ChildrenMuseums_MotherMag.jpg" alt="Lines and Patterns" />
              <a className='button' href='https://kids.nationalgeographic.com/' type='button' >Lets Play Game !</a>
              <p>Lines and patterns</p>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Logical reasoning enhancing tools</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="history-element">
              <img src="https://3.bp.blogspot.com/_7dMU1jlDrvo/TTc1IrdL3RI/AAAAAAAAASg/JHsb1t_hZes/s1600/Picture+007.jpg" />
              <p>Wire frames joined in together in one another</p>
            </div>
            <div className="history-element">
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/63/a3/a4/fun-with-water.jpg?w=1200&h=1200&s=1" />
              <p>Lab demonstration of natural phenomenons</p>
            </div>
            <div className="history-element">
              <img src="https://m.media-amazon.com/images/I/51gYK5+m80L.jpg" alt="Famous Artists" />
              <p>Stoic doesn't control the world, but they control always how they respond to the world</p>
            </div>
            <div className="history-element">
              <img src="https://cdn.kastatic.org/ka-content-images/857e2efaf602e6e53e7f91af46a0b944bfb9bd82.jpg" alt="Famous Artists" />
              <p>Artifact from Harappa and Mohenjodaro</p>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Essential Elements of Art History for Children</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="history-element">
              <img src="src\assets\monalisa.jpg" alt="Famous Artists" />
              <p>'Monalisa' is world famous painting of Leonardo-Da-Vince</p>
            </div>
            <div className="history-element">
              <img src="src\assets\piramid.jpg" alt="Art Movements" />
              <p>Pyramids are most important reigns of egypts</p>
            </div>
            <div className="history-element">
              <img src="src\assets\culture.jpg" alt="Art from Cultures" />
              <p>Dance plays tramendously important role in indian culture</p>
            </div>
            </IonCardContent>
            </IonCard>

      </div>
    </IonContent>
  );
};

export default Tab2;
