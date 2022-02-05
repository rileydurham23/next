import { GridTile } from "components/GridDisplay";
import Grid from "components/Grid";
import Flex from "components/Flex";
import Box from "components/Box";
import { CARD_DATA } from "./constants";
import type {
  AnalystReport,
  PodcastEpisode,
  EpisodeKind,
  TechPaperBook,
  Tutorial,
  AuditReport,
  Webinar,
} from "./types";
import { ResourcesDropdown } from "./ResourcesDropdown";

export interface EpisodesListProps {
  episodes:
    | AnalystReport[]
    | AuditReport[]
    | PodcastEpisode[]
    | TechPaperBook[]
    | Tutorial[]
    | Webinar[];
  kind: EpisodeKind;
  needSizeLimit?: boolean;
}

export default function EpisodesList({ episodes }: EpisodesListProps) {
  return (
    <Flex justifyContent="center" flexDirection="column">
      <Box>
        <Box as="p" textTransform="uppercase">
          FILTER BY
        </Box>
        <ResourcesDropdown />
      </Box>
      <Grid
        mt="5"
        gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr) )"
        gridGap={[3, 5]}
      >
        {episodes.map(({ frontmatter, episodeKind, uri }) => {
          const card = CARD_DATA[episodeKind];

          return (
            <GridTile
              caption={card.caption}
              cardBC={card.cardBC}
              cardBG={card.cardBG}
              href={uri}
              key={uri}
              needDescriptionMargin={false}
              smallIcon={true}
              src={card.src}
              title={
                frontmatter.cardTitle
                  ? frontmatter.cardTitle
                  : frontmatter.title
              }
              width="auto"
              resourcesCard
            >
              <Box as="p">
                {frontmatter.brief
                  ? frontmatter.brief
                  : frontmatter.description}
              </Box>
            </GridTile>
          );
        })}
      </Grid>
    </Flex>
  );
}
