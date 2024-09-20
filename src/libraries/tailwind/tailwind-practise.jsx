function TailwindPractise() {
  const data = [
    {
      image: "https://i.ytimg.com/vi/XDYNofJ1zI8/maxresdefault.jpg",
      name: "Karahi",
    },
    {
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken-500x375.jpg",
      name: "Biryani",
    },
    {
      image:
        "https://obanhotel.pk/wp-content/uploads/2024/04/bestchickentikkainlahore.jpg",
      name: "Tikka",
    },
    {
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken-500x375.jpg",
      name: "Biryani",
    },
  ];
  return (
    <div className="p-3 bg-slate-500 rounded-xl shadow-2xl">
      {/* FLEX CARDS */}
      {/* <p className=" text-center text-5xl border-2 bold font-bold text-white">Tailwind Practise</p>
            <div className="flex justify-around items-center flex-wrap">
                {data.map((item, index) => {
                    return <div key={index} className="rounded-2xl bg-white max-w-sm mx-auto mt-2 overflow-hidden">
                        <div>
                            <img src={item.image} className="h-56 w-80" />
                        </div>
                        <div className="px-8">
                            <p className="text-2xl">{item.name}</p>
                            <div class="flex justify-center items-center">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded border-4 border-white text-base hover:bg-white hover:text-black sm:text-xl md:text-2xl mb-3">View more</button>
                            </div>
                        </div>
                    </div>
                })}
            </div> */}

      <div className="md:flex w-5/6 md:w-2/4 bg-white overflow-hidden mx-auto">
        <div>
          <img
            src="https://i.ytimg.com/vi/XDYNofJ1zI8/maxresdefault.jpg"
            className="md:h-full md:w-56 w-full h-52"
          />
        </div>
        <div className="px-2">
          <h2 className="">Karahi</h2>
          <a
            href="https://tailwindui.com/"
            className="text-xl no-underline p-[10px]"
          >
            Tailwind CSS
          </a>
          <p className="hover:transition-colors ease-out hover:ease-in delay-0 duration-0 hover:text-blue-500 hover:duration-500 hover:delay-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            officia voluptatum, saepe libero, cupiditate voluptate
          </p>
        </div>
      </div>
    </div>
  );
}
export default TailwindPractise;
