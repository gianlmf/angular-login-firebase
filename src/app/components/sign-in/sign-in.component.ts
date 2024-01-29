import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [AngularFireModule, AngularFireAuthModule, AngularFireStorageModule, AngularFirestoreModule, AngularFireDatabaseModule, RouterLink, RouterLinkActive],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})

export class SignInComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { }
}
