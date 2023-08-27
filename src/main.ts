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
  @ViewChild('lightbox', { static: false }) lightbox?: ElementRef;
  @ViewChild('modal', { static: false }) modal?: ElementRef;
  modalOpen: boolean = false;
  showModal: boolean = false;
  loader: boolean = false;

  openModal() {
    this.modalOpen = true;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.loader = true;
    this.lightbox!.nativeElement.classList.add('hide-lightbox');
    this.modal!.nativeElement.classList.add('hide-modal');
    setTimeout(() => {
      this.modalOpen = false;
      this.loader = false;
    }, 1000);
  }
}

bootstrapApplication(App);
