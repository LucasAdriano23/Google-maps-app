import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = -19.7508033;
  lng: number = -48.0050033;
  locationChosen = false;

  onChoseLocation(event){
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    console.log("Latitude: ", this.lat);
    console.log("Longitude: ", this.lng);
    this.locationChosen = true;
  }
}
