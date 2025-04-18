export function ProductCard() {
  return (
    <div>
      <img
        className="object-contain h-72 w-full"
        src="/images/snuggie.jpg"
        alt="a snuggy"
      />
      <div className="flex-auto p-6">
        <h5 className="font-bold mb-3">Snuggie</h5>
        <p className="mb-0 text-gray-600">$9.99</p>
        <p className="h-20 mb-0 overflow-hidden">Some product description</p>
      </div>
    </div>
  );
}
