import { AnnouncementBar } from "./AnnouncementBar";
import {
  SaaS as SaaSLogos,
  Finance as FinanceLogos,
  Internet as InternetLogos,
  CompactClients as CompactClientsLogos,
} from "components/AnnouncementBar/data";

export default {
  component: AnnouncementBar,
  title: "Site/AnnouncementBar",
};

/* All combinations actuall used in docs right now */

export const Gray = () => <AnnouncementBar />;

export const SaaS = () => <AnnouncementBar rows={SaaSLogos} type="big" />;

export const Finance = () => <AnnouncementBar rows={FinanceLogos} type="big" />;

export const Internet = () => (
  <AnnouncementBar rows={InternetLogos} type="big" />
);

export const CompactClients = () => (
  <AnnouncementBar type="case" rows={CompactClientsLogos} />
);
