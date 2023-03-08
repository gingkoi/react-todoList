import { useState } from "react";
import List from "./List";
function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const addItemToList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem("");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
      <div
        id="wrapper"
        className="bg-white md:w-1/3 w-full py-10 px-5 border-4 border-black rounded-3xl"
      >
        <h1 className="text-center font-Bowlby text-5xl tracking-wider">
          Todo List
        </h1>
        <div className="flex gap-3 my-3">
          <input
            type="text"
            className="rounded-3xl border-4 border-black px-5 text-2xl w-full"
            value={currentItem}
            onChange={onChangeHandler}
            placeholder="Add item"
          ></input>
          <div className="flex gap-1">
            <button
              className="border-4 rounded-2xl bg-black text-white border-black p-5 text-2xl font-black"
              onClick={addItemToList}
            >
              +
            </button>
            <button
              className="border-4 rounded-2xl bg-black text-white border-black p-5 text-2xl font-black"
              onClick={() => updateItemList([])}
            >
              C
            </button>
          </div>
        </div>
        <List itemList={itemList} updateItemList={updateItemList} />
      </div>
    </div>
  );
}

export default App;
