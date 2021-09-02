import { Service } from 'typedi';
import { ApiService } from './api.service';

@Service()
export class AppService {
  constructor(private readonly apiService: ApiService) {}

  async bootstrap() {
    const categories = await this.apiService.getDailyList();

    categories.forEach((category) => console.log(category));
  }
}
