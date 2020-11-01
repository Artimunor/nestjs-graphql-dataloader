import { Injectable } from '@nestjs/common';
import { City } from './city.model';

@Injectable()
export class CityService {
  public getCities(): City[] {
    return [
      { name: 'Rotterdam', countryCode: 'NL' },
      { name: 'New York', countryCode: 'US' },
      { name: 'London', countryCode: 'UK' },
      { name: 'Amsterdam', countryCode: 'NL' },
    ];
  }
}
