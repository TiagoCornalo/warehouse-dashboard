import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tableData } from "./mockedData";


const TableStock = () => {

  const getStockStatusClass = (stockStatus: string): string => {
    switch(stockStatus) {
      case 'In Stock':
        return 'bg-green-500';
      case 'Low Stock':
        return 'bg-yellow-500';
      case 'Out of Stock':
        return 'bg-red-500';
      default:
        return '';
    }
  }

  return (
    <Table className="mt-[2rem]">
      <TableCaption>Inventory Stock Status</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Stock</TableHead>
          <TableHead className="text-right">Minimum Required</TableHead>
          <TableHead className="text-right">Last Update</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((item) => (
          <TableRow key={item.id} className={getStockStatusClass(item.stockStatus)}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell className="text-right">{item.stock}</TableCell>
            <TableCell className="text-right">{item.minimumRequired}</TableCell>
            <TableCell className="text-right">{item.lastUpdate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}></TableCell>
          <TableCell className="text-right">Total Items: {tableData.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default TableStock