import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelect, MatSelectChange } from '@angular/material';
import { FilterItemFactory } from './factory/filter-item.factory';
import { allFilterTypeLabled, FieldType, FilterItem, SelectFilterItem } from './models/filter-item.model';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {

  filterForm: FormGroup;

  initialFilterItems = [...allFilterTypeLabled];
  filterItems: FilterItem[] = [];

  @ViewChild('searchItemSelect')
  searchItemSelect: MatSelect;

  allFieldType = FieldType;

  constructor(private itemsFactory: FilterItemFactory) { }

  ngOnInit() {
    this.filterForm = new FormGroup({});
    this.generateFormGroupFormSearchItems();
  }

  onItemAdd(event: MatSelectChange) {
    this.searchItemSelect.close();
    this.searchItemSelect.value = [];
    const model = event.value[0];
    const newItem = this.itemsFactory.createItem({ type: model.type, key: model.key });
    if (newItem) {
      const itemIndex = this.initialFilterItems.findIndex(el => el.type === model.type);
      if (itemIndex >= 0) {
        const element = this.initialFilterItems[itemIndex];
        this.initialFilterItems.splice(itemIndex, 1, { ...element, hidden: true });
      }
      this.addControlToForm(newItem);
      this.filterItems.push(newItem);
    }
  }

  removeFilterItem(item: FilterItem) {
    this.filterForm.removeControl(item.key);
    this.filterItems = this.filterItems.filter(el => el !== item);
    const itemIndex = this.initialFilterItems.findIndex(el => el.type === item.type);
    if (itemIndex >= 0) {
      const element = this.initialFilterItems[itemIndex];
      this.initialFilterItems.splice(itemIndex, 1, { ...element, hidden: false });
    }
  }

  onSearchSubmit() {
    const formValue = this.filterForm.getRawValue();
    const parameters = this.filterItems.map(item => {
      if (item.value instanceof Array) {
        const selectItem = item as SelectFilterItem;
        const keyValue = formValue[selectItem.key] as Array<any>;
        const parameterValue = selectItem.itemValueKey ? keyValue.map(el => el[selectItem.itemValueKey]) : keyValue;
        return { ...item, listValue: parameterValue };
      }
      return { ...item, value: formValue[item.key] };
    });
    console.log(parameters);
  }

  private generateFormGroupFormSearchItems() {
    this.filterItems.forEach(item => this.addControlToForm(item));
  }

  private addControlToForm(item: FilterItem) {
    if (item) {
      this.filterForm.addControl(item.key, new FormControl(item.value))
    }
  }

}
