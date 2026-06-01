import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  private http = inject(HttpClient);

  getRentals() {
    return this.http.get<Rental[]>('/mock-data/rentals.json')
  }
}
