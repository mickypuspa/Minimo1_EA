import { Component, OnInit } from '@angular/core';
import { Backup } from '../model/backup';
import { BackupService } from '../services/backup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backups',
  templateUrl: './backups.component.html',
  styleUrls: ['./backups.component.css']
})
export class BackupsComponent implements OnInit {

  backups: Backup[];

  constructor(public backupService: BackupService, private router: Router) { }

  ngOnInit(): void {
    this.backupService.getBackups().subscribe (backups => {
      this.backups = backups;
    })
  }
  
  addBackup() {
    this.router.navigateByUrl('/editBackup');
  }
}
