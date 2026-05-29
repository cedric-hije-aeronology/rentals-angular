import { Component, input } from '@angular/core';

@Component({
  selector: 'app-rental-item',
  imports: [],
  templateUrl: './rental-item.html',
  styleUrl: './rental-item.scss',
})
export class RentalItem {
  rental = input<Rental>()
}
