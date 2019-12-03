import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponent } from './components/file/file.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { WordComponent } from './components/word/word.component';
import { SynonymsListComponent } from './components/synonyms-list/synonyms-list.component';

@NgModule({
  declarations: [   
    FileComponent,
    ControlPanelComponent,
    WordComponent,
    SynonymsListComponent],
  imports: [
    CommonModule
  ],exports:[
    FileComponent,
    ControlPanelComponent,
    WordComponent
  ]
})
export class TextModule { }
