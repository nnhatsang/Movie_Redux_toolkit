import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { huyGhe } from "../redux/slice/ticketSlice";

const BookInfo = () => {
  const { arrBookTicked } = useSelector((state) => state.ticketSlice);
//   console.log(arrBookTicked);
  const dispatch = useDispatch();
  let total = arrBookTicked.reduce((total, currentTotal) => {
    return (total += currentTotal.gia);
  }, 0);
  console.log(total);
  return (
    <>
      <div className="space-y-2">
        <div className="inline-block space-x-5">
          <button className="gheDuocChon"></button>
          <span>Ghế đã đặt</span>
        </div>
        <br />
        <div className="inline-block space-x-5">
          <button className="gheDangChon"></button>
          <span>Ghế đang chọn</span>
        </div>
        <br />
        <div className="inline-block space-x-5">
          <button className="w-11 h-9 border-orange-600 border-2 rounded-md bg-white"></button>
          <span>Ghế đang trống</span>
        </div>
        <br />
      </div>

      <div className="mt-10 relative overflow-x-auto rounded-lg text-white font-sans w-3/4">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xs border-b  uppercase bg-white text-black dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Số ghế
              </th>
              <th scope="col" className="px-6 py-3">
                Giá
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {arrBookTicked.map((item, index) => (
              <tr className=" border-white border-b" key={index}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  {item.soGhe}
                </th>
                <td className="px-6 py-4">{item.gia}</td>
                <td className="px-6 py-4">
                  <button
                    className="px-4 py-2 bg-red-600 rounded-lg hover:bg-black duration-150"
                    onClick={() => {
                      const actions = huyGhe(item.soGhe);
                      dispatch(actions);
                    }}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
            <tr className=" border-white border-b font-bold text-black bg-white">
              <td className="px-6 py-4" colSpan={2}>Total</td>
              <td className="px-6 py-4">{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookInfo;
