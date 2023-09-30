import Image from "next/image";

const SingleHotel = () => {
  return (
    <div className="w-7/12 mx-auto my-10 ">
      <Image
        src={
          "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
        }
        alt="hotel"
        width={2000}
        height={2000}
        className=" w-full h-large-box my-5"
      />
      <div className=" ">
        <h3 className=" text-3xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          similique qui ea ex quis vero?
        </h3>
        <p className=" text-xl my-5 text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In totam
          magni, tenetur adipisci sint veritatis quam placeat assumenda commodi
          voluptas maxime sed est. Animi velit quae minima dicta quod, rem, iste
          culpa recusandae facilis non quidem, obcaecati soluta suscipit? Libero
          ducimus laboriosam aspernatur molestias totam harum veritatis
          reprehenderit animi nam!
        </p>
        <button className=" w-60 h-14 rounded-lg bg-blue-400 text-lg">
          Price : 4500
        </button>
        <p className=" text-3xl font-bold my-5">Facilities : </p>
        <ul className=" flex text-xl justify-between">
          <li>Swimming Pool</li>
          <li>Dogs </li>
          <li>garden</li>
          <li>Loundry</li>
          <li>Cricket</li>
        </ul>
        <button className=" w-60 h-14 rounded-lg bg-red-400 my-5 text-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleHotel;
