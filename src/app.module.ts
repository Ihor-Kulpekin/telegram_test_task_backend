import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from "./database/database.module";
import { EventsModule } from "./events/events.module";
import { TrackingController } from "./controllers/tracking.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, TrackingController],
  providers: [AppService],
})
export class AppModule {}
