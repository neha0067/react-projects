import hero1 from "../assets/hero-bcg.jpeg";
import hero2 from "../assets/hero-bcg-2.jpeg";
import { Link } from "react-router-dom";

const carouselItems = [hero1, hero2]

function Hero() {
  return (
    <section className="align-element py-20">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
                <h1 className="max-width-2xl text-4xl font-bold tracking-tight sm:text-6xl">
                    Design Your Comfort Zone
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
                </p>
                <div className="mt-10">
                    <Link to="/products" className="btn bg-yellow-800 text-white hover:btn-secondary hover:bg-black">
                        SHOP NOW
                    </Link>
                </div>
            </div>
            <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
                {carouselItems.map((image: string) => {
                    return (
                        <div className="carousel-item" key={image}>
                            <img className="rounded-box h-full w-80 object-cover" src={image} alt="comfy sloth" />
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Hero;