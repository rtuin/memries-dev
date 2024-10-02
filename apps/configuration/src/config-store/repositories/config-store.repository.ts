export default abstract class ConfigStoreRepository {
  abstract addBaseDirectory(path: string): Promise<void>;

  abstract getBaseDirectories(): Promise<string[]>;
}
