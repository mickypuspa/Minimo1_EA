import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Backup } from '../model/backup';
import { BackupService } from '../services/backup.service';

@Component({
  selector: 'app-backup-card',
  templateUrl: './backup-card.component.html',
  styleUrls: ['./backup-card.component.css']
})
export class BackupCardComponent implements OnInit {

  @Input()
  backup: Backup;

  @Input()
  backupIndex: number;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  editBackup(backupId: string){
    this.router.navigateByUrl('/editBackup/' + backupId);
  }

}