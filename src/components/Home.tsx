// MuseumGallery.tsx
import React, { useState } from 'react';
import { Data, museumData } from '../assets/data';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSearchbar, IonButton } from '@ionic/react';
import '../style/Home.scss';

const Home: React.FC = () => {

const [museum,setMuseum] = useState<Data[]>(museumData);
const [data, setData] = useState<Data[] >(museum)
const [searchText, setSearchText] = useState<string>('');

const filteredData = museum.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

const handleSearch = () =>{
    setData(filteredData);
}

  return (
    <IonContent className="ion-padding">
    <div className="search-container">
        <IonSearchbar className="search-box" placeholder="Search..." value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <IonButton className="search-button" expand="block" onClick={handleSearch}>Search</IonButton>
    </div>
      <div className="gallery">
        {data.map((artifact) => (
          <IonCard key={artifact.key}>
            <img src={artifact.img} alt={artifact.name} />
            <IonCardHeader>
              <IonCardTitle>{artifact.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{artifact.desc}</p>
            </IonCardContent>
          </IonCard>
        ))}
      </div>
    </IonContent>
  );
};

export default Home;
