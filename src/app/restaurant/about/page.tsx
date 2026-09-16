import { Intro, Photo, BookingCTA } from "@/components/site";
export const metadata = { title: "Our story" };
export default function About() {
  return (
    <main id="main">
      <Intro
        eyebrow="FOOD BROUGHT US TOGETHER"
        title="A kitchen built on friendship."
        description="A shared love of food. Different influences. One welcoming table."
      />
      <section className="section two-col feature">
        <Photo
          src="/images/restaurant.jpg"
          alt="Four Friends Kitchen dining space"
        />
        <div>
          <p className="eyebrow">OUR STORY</p>
          <h2>
            More than
            <br />
            <em>a meal.</em>
          </h2>
          <p>
            Four Friends Kitchen began with a simple idea: bring people together
            through the food we love. Our name is a reminder of what matters
            most — friendship, generosity and a place where you feel welcome.
          </p>
          <p>
            Our menu brings Eastern and Western influences together, from
            comforting favourites to bold combinations. There is room for
            curiosity, room for conversation, and always room for another
            friend.
          </p>
        </div>
      </section>
      <section className="section two-col feature shaded">
        <div>
          <p className="eyebrow">MEET CHEF SUSAN</p>
          <h2>
            Every plate
            <br />
            <em>has a story.</em>
          </h2>
          <p>
            With a passion for learning and creating, Chef Susan brings the
            spirit of our kitchen to the table. Cooking is a journey of trying,
            discovering and sharing.
          </p>
          <p>
            That same spirit lives in JASS, a cookbook that connects food with
            creativity, confidence and purpose.
          </p>
        </div>
        <Photo
          src="/images/chef.JPG"
          alt="Chef Susan, the creative force behind our kitchen"
        />
      </section>
      <BookingCTA />
    </main>
  );
}
