export interface BaseDirectory {
  path: string;
}

export interface WatchDirectory extends BaseDirectory {
  base: BaseDirectory;
  path: string;
}
