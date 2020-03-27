import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuariaAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.nome == "abc" && usuario.senha == "123"){
      this.usuariaAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(["/"]);
    }
    else{
      this.usuariaAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }

  }
}
