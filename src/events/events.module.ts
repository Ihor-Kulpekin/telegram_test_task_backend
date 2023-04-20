import { forwardRef, Module } from "@nestjs/common";
import { EventsGateway } from "./events.gateway";
import { TrackingModule } from "../modules/tracking/tracking.module";
import { TrackingService } from "../services/tracking/tracking.service";

@Module({
  imports: [TrackingModule],
  providers: [EventsGateway],
  exports: [EventsGateway],
})
export class EventsModule {}
