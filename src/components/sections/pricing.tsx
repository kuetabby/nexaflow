import SlideUp from "@/utils/animations/slideUp";
import SectionTitle from "../ui/sectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/button";

// Pricing data based on NexaFlow narrative
const pricingData = [
  {
    id: 1,
    title: "Starter",
    description:
      "Perfect for small businesses getting started with <strong>AI-powered solutions</strong>",
    price: 49,
    period: "month",
    features: [
      { id: 1, feature: "Basic AI Agent for Decision Making", available: true },
      { id: 2, feature: "AI Code Assistant (Limited)", available: true },
      { id: 3, feature: "Standard Support", available: true },
      { id: 4, feature: "Up to 1,000 AI Queries/month", available: true },
      { id: 5, feature: "Basic Analytics Dashboard", available: true },
      { id: 6, feature: "DePIN Infrastructure Access", available: false },
      { id: 7, feature: "Advanced AI Models", available: false },
      { id: 8, feature: "Priority Support", available: false },
    ],
  },
  {
    id: 2,
    title: "Professional",
    description:
      "Ideal for growing businesses ready to <strong>scale with AI</strong>",
    price: 149,
    period: "month",
    popular: true,
    features: [
      { id: 1, feature: "Advanced AI Agent Suite", available: true },
      { id: 2, feature: "Full AI Code Assistant", available: true },
      { id: 3, feature: "DePIN Infrastructure Access", available: true },
      { id: 4, feature: "Up to 10,000 AI Queries/month", available: true },
      { id: 5, feature: "Advanced Analytics & Insights", available: true },
      { id: 6, feature: "Priority Support", available: true },
      { id: 7, feature: "Custom AI Model Training", available: true },
      { id: 8, feature: "API Integration", available: false },
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    description:
      "For large organizations requiring <strong>enterprise-grade AI solutions</strong>",
    price: 499,
    period: "month",
    features: [
      { id: 1, feature: "Custom AI Agent Development", available: true },
      { id: 2, feature: "Enterprise AI Code Assistant", available: true },
      { id: 3, feature: "Full DePIN Network Access", available: true },
      { id: 4, feature: "Unlimited AI Queries", available: true },
      { id: 5, feature: "Real-time Analytics & Reporting", available: true },
      { id: 6, feature: "24/7 Dedicated Support", available: true },
      { id: 7, feature: "Custom Model Training & Deployment", available: true },
      { id: 8, feature: "Full API Access & White-label", available: true },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="mt-[140px] mb-7.5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <SectionTitle className="text-center">
              <SectionTitle.Name>Pricing Plans</SectionTitle.Name>
              <SectionTitle.Title>
                Choose Your <span className="text-primary">AI-Powered</span>{" "}
                Business Solution
              </SectionTitle.Title>
            </SectionTitle>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-7.5 mt-15">
          {pricingData.map(
            ({ description, features, id, price, title, period, popular }) => (
              <PricingCard
                key={id}
                title={title}
                description={description}
                price={price}
                period={period}
                features={features}
                id={id}
                popular={popular}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

type PricingCardPropsType = {
  title: string;
  description: string;
  price: number;
  period: string;
  id: number;
  popular?: boolean;
  features: {
    id: number;
    feature: string;
    available: boolean;
  }[];
};

const PricingCard = ({
  title,
  price,
  description,
  features,
  id,
  period,
  popular,
}: PricingCardPropsType) => {
  return (
    <SlideUp delay={id}>
      <div
        className={`border border-border p-2.5 rounded-2xl relative ${
          popular ? "border-primary" : ""
        }`}
      >
        {popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-primary text-black px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </span>
          </div>
        )}
        <div className="border border-border rounded-md lg:px-12.5 px-6 py-12">
          <h4 className="pb-2 text-2xl font-semibold">{title}</h4>
          <p
            className="pb-10 text-gray-300"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <h4 className="text-5xl text-primary font-DM-Sans">
            ${price}
            <span className="text-base font-normal text-[rgba(255,_255,_255,_.65)]">
              /{period}
            </span>
          </h4>
        </div>
        <div className="py-10 lg:px-12.5 px-6">
          <ul>
            {features.map(({ available, feature, id }) => (
              <li
                key={id}
                className={`text-white text-lg font-normal mb-[24px] ${
                  available ? "" : "opacity-35"
                }`}
              >
                <i
                  className={`mr-[15px] ${
                    available ? "text-primary" : "text-gray-500"
                  }`}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </i>
                {feature}
              </li>
            ))}
          </ul>
          <Button
            className={`w-full ${
              popular ? "bg-primary hover:bg-primary/90" : ""
            }`}
          >
            Get Started <FontAwesomeIcon icon={faAngleRight} fontSize={14} />
          </Button>
        </div>
      </div>
    </SlideUp>
  );
};
