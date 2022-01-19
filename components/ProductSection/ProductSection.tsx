import GridDisplay from "components/GridDisplay";
import { NewProductCard } from "components/GridDisplay";
import Section from "components/Section";

const productCards = [
  {
    title: "Server Access",
    description: "For SSH servers behind NAT in multiple environments.",
    image: "server",
    href: "/ssh-server-access/",
    cardBG: "purple",
  },
  {
    title: "Kubernetes Access",
    description: "For Kubernetes clusters behind NAT in multiple environments.",
    image: "kubernetes",
    href: "/kubernetes-access/",
    cardBG: "blue",
  },
  {
    title: "Application Access",
    description: "For web applications behind NAT in multiple environments.",
    image: "application",
    href: "/application-access/",
    cardBG: "lightPurple",
  },
  {
    title: "Database Access",
    description: "For databases behind NAT in multiple environments.",
    image: "db",
    href: "/database-access/",
    cardBG: "lightBlue",
  },
  {
    title: "Desktop Access",
    description: "For Windows servers & desktops in multiple environments.",
    image: "desktop",
    href: "/desktop-access/",
    cardBG: "purpleBlue",
  },
  {
    image: "pam",
  },
];

const ProductSection = () => {
  return (
    <Section>
      <GridDisplay
        cardStyle="newProductCard"
        bg="flatWhite"
        bigLeftHeading={true}
        title="Teleport Products"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam."
      >
        {productCards.map((card, index) => (
          <NewProductCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            href={card.href}
            cardBG={card.cardBG}
          />
        ))}
      </GridDisplay>
    </Section>
  );
};

export default ProductSection;
