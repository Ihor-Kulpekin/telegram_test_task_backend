import {ApiProperty} from "@nestjs/swagger";
import { IsNotEmpty, IsObject } from 'class-validator';

import { SearchOptions } from "../../common/types/tracking.type";
import { StatusTypes } from "../../common/enums/status-types.enum";

export class CreateTrackingDto {
  @IsNotEmpty()
  @ApiProperty({type: String, default: 'default text'})
  searchText: string;

  @IsObject()
  @IsNotEmpty()
  @ApiProperty({example: {inChannels: false, inChats: true}, default: {inChannels: false, inChats: true}})
  searchOptions: SearchOptions;

  @IsNotEmpty()
  @ApiProperty({type: String, enum: StatusTypes, default: 'Активний'})
  status: string;
}
