import featured from "../../../assets/home/featured.jpg";
import '../Featured/feature.css'

const Featured = () => {
  return (
    <div className="mt-10 mb-28 bg bg-opacity-100  bg-fixed">
    <div className="">
    <div  className="text-center pt-12 text-white ">
        <p className="text-[#D99904]">---Check it out---</p>
        <hr className="h-4 mt-3 w-60 mx-auto" />
        <h1 className="text-3xl font-semibold">FROM OUR MENU</h1>
        <hr className="h-4 mt-3 mb-4 w-60 mx-auto" />
      </div>


      <div className="flex items-center justify-center flex-col md:flex-row  md:px-16 gap-3 lg:px-40 mb-16  pb-10 ">
        <div className="w-1/2"> <img className="h-[250px] w-[450px]" src={featured} alt="" /></div>
        <div className="w-1/2 text-white">
            <h1>March 20, 2023</h1>
            <h1>WHERE CAN I GET SOME?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <button className="btn btn-outline text-white border-b-2 border-b-white">READ MORE</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Featured;
