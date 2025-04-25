import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { EmpresaComponent } from './features/components/empresa/empresa.component';
import { NewsComponent } from './features/components/news/news.component';
import { ContactComponent } from './features/components/contact/contact.component';

export const routes: Routes = [
  {
 path: '', redirectTo: 'home', pathMatch: 'full' 
  },
  {
    path: 'home', component: HomeComponent, 
    },
    {
    path: 'empresa', component: EmpresaComponent, 
    },
    {
        path: 'hacienda', component: HomeComponent, 
    },
    {
        path: 'nutricion', component: HomeComponent, 
    },
    {
        path: 'acopio', component: HomeComponent,
    },
    {
        path: 'agroinsumos', component: HomeComponent,
    },
    {
        path: 'semillero', component: HomeComponent,
    },
    {
        path: 'combustibles', component: HomeComponent,
    },
    {
        path: 'seguros', component: HomeComponent, 
    },
    {
        path: 'noticias', component: NewsComponent, 
    },
    {
        path: 'contacto', component: ContactComponent, 
    },
];


