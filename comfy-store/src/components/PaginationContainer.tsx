import { useLoaderData, useNavigate, useLocation, Path } from "react-router-dom";

function PaginationContainer() {
  const { meta }: any = useLoaderData();
  const { page, pageCount }: any = meta.pagination;

  const pages: Array<Number> = Array.from(
    { length: pageCount },
    (_, index) => index + 1
  );

  const { search, pathname }: Path = useLocation();
  console.log({ search, pathname });
  const navigate = useNavigate();

  const handlePageChange = (pageNumber: Number | string) => {

    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber.toString());
    console.log(searchParams.toString());

    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            const prevPage = page - 1 ===0 ? pageCount : page -1;
            handlePageChange(prevPage)
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber.toString()}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber.toString()}
            </button>
          );
        })}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            const prevPage = page + 1 > pageCount ? 0 : page + 1;
            handlePageChange(prevPage)
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationContainer;
