import { findUsLink, socialsLink } from "@/constant/links";

const data_footer = [
  {
    name: "Twitter",
    link: "https://x.com/NexaFlow_Sol",
  },
  {
    name: "Telegram",
    link: "https://t.me/nexa_flow_bot",
  },
  {
    name: "Documentation",
    link: "https://docs.nexaflow.tech/",
  },
];

const Footer = () => {
  return (
    <footer className="pt-[90px] pb-10">
      <div className="container">
        <ul className="flex justify-center flex-wrap gap-x-10 gap-y-4 mt-4">
          {data_footer.map((e) => (
            <li key={e.name}>
              <a href={e.link} className="text-gray font-normal">
                {e.name}
              </a>
            </li>
          ))}
          {/* <li>
            <a href="#" className="text-gray font-normal">
              Facebook
            </a>
          </li> */}
          {/* <li>
            <a
              href="https://x.com/NexaFlow_Sol"
              className="text-gray font-normal"
            >
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="text-gray font-normal">
              Telegram
            </a>
          </li>
          <li>
            <a href="#" className="text-gray font-normal">
              Whitepaper
            </a>
          </li> */}
        </ul>
        <p className="text-center text-white mt-2">
          Copyright @{new Date().getFullYear()},{" "}
          <a href="#" className="text-primary">
            NexaFlow
          </a>{" "}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
