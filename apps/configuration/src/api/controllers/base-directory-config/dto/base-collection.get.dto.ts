export default interface BaseCollectionGetDto<T> {
  items: T[];
  _links?: Map<string, unknown>;
}
