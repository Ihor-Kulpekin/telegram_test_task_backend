import { Module } from '@nestjs/common';
import { DatabaseModule } from "./database/database.module";
import { EventsModule } from "./events/events.module";
import { TrackingModule } from "./modules/tracking/tracking.module";

@Module({
  imports: [DatabaseModule, EventsModule, TrackingModule]
})
export class AppModule {}
