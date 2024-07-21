import { curve } from "../assets";
import Button from "./Button";
import Section from "./section"

const Hero = () => {
  return (
    <div>
      <Section className="pt-[12rem my-[5.25]"  crosses crossesOffect="lg:translate-y-[5.25rem]"  
      custompaddings id="hero">


      <div className="container relartive " >
        <div className="relative z-1 max-w-[62rem]  mx-auto text-center mb-[4rem]  md:mb-20 lg:mb-[6rem]   "   >
            
            <h1  className="h1 mb--6" >   Welcome To Codev Explore it 
                
                
            <span className="inline-block relative "  > Brainwave{" "} <img src={curve } className="absolute top-full left-0 w-full xl:-mt-2" width={624} height={28} alt="Curve" />   </span>
                
                  </h1>
                  
                  <p className="body-1 max-w-3xl mx-auto  text-n-2 lg:mb-8 mb-12  "  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dolore voluptatem harum consequatur deleniti numquam laboriosam ut inventore nobis deserunt?</p>
            
            <Button  href="/pricing "  white   >Get started</Button>
          
            
            </div> 
        
        </div>  
 


      
      </Section>
    </div>
  )
}

export default Hero
