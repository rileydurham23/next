import { Story } from "@storybook/react";
import { SectionBanner, SectionBannerProps } from "./SectionBanner";
import pam from "./assets/benefits@2x.png";
import NextImage from "next/image";

export default {
  component: SectionBanner,
  title: "Site/Section/SectionBanner",
};

const StoryComponent: Story<SectionBannerProps> = (args) => (
  <SectionBanner {...args} />
);

export const HealthCare = StoryComponent.bind({});

HealthCare.args = {
  bg: "purpleStars",
  style: "healthCare",
  textColor: "white",
  title: "Healthcare",
  text: (
    <>
      We offer <strong>Gold</strong> and <strong>Platinum</strong> level
      healthcare insurance, including dental and vision. Teleport{" "}
      <strong>covers 90%</strong> of premiums for employees and dependents at
      the platinum level.
    </>
  ),
  children: <NextImage src={pam} alt="A loving Pam" height={198} width={154} />,
};
