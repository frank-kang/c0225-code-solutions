import { ProductCard } from '../components/ProductCard';

export function Dashboard() {
  const [products, setProducts] = useState();
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  return (
    <div className="container">
      <h1 className="text-3xl font-bold">Catalog</h1>
      <hr className="py-1" />
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
            <ProductCard />
          </div>
        ))}
      </div>
    </div>
  );
}
