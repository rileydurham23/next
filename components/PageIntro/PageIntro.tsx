import Box, { BoxProps } from "components/Box";

export interface Intro {
  title: string;
  subject: string;
  description: string;
}

interface PageIntroProps {
  data: Intro;
}

export function PageIntro({ data, ...props }: PageIntroProps & BoxProps) {
  const { title, subject, description } = data;

  return (
    <Box pt="5" pb="7" {...props}>
      <Box as="p" text="text-xl" fontWeight="bold" color="dark-purple">
        {subject}
      </Box>
      <Box as="h1" text="hero-header" pt="3">
        {title}
      </Box>
      <Box as="p" fontSize="text-xl" lineHeight="lg" color="darkest" pt="5">
        {description}
      </Box>
    </Box>
  );
}
