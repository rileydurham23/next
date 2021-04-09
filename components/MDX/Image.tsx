import NextImage, { ImageProps } from "next/image";
import Flex from "components/Flex";

const Image = (props: ImageProps) => {
  const width = parseInt(props.width as string, 10);
  const height = parseInt(props.height as string, 10);

  return (
    <Flex my={3}>
      <NextImage
        {...props}
        width={width}
        height={height}
        layout="intrinsic"
        sizes="(min-width: 1460px) 900px, 100vw"
      />
    </Flex>
  );
};

export default Image;
