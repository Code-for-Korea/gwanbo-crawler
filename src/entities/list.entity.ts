import { GazetteCategory } from './category.entity';

export type GazetteList = {
  category_name: string;
  count: number;
  pageList: string;
  list: GazetteCategory[] | null;
  category_order: string;
};
