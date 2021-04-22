import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Usuario{
  nombre: string;
  correo: string;
  password: string;
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  
  formularioCreado: FormGroup;
  esNuevo: boolean = true;
  usuarios: Array<Usuario> = new Array<Usuario>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.crearFormulario()
  }

  crearFormulario()
  {
    this.formularioCreado = this.formBuilder.group({
      nombre: ['Ricardo', Validators.required],
      correo: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8)
      ])]
    })
  }

  agregar()
  {
    this.usuarios.push(this.formularioCreado.value as Usuario)
    this.formularioCreado.reset()
  }

  editarUsuario(posicion: number)
  {

    this.formularioCreado.setValue({
      nombre: this.usuarios[posicion].nombre,
      correo: this.usuarios[posicion].correo,
      password: this.usuarios[posicion].password
    })

    this.esNuevo = false;
  }

}
