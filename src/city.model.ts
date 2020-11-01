import { Field, ObjectType } from '@nestjs/graphql';
import { Country } from './country.model';

@ObjectType()
export class City {
  @Field()
  name: string;

  countryCode: string;

  @Field(() => Country, { nullable: true })
  country?: Country;
}
