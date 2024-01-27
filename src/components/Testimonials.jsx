import { feedback } from "../constants/constants";
import styles, { layout } from "../style";
import FeedbackCard from "./FeedbackCard.jsx";

function Testimonials() {
  return (
    <section id="clients" className={`${styles.paddingY} relative`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%]  rounded-full blue__gradient overflow-hidden"></div>
      <div className={`lg:flex items-center`}>
        <h2 className={`${styles.heading2} lg:w-1/2`}>
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <p className={`${styles.paragraph} xs:mt-5 max-w-[400px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="mt-20 flex flex-wrap justify-between gap-10">
        {feedback.map(card => (
            <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
