import { Inject, Injectable } from '@nestjs/common';
import { FsEvent } from '../events/fs.event';
import { MessagingProducer } from '../producers/messaging.producer';

@Injectable()
export class FsEventProducerService {
  constructor(
    @Inject('MessagingProducer')
    private readonly messagePublisher: MessagingProducer
  ) {}

  async publishEvent(event: FsEvent): Promise<void> {
    try {
      await this.messagePublisher.publish('fs_events', {
        key: event.path,
        value: JSON.stringify(event),
      });

      console.log(`Event published: ${event.type} - ${event.path}`);
    } catch (error) {
      console.error('Error publishing event:', error);
    }
  }
}
