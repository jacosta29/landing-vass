import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations:[
    trigger('wasClicked', [
      transition( '* <=> true', [
        animate('0.9s', keyframes([
          style({ background: '#7C7C7C', color: 'white' }),
          style({ background: '#9E9C9C',color: 'white' }),
          style({ background: '#D4D2D2', color: 'black' }),
          style({ background: 'white', color: 'black', outline: '4px solid #00CDCA' })
        ]))
      ]),
    ]),
    trigger('input', [

    ])
  ]
})
export class FormComponent {

  clicked: any = null;
  isLabelBold = false;
  isInputActive = false;

  form: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required) ,
    email: new FormControl('', [Validators.required, Validators.email]) ,
    empresa: new FormControl('', Validators.required),
    pais: new FormControl('', Validators.required) ,
    telefono: new FormControl('', Validators.required) ,
    mensaje: new FormControl('', Validators.required),
  });

  constructor() {

  }

  sendForm() {
    if (this.form.valid) {
      // Realiza la acción de envío aquí (por ejemplo, una solicitud HTTP).
    } else {
      // Marca los campos como tocados para mostrar los errores.
      this.marcarCamposComoTocados(this.form);
    }
  }

  marcarCamposComoTocados(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.marcarCamposComoTocados(control);
      } else {
        control.markAsTouched();
      }
    });
  }




  onClick() {
    if(this.form.valid){

      this.clicked = !Boolean(this.clicked);
    }
  }

  out(){
    this.clicked = null
  }



}
