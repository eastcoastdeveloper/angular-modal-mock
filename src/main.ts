import 'zone.js/dist/zone';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
})
export class App {
  @ViewChild('modal', { static: false }) modal?: ElementRef;
  @ViewChild('lightbox', { static: false }) lightbox?: ElementRef;
  modalOpen: boolean = false;
  showModal: boolean = false;

  openModal() {
    this.modalOpen = true;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.modal!.nativeElement.classList.add('hide-modal');
    this.lightbox!.nativeElement.classList.add('hide-lightbox');
    setTimeout(() => {
      this.modalOpen = false;
    }, 1500);
  }
}

bootstrapApplication(App);
