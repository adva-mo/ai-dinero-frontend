import ENV from 'ai-dinero-frontend/config/environment';
import Route from '@ember/routing/route';

const apiUrl = ENV.API_URL;

export default class ExpensesRoute extends Route {
  async model() {
    const expensesResponse = await fetch(`${apiUrl}/expenses/`);
    const expenses = await expensesResponse.json();

    return expenses.expenses;
  }
}
