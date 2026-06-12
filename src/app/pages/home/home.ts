import { Component, inject, signal } from '@angular/core';
import { RentalItem } from "../../components/rental-item/rental-item";
import { RentalService } from '../../services/rental/rental-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [RentalItem],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private rentalService = inject(RentalService);

  rentals = signal<Rental[]>([])
  
  constructor() {
    this.rentalService.getRentals().subscribe(data => {
      this.rentals.set(data);
    });
  }

  deleteRental(id : number) {
    this.rentals.update(items => 
      items.filter(item => item.id !== id)
    )
  }

  saveRental(rental : Rental) {
    this.rentals.update(items =>
      items.map(item => 
        item.id == rental.id ? 
        { ...item, isSaved: !item.isSaved} :
        item
      )
    )
  }

}
