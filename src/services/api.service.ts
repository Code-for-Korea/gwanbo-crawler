import axios from 'axios';
import { Service } from 'typedi';
import { apiConfig } from '../configs/api.config';
import { GazetteList } from '../entities/list.entity';

@Service()
export class ApiService {
  private baseUrl = apiConfig.baseUrl;

  async getDailyList(): Promise<GazetteList[]> {
    const now = new Date();
    const today = this.getDateCode(now);

    const queryString = new URLSearchParams();
    queryString.append('mode', 'daily');
    queryString.append('index', 'gwanbo');
    queryString.append('pQuery_temp', '');
    queryString.append('pageNo', '1');
    queryString.append('listSize', '10000');
    queryString.append('sort', '');
    queryString.append(
      'query',
      `keyword_field_regdate:[${today} TO ${today}] AND unstored_field_keyword:(관보 AND 정호) AND keyword_category_order:(@@ORDER_NUM)`
    );

    const { data } = await axios.post(
      `${this.baseUrl}/SearchRestApi.jsp`,
      queryString
    );

    return data.data;
  }

  private getDateCode(date: Date): string {
    const year = date.getFullYear().toString();
    const month = date.getMonth().toString().padStart(2, '0');
    const day = date.getDay().toString().padStart(2, '0');

    return year + month + day;
  }
}
