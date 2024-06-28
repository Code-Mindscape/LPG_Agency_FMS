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

const stockReturns = [
  {
      ReturnId: "ret12345678",
      ProductId: "prod12345678",
      Quantity: 10,
      ReturnReason: "Damaged",
      ReturnDate: getFormattedDate()
  },
  {
      ReturnId: "ret87654321",
      ProductId: "prod87654321",
      Quantity: 5,
      ReturnReason: "Expired",
      ReturnDate: getFormattedDate()
  },
  {
      ReturnId: "ret23456789",
      ProductId: "prod23456789",
      Quantity: 20,
      ReturnReason: "Overstock",
      ReturnDate: getFormattedDate()
  },
  {
      ReturnId: "ret98765432",
      ProductId: "prod98765432",
      Quantity: 8,
      ReturnReason: "Damaged",
      ReturnDate: getFormattedDate()
  },
]
  export function ReturnsTable() {
    return (
      <Table className="overflow-auto w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>ReturnId</TableHead>
            <TableHead>ProductId</TableHead>
            <TableHead>Qty</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="flex items-center justify-end">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-red">
          {stockReturns.map((product) => (
            <TableRow key={product.Date}>
              <TableCell className={`${product.Stock === 0 ? "bg-red-100": ""}`}>
                <div className="avatar w-[35px] h-[35px] bg-zinc-400 rounded-lg">
                {product.ProductImage}
                </div>
                </TableCell>
              <TableCell className={`${product.Stock === 0 ? "bg-red-100": ""}`}>{product.ReturnId}</TableCell>
              <TableCell className={`${product.Stock === 0 ? "bg-red-100": ""}`}>{product.ProductId}</TableCell>
              <TableCell className={`${product.Stock === 0 ? "bg-red-100": ""}`}>{product.Quantity}</TableCell>
              <TableCell className={`${product.Stock === 0 ? "bg-red-100": ""}`}>{product.ReturnReason}</TableCell>
              <TableCell className={`${product.Stock === 0 ? "bg-red-100": ""}`}>{product.ReturnDate}</TableCell>
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
  