import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [AngularFireModule, AngularFireAuthModule, AngularFireStorageModule, AngularFirestoreModule, AngularFireDatabaseModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit{
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { }
}
