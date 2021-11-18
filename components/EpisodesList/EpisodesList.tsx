import { GridTile } from "components/GridDisplay";
import Grid from "components/Grid";
import Flex from "components/Flex";
import Box from "components/Box";
import { CARD_DATA } from "./constants";
import type { PodcastEpisode, EpisodeKind } from "./types";
import { ResourcesDropdown } from "./ResourcesDropdown";

interface EpisodesListProps {
  episodes: PodcastEpisode[];
  kind: EpisodeKind;
}

export default function EpisodesList({
  episodes,
  kind: typeEpisode,
}: EpisodesListProps) {
  const card = CARD_DATA[typeEpisode];
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
        {episodes.map(({ frontmatter, uri }) => (
          <GridTile
            width="auto"
            key={uri}
            title={frontmatter.title}
            cardBG={card.cardBG}
            cardBC={card.cardBC}
            href={uri}
            smallIcon={true}
            src={card.src}
            caption={card.caption}
          >
            {frontmatter.description}
          </GridTile>
        ))}
      </Grid>
    </Flex>
  );
}
