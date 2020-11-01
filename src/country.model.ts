import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Country {
  @Field()
  name: string;

  @Field()
  code: string;
}
