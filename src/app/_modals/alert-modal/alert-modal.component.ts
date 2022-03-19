import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {
  @Input() message: string;
  @Output() close = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  onClose(){
    this.close.emit(true);
  }

}
