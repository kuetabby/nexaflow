const data_footer = [
  {
    name: "Twitter",
    link: "https://x.com/NexaFlow_Sol",
  },
  {
    name: "Telegram",
    link: "",
  },
  {
    name: "Whitepaper",
    link: "",
  },
];

const Footer = () => {
  return (
    <footer className="pt-[90px] pb-10">
      <div className="container">
        <p className="text-center text-white">
          Copyright @{new Date().getFullYear()},{" "}
          <a href="#" className="text-primary">
            NexaFlow
          </a>{" "}
          All Rights Reserved.
        </p>
        <ul className="flex justify-center flex-wrap gap-x-10 gap-y-4 mt-4">
          {data_footer.map((e) => (
            <li>
              <a
                href={e.link}
                className="text-gray font-normal"
              >
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
      </div>
    </footer>
  );
};

export default Footer;
