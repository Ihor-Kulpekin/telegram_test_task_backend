import { Module } from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import { ConfigService } from "@nestjs/config";
import { ConfigurationModule } from "../configuration/configuration.module";


@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigurationModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGODB_URL'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService]
    })
  ]
})
export class DatabaseModule {}
