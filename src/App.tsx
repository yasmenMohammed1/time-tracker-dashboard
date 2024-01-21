import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Product } from "./models/product";
import Products from "./pages/ProductsPage";
import './App.css'

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isPending, error, data } = useQuery<null | Product[]>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products?limit=10").then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {data ? <Products products={data} /> : 'loading'}

    </>
  );
}
