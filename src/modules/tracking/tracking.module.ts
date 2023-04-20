import { Module } from "@nestjs/common";
import { TrackingController } from "../../controllers/tracking.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { TrackingModel, TrackingSchema } from "../../schemas/tracking/tracking.schema";
import { TrackingService } from "../../services/tracking/tracking.service";
import { EventsGateway } from "../../events/events.gateway";

@Module({
  imports: [MongooseModule.forFeature([{ name: TrackingModel.name, schema: TrackingSchema }])],
  controllers: [TrackingController],
  providers: [TrackingService, EventsGateway],
  exports: [TrackingService]
})
export class TrackingModule {}
