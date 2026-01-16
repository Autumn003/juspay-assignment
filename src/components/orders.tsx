import { useState } from "react";
import { cn, formatDate } from "../lib/utils";
import { orderList } from "./content";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Checkbox } from "./ui/checkbox";
import {
  ArrowUpDown,
  ClipboardPlus,
  Dot,
  Ellipsis,
  ListFilter,
  Plus,
} from "lucide-react";
import Button from "./ui/button";
import SearchButton from "./ui/search-button";

export default function Orders() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  return (
    <div className="flex flex-col gap-7 w-full">
      <p className="text-sm font-semibold">Order List</p>
      <div className="bg-primary-light flex items-center justify-between gap-4 p-2 rounded-lg">
        <div className="flex items-center gap-2">
          <Button>
            <Plus size={20} />
          </Button>
          <Button>
            <ListFilter size={20} />
          </Button>
          <Button>
            <ArrowUpDown size={20} />
          </Button>
        </div>
        <SearchButton
          className="bg-background/40 border border-foreground/10"
          CMDClassName="text-transparent"
        />
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow className="border-foreground/40 text-xs">
              <TableHead className="w-8">
                <Checkbox
                  checked={
                    selectedRows.size === orderList.length &&
                    orderList.length > 0
                  }
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedRows(new Set(orderList.map((o) => o.orderId)));
                    } else {
                      setSelectedRows(new Set());
                    }
                  }}
                />
              </TableHead>
              <TableHead className="text-foreground/40 font-normal">
                Order ID
              </TableHead>
              <TableHead className="text-foreground/40 font-normal">
                User
              </TableHead>
              <TableHead className="text-foreground/40 font-normal">
                Project
              </TableHead>
              <TableHead className="text-foreground/40 font-normal">
                Address
              </TableHead>
              <TableHead className="text-foreground/40 font-normal">
                Date
              </TableHead>
              <TableHead className="text-foreground/40 font-normal">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orderList.map((order) => (
              <TableRow
                key={order.orderId}
                className="border-foreground/20 text-xs group hover:bg-primary-light"
                data-state={selectedRows.has(order.orderId) && "selected"}
              >
                <TableCell className="w-8 rounded-l-lg">
                  <Checkbox
                    className="hidden group-hover:block data-[state=checked]:block"
                    checked={selectedRows.has(order.orderId)}
                    onCheckedChange={(checked) => {
                      const newSet = new Set(selectedRows);
                      checked
                        ? newSet.add(order.orderId)
                        : newSet.delete(order.orderId);
                      setSelectedRows(newSet);
                    }}
                  />
                </TableCell>

                <TableCell>{order.orderId}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <img
                    src="https://i.pravatar.cc/300"
                    className="h-6 w-6 rounded-full"
                  />
                  {order.userName}
                </TableCell>
                <TableCell>{order.projectName}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {order.address}
                    <ClipboardPlus
                      size={16}
                      className="hidden group-hover:block"
                    />
                  </div>
                </TableCell>
                <TableCell>{formatDate(order.date)}</TableCell>
                <TableCell
                  className={cn(
                    "flex items-center",
                    order.status === "IN_PROGRESS" && "text-[#8A8CD9]",
                    order.status === "COMPLETE" && "text-[#4AA785]",
                    order.status === "PENDING" && "text-[#59A8D4]",
                    order.status === "APPROVED" && "text-[#FFC555]",
                    order.status === "REJECTED" && "text-foreground/40"
                  )}
                >
                  <Dot size={34} className="-mx-2" />
                  {order.status_text}
                </TableCell>
                <TableCell className="w-8 rounded-r-lg">
                  <Button
                    onClick={() => console.log("Order option button clicked!")}
                    className="hidden group-hover:flex h-6 w-6"
                  >
                    <Ellipsis size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="ml-auto">
        <OrdersPagination />
      </div>
    </div>
  );
}

function OrdersPagination() {
  return (
    <Pagination>
      <PaginationContent className="gap-2">
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
