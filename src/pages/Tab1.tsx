import { IonContent, IonAvatar, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader className="cabecalho" collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Apresentação</IonTitle>
          </IonToolbar>
          <IonAvatar>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
        </IonHeader>
        {/* <ExploreContainer name="Teste" /> */}
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Titulo do cartão</IonCardTitle>
        <IonCardSubtitle>Subtitulo do cartão</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Pequena descrição do conteúdo do cartão</IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
