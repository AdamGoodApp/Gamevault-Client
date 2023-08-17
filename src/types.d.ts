interface Game {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  entity_version: number;
  rawg_id: number;
  title: string;
  rawg_title: string;
  version: string;
  release_date: Date;
  rawg_release_date: Date;
  cache_date: Date;
  file_path: string;
  size: string;
  description: string;
  box_image: BoxImage;
  background_image: null;
  website_url: string;
  metacritic_rating: number;
  average_playtime: number;
  early_access: boolean;
  type: string;
  progresses: any[];
  publishers: Genre[];
  developers:  any[];
  tags: Genre[];
  genres: Genre[];
}

interface BoxImage {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  entity_version: number;
  source: string;
  path: string;
  mediaType: string;
  last_accessed_at: Date;
}

interface Genre {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  entity_version: number;
  rawg_id: number;
  name: string;
}

interface Links {
  current: string;
}

interface Meta {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  sortBy: Array<string[]>;
}