import { Parallax } from 'react-parallax';

const Cover = ({img,title,des}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200} 
        className='mb-20 h-[600px]'
    >
        <div className="hero ">
  
  <div className=" bg-black bg-opacity-50 my-24 py-32 px-72 hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5 font-semibold">{des}</p>
      
    </div>
  </div>
</div>
    </Parallax>

        
    );
};

export default Cover;