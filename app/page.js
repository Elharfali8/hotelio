import { Featured, Hero } from "@/components"


function HomePage() {


  return (
    <div className="h-[300vh] mt-20">
      <div className="">
        <Hero />
        <Featured />
      </div>
    </div>
  )
}

export default HomePage