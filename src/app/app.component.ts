import { Component } from '@angular/core';
import { ChecklistService } from './services/checklist.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { Storage } from '@ionic/storage-angular';
@Component({
 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.scss'],
})
export class AppComponent {
 constructor(private checklistService: ChecklistService,
 private storage: Storage) {
 this.initializeApp();
 }
 async initializeApp() {
 await this.storage.create();
 await this.checklistService.load();
 SplashScreen.hide().catch((err) => {
 console.warn(err);
 });
 StatusBar.setBackgroundColor({ color: '#2dd36f' }).catch((err) => {
  console.warn(err);
});
}
}

