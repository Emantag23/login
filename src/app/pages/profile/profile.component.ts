import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUserProfile().subscribe(user => this.user = user);
  }
}
