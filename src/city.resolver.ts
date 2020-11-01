import DataLoader from 'dataloader';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Loader } from 'nestjs-dataloader';
import { City } from './city.model';
import { Country } from './country.model';
import { CityService } from './city.service';
import { CountryLoader } from './country.loader';

@Resolver(() => City)
export class CityResolver {
  constructor(private readonly cityService: CityService) {}

  @ResolveField(() => [Country])
  async country(
    @Parent() city: City,
    @Loader(CountryLoader.name)
    countryLoader: DataLoader<string, Country>,
  ): Promise<Country> {
    return countryLoader.load(city.countryCode);
  }

  @Query(() => [City])
  async getCities(): Promise<City[]> {
    return this.cityService.getCities();
  }
}
