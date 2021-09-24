import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-add',
  templateUrl: './feedback-add.component.html',
  styleUrls: ['./feedback-add.component.css']
})
export class FeedbackAddComponent implements OnInit {
  feedback: Feedback = new Feedback();
  submitted = false;
  constructor(private feedbackService: FeedbackService,  private router: Router) { }

  ngOnInit() {
  }

  newFeedback(): void {
    this.submitted = false;
    this.feedback = new Feedback();
  }

  save() {
    this.feedbackService.addFeedback(this.feedback).subscribe(data => {
      console.log(data)
      this.feedback = new Feedback();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/Feedback']);
  }
}
