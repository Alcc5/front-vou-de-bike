import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  like: boolean;
  currentRate = 4.14;

  constructor(private ngbActiveModal: NgbActiveModal) { }

  ngOnInit() {
  }
  fechar(wasUpdated?: boolean): void {
    this.ngbActiveModal.close(wasUpdated);
  }
}
