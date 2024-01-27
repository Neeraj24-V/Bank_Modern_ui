import quote from '../assets/quotes.svg'

function FeedbackCard({content, name, title, img}) {
    console.log(content)
  return (
    <section className="feedback-container feature-card max-w-[375px] px-10 py-16 rounded-2xl flex-1">
        <img src={quote} alt="quote" className='mb-10 w-[42px] h-[27px] object-contain' />
        <p className='text-white text-[18px] leading-[32px] font-poppins font-normal mb-10'>{content}</p>
      <div className='flex items-center mr-10'>
        <img src={img} alt={name} className='w-[50px] h-[50px] rounded-full' />
        <div className='ml-4'>
          <h4 className='font-poppins text-white text-[20px]'>{name}</h4>
          <p className='font-poppins text-dimWhite leading-[24px] text-[16px]'>{title}</p>
        </div>
      </div>
    </section>
  );
}

export default FeedbackCard;
