import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';



@Pipe({
  name: 'customDate'
})
export class CustomDatePipe extends DatePipe implements PipeTransform {

  transform(value: string): any {
    const dateFormat = 'fullDate';
    return super.transform(value,dateFormat);
  }
}
