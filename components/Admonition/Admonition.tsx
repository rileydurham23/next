import capitalize from "utils/capitalize";

interface AdmonitionProps {
  type: "warning" | "tip" | "note" | "danger";
  title?: string;
  children: React.ReactNode;
}

const colors = {
  warning: "orange",
  tip: "blue",
  danger: "red",
  note: "gray",
};

const Admonition = ({ type, title, children }: AdmonitionProps) => {
  return (
    <div
      className={type}
      style={{ border: `1px solid ${colors[type] || "gray"}` }}
    >
      <div
        style={{
          padding: "10px",
          background: colors[type] || "gray",
          color: "white",
        }}
      >
        {title || capitalize(type)}
      </div>
      <div style={{ padding: "10px" }}>{children}</div>
    </div>
  );
};

export default Admonition;
