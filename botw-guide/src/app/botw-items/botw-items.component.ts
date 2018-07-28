import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BotwItem } from '../botw-item/botw-item';
import { ItemService } from './botw-items.service';

@Component({
  selector: 'app-botw-items',
  templateUrl: './botw-items.component.html',
  styleUrls: ['./botw-items.component.css'],
  providers: [ItemService]
})
export class BotwItemsComponent implements OnInit {
  item: Observable<BotwItem[]>;
  showGrid = true;

constructor(
  private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.setTitle();
    this.item = this.itemService.item;
  }

  search(term: string) {
    this.itemService.search(term);
  }

}
