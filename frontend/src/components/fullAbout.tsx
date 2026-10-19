import Footer from "./footer";
import Navigation from "./nav";

function FullAbout() {
  return (
    <div>
      <Navigation />
      <div className="fullAboutUs">
        <section id="about-us" className="about-us">
          <section className="HeroSection">
            <div className="about-hero">
              <span className="eyebrow">WELCOME TO THE NIGHT</span>
              <h1>
                More Than a Night. <br />
                It's Our Halloween.
              </h1>
              <p className="intro">
                We are a community of young people who turn Halloween into an
                unforgettable night of candy, music, costumes, stories,
                laughter, and just the right amount of fear.
              </p>
            </div>

            <div className="about-image">
              <img
                width="80%"
                src="./assets/halloween_group.jpg"
                alt="Young people celebrating Halloween together"
              />
            </div>
          </section>

          <div className="about-story">
            <div className="section-label">01 / WHO WE ARE</div>
            <h2>We Come Alive After Dark</h2>
            <p>
              Halloween is our excuse to step out of the ordinary. We dress up
              as monsters, legends, villains, heroes, and anything our
              imagination can create. Then we meet, explore, celebrate, and make
              memories that last long after the last candle goes out.
            </p>
            <p>
              What brings us together isn't just Halloween itself. It's the
              feeling of being part of something exciting — a night where
              everyone has a story, every street feels different, and anything
              can happen.
            </p>
          </div>

          <div className="about-grid">
            <article className="about-card">
              <span className="card-number">01</span>
              <h3>Trick or Treat</h3>
              <p>
                We hit the streets in our best costumes, knock on doors, and
                hunt for the sweetest treasure of the night. Every bag has a
                story. Every house might have a surprise.
              </p>
            </article>

            <article className="about-card">
              <span className="card-number">02</span>
              <h3>Night Parties</h3>
              <p>
                Costumes, lights, loud music, dancing, and friends in one place.
                Halloween parties are where the night gets louder, stranger, and
                a lot more fun.
              </p>
            </article>

            <article className="about-card">
              <span className="card-number">03</span>
              <h3>Scary Stories</h3>
              <p>
                When the lights go down, the stories begin. Urban legends,
                mysterious encounters, haunted places, and stories that make you
                question what you just heard.
              </p>
            </article>

            <article className="about-card">
              <span className="card-number">04</span>
              <h3>Dark Sounds</h3>
              <p>
                From creepy soundtracks to Halloween classics and unexpected
                late-night beats, music sets the mood. One song can turn a
                normal room into a completely different world.
              </p>
            </article>
          </div>

          <div className="experience-section">
            <div className="experience-image">
              <img
                
                src="/assets/halloween_group.jpg"
                alt="Halloween night with costumes and atmospheric lights"
              />
            </div>

            <div className="experience-content">
              <span className="eyebrow">02 / THE EXPERIENCE</span>
              <h2>Make Tonight a Story Worth Telling.</h2>
              <p>
                We believe the best Halloween moments aren't planned perfectly.
                They happen when the whole group starts laughing, when someone
                tells a story nobody expected, when the music suddenly gets
                louder, or when you take a wrong turn and discover something
                completely unexpected.
              </p>
              <p>
                That's what we chase — real moments, shared with real people,
                under a sky that feels a little darker than usual.
              </p>
            </div>
          </div>

          <div className="traditions-section">
            <span className="eyebrow">03 / OUR TRADITIONS</span>
            <h2>Every Year, We Make It Stranger.</h2>

            <div className="traditions-list">
              <div className="tradition">
                <span>01</span>
                <div>
                  <h3>The Costume Challenge</h3>
                  <p>
                    The crazier, creepier, or more creative the costume, the
                    better. Every Halloween deserves a look nobody forgets.
                  </p>
                </div>
              </div>

              <div className="tradition">
                <span>02</span>
                <div>
                  <h3>The Midnight Story</h3>
                  <p>
                    At midnight, the lights go low and everyone gets one chance
                    to tell a story that can actually scare the room.
                  </p>
                </div>
              </div>

              <div className="tradition">
                <span>03</span>
                <div>
                  <h3>The Candy Hunt</h3>
                  <p>
                    Because no Halloween is complete without a little friendly
                    competition and a bag full of candy at the end of the night.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="final-cta">
            <span className="eyebrow">04 / THIS IS HALLOWEEN</span>
            <h2>Dress Up. Turn Up. Stay Spooky.</h2>
            <p>
              Bring your friends, choose your costume, turn up the music, and
              step into the night. Halloween only comes once a year — make yours
              count.
            </p>
            
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
export default FullAbout;
