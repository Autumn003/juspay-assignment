import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const topSellingProducts = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
  },
  {
    name: "Half Sleeve  Shirt",
    price: 39.99,
    quantity: 64,
  },
  {
    name: "Lightweight Jacket",
    price: 20.0,
    quantity: 184,
  },
  {
    name: "Marco Shoes",
    price: 79.49,
    quantity: 64,
  },
];

export default function ProductsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-foreground/20 text-xs">
          <TableHead className="min-w-56 text-foreground/40">Name</TableHead>
          <TableHead className="text-foreground/40">Price</TableHead>
          <TableHead className="text-foreground/40">Quantity</TableHead>
          <TableHead className="text-foreground/40">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topSellingProducts.map((product) => (
          <TableRow key={product.name} className="border-0 text-xs">
            <TableCell className="">{product.name}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell className="">
              $
              {new Intl.NumberFormat("en-IN", {
                minimumFractionDigits: 2,
              }).format(product.price * product.quantity)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
