import Box from "components/Layout";
import Button from "components/Button";
import Centrator from "components/Layout";
import dynamic from "next/dynamic";
import Flex from "components/Flex";
import Footer from "components/Footer";
import Image from "components/Image";
import Layout from "components/Layout";
import Link from "components/Link";
import Section from "components/Section";
import TryTeleport from "components/TryTeleport";

import social2017 from "./assets/audit-report-social-2017.png";
import social2018 from "./assets/audit-report-social-2018.png";
import social2019 from "./assets/audit-report-social-2019.png";
import social2020 from "./assets/audit-report-social-2020.png";
import social2021 from "./assets/audit-report-social-2021.png";

const pictureMap = {
  "2017": social2017,
  "2018": social2018,
  "2019": social2019,
  "2020": social2020,
  "2021": social2021,
};

interface AuditsPageProps {
  meta: {
    alternateTitle?: string;
    auditPdf: string;
    authors: string;
    coverPhotoYear: string;
    description: string;
    publicationDate: string;
    title: string;
  };
}

const SSRLessShareButtons = dynamic(() => import("components/ShareButtons"), {
  ssr: false,
});

const convertDate = (publicationDate) => {
  const date = new Date(publicationDate);

  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate() + 1;
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${monthNames[monthIndex]} ${day}, ${year}`;
};

const getPicture = (coverPhotoYear) => pictureMap[coverPhotoYear];

export const AuditsPage = ({
  meta: {
    alternateTitle,
    auditPdf,
    authors,
    coverPhotoYear,
    description,
    publicationDate,
    title,
  },
}: AuditsPageProps) => {
  const coverPhoto = getPicture(coverPhotoYear);
  const convertedDate = convertDate(publicationDate);

  return (
    <Layout>
      <Section
        bg="grayWave"
        display="flex"
        justifyContent="center"
        width="100vw"
        pt={0}
      >
        <Box py={[0, 11]}>
          <Image
            alt="audit report cover photo"
            src={coverPhoto}
            width="874"
            height="456"
          />
        </Box>
      </Section>

      <Centrator
        display="flex"
        alignItems={[null, null, "center"]}
        borderTop="1px solid #f0f2f4"
        pt={0}
      >
        <Section bg="flatWhite" lineHeight="lg" px={[3, 11, 11, null]}>
          <Box
            color="dark-purple"
            fontSize={["text-xl", "text-lg"]}
            fontWeight="bold"
            pb={[3, 1]}
            pt={[5, 11]}
          >
            Published: {convertedDate}
          </Box>

          <Box
            fontSize={["banner", "header-2"]}
            fontWeight={["black", "bold"]}
            lineHeight="xl"
            pb={[2, 0]}
            pt={0}
          >
            {alternateTitle || title}
          </Box>
          <Box
            as="p"
            fontSize={["text-md", "text-xl"]}
            lineHeight="lg"
            margin={0}
            pb={[4, 0]}
            pt={3}
          >
            by {authors}
          </Box>
          <Flex color="darkest" flexDirection="column" lineHeight="lg">
            <Box fontSize="text-lg" pb={[3, 0]} pt={[0, 5]}>
              {description}
            </Box>
            <Button
              as={Link}
              href={auditPdf}
              mb={[0, 5]}
              mt={[0, 7]}
              shape="lg"
              width={["100%", 200]}
            >
              Download PDF
            </Button>
            <SSRLessShareButtons title={alternateTitle || title} />
          </Flex>
        </Section>
      </Centrator>

      <Box mt={[5, 0]}>
        <TryTeleport />
      </Box>
      <Footer />
    </Layout>
  );
};
