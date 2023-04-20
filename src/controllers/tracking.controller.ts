import { Body, Controller, Post } from "@nestjs/common";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import { ResponseCreateTrackingDto } from "../dto/tracking/response-tracking.dto";
import { CreateTrackingDto } from "../dto/tracking/create-tracking.dto";
import { TrackingService } from "../services/tracking/tracking.service";
import { EventsGateway } from "../events/events.gateway";


@Controller('/tracking')
export class TrackingController {
  constructor(
    private readonly trackingService: TrackingService,
    private readonly eventsGateway: EventsGateway
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create Tracking item' })
  @ApiResponse({type: ResponseCreateTrackingDto})
  public async createTracking(@Body() trackingDto: CreateTrackingDto): Promise<ResponseCreateTrackingDto>{
    const _id = await this.trackingService.createTracking(trackingDto);

    if (_id) {
      await this.eventsGateway.getListTrackings();
    }

    return _id
  }
}
