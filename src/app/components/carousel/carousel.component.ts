import { Component, OnInit } from '@angular/core';

interface DataImage {
  imgUrl: string,
  description: string
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  dataImage: DataImage[] = [];

  constructor() { }

  ngOnInit(): void {
    this.dataImage = [
      { imgUrl: '../../../assets/results/1.jpeg', description: 'Descripción 1' },
      { imgUrl: '../../../assets/results/2.jpeg', description: 'Descripción 2' },
      { imgUrl: '../../../assets/results/3.jpeg', description: 'Descripción 3' },
      { imgUrl: '../../../assets/results/4.jpeg', description: 'Descripción 4' },
      { imgUrl: '../../../assets/results/5.jpeg', description: 'Descripción 5' },
    ];
  }

}
