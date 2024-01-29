import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import {NgIf} from '@angular/common';
import { RouterLink } from '@angular/router';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [AngularFireModule, AngularFireAuthModule, AngularFireStorageModule, AngularFirestoreModule, AngularFireDatabaseModule, NgIf, RouterLink],
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss'
})
export class VerifyEmailComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() {
  }
}
