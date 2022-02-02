import styles from "./IFrame.module.css";
interface IFrameProps {
  width?: string;
  height?: string;
  src: string;
}

const IFrame = ({ width, height, src, ...props }: IFrameProps) => {
  if (src.indexOf("youtube") !== -1 && width && height) {
    return (
      <div
        className={styles.styles}
        style={{ maxWidth: `${width}px`, maxHeight: `${height}px` }}
      >
        <div
          className={styles.shaper}
          style={{
            paddingBottom: `${
              (parseInt(height, 10) / parseInt(width, 10)) * 100
            }%`,
          }}
        >
          <iframe className={styles.video} src={src} {...props} />
        </div>
      </div>
    );
  }

  return (
    <iframe
      className={styles.styles}
      style={{ width, height }}
      src={src}
      {...props}
    />
  );
};

export default IFrame;
