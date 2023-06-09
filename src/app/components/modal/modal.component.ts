import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(private modalService: ModalService) {}

  closeModal() {
    this.modalService.isOpenModal.next(false);
  }

  stopProp(event: Event) {
    event.stopPropagation();
  }
}
