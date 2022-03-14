import NewGridDisplay, { NewGridDisplayCard } from "components/NewGridDisplay";

const leadershipList = [
  {
    name: "Ev Kontsevoy",
    title: "Co-founder and CEO",
  },
  {
    name: "Alexander Klizentas",
    title: "Co-founder and CTO",
  },
  {
    name: "Taylor Wakefield",
    title: "Co-founder and COO",
  },
  // {
  //   name: "Michael Ferranti",
  //   title: "CMO",
  // },
  // {
  //   name: "Hector Hernandez",
  //   title: "CRO",
  // },
  // {
  //   name: "Xin Ding",
  //   title: "VP Products",
  // },
  // {
  //   name: "Bardia Shahali",
  //   title: "VP Sales",
  // },
  // {
  //   name: "Phil Simpson",
  //   title: "VP Alliances",
  // },
  // {
  //   name: "Reed Lodan",
  //   title: "VP Security",
  // },
];

const LeadershipTeam = () => {
  return (
    <NewGridDisplay sectionTitle="Leadership Team" bg="lines">
      {leadershipList.map((item) => (
        <NewGridDisplayCard
          title={item.name}
          description={item.title}
          key={item.name}
        />
      ))}
    </NewGridDisplay>
  );
};

export default LeadershipTeam;
