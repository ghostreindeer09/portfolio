import { socials } from "#constants";
import WindowControls from "./WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";   

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact"/>
        <h2>Contact Me</h2>
      </div>

      <div className="p-5">
        <img
          src="/images/graduation-4.jpeg"
          alt="Rishit"
          className="size-32 rounded-full object-cover"
        />

        <h2 className="mt-4 text-xl">Let's Connect</h2>

        <p>Got an idea? A bug to squash? Or just wanna talk? I'm in.</p>
        <p>sharmarishit89@gmail.com</p>

        <ul className="mt-4 flex flex-col gap-3">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="size-5"
              >
               <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;