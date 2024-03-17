const Hero = () => {
  return (
    <div className='w-[1325px] container mx-auto text-white mt-10'>
      <div className='bg-[url(../src/assets/images/hero.png)] bg-no-repeat  text-center bg-contain rounded-3xl '>
        <div className='flex flex-col justify-center items-center gap-7 h-[600px]'>
          <h2 className='text-6xl font-bold'>
            Discover an exceptional cooking <br />
            class tailored for you!
          </h2>
          <p>
            Embark on a culinary adventure crafted just for you! Explore
            flavors, techniques, and cuisines tailored to your preferences,
            skill level, and dietary needs <br /> in our exceptional cooking
            class experience. Unlock your culinary potential and savor the joy
            of cooking.
          </p>
          <div className='space-x-5'>
            <button className='btn bg-green-500 text-white border-none text-lg rounded-3xl'>
              Explore Now
            </button>
            <button className='btn btn-outline border-white text-white text-lg rounded-3xl'>
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
