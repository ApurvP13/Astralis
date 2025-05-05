interface TripCardsProps {
  planet: string;
  title: string;
  price: string;
  desc: string;
  cardColor: string;
}

const TripCards = ({
  planet,
  title,
  price,
  desc,
  cardColor,
}: TripCardsProps) => {
  return (
    <div
      className={` max-h-98 hover:brightness-105 font-display flex flex-col gap-6 md:gap-4 ${cardColor} p-10 rounded-2xl md:p-12 items-center text-center shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]`}
    >
      <img className="w-23 h-20 md:size-24  " src={planet} alt={title} />
      <h2
        className={` uppercase text-2xl font-bold tracking-widest ${title}-grad`}
      >
        {title}
      </h2>
      <p className={`text-xl max-w-xs font-semibold italic ${title}-grad `}>
        $ {price} <span className="text-sm text-gray-500 font-normal">pp</span>
      </p>
      <p className="text-sm bg-gradient-to-tl from-slate-500 via-gray-800 to-stone-800 bg-clip-text text-transparent italic">
        {desc}
      </p>
      <button
        onClick={() => {
          const el = document.getElementById("contact");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
        className={`px-4 py-2 text-zinc-600 rounded-xl tracking-widest md:px-6 ${title}-bg-grad opacity-50 font-display font-semibold hover:opacity-100 transition-opacity duration-300`}
      >
        Book Now! 🚀
      </button>
    </div>
  );
};

export default TripCards;
