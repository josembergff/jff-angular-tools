import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jffcurrency'
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number | undefined, displaySymbol: boolean = true, locale: string = 'pt-br', currency: string = 'BRL', minimumFractionDigits: number = 0): string | null {
    if (value) {
      const f = value.toLocaleString(locale, { style: 'currency', currency: currency });
      const f2 = value.toLocaleString(locale, { minimumFractionDigits: minimumFractionDigits });
      if (displaySymbol) {
        return f;
      } else {
        return f2;
      }
    } else {
      return 'n/a';
    }
  }
}
