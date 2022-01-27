import GridDisplay from "components/GridDisplay";
import { NewProductCard } from "components/GridDisplay";
import Section from "components/Section";

const productCards = [
  {
    title: "Server Access",
    description: "For SSH servers in multiple environments.",
    image: "server",
    href: "/ssh-server-access/",
    cardBG: "purple",
  },
  {
    title: "Kubernetes Access",
    description: "For Kubernetes clusters in multiple environments.",
    image: "kubernetes",
    href: "/kubernetes-access/",
    cardBG: "blue",
  },
  {
    title: "Application Access",
    description:
      "For your internal apps including AWS Console, CI/CD, version control, and monitoring.",
    image: "application",
    href: "/application-access/",
    cardBG: "lightPurple",
  },
  {
    title: "Database Access",
    description: "For SQL and NoSQL databases in multiple environments.",
    image: "db",
    href: "/database-access/",
    cardBG: "lightBlue",
  },
  {
    title: "Desktop Access",
    description: "For Windows Servers & desktops in multiple environments.",
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
        description="The Teleport Access Plane consists of five products to deliver protocol-aware capabilities for all your infrastrucure."
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
