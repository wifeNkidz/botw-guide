import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
import { switchMap, startWith, tap, map } from 'rxjs/operators';

import { BotwItem } from '../botw-item/botw-item';
import { BotwItemDataService } from '../services/item-data.service';

@Injectable()
export class ItemService {
  readonly item: Observable<BotwItem[]>;
  private searchTerm = new Subject<string>();

  constructor(
    private title: Title,
    private itemDataService: BotwItemDataService
  ) {
    this.item = this.itemDataService.item.pipe(
      switchMap(item => this.searchTerm.pipe(
        map(term => this.filter(item, term)),
        startWith(item)
      ))
    );
  }

  setTitle() {
    this.title.setTitle('Search for Item');
  }

  search(term: string) {
    this.searchTerm.next(term);
  }

  private filter(item: BotwItem[], value: string) {
    return item.filter(p => value ? p.name.toLowerCase().includes(value.toLowerCase()) : item);
  }
}
