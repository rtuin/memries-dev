import { Message } from "kafkajs";

export interface MessagingProducer {
  publish(topic: string, message: Message): Promise<void>;
}
