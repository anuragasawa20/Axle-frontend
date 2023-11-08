import Link from "next/link";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function Pagenation({ pageNumber, totalPages, url, search }: any) {

  let newUrl:any;

  if (search === "") {
    newUrl = url+"?page=";
  } else {
    newUrl = url+"?search="+search+"&page=";
  }

  const getPageNumbersToShow = () => {
    if (pageNumber === 1) {
      return 4;
    } else if (pageNumber === 2) {
      return 3;
    } else if (pageNumber === totalPages) {
      return 4;
    } else if (pageNumber === totalPages - 1) {
      return 3;
    } else {
      return 2;
    }
  };

  

  const renderPageLinks = () => {
    const pagesToShow = getPageNumbersToShow();
    const minPage = Math.max(1, pageNumber - pagesToShow);
    const maxPage = Math.min(totalPages, pageNumber + pagesToShow);
    const pageNumbers = [];

    for (let i = minPage; i <= maxPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((pageNum) => (
      <Link
        key={pageNum}
        href={`${newUrl}${pageNum}`}
        className={`${
          pageNum === pageNumber ? "bg-red-500" : ""
        } w-8 h-8 rounded-full flex justify-center items-center text-xl font-medium hover:bg-primary/20`}
      >
        {pageNum}
      </Link>
    ));
  };

  return (
    <div className="flex items-center gap-3">
      <Link
        href={`${newUrl}1`}
        className={`${
          pageNumber === 1 ? "text-white/40 cursor-not-allowed" : ""
        }`}
      >
        <ChevronFirst />
      </Link>

      <Link
        href={`${newUrl}${pageNumber>1 ? pageNumber - 1 : 1}`}
        className={`${
          pageNumber === 1 ? "text-white/40  cursor-not-allowed" : ""
        }`}
      >
        <ChevronLeft />
      </Link>

      <div className="flex gap-1">{renderPageLinks()}</div>
      <Link
        href={`${newUrl}${pageNumber<totalPages ? pageNumber + 1 : totalPages}`}
        className={`${
          pageNumber === totalPages ? "text-white/40  cursor-not-allowed" : ""
        }`}
      >
        <ChevronRight />
      </Link>
      <Link
        href={`${newUrl}${totalPages}`}
        className={`${
          pageNumber === totalPages ? "text-white/40 cursor-not-allowed" : ""
        }`}
      >
        <ChevronLast />
      </Link>
    </div>
  );
}

export default Pagenation;
