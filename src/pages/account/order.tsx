import useApi from "@/hooks/useApi";
import { apiPath } from "@/lib/api-path";
import { setOrder } from "@/redux/reducer/order";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

const Order: React.FC = () => {
  const { apiAction } = useApi();
  const dispatch = useDispatch();

  const {
    auth: { user, token },
    order: {
      order: { data },
    },
  } = useSelector((state: any) => state);

  const [currentPage, setCurrentPage] = useState(0);
  const [limit] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const orderData = await apiAction({
          method: "get",
          url: `${apiPath?.order?.getOrder}/${user?.id}`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            page: (currentPage + 1).toString(),
            pageSize: limit.toString(),
          },
        });

        dispatch(setOrder(orderData));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const displayedFields = ["id", "totalprice", "orderstatus", "payment"];

  const getColorClass = (status: number): string => {
    switch (status) {
      case 0:
        return "text-red-500";
      case 1:
        return "text-yellow-500";
      case 2:
        return "text-green-500";
      default:
        return "text-gray-700";
    }
  };

  const statusText = (key: string, value: any) => {
    switch (key) {
      case "orderstatus":
        return orderStatusText(value);
      case "payment":
        return paymentStatusText(value);
      default:
        return value;
    }
  };

  const orderStatusText = (status: number) => {
    switch (status) {
      case 0:
        return "Order created";
      case 1:
        return "Order process";
      case 2:
        return "Delivered";
      default:
        return "Unknown status";
    }
  };

  const paymentStatusText = (status: number) => {
    switch (status) {
      case 0:
        return "Pending";
      case 1:
        return "In process";
      case 2:
        return "Success";
      default:
        return "Unknown status";
    }
  };

  const renderHeaders = () => {
    if (!data?.responceData || data?.responceData.length === 0) return null;

    const headers = Object.keys(data?.responceData[0]);

    return (
      <tr className="bg-gray-100">
        {headers
          .filter((header) => displayedFields.includes(header))
          .map((header) => (
            <th
              key={header}
              className="py-2 px-4 border-b border-gray-300 font-medium text-sm text-gray-700"
            >
              {header}
            </th>
          ))}
      </tr>
    );
  };

  const renderCells = () => {
    if (!data?.responceData || data?.responceData.length === 0) return null;

    return data?.responceData.map((order: any) => (
      <tr key={order.id} className="border-b border-gray-300">
        {Object.entries(order)
          .filter(([key]) => displayedFields.includes(key))
          .map(([key, value], index) => (
            <td
              key={index}
              className={`py-2 px-4 text-sm ${
                typeof value === "number" ? getColorClass(value) : ""
              }`}
            >
              {statusText(key, value)}
            </td>
          ))}
      </tr>
    ));
  };

  return (
    <div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>{renderHeaders()}</thead>
        <tbody>{renderCells()}</tbody>
      </table>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(data?.total / limit)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination mt-4"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Order;
