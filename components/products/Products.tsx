
import Button from "../ui/Button";

import ProductsList from "./ProductsList";

export default function App() {

  return (
    <div className="w-full mb-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">Our Products</h2>
      <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl m-auto'>
        <ProductsList />
      </div>
      <div className="text-center">
        <Button variant="outline" size="lg" className="mt-8" >Show More</Button>
      </div>
    </div>
  );
}
