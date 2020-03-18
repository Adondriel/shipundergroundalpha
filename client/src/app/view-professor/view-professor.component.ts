import { Component, OnInit } from '@angular/core';
import { Professor } from '../common/models/professor.model';
import { ProfessorService } from '../common/services/professor.service';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../common/services/comment.service';
import { Comment } from '../common/models/comment.model';

@Component({
  selector: 'su-view-professor',
  templateUrl: './view-professor.component.html',
  styleUrls: ['./view-professor.component.scss']
})
export class ViewProfessorComponent implements OnInit {

  public professor: Professor;
  public comments: Comment[];

  constructor(
    private professorService: ProfessorService,
    private commentService: CommentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.info(this.route.snapshot);
    this.professorService.getProfessor(this.route.snapshot.params.id).subscribe((prof) => {
      this.professor = prof;
      this.getComments();
    });
  }

  getComments() {
    this.commentService.getComments(this.professor.id).toPromise().then((comments) => {
      console.info(comments);
      this.comments = comments;
    });
  }
}
