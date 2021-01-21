import BaseImage from "components/Image";

const Image = (props) => {
  return <BaseImage mb={[2, 3]} display="block" maxWidth="100%" {...props} />;
};

export default Image;
