export interface IResponse {
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}
