import Link from "next/link";

export interface NavigationItem {
  title: string;
  slug: string;
}

export interface NavigationCategory {
  title: string;
  entries: NavigationItem[];
}

interface NavigationProps {
  data: NavigationCategory[];
}

const Navigation = ({ data }: NavigationProps) => {
  return (
    <ul>
      {data.map(({ title, entries }) => (
        <li key={title}>
          <div>{title}</div>
          <ul>
            {entries.map(({ title, slug }) => (
              <li key={slug}>
                <Link href={slug}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
