import bill from "../assets/bill.png";
import styles, { layout } from "../style";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";

function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className={`absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient`} />
        <div className={`absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient`}/>
      </div>
      <div className={`${layout.sectionInfo} pl-[2%]`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="mt-6 flex flex-row flex-wrap sm:mt-10 gap-6">
          <img src={apple} className="w-[128px] h-[42px] object-contain mr-5" alt="Apple_Store" />
          <img src={google} className="w-[128px] h-[42px] object-contain mr-5" alt="Google_Play_Store" />
        </div>
      </div>
    </section>
  );
}

export default Billing;
