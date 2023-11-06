import BuildAuto from "./_components/build-for-auto";
import Company from "./_components/company";
import Getstarted from "./_components/getstarted";
import Hero from "./_components/hero";
import MoreImpact from "./_components/more-impact";
import NewWhy from "./_components/new-why";
import Newsletter from "./_components/newsletter";
import Resources from "./_components/resources";
import SetUp from "./_components/set-up";
import Testimonial from "./_components/testimonial-card";
import UpdatedMonitor from "./_components/update-monitor";




export default function Home() {
  return (
    <div className="w-full">
      <div className="lg:px-20 xl:px-40 flex flex-col w-full ">
        <Hero />
      </div>
      <Company />
      <BuildAuto />
      <NewWhy />
      <UpdatedMonitor />
      <MoreImpact />
      <Testimonial />
      <SetUp />
      <Getstarted />
      <Resources />
      <Newsletter />
    </div>

  )
}