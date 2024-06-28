import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { PencilLine } from 'lucide-react';
  import { Button } from "../ui/button";
  import { Trash } from 'lucide-react';
  
  function getFormattedDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
const products = [
  {
      ProductImage: "image1.jpg",
      Category: "Domestic",
      Size: "12kg",
      SupplierId: "sup12345678",
      Price: 900.00,
      Stock: 700,
      Date: getFormattedDate()
  },
  {
      ProductImage: "image2.jpg",
      Category: "Commercial",
      Size: "16kg",
      SupplierId: "sup87654321",
      Price: 520.00,
      Stock: 200,
      Date: getFormattedDate()
  },
  {
      ProductImage: "image3.jpg",
      Category: "Industrial",
      Size: "20kg",
      SupplierId: "sup23456789",
      Price: 150.00,
      Stock: 0,
      Date: getFormattedDate()
  },
  {
      ProductImage: "image4.jpg",
      Category: "Domestic",
      Size: "14kg",
      SupplierId: "sup98765432",
      Price: 870.00,
      Stock: 600,
      Date: getFormattedDate()
  },
  {
      ProductImage: "image5.jpg",
      Category: "Commercial",
      Size: "18kg",
      SupplierId: "sup1234567890",
      Price: 530.00,
      Stock: 180,
      Date: getFormattedDate()
  },
  {
      ProductImage: "image6.jpg",
      Category: "Industrial",
      Size: "22kg",
      SupplierId: "sup0987654321",
      Price: 140.00,
      Stock: 30,
      Date: getFormattedDate()
  },
  {
      ProductImage: "image7.jpg",
      Category: "Domestic",
      Size: "12kg",
      SupplierId: "sup8765432198",
      Price: 920.00,
      Stock: 750,
      Date: getFormattedDate()
  },
  {
      ProductImage: "image8.jpg",
      Category: "Commercial",
      Size: "16kg",
      SupplierId: "sup5678901234",
      Price: 510.00,
      Stock: 220,
      Date: getFormattedDate()
  },
  {
      ProductImage: "image9.jpg",
      Category: "Industrial",
      Size: "20kg",
      SupplierId: "sup4321098765",
      Price: 160.00,
      Stock: 60,
      Date: getFormattedDate()
  },
  {
      ProductImage: "image10.jpg",
      Category: "Domestic",
      Size: "14kg",
      SupplierId: "sup1234567898",
      Price: 880.00,
      Stock: 680,
      Date: getFormattedDate()
  }
];

  export function ProductsTable() {
    return (
      <Table className="overflow-auto w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>SupplierId</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="flex items-center justify-end">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-red">
          {products.map((product) => (
            <TableRow key={product.Date}>
              <TableCell className={`${product.Stock === 0 ? "bg-red-100": ""}`}>
                <div className="avatar w-[35px] h-[35px] bg-zinc-400 rounded-lg">
                {product.ProductImage}
                </div>
                </TableCell>
              <TableCell className={`${product.Stock === 0 ? "bg-red-100": ""}`}>{product.Category}</TableCell>
              <TableCell className={`${product.Stock === 0 ? "bg-red-100": ""}`}>{product.Size}</TableCell>
              <TableCell className={`${product.Stock === 0 ? "bg-red-100": ""}`}>{product.Stock}</TableCell>
              <TableCell className={`${product.Stock === 0 ? "bg-red-100": ""}`}>{product.Price}</TableCell>
              <TableCell className={`${product.Stock === 0 ? "bg-red-100": ""}`}>{product.SupplierId}</TableCell>
              <TableCell className={`${product.Stock === 0 ? "bg-red-100": ""}`}>{product.Date}</TableCell>
              <TableCell className={`${product.Stock === 0 ? "bg-red-100": ""} flex gap-1 items-center justify-end`}>
                <Button size="icon" variant="outline"><PencilLine size={18} color="grey"/></Button>
                <Button size="icon" variant="destructive"><Trash size={18} color="white"/></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  