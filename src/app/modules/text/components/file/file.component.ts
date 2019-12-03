import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TextService } from '../../../../core/services/text-service/text.service';
import { WordFeature } from '../../classes/word-feature/word-feature';
import { Subscription, Observable, of } from 'rxjs';
import { SynonymService } from 'src/app/core/services/synonym-service/synonym.service';


@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  text: WordFeature[];
  synonymsList: string[] = [];
  synonymsSubscription: Subscription;
  wordSubscription: Subscription;
  changeWordSubscription: Subscription;
  loadingSynonymsSubscription: Subscription;
  loading = false;

  constructor(private textService: TextService, private synonymsService: SynonymService) {
  }

  ngOnInit() {
    this.textService.load();
    this.wordSubscription = this.textService.getMock().subscribe(arr => {
      this.text = arr;
    })

    this.loadingSynonymsSubscription = this.synonymsService.isLoading().subscribe(value => {
      this.loading = value;
    })

    this.subscribeToWordChange()
  }


  trackByFn(index, item) {
    return index; 
  }

  ngOnDestroy(): void {
  
    this.synonymsSubscription.unsubscribe();
    this.wordSubscription.unsubscribe();
    this.changeWordSubscription.unsubscribe();
    this.loadingSynonymsSubscription.unsubscribe();
  }

  subscribeToWordChange(): void {
    this.changeWordSubscription = this.synonymsService.getSynonym().subscribe((newWord: string) => {
      let index =this.textService.getSelectedWord().index;
      this.text[index].text = newWord;
    })
  }

  setSelectedWord(item: WordFeature){
    this.textService.setSelectedWord(item);
    this.synonymsSubscription = this.synonymsService.getSynonyms(item.text).subscribe(synonyms => {
      this.synonymsList = synonyms.map(item => {return item.word});
    },err => {
      console.log(err)
    })
  }
}
