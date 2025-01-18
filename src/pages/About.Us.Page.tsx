import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";

function AboutPage() {
  return (
    <>
      <NavigationBarComponent />
      <br />
      <section className={String("about-us-page")}>
        <article>
          <div>
            <h1>About Us</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, consequuntur quidem consectetur esse necessitatibus
              magni neque earum explicabo nisi ex, porro suscipit quis tempore
              aut recusandae distinctio nulla praesentium obcaecati excepturi,
              quo deleniti qui sint. Magnam unde earum placeat ipsum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium autem ipsum, soluta atque eius exercitationem
              voluptatum iure reprehenderit voluptate aspernatur. Eligendi et,
              saepe id esse sequi voluptatum dolores tenetur praesentium eum ut
              tempora voluptates est cum assumenda vitae aut ipsum. Jarem ipsum
              dolor sit, amet consectetur adipisicing elit. Saepe fugiat aut
              animi aspernatur perspiciatis, autem praesentium dolores ullam
              earum in!. Aorem ipsum dolor sit amet consectetur, adipisicing
              elit. Dignissimos minus, aliquam magnam voluptate sit suscipit
              consectetur atque explicabo dolore! Possimus aut velit debitis?
              Iusto inventore nemo, est et totam distinctio.
            </p>
          </div>
          <img src="/photos/About-Us.jpeg" alt="" />
        </article>
      </section>
      <FooterComponent />
    </>
  );
}

export default AboutPage;
