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
  selector: 'adding-card',
  templateUrl: './adding-card.component.html',
  styleUrls: ['./adding-card.component.scss'],
})
export class AddingCardComponent implements OnInit 
{
  @Input() card;
  public picture;
  public isUpdate: boolean = false;
  constructor (
    private modalController: ModalController,
    private camera: Camera,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private transfer: FileTransfer,
    private qrScanner: QRScanner
  ) 
  {
  }

  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }

  private pictureOpts = {
    width: 1280,
    height: 1280,
    quality: 85
  }

  private startCamera()
  {
    this.camera.getPicture(this.options).then((imageData) =>
    {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.presentLoadingWithOptions();
      const base64Image = imageData;
      const uploadOpts: FileUploadOptions = {
        fileKey: 'file',
        fileName: base64Image.substr(base64Image.lastIndexOf('/') + 1),
        mimeType: 'image/jpg'
      };
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.upload(base64Image, `${ environment.api_url }image`, uploadOpts)
        .then((data) =>
        {
          this.picture = `${ environment.file_url }${ data.response.replace(new RegExp('"', 'g'), '') }`;
          this.card.businessCardUrl = `${ data.response.replace(new RegExp('"', 'g'), '') }`;
          this.loadingController.dismiss();
        }, (err) =>
        {
          this.loadingController.dismiss();
          this.presentAlert('error', JSON.stringify(err));
        });
    });
  }

  ngOnInit(): void 
  {
    if (isNullOrUndefined(this.card))
    {
      this.card = {};
    } else
    {
      this.isUpdate = true;
    }

    console.log(this.card);
    if(!isNullOrUndefined(this.card.businessCardUrl)){
      this.picture = `${ environment.file_url }${ this.card.businessCardUrl }`;
    }
  }

  public handleFirstNameValue(event)
  {
    this.card.firstName = event.target.value;
  }

  public handleLastNameValue(event)
  {
    this.card.lastName = event.target.value;
  }

  public handleAdressValue(event)
  {
    this.card.adress = event.target.value;
  }

  public handleCompanyValue(event)
  {
    this.card.company = event.target.value;
  }

  public handlePhoneValue(event)
  {
    this.card.phone = event.target.value;
  }

  public submit()
  {
    this.dismissModal();
  }

  private async dismissModal()
  {
    await this.modalController.dismiss(this.card);
  }

  private async presentAlert(title, data)
  {
    const alert = await this.alertController.create({
      header: title,
      subHeader: 'Subtitle',
      message: data,
      buttons: ['OK']
    });

    await alert.present();
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

  public presentQrScanner()
  {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) =>
      {
        if (status.authorized)
        {
          let scanSub = this.qrScanner.scan().subscribe((text: string) =>
          {
            this.presentAlert('QR done', text);
            this.card = JSON.parse(text);

            this.qrScanner.hide();
            scanSub.unsubscribe();
          });

        } else if (status.denied)
        {
          this.qrScanner.openSettings();
        } else
        {
          this.presentAlert('QR error', 'Some error');
        }
      })
      .catch((e: any) => this.presentAlert('QR error', `${JSON.stringify(e)}`));
  }
}
