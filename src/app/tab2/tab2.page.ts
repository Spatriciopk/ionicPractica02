import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private actionSheetCtrl: ActionSheetController) {}
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Seleccione',
      
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Compartir',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Favoritos',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    actionSheet.present();
  }
}
