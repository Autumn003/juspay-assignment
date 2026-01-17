import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

export default function OrdersPagination({
  page,
  setPage,
  totalPages,
}: {
  page: number;
  setPage: (p: number) => void;
  totalPages: number;
}) {
  return (
    <Pagination>
      <PaginationContent className="gap-2">
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious onClick={() => page > 1 && setPage(page - 1)} />
        </PaginationItem>

        {/* Page numbers */}
        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNumber = i + 1;
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                isActive={page === pageNumber}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            onClick={() => page < totalPages && setPage(page + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
