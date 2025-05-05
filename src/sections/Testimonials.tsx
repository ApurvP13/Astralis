import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="bg-[url('./images/star-bg.png')] bg-cover font-display flex flex-col items-center gap-4 justify-center text-center mt-10"
    >
      <p className="text-slate-300 tracking-tight max-w-lg leading-10">
        “I have to admit, what Astralis is doing with deep space travel is
        insane — in a good way. When I first saw their propulsion tech, I
        thought it was CGI. It’s humbling, honestly. They’ve leapfrogged
        concepts we’ve been wrestling with for over a decade. Part of me is
        kicking myself for not thinking of it first… but the other part is just
        in awe.”
      </p>
      <img
        className="size-12 rounded-full"
        src="https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg"
        alt="elon musk pic"
      />
      <p className="text-slate-300">Elon Musk, CEO of SpaceX and Tesla</p>

      <div className="mt-12">
        <h2 className="text-gradient text-xl md:text-3xl mb-5">
          What our clients got to say!
        </h2>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Testimonials;
