import { BackupService } from './../services/backup.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-backup-form',
  templateUrl: './backup-form.component.html',
  styleUrls: ['./backup-form.component.css']
})
export class BackupFormComponent implements OnInit {

  backupForm: FormGroup;
  isSubmitted = false;
  backupDate;
  backupid;
  n = 1;

  constructor(public backupService: BackupService, private router: Router, 
              private formBuilder: FormBuilder, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.backupDate = this.route.snapshot.paramMap.get('backupDate');
    this.backupid = this.route.snapshot.paramMap.get('_id');
    this.backupForm = this.formBuilder.group({
      date: ['', [Validators.required, Validators.nullValidator]],
      direction: ['', [Validators.required, Validators.nullValidator]],
      state: ['', [Validators.required, Validators.nullValidator]],
      user: ['', [Validators.required, Validators.nullValidator]]
    });
  }
  get formControls(){
    return this.backupForm.controls;
  }

  submitBackup(): void {
    this.isSubmitted = true;
    if(this.backupForm.invalid){
      return;
    }
    const id = this.backupid;
    const date = this.backupForm.value.date;
    const direction = this.backupForm.value.direction;
    const state = this.backupForm.value.state;
    const error = this.backupForm.value.error;
    const user = this.backupForm.value.user;
    let backup = {'_id': id,'date': date, 'direction': direction, 'state': state, 'error': error, 'user': user};
    console.log("New Backup!: ", backup);
    if(this.backupDate==null) {
      this.backupService.newBackup(backup)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
    } else {
      this.router.navigateByUrl('/');
      }
    }
  }