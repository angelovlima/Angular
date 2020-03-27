import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent} from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes = [
  { path: "cursos", component: CursosComponent },
  { path: "naoEncontrado", component: CursoNaoEncontradoComponent },
  { path: "curso/:id", component: CursoDetalheComponent },
]
@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }

//Esse modolo foi criado para cuidar da parte de rotas referente aos cursos,
//Para a criação do mesmo foi copiado o modelo do app-routing.module, porém mantendo apenas rotas referentes a cursos
// alem disso o forRoot de "imports: [RouterModule.forRoot(cursosRoutes)]," foi alterado para forChild
