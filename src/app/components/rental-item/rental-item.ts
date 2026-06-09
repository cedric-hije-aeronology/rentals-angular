import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-rental-item',
  imports: [],
  templateUrl: './rental-item.html',
  styleUrl: './rental-item.scss',
})
export class RentalItem {
  rental = input.required<Rental>()

  delete = output<number>();
  save = output<Rental>();

  onDelete = () => {
    this.delete.emit(this.rental().id);
  }

  onSave = () => {
    this.save.emit(this.rental());
  }
}
