import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackupFormComponent } from './backup-form/backup-form.component';
import { BackupsComponent } from './backups/backups.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: BackupsComponent},
  { path: 'editBackup', component: BackupFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
