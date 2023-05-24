import { Component, Input, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from './mapstyles';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'Bon Cafe';
  @Input() numOfvistors = 2
  flag = false

  private map: google.maps.Map | undefined

  ngOnInit(): void {

  }
  displayInfo() {
    this.flag = true
  }

  createMap(numOfvistor: any) {
    let loader = new Loader({
      apiKey: '.............'
    })
    // Create an info window to share between markers.
    loader.load().then(() => {
      const infoWindow = new google.maps.InfoWindow();

      console.log('loaded gmaps')

      const location = { lat: 21.6621, lng: 39.1738 }
      const divv = document.getElementById("map") as HTMLElement
      this.map = new google.maps.Map(divv, {
        center: location,
        zoom: 20,
        styles: styles
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
        // title: "number of vistors: " +String(this.numOfvistors),
        // label:"hiiii kkkk"
      });

      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent("number of vistors: " + String(numOfvistor));
        infoWindow.open(marker.getMap(), marker);
      });

    })

  }



}
