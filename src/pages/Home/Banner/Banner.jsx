
const Banner = () => {
    return (
      <div className="carousel my-2 h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={'https://img.freepik.com/free-vector/silhouettes-people-dancing-abstract-background-with-glowing-lights-stars_1048-14343.jpg?size=626&ext=jpg&uid=R101577347&ga=GA1.2.2134551033.1665579690&semt=ais'} className="w-full rounded-xl" />
        <div className="absolute flex items-center rounded-xl h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="font-bold text-6xl">"Dance from your heart, express your truth through movement."</h2>
            <p>
            "Let the rhythm ignite your spirit, and the music guide your steps. With every sway, you become a vessel of expression, transcending the boundaries of the ordinary. Embrace the joy of movement, for within dance lies the power to liberate your soul and bring enchantment to the world around you."
            </p>
            <div>
            <button className="btn btn-active bg-[#FF3811] mr-5">Discover More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={'https://img.freepik.com/free-vector/party-crowd-starburst-background_1048-7581.jpg?size=626&ext=jpg&uid=R101577347&ga=GA1.1.2134551033.1665579690&semt=ais'} className="w-full rounded-xl" />
        <div className="absolute flex items-center rounded-xl  h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="font-bold text-6xl">"Dance from your heart, express your truth through movement."</h2>
            <p>
            "Let the music move you, let your body speak. Embrace the freedom, the rhythm, the beat. Dance with all your heart, and let your spirit shine. You are a dancer, and the stage is yours."
            </p>
            <div>
            <button className="btn btn-active bg-[#FF3811] mr-5">Discover More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={'https://img.freepik.com/premium-photo/silhouette-people-concert-music-festival-with-neon-lights-ai_108146-4664.jpg?size=626&ext=jpg&uid=R101577347&ga=GA1.1.2134551033.1665579690&semt=ais'} className="w-full rounded-xl" />
        <div className="absolute flex items-center rounded-xl h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="font-bold text-6xl">"Dance from your heart, express your truth through movement."</h2>
            <p>
            "Move to the beat, unleash your spirit. Dance with abandon, let your body speak. Feel the music, embrace the joy. Own the dance floor, and set your soul free."
            </p>
            <div>
            <button className="btn btn-active bg-[#FF3811] mr-5">Discover More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
    );
  };
  
  export default Banner;
  