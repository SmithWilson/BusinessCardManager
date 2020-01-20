import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {LoadingController, MenuController, ToastController, ModalController, ActionSheetController} from '@ionic/angular';
import {CrudService} from 'src/app/shared/services/crud.service';
import {AddingCardComponent} from 'src/app/modals/adding-card/adding-card.component';
import {OverlayEventDetail} from '@ionic/core';
import {AuthService} from 'src/app/shared/services/auth.service';
import {isNullOrUndefined} from 'util';
import {ViewCardComponent} from 'src/app/modals/view-card/view-card.component';

@Component({
  selector: 'home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit
{

  public cards: any = [];
  constructor (
    private router: Router,
    private crudService: CrudService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private modalController: ModalController,
    private authService: AuthService,
    private actionSheetController: ActionSheetController)
  {
  }

  ngOnInit()
  {
    if (isNullOrUndefined(this.authService.getToken())
      || isNullOrUndefined(this.authService.getAuthHeader()))
    {
      this.presentToast('Не удалось авторизоваться');
      this.router.navigate(['auth']);
      return;
    }

    this.loadCardsData();
  }

  private async presentLoadingWithOptions()
  {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();
  }

  private async presentToast(error: string)
  {
    const toast = await this.toastController.create({
      message: error,
      duration: 4000,
      color: 'primary'
    });
    toast.present();
  }

  private async addingCardModal()
  {
    const modal = await this.modalController.create({
      component: AddingCardComponent
    });

    modal.onDidDismiss().then((detail: OverlayEventDetail) =>
    {
      if (detail !== null)
      {
        this.crudService.post('businessCard', detail.data)
          .subscribe(data =>
          {
            this.cards.push(data);
          },
            error =>
            {
              const err = 'Не удалось добавить визитку';
              this.presentToast(err);
            });
      }
    });
    return await modal.present();
  }

  private async openCardModal(card: any)
  {
    const modal = await this.modalController.create({
      component: ViewCardComponent,
      componentProps: {
        card: card
      }
    });

    return await modal.present();
  }

  private async updatingCardModal(card: any)
  {
    const modal = await this.modalController.create({
      component: AddingCardComponent,
      componentProps: {
        card: card
      }
    });

    modal.onDidDismiss().then((detail: OverlayEventDetail) =>
    {
      if (detail !== null)
      {
        this.crudService.put('businessCard', detail.data)
          .subscribe(data =>
          {
            this.presentToast('Визитка обновлена');
          },
            error =>
            {
              this.presentToast('Не удалось обновить визитку');
            });
      }
    });
    return await modal.present();
  }

  private removeCard(card: any)
  {
    if(!isNullOrUndefined(card)){
      this.crudService.deleteWithBody('businessCard', card)
      .subscribe(data => {
        this.cards = this.cards.filter(x => x.id != card.id);
      },
      error =>
        {
          this.presentToast('Ошибка удаления');
        });
    }
  }

  private async presentActionSheet(event)
  {
    const actionSheet = await this.actionSheetController.create({
      header: 'Выберите действие',
      buttons: [{
        text: 'Открыть',
        handler: () =>
        {
          this.openCardModal(event);
        }
      }, {
        text: 'Изменить',
        handler: () =>
        {
          this.updatingCardModal(event);
        }
      }, {
        text: 'Удалить',
        role: 'destructive',
        handler: () =>
        {
          this.removeCard(event);
          this.presentToast(`Визитка - ${event.firstName} ${event.lastName} удалена`);
        }
      }, {
        text: 'Закрыть',
        role: 'cancel',
        handler: () =>
        {
        }
      }]
    });
    await actionSheet.present();
  }

  private loadCardsData()
  {
    this.presentLoadingWithOptions();
    this.crudService.get('businessCard')
      .subscribe(data =>
      {
        this.cards = data;
        this.loadingController.dismiss();
      },
        error =>
        {
          this.loadingController.dismiss();
          this.presentToast('Упс, ошибка загрузки данных');
        });
  }

}
