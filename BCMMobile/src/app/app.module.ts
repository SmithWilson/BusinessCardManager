import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthService} from './shared/services/auth.service';
import {LocalStorageService} from './shared/services/localStorage.service';
import {SessionService} from './shared/services/session.service';
import {CrudService} from './shared/services/crud.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AddingCardComponent} from './modals/adding-card/adding-card.component';
import {CameraPreview} from '@ionic-native/camera-preview/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import {QRScanner} from '@ionic-native/qr-scanner/ngx';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    AuthService,
    LocalStorageService,
    SessionService,
    CrudService,
    CameraPreview,
    FileTransfer,
    FileTransferObject,
    QRScanner,
    Camera,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
