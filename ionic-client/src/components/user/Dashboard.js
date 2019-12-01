import React from 'react';
import {
  IonPage,
  IonTitle,
  IonContent,
  IonCard,
  IonList,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import {lists, newItems} from "../../state";
import routes, {routeWithParams} from "../../conf/routes";

class Dashboard extends React.Component {
  render() {
    return(
      <IonPage className="bl-page">
        
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol size="12" size-sm="6">
              {(newItems.length > 0) ? (
                <IonCard>
                <IonTitle className="bl-card-padding">New Drops</IonTitle>
                <IonList>
                  {
                    newItems.map((item) => {
                      return (
                        <IonItem key={item.id}>
                          <IonLabel>
                            <p>From: {item.from}</p>
                            <h4>{item.message}</h4>
                          </IonLabel>
                        </IonItem>
                      );
                    })
                  }
                </IonList>
                </IonCard>
              ) : null }
              </IonCol>

              <IonCol size="12" size-sm="6">
                <IonCard>
                  <IonGrid>
                    <IonRow>
                      <IonTitle className="bl-card-padding">Your Buckets</IonTitle>
                      <IonButton color="success" strong type="button"
                                className="ion-float-right ion-margin-end ion-margin-bottom bl-new-list-btn">
                        + New
                      </IonButton>
                    </IonRow>
                    <IonList>
                      {
                        lists.map((list, index) => {
                          return (
                            <IonItem routerLink={routeWithParams(routes.lists.detail, index)} detail key={index}>
                              <IonLabel>
                                <p>{list.name}</p>
                              </IonLabel>
                              <IonLabel slot="end">
                                <p>
                                  {
                                    (list.items.length > 0) ? 
                                    (list.items.length === 1 ? list.items.length + ' drop' : list.items.length + ' drops') : 
                                    'No drops'
                                  }
                                </p>
                              </IonLabel>
                            </IonItem>
                          );
                        })
                      }
                    </IonList>
                  </IonGrid>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
};

export default Dashboard;