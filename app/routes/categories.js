import ENV from 'ai-dinero-frontend/config/environment';
import Route from '@ember/routing/route';

const api_url = ENV.API_URL;

export default class CategoriesRoute extends Route {
  async model() {
    const categoriesResponse = await fetch(`${api_url}/categories`);
    const data = await categoriesResponse.json();

    return data.categories;
  }
}
