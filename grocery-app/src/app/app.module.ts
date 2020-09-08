import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
// import { HttpInterceptorService } from './_services/http/http-interceptor.service'
import { JwtInterceptor } from './_helpers'
import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LoginComponent } from './views/login/login.component';
// import { LogoutComponent } from './views/logout/logout.component';
// import { MenuComponent } from './components/template/menu/menu.component';
import { AlertComponent } from './_components/alert.component';
import { HomeComponent } from './home';
// import { LoginComponent } from './account/login.component';

// import { FormsModule } from '@angular/forms'

// import { EmployeeCrudComponent } from './views/employee-crud/employee-crud.component';
// import { HeaderComponent } from './components/template/header/header.component';
// import { FooterComponent } from './components/template/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,  
    AlertComponent,         
    HomeComponent,
    // LoginComponent,
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,    
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
