export interface Meta {
    operation: string;
    requestId: string;
    serviceTimeMs: number;
  }
  
  export interface Image {
    height: number;
    width: number;
    url: string;
  }
  
  export interface Result {
    id: string;
    image?: Image;
    title: string;
    titleType: string;
    year?: number;
    episode?: number;
    season?: number;
  }
  
  export interface ApiResponse {
      paginationKey: string;
      results: Result[];
      totalMatches: number;
      type: string;
      meta: Meta;
  }
  