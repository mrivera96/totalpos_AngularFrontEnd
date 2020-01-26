import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-response-modal',
  templateUrl: './response-modal.component.html',
  styleUrls: ['./response-modal.component.css']
})
export class ResponseModalComponent implements OnInit {

  @Input() modalTitle: string;
  @Input() modalBody: string;
  constructor() { }

  ngOnInit() {
  }

}
