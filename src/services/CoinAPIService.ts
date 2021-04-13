import fetch from 'node-fetch';

class CoinAPIService {
  private url = 'https://rest.coinapi.io/v1';

  public async getExchanges() {
    try {
      const response = await fetch(`${this.url}/exchanges`, {
        headers: {
          'Content-Type': 'application/json',
          'X-CoinAPI-Key': 'ACC1AA8B-F537-4DF0-82D7-2279DB6D59E5'
        }
      });

      if (response.status === 200) {
        return await response.json();
      }
    } catch (error) {
      console.error(`Fetch request is failed. Error: ${error}`);
    }
  }

  public async getExchangeById(exchange_id: string) {
    try {
      const response = await fetch(`${this.url}/exchanges/${exchange_id}`, {
        headers: {
          'Content-Type': 'application/json',
          'X-CoinAPI-Key': 'ACC1AA8B-F537-4DF0-82D7-2279DB6D59E5'
        }
      });

      if (response.status === 200) {
        return await response.json();
      }
    } catch (error) {
      console.error(`Fetch request is failed. Error: ${error}`);
    }
  }
}

export const coinAPIService = new CoinAPIService();
