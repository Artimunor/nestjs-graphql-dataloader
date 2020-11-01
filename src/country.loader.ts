import { Injectable } from '@nestjs/common';
import DataLoader from 'dataloader';
import { NestDataLoader } from 'nestjs-dataloader';
import { Country } from './country.model';
import { CountryService } from './country.service';

@Injectable()
export class CountryLoader implements NestDataLoader<string, Country> {
  constructor(private readonly countryService: CountryService) {}

  generateDataLoader(): DataLoader<string, Country> {
    return new DataLoader<string, Country>((keys) =>
      this.countryService.getCountryByCode(keys),
    );
  }
}
