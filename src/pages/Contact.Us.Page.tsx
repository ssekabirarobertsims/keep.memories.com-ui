import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { IoMdCall } from "react-icons/io";
import { AiFillMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

function ContactPage() {
  const [values, setValues] = useState([
    {
      id: String(uuid()),
      value: "+234 374 283 2",
      logo: <IoMdCall />,
    },
    {
      id: String(uuid()),
      value: "example000@gmail.com",
      logo: <AiFillMail />,
    },
    {
      id: String(uuid()),
      value: "Kampala, Uganda",
      logo: <FaLocationArrow />,
    },
  ]);

  useEffect(() => {
    setValues(values);
  });

  return (
    <>
      <NavigationBarComponent />
      <br />
      <section className={String("contact-us-page")}>
        <article>
          <img
            src="/photos/stock-photo-cropped-view-businesswoman-putting-handset-landline-telephone-while-sitting-workplace.jfif"
            alt=""
          />
          <div>
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, consequuntur quidem consectetur esse necessitatibus
              magni neque earum explicabo nisi ex, porro suscipit quis tempore
              aut recusandae distinctio nulla praesentium obcaecati excepturi,
              quo deleniti qui sint. Magnam unde earum placeat ipsum!
            </p>

            <ul>
              {values.map((index) => (
                <li key={index.id}>
                  {index.logo} {index.value}
                </li>
              ))}
            </ul>
            <form
              action="mailto:robertsims7076@gmail.com"
              method="post"
              acceptCharset="utf8"
            >
              <input
                type="text"
                name="message"
                id="message"
                placeholder="message here"
                aria-placeholder="message here"
                required
                aria-required
              />
              <button type="submit">send</button>
            </form>
          </div>
        </article>
      </section>
      <FooterComponent />
    </>
  );
}

export default ContactPage;
