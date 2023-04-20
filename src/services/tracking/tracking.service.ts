import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { TrackingModel } from "../../schemas/tracking/tracking.schema";
import { Tracking } from "../../common/types/tracking.type";
import { ITrackingService } from "./itracking.service";
import { CreateTrackingDto } from "../../dto/tracking/create-tracking.dto";
import { ResponseCreateTrackingDto, ResponseListTrackingDto } from "../../dto/tracking/response-tracking.dto";
import { StatusTypes } from "../../common/enums/status-types.enum";
import { CommonUtils } from "../../common/common.utils";

@Injectable()
export class TrackingService implements ITrackingService{
  constructor(
    @InjectModel(TrackingModel.name) private trackingModel: Model<Tracking>,
  ) {}

  public async createTracking(tracking: CreateTrackingDto): Promise<ResponseCreateTrackingDto> {
    const formattedTracking = {
      status: StatusTypes.Active,
      date: new Date()
    };

    Object.keys(tracking).forEach((key) => {
      formattedTracking[key] = tracking[key];
    })

    const insertedTracking = await this.trackingModel.create(formattedTracking);

    return {
      _id: insertedTracking?.id,
    };
  }

  public async getTrackings(query: any): Promise<ResponseListTrackingDto> {
    const filters = CommonUtils.getFilters(query);
    const projection = CommonUtils.getOptions(query);

    const items: any = await this.trackingModel.find({...filters}).skip(0).limit(10);
    const totalCount: any = await this.trackingModel.count({...filters});

    return {
      items,
      totalCount
    };
  }
}
