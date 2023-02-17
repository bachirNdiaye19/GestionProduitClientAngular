import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  public title = "Listes des Hotels :"
   
  public hotels: any[] = [
    {
      IdHotel:1,
      NomHotel:'Teroubi',
      Lieu:'Dakar',
      imageUrl:'assets/hotel1.jpg'
    },
    {
      IdHotel:2,
      NomHotel:'Kairaba',
      Lieu:'Saly',
      imageUrl:'assets/hotel2.jpg'
    },
    {
      IdHotel:3,
      NomHotel:'Gaparou-Gui',
      Lieu:'Gaparou',
      imageUrl:'assets/hotel3.jpg'
    },
    {
      IdHotel:4,
      NomHotel:'Nelwe',
      Lieu:'Saly',
      imageUrl:'assets/hotel4.jpg'
    }
  ]
}
