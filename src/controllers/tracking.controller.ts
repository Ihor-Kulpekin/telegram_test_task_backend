import { Controller, Get } from "@nestjs/common";
import { SubscribeMessage } from "@nestjs/websockets";

@Controller('/tracking')
export class TrackingController {

  public async getTracking(){
      return [
        {
          active: true, title: 'Cool', date: new Date()
        }
      ]
  }
}
