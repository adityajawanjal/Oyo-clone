import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";

const Hotels = ({hotels}) => {
  return (
    <>
      <Header1 />
      {
        hotels ? hotels.map((e)=>{
          return (
            <div className=" m-5" key={e._id}>
              <Hotel e={e} />
            </div>
          );
        }) :''
      }
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}

export default Hotels;
