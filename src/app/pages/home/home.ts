import { Component, inject } from '@angular/core';
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

  rentals = toSignal(
    this.rentalService.getRentals(),
    { initialValue : []}
  )

}
