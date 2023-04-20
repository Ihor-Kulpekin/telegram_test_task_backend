import { CreateTrackingDto } from "../../dto/tracking/create-tracking.dto";
import { ResponseCreateTrackingDto, ResponseListTrackingDto } from "../../dto/tracking/response-tracking.dto";

export interface ITrackingService {
  getTrackings(query: any): Promise<ResponseListTrackingDto>;
  createTracking(tracking: CreateTrackingDto): Promise<ResponseCreateTrackingDto>
}
