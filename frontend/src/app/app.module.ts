import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackupsComponent } from './backups/backups.component';
import { BackupCardComponent } from './backup-card/backup-card.component';
import { BackupFormComponent } from './backup-form/backup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BackupsComponent,
    BackupCardComponent,
    BackupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
