import React from "react";
import { useSelector } from "react-redux";
import HangGhe from "./HangGhe";
import BookInfo from "./BookInfo";

const BookTicket = () => {
  const { arrTicket } = useSelector((state) => state.ticketSlice);
  console.log(arrTicket);
  return (
    <>
      <div
        className="h-screen  bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("./img/bgmovie.jpg")',
        }}
      >
        <div
          className="fade h-full"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <div className="text-white">
            <h2 className="text-center text-3xl uppercase py-4">
              Đặt vé xem phim
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 text-center">
                <p className="text-center py-3">Màn hình</p>
                <div className="flex flex-row justify-center">
                  <div className="screen mb-10"></div>
                </div>

                <div className="flex flex-col space-y-5">
                  {arrTicket.map((item, index) => (
                    <div className="space-x-10 text-2xl" key={index}>
                      {item.hang}
                      <HangGhe index={index} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-center w-full">
                <h3 className="uppercase text-xl py-4">Danh sách ghế đã chọn</h3>
                <BookInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTicket;
