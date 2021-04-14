import fetch from 'node-fetch';

class CoinAPIService {
  private url = 'https://rest.coinapi.io/v1';

  public async getExchanges() {
    try {
      const response = await fetch(`${this.url}/exchanges`, {
        headers: {
          'Content-Type': 'application/json'
          /* 'X-CoinAPI-Key': your key */
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
          'Content-Type': 'application/json'
          /* 'X-CoinAPI-Key': your key */
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
