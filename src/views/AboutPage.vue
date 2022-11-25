<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons>
            <ion-back-button :text="getBackButtonText()" default-href="/"></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true">
        <!-- <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">{{ $route.params.id }}</ion-title>
          </ion-toolbar>
        </ion-header> -->
      
        <!-- <div id="container">
          <strong class="capitalize">{{ $route.params.id }}</strong>
          <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        </div> -->

        <div>
            <ion-title>
                DameliaApp <br>
            </ion-title>
            <ul>
                <li>NIM: 041643527</li>
                <li>Nama: Damelia</li>
                <li>UPBJJ: Jakarta</li>
            </ul>
            &copy; Damelia
        </div>

      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonBackButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  
  export default defineComponent({
    name: 'AboutPage',
    data(){
        return{
            getBackButtonText: () => {
                const win = window as any;
                const mode = win && win.ionic && win.ionic.mode;
                return mode === 'ios'?'inbox':'';
            }
        }
    },
    components: {
      IonBackButton,
      IonContent,
      IonHeader,
    //   IonMenuButton,
      IonPage,
      IonTitle,
      IonToolbar
    }
  });
  </script>
  
  <style scoped>
  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
  }
  </style>
  