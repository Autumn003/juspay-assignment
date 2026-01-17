import { useEffect, useState } from "react";
import { cn, formatDate } from "../lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Checkbox } from "../components/ui/checkbox";
import {
  ArrowUpDown,
  ClipboardPlus,
  Dot,
  Ellipsis,
  ListFilter,
  Plus,
} from "lucide-react";
import Button from "../components/ui/button";
import SearchButton from "../components/ui/search-button";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { createOrder } from "../redux/slices/order-slice";
import OrdersPagination from "../components/orders/orders-pagination";

export default function Orders() {
  const orderList = useAppSelector((state) => state.order.orders);
  const dispatch = useAppDispatch();
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  const [reverse, setReverse] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);

  // get arranged data
  const orders = (() => {
    let data = [...orderList];

    if (sortByDate) {
      data.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    }

    if (reverse) {
      data.reverse();
    }

    return data;
  })();

  const handleReverse = () => {
    setReverse((prev) => !prev);
    setPage(1);
  };
  const handleSortByDate = () => {
    setSortByDate((prev) => !prev);
    setPage(1);
  };

  const ITEMS_PER_PAGE = 10;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);

  const paginatedOrders = orders.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [totalPages, page]);

  return (
    <div className="flex flex-col gap-7 w-full">
      <a href="/" className="text-xs underline -my-4">
        Go to Dashboard Page
      </a>
      <p className="text-sm font-semibold">Order List</p>
      <section
        id="top-bar"
        className="bg-primary-light flex items-center justify-between gap-4 p-2 rounded-lg"
      >
        <div className="flex items-center gap-2">
          <Button
            onClick={() =>
              dispatch(
                createOrder({
                  userName: "John Doe",
                  userImage: "https://i.pravatar.cc/300",
                  projectName: "New Dashboard",
                  address: "San Jose, CA",
                  status: "IN_PROGRESS",
                  status_text: "In Progress",
                  status_color: "#8a8cd9",
                }),
              )
            }
          >
            <Plus size={20} />
          </Button>
          <Button>
            <ListFilter size={20} onClick={handleSortByDate} />
          </Button>
          <Button>
            <ArrowUpDown size={20} onClick={handleReverse} />
          </Button>
        </div>
        <SearchButton
          className="bg-background/40 border border-foreground/10"
          CMDClassName="text-transparent"
        />
      </section>
      <section id="orders-table">
        <Table>
          <TableHeader>
            <TableRow className="border-foreground/40 text-xs">
              <TableHead className="w-8">
                <Checkbox
                  className="border-2 border-foreground/20"
                  checked={
                    selectedRows.size === paginatedOrders.length &&
                    paginatedOrders.length > 0
                  }
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedRows(
                        new Set(paginatedOrders.map((o) => o.orderId)),
                      );
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
            {paginatedOrders.map((order) => (
              <TableRow
                key={order.orderId}
                className="border-foreground/20 text-xs group hover:bg-primary-light"
                data-state={selectedRows.has(order.orderId) && "selected"}
              >
                <TableCell className="w-8 rounded-l-lg">
                  <Checkbox
                    className="md:hidden md:group-hover:block block border-2 border-foreground/20 data-[state=checked]:block"
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
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img
                      src={order.userImage}
                      className="h-6 w-6 rounded-full md:block hidden"
                    />
                    {order.userName}
                  </div>
                </TableCell>
                <TableCell>{order.projectName}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {order.address}
                    <ClipboardPlus
                      size={16}
                      className="h-0 group-hover:h-full"
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
                    order.status === "REJECTED" && "text-foreground/40",
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
      </section>
      <section id="pagination" className="ml-auto">
        <OrdersPagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </section>
    </div>
  );
}
