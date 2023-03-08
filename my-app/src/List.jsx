import React from "react";

export default function List({ itemList, updateItemList }) {
  const deleteItemFromList = (key) => {
    const newlist = itemList.filter((itemObg) => {
      return itemObg.key !== key;
    });
    updateItemList(newlist);
  };
  return (
    <div>
      {itemList.map((itemObj) => (
        <div className="flex justify-between items-center border border-black my-2 rounded-2xl pl-3">
          <div className="text-2xl font-medium">{itemObj.item}</div>
          <button
            className="bg-black rounded-r-2xl text-white p-3 px-5 font-bold hover:opacity-50 transition duration-300"
            onClick={() => deleteItemFromList(itemObj.key)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
