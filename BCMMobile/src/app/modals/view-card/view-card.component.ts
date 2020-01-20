import {Component, OnInit, NgModule, Input} from '@angular/core';
import {ModalController, AlertController, LoadingController} from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {isNullOrUndefined} from 'util';
import {CrudService} from 'src/app/shared/services/crud.service';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/app/enviroments';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss'],
})
export class ViewCardComponent implements OnInit 
{
  @Input() card;
  public picture;
  constructor (
    private modalController: ModalController,
    private loadingController: LoadingController,
  ) 
  {
  }

  ngOnInit(): void 
  {
    if(!isNullOrUndefined(this.card.businessCardUrl)){
      this.picture = `${ environment.file_url }${ this.card.businessCardUrl }`;
    }
  }

  public submit()
  {
    this.dismissModal();
  }

  private async dismissModal()
  {
    await this.modalController.dismiss();
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
}
