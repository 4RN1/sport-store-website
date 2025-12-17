import { runningShoesData, shoesTestData } from "@/test-data/data";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const ShoesPage = () => {


const shoes = [...shoesTestData , ...runningShoesData]

  return (
    <>
      {/* TITLE */}
      <div className="w-full h-24 flex items-center justify-center ">
        <h1 className="text-xl md:text-2xl font-bold">
          ფეხბურთის ფეხსაცმელები
        </h1>
      </div>

      {/* PAGE LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-10 my-10">
        
        {/* FILTER SIDEBAR */}
        <div className="bg-[#f1f1f1] rounded h-fit w-full lg:w-72">
          <div className="border-b border-[#aaaaaa6c] font-bold px-3 py-2">
            კატეგორიები
          </div>

          <ul className="flex flex-col text-md font-medium p-2">
            <li className="cursor-pointer hover:bg-[#cac9c967] rounded px-2 py-2 active:bg-[#cac9c967]">
              ბუცები
            </li>
            <li className="cursor-pointer hover:bg-[#cac9c967] rounded px-2 py-2 active:bg-[#cac9c967]">
              შიპოვკები
            </li>
            <li className="cursor-pointer hover:bg-[#cac9c967] rounded px-2 py-2 active:bg-[#cac9c967]">
              სარბენი ფეხსაცმელები
            </li>

          </ul>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-1">

          {/* FILTER BAR */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            
            <div className="flex flex-col items-center">
              <p className="mb-1 font-black text-sm">ბრენდი</p>
              <select className="w-full px-2 py-1.5 border rounded">
                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
                <option value="puma">Puma</option>
              </select>
            </div>

            <div className="flex flex-col items-center">
              <p className="mb-1 font-black text-sm">ზომა</p>
              <select className="w-full px-2 py-1.5 border rounded">
                <option value="All">ყველა</option>
                <option value="small">36-38</option>
                <option value="normal">39-41</option>
                <option value="big">42-44</option>
                <option value="extra-big">45-46</option>

              </select>
            </div>

            <div className="flex flex-col items-center">
              <p className="mb-1 font-black text-sm">მარაგშია</p>
              <select className="w-full px-2 py-1.5 border rounded">
                <option value="yes">კი</option>
                <option value="no">არა</option>
              </select>
            </div>

            <div className="flex flex-col items-center">
              <p className="mb-1 font-black text-sm">დალაგება</p>
              <select className="w-full px-2 py-1.5 border rounded">
                <option value="lowToHigh">ზრდადობით</option>
                <option value="highToLow">კლებადობით</option>
              </select>
            </div>

          </div>

          {/* PRODUCTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
            {shoes.map((item) => (
              <div
                key={item.id}
                className="shadow-lg rounded-xl border relative bg-white w-full max-w-80"
              >
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="w-full rounded-t-xl"
                />

                <div className="p-4">
                  <h1 className="font-bold text-md mb-1">{item.name}</h1>

                  <p className="text-sm">
                    ზომები:
                    <span className="font-extralight">
                      {" "}{item.sizes.join(", ")}
                    </span>
                  </p>

                  <span
                    className={`text-sm font-medium ${
                      item.inStock ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {item.inStock ? "მარაგშია" : "არ არის მარაგში"}
                  </span>

                  <div className="flex items-center justify-between mt-3">
                    <p className="font-bold text-lg">
                      {item.price.toFixed(2)}₾
                    </p>

                    <Link
                      to={`/product/${item.id}`}
                      className="bg-[#e4e4e4] px-3 py-1 rounded-full text-sm hover:opacity-80 active:opacity-80"
                    >
                      სრულად
                    </Link>
                  </div>

                  <button className="absolute top-2 right-2 hover:opacity-80 active:opacity-80 cursor-pointer">
                    <IoMdAddCircle size={36} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default ShoesPage;



