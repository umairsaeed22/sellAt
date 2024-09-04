import Header from '../_common/components/header/index'
import Divider from '../_common/components/divider/index'
import Partners from '../_common/components/partners/index'
import Discover from '../_common/components/discover/index'
import Services from '../_common/components/services'
import WorkGame from '../_common/components/workgame/index'
import Talent from '../_common/components/talent/index'
import Opportunities from '../_common/components/meetclients/index'
import JoinUs from '../_common/components/joinus/index'
import Stats from '../_common/components/stats/index'
import StayUpdated from '../_common/components/stayuptodate/index'
import Footer from '../_common/components/footer/index'

export default function LandingPage() {
  const categories = ["Web Design", "Logo Design", "Social Media Design"];

  return (
    <div className='flex flex-col gap-[48px] md:mx-10'
    >
      <Header />

      <div className="flex flex-col-reverse md:flex-row shadow-sm items-center">
        {/* Left Child */}
        <div className="sm:p-2 m-5 md:p-4 md:m-10">
          <h4 className="text-4xl mb-4 mt-10">
            <span className="text-3xl font-semibold text-headerColor-500">The Ultimate Destination for</span>
            <br></br>
            <span className="text-3xl font-semibold text-specialheaderColor-500">Freelance Talent </span>
            <span className="text-3xl font-semibold text-headerColor-500">and </span>
            <span className="text-3xl font-semibold text-specialheaderColor-500">Quality <br></br>Services!</span>

          </h4>

          <p className="hidden md:block text-base font-normal mb-4 text-descriptionColor-500">
            Whether you're a business owner or a freelancer, Untitled is your one-stop-shop for finding or offering freelance services. Join our community today and start getting things done!
          </p>
          <div className="flex mt-10 mb-5 md:w-4/6 gap-3">
            <input type="text" className="placeholder:italic border border-gray-300 px-4 py-2 rounded w-full" placeholder="Try &quot;Social media manager&quot;" />
            <button className="bg-buttonColor-500 text-white px-4 py-2 rounded">Search</button>
          </div>

          <div className="flex mt-4">
            <div className="w-full flex flex-wrap md:flex-nowrap items-baseline gap-5">
              <div className="text-tileTextColor-500 text-sm mb-2 whitespace-nowrap">Popular:</div>
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="whitespace-nowrap text-sm p-1 bg-titleBgColor-500 rounded-md text-buttonColor-500">
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Right Child */}
        <div className="p-4 flex items-center justify-center">
          {/* Placeholder for random image */}
          <img src="/assets/Image.jpg" alt="Random" className="rounded-lg" />
        </div>
      </div>

      <div className='flex flex-col gap-[48px]'>
        <Divider />
        <Partners />
        <Services />
        <WorkGame />
        <Talent />
        <Opportunities />
        <JoinUs />
        <Stats />
        <StayUpdated />
        <Footer/>
      </div>
    </div>
  )

}

