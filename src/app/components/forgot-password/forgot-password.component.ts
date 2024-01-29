import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [AngularFireModule, AngularFireAuthModule, AngularFireStorageModule, AngularFirestoreModule, AngularFireDatabaseModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})

export class ForgotPasswordComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() {
  }
}
