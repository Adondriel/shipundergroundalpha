import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor.model';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss']
})
export class ProfessorsComponent implements OnInit {
  public professors: Professor[];

  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
    this.professorService.getProfessors().subscribe((profs) => {
      this.professors = profs.sort((a, b) => a.lastName ? a.lastName.localeCompare(b.lastName) : 1);
    });
  }

}
