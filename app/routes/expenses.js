import Route from '@ember/routing/route';

export default class ExpensesRoute extends Route {
  async model() {
    const expensesResponse = await fetch('http://localhost:8000/expenses/');
    const expenses = await expensesResponse.json();

    return expenses.expenses;
  }
}
