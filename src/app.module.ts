import { CityService } from './city.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { GraphQLModule } from '@nestjs/graphql';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DataLoaderInterceptor } from 'nestjs-dataloader';
import { GraphqlConfigService } from './graphql.config';
import { CountryService } from './country.service';
import { CountryLoader } from './country.loader';
import { CityResolver } from './city.resolver';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync({
      useClass: GraphqlConfigService,
    }),
  ],
  providers: [
    CountryService,
    CountryLoader,
    CityResolver,
    CityService,
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
  ],
})
export class AppModule {}
