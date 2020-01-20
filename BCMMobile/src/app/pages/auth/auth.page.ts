import {Component} from '@angular/core';
import {Router, convertToParamMap} from '@angular/router';
import {CrudService} from 'src/app/shared/services/crud.service';
import {AuthService} from 'src/app/shared/services/auth.service';
import {ToastController, AlertController} from '@ionic/angular';

@Component({
  selector: 'auth',
  templateUrl: 'auth.page.html',
  styleUrls: ['auth.page.scss']
})
export class AuthPage
{

  public state: any;
  public authData: any = {};
  constructor (
    private crudService: CrudService,
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController) {}

  public handleFirstNameValue(event)
  {
    this.authData.firstName = event.target.value;
  }
  public handleLastNameValue(event)
  {
    this.authData.lastName = event.target.value;
  }
  public handleLoginValue(event)
  {
    this.authData.login = event.target.value;
  }
  public handlePasswordValue(event)
  {
    this.authData.password = event.target.value;
  }

  public registration()
  {
    this.crudService.post('profile', this.getParams())
      .subscribe(data =>
      {
        this.login();
      },
        error =>
        {
          const err = 'Такой логин уже существует';
          this.presentToast(err);
        });
  }

  public login()
  {
    this.crudService.post('profile/token', this.getParams())
      .subscribe(data =>
      {
        this.authService.setToken(data.token);
        this.authService.setUserData(data.profileDto);

        window.location.href = '';
      },
      error =>
      {
        this.presentAlert(error.message);
        const err = 'Неверный логин или пароль';
        this.presentToast(err);
      });
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

  private getParams(): Record<string, any>
  {
    return {
      'Password': this.authData.password,
      'ProfileDto': {
        'FirstName': this.authData.firstName,
        'LastName': this.authData.lastName,
        'Login': this.authData.login
      }
    }
  }

  private async presentAlert(error) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: error,
      buttons: ['OK']
    });

    await alert.present();
  }
}
