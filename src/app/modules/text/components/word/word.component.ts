import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TextService } from '../../../../core/services/text-service/text.service';
import { WordFeature } from '../../classes/word-feature/word-feature';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordComponent implements OnInit {

  @Input() word: WordFeature;
 

  constructor() { }

  ngOnInit() {
  }

  getClass() {
    return this.word.getFeatures();
 }



}
