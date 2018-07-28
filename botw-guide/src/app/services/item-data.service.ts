import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { BotwItem } from '../botw-item/botw-item';
import { itemData } from '../../assets/database/items';

@Injectable()
export class BotwItemDataService {
  item: Observable<BotwItem[]>;
  constructor(private http: HttpClient) {
    this.item = this.http.get<BotwItem[]>('/assets/database/item.json').pipe(
      map(item => item.map(p => this.setItem(p))),
      shareReplay(1)
    );
  }

  private setItem(item: BotwItem) {
    item = this.parseId(item);
    item = this.upperCaseName(item);
    return item;
  }

  private parseId(item: BotwItem) {
    if (!item['id']) {
        item['id'] = +item.url.match(/\/(\d+)/)[1];
    }

    return item;
  }

  private upperCaseName(item: BotwItem) {
    item.name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
    return item;
  }
}
