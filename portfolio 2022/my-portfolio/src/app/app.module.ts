import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderPadreComponent } from './components/header-padre/header-padre.component';
import { RigthComponent } from './components/rigth/rigth.component';
import { ColorOscuroDirective } from './color-oscuro.directive';
import { ValidarFormularioPipe } from './pipes/validar-formulario.pipe';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FirstBodyComponent } from './components/first-body/first-body.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ErrorTailorModule } from '@ngneat/error-tailor';
import { HojaDeVidaComponent } from './components/hoja-de-vida/hoja-de-vida.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { YourProfileComponent } from './components/your-profile/your-profile.component';
import { MisSeguidoresComponent } from './components/mis-seguidores/mis-seguidores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPadreComponent,
    RigthComponent,
    ColorOscuroDirective,
    ValidarFormularioPipe,
    FormularioComponent,
    FirstBodyComponent,
    HojaDeVidaComponent,
    YourProfileComponent,
    MisSeguidoresComponent,
    
  ],
  imports: [
    // MatCardModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'This field is required',
          minlength: ({ requiredLength, actualLength }) => 
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
   ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
