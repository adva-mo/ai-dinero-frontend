import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ENV from 'ai-dinero-frontend/config/environment';

const apiUrl = ENV.API_URL;

export default class CategoriesController extends Controller {
  @tracked categoryName = '';
  @tracked externalId = '';

  @action
  async createCategory(event) {
    event.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/categories/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.categoryName,
          external_id: this.externalId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create category');
      }

      this.categoryName = '';
      this.externalId = '';

      this.send('reloadModel');
    } catch (error) {
      console.error('Error creating category:', error);
    }
  }

  @action
  async reloadModel() {
    await this.model.reload();
  }
}
