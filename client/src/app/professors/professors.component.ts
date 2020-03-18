import { Component, OnInit } from '@angular/core';
import { Professor } from '../common/models/professor.model';
import { ProfessorService } from '../common/services/professor.service';

@Component({
  selector: 'su-professors',
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
