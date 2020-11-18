import { Backup } from './../model/backup';
import { environment } from './../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackupService {

  constructor(private http: HttpClient) { }

  getBackups(){
    return this.http.get<Backup[]>(environment.apiURL + '/');
  }

  newBackup(newBackup: Backup) {
    return this.http.post(environment.apiURL + '/new', newBackup);
  }

  updateBackup( backupUpdate: Backup) {
    const headers =  new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(environment.apiURL + "/:id" + backupUpdate._id, backupUpdate, {headers});
  }
}