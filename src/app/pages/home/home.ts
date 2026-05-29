import { Component } from '@angular/core';
import { RentalItem } from "../../components/rental-item/rental-item";

@Component({
  selector: 'app-home',
  imports: [RentalItem],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  rentals : Rental[] = [
    {
      id: 1,
      monthly:  8000,
      city: "Cainta",
      province: "Rizal",
      address: "Molave Street, St Joseph Subd",
      barangay: "Santo Domingo",
      description: "1 month advance, 1 month deposit, pets not allowed"
    },
    {
      id: 2,
      monthly:  10000,
      city: "Pasig City",
      province: "Metro Manila",
      address: "Intimate Street, St Joseph Subd",
      barangay: "Rosario",
      description: "1 month advance, 1 month deposit, studio type"
    },
    {
      id: 3,
      monthly:  7500,
      city: "Mandaluyong City",
      province: "Metro Manila",
      address: "Coronado Subd",
      barangay: "Barangka Itaas",
      description: "1 month advance, 1 month deposit, studio type"
    }
  ]

}
