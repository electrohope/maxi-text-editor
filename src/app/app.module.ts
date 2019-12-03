import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FileComponent } from './modules/text/components/file/file.component';
import { ControlPanelComponent } from './modules/text/components/control-panel/control-panel.component';
import { HeaderComponent } from './core/header/header.component';
import { FormsModule } from '@angular/forms';
import { TextService } from './core/services/text-service/text.service';
import { FooterComponent } from './core/footer/footer.component';
import { WordComponent } from './modules/text/components/word/word.component';
import { CoreModule } from './core/core.module';
import { TextModule } from './modules/text/text.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    TextModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
