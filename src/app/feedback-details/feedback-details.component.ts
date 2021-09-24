import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.css']
})
export class FeedbackDetailsComponent implements OnInit {

  id!: number;
  feedback: Feedback = new Feedback;

  constructor(private route: ActivatedRoute, private router: Router, 
    private feedbackService: FeedbackService) { }


  ngOnInit() {
    this.feedback = new Feedback();
    this.id = this.route.snapshot.params['id'];
    this.feedbackService.viewFeedback(this.id)
      .subscribe(data => {
        console.log(data)
        this.feedback = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['feedback']);
  }

}