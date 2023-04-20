import {ApiProperty} from "@nestjs/swagger";
import {ObjectId} from "mongodb";
import { Tracking } from "../../common/types/tracking.type";

export class ResponseListTrackingDto {

  @ApiProperty()
  items: Tracking[];

  @ApiProperty()
  totalCount: number;
}

export class ResponseCreateTrackingDto {
  @ApiProperty()
  _id: ObjectId | undefined
}

export class ResponseUpdateTrackingDto {
  @ApiProperty()
  updated: boolean
}

export class ResponseDeleteTrackingDto {
  @ApiProperty()
  deleted: boolean
}

export class ResponseChangeStatusTrackingDto {
  @ApiProperty()
  changed: boolean
}
