import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackupFormComponent } from './backup-form/backup-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'editBackup', component: BackupFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
