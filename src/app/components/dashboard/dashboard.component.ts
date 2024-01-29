import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { NgIf } from '@angular/common';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AngularFireModule, AngularFireAuthModule, AngularFireStorageModule, AngularFirestoreModule, AngularFireDatabaseModule, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit(): void {}
}
