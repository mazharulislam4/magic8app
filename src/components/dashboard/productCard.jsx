import React from "react";
import { AiFillHeart } from 'react-icons/ai';
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import bottol from "../../assets/icon/bottol.svg";

/**
 * content must be array of object
 * link for button click 
 * @param {content , link} param0 
 * @returns jsx / component
 */

function ProductCard({ content, link }) {
  return (
    <div>
      <h2 className="medium-font text-dark my-3 ml-2">{content?.status}</h2>
      <div className="w-[18.18rem] h-[320px] px-[21px] py-[14px] bg-light shadow-lg  rounded-md ">
        {/* content body */}
        <h2 className="text-dark initial-font mb-[14px] pt-[4px]">
          Created By {content?.date}
        </h2>
        <div>
          {/* -------------------revenue value -------------------------- */}
          <p className="small-font text-dark ">Revenue</p>
          {/* ----------------------revenue and avg -------------- */}
          <div className="flex items-center gap-2">
            <h3 className="medium-font text-secondary font-bold my-[7px]">
              ${content?.revenue}
            </h3>
            {/* ------------------revenue avg value ----------------- */}
            <p className="small-font text-green  flex gap-1 items-center my-[4px]">
              <span>
                <FiArrowUpRight />
              </span>
              <span>+{content?.revenueAvg}%</span>
            </p>
          </div>
        </div>
        {/* save product  */}
        <p className="flex items-center gap-2 small-font text-secondary">
          <span className=" text-[#FF4545] text-[1.2rem]">
            <AiFillHeart />
          </span>
          {content?.save} Other Saved This Product
        </p>
        <div className="flex items-center gap-2 justify-center mb-[20px] mt-[62px] ">
          <img src={bottol} alt="" width={21.5} height={25} />
          <span className="text-center initial-font  text-secondary font-bold ">
            {content?.mana} Mana
          </span>
        </div>
        {/*----------------------------- button --------------------- */}
        <button
          type="button"
          className="bg-softDark border-2 rounded-md hover:bg-primary transition-colors duration-200 hover:text-light border-softDark text-center text-secondary block w-[100%] py-[14px]"
        >
          <Link path={link}>Reveal This Stores</Link>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
