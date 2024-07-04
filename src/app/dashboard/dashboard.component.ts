import { Component } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router, private route: ActivatedRoute){

  }


  irPregunta2(){
    this.router.navigate(['pregunta2'], {relativeTo: this.route});
  }

  irPregunta3(){
    this.router.navigate(['pregunta3'], {relativeTo: this.route});
  }

}
