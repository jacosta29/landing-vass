import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  infoVass: Array<string> = [
    "Home",
    "Casos de éxito",
    "Somos VASS",
    "Impactos",
    "Método",
    "Tecnologías",
    "Proyectos l+D+i",
    "Insights",
    "Noticias",
    "VASS Research",
    "Canal de denuncias",
    "Contacto",
  ];

  infoTalent: Array<string> = [
    "Talento",
    "#LiveVASS",
    "Beneficios",
    "Planes para ti",
    "Proyectos",
    "Smartworking",
    "Ofertas",
  ]

  companies: Array<string> = [
    "VASS",
    "Neteevo",
    "Serbatic",
    "vdShop",
  ]
}
