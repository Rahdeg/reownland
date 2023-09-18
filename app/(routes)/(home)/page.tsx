import BuildAuto from "@/components/build-for-auto";
import Company from "@/components/company";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <div className="lg:px-20 xl:px-40 flex flex-col">
        <Hero />
      </div>
      <Company />
      <BuildAuto />
    </>

  )
}
