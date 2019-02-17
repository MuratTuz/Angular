import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {remember: false};

  constructor(public dialogRef: MdDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit(x) {
    console.log('User: ', this.user);
    this.dialogRef.close();
    console.log(x);
  }

}
