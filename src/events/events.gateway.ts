import {
  OnGatewayConnection,
  OnGatewayDisconnect, OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from "@nestjs/websockets";
import {Server} from 'socket.io';
import { TrackingService } from "../services/tracking/tracking.service";

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class EventsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly trackingService: TrackingService) {}

  afterInit(server: Server) {
    console.log('WebSocket server initialized');
  }

  handleConnection(client: any, ...args: any[]) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: any) {
    console.log('Client disconnected:', client.id);
  }

  @SubscribeMessage('message')
  public async getListTrackings(): Promise<void> {
    const listTrackings = await this.trackingService.getTrackings({});

    this.server.emit('message', listTrackings)
  }

  public emitEvent(eventName: string): void {
    this.server.emit(eventName);
  }
}
