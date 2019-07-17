import { Component, OnInit } from '@angular/core';
import { FeatureElement } from 'src/app/Models/featureElementModel/feature-element';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.css']
})
export class FeatureSectionComponent implements OnInit {


  public featureElements: FeatureElement[] = [

    {
      title : 'Crie uma conta',
      description : 'crie uma conta de estagiário, e tenha a sua disposição propostas profissionais em mais de 100 empresas',
      linkTitle : 'criar conta',
      link  : `/sign`
    },

    {
      title : 'Procure por estágios',
      description : 'Procure por uma ou mais empresas onde queira estagear e inscreva-te para um estágio profissional',
      linkTitle : 'Encontrar estágios',
      link  : `/sign`
    },

    {
      title : 'Começe a trabalhar',
      description : 'Trabalhe em requisitos, impressione o seu supervisor e faça algum dinheiro em estágios remunerados',
      linkTitle : 'Saiba Mais',
      link  : `/sign`
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
