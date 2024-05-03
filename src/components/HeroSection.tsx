import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-around gap-10 w-full">
        <div>
          <div className="relative block h-[500px] w-[500px]">
            <Image
              src={"/profile.jpg"}
              alt="image"
              fill={true}
              style={{ objectFit: "cover" }}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus cumque maxime illum eum necessitatibus possimus
            inventore sequi, quo molestias fugiat tenetur explicabo quia beatae!
            Provident cupiditate at magni quidem repudiandae. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Repellendus cumque maxime
            illum eum necessitatibus possimus inventore sequi, quo molestias
            fugiat tenetur explicabo quia beatae! Provident cupiditate at magni
            quidem repudiandae.
          </p>
          <button>Contact</button>
          <button>Resume</button>
        </div>
    </section>
  );
}
