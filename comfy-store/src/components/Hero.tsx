import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselItems = [hero1, hero2, hero3, hero4];

function Hero() {
  return (
    <section className="align-element py-20">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="max-width-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            We are changing the way people shop
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <div className="mt-10">
            <Link to="/products" className="btn btn-primary">
              OUR PRODUCTS
            </Link>
          </div>
        </div>
        <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
          {carouselItems.map((image: string) => {
            return (
              <div className="carousel-item" key={image}>
                <img
                  className="rounded-box h-full w-80 object-cover"
                  src={image}
                  alt="store"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
