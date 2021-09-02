import { GazetteItem } from './item.entity';

export type GazetteCategory = {
  category_name: string;
  count: number;
  pageList: string;
  list: GazetteItem[] | null;
  category_order: string;
};
