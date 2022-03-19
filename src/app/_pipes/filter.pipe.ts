import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterInput: string, propName: string): any {
    //ignore
    if(value.length === 0 || filterInput === ''){
      return value;
    }
    //process filtering
    const resultArray = [];
    for(const item of value){
    
      if(item[propName] === filterInput){
        resultArray.push(item)
      }
      return resultArray;
    }
  }

}
