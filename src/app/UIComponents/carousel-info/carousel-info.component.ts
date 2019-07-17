import { Component, OnInit } from '@angular/core';
import { SlideElement } from 'src/app/Models/slideElementModel/slide-element';

@Component({
  selector: 'app-carousel-info',
  templateUrl: './carousel-info.component.html',
  styleUrls: ['./carousel-info.component.css']
})
export class CarouselInfoComponent implements OnInit {

  public sliderElements: SlideElement[] = [

    {
      image: {
        backgroundImage: 'url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/02/19/15/nasa-at-60-head.jpg)'
      },
      title: 'Começe a sua carreira da maneira correcta',
      linkDescription: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!
      `
    },

    {
      image: {
        backgroundImage: 'url(https://www.in.gr/wp-content/uploads/2018/09/Nasa-Space.jpg)'
      },
      title: 'Faça dinheiro com estágios remunerados',
      linkDescription: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!
      `
    },

    {
      image: {
        backgroundImage: 'url(https://cdnbr1.img.sputniknews.com/images/915/60/9156002.jpg)'
      },
      title: 'Acumule recomendações e experiência',
      linkDescription: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!
      `
    },

    {
      image: {
        backgroundImage: 'url(http://1realahora.com/wp-content/uploads/2017/04/babylon-5-station.jpg)'
      },
      title: 'Trabalhe sem ter que saír de casa',
      linkDescription: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!
      `
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
