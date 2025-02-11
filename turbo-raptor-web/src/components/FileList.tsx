import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { makeAutoObservable } from "mobx";
import { Card } from "../components/ui/Card.tsx";
import { Button } from "../components/ui/Button.tsx";
import clsx from "clsx";

class StockDataStore {
  stockList: string[] = [];
  selectedItem: string | null = null;
  loading: boolean = false;
  error: string | null = null; // ✅ Explicitly allowing both null and string

  constructor() {
    makeAutoObservable(this);
  }

  async fetchStockData() {
    this.loading = true;
    try {
      const response = await fetch("http://localhost:8000/api/files/stockdata/list");
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();
      if (!result || !Array.isArray(result.data)) {
        throw new Error("Invalid data format");
      }
      this.stockList = result.data;
      this.error = null; // ✅ Reset error on success
    } catch (err) {
      this.error = err instanceof Error ? err.message : "An unknown error occurred";
    } finally {
      this.loading = false;
    }
  }

  selectItem(item: string) {
    this.selectedItem = item;
  }
}

const stockDataStore = new StockDataStore();

const StockList = observer(() => {
  useEffect(() => {
    stockDataStore.fetchStockData();
  }, []);

  if (stockDataStore.loading) return <p>Loading...</p>;
  if (stockDataStore.error) return <p className="text-red-500">{stockDataStore.error}</p>;

  return (
    <Card className="p-4 w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Stock Data List</h2>
      <div className="space-y-2">
        {Array.isArray(stockDataStore.stockList) && stockDataStore.stockList.map((item) => (
          <Button
            key={item}
            onClick={() => stockDataStore.selectItem(item)}
            className={clsx("w-full text-left", {
              "bg-blue-500 text-white": stockDataStore.selectedItem === item,
              "bg-gray-200": stockDataStore.selectedItem !== item,
            })}
          >
            {item}
          </Button>
        ))}
      </div>
      {stockDataStore.selectedItem && (
        <p className="mt-4 text-sm text-gray-700">
          Selected: <span className="font-bold">{stockDataStore.selectedItem}</span>
        </p>
      )}
    </Card>
  );
});

export default StockList;
