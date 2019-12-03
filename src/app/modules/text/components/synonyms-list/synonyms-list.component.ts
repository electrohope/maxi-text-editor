import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SynonymService } from 'src/app/core/services/synonym-service/synonym.service';

@Component({
  selector: 'app-synonyms-list',
  templateUrl: './synonyms-list.component.html',
  styleUrls: ['./synonyms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SynonymsListComponent implements OnInit {

  @Input() list: string[];
  @Input() loading:boolean;
  constructor(private synonymService: SynonymService) { }

  ngOnInit() {
  }

  setSynonym(synonym){
    this.synonymService.setSynonym(synonym);
  }

}
