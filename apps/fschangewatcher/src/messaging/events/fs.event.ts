export interface FsEvent {
  type: string;
  path: string;
  metadata?: unknown;
}
