import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(){
    return[
      {id: 1, nome: "Game Dev"},
      {id: 2, nome: "Pesca"},
      {id: 3, nome: "Java"}
    ]
  }

  getCurso(id: number){
    let cursos = this.getCursos();
    for (let i=0; i<cursos.length; i++){
      let curso = cursos[i];
      if (curso.id == id){
        return curso;
      }
    }
    return null;
  }

  constructor() { }
}
