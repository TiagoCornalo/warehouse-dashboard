import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Badge
} from "@/components";
import { tableData } from "./mockedData";


const TableStock = () => {

  const getStockStatusClass = (stockStatus: string): string => {
    switch(stockStatus) {
      case 'In Stock':
      return 'bg-green-500/75';
    case 'Low Stock':
      return 'bg-yellow-500/75';
    case 'Out of Stock':
      return 'bg-red-500/75';
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
          <TableHead className="text-center">Stock</TableHead>
          <TableHead className="text-center">Minimum Required</TableHead>
          <TableHead className="text-center">Last Update</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">
              {item.id}
              </TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell className="text-center">
            <Badge variant="outline" className={getStockStatusClass(item.stockStatus)}>
              {item.stock}
            </Badge>
              </TableCell>
            <TableCell className="text-center">{item.minimumRequired}</TableCell>
            <TableCell className="text-center">{item.lastUpdate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}></TableCell>
          <TableCell className="text-center">Total Items: {tableData.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default TableStock