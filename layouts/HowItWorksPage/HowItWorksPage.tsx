import { MDXProvider } from "@mdx-js/react";
import Drift from "components/Drift";
import Layout from "components/Layout";
import { HIWHeader } from "./HIWHeader";
import EasyStart from "components/EasyStart";
import Footer from "components/Footer";
import Head from "components/Head";
import Box from "components/Box";
import TOCLayout from "components/TOC";
import { HowItWorksTOC } from "components/TOC/TOCs/HowItWorksTOC";
import { HowItWorksItems, SSHItems } from "components/TOC/TOCs/ItemsLists";
import Terminal from "components/Terminal";
import TryTeleport from "components/TryTeleport";
import { components } from "./components";
import wavePngUrl from "sharedAssets/images/wave-light.png";

interface Props {
  meta: {
    border?: string;
    description?: string;
    headerColor?: string;
    headerDescription: string;
    headerSubtitle: string;
    headerTitle: string;
    hideWave?: boolean;
    shortFooter?: boolean;
    title?: string;
    subtitle?: string;
    isSSH?: boolean;
  };
  children: React.ReactNode;
}

const background = `url(${wavePngUrl}) 0 0 no-repeat`;

/* This layout is also used on the /shh page with `isSSH` set to true and a 
unique value for `subtitle`. When `isSSH` is true, this layout renders only the top/sidebar 
table of contents. A unique subtitle is displayed if passed in.
*/

export default function HowItWorksPage({ meta, children }: Props) {
  return (
    <>
      <Head title={meta.title} description={meta.description} />
      <Layout
        background={meta.hideWave ? "none" : background}
        border={meta.border}
      >
        <HIWHeader
          subtitle={meta.subtitle ? meta.subtitle : "How Teleport Works"}
          title={meta.headerTitle}
          description={meta.headerDescription}
        />
        {meta.isSSH ? (
          <TOCLayout
            hideOtherResources
            minHeight="375px"
            TOC1={
              <HowItWorksTOC title="TABLE OF CONTENTS" itemList={SSHItems} />
            }
          >
            <Box color="text" lineHeight="28px">
              <MDXProvider components={components}>{children}</MDXProvider>
            </Box>
          </TOCLayout>
        ) : (
          <TOCLayout
            TOC1={
              <HowItWorksTOC
                title="TABLE OF CONTENTS"
                itemList={HowItWorksItems}
              />
            }
            TOC2={
              <HowItWorksTOC
                title="HOW TELEPORT WORKS"
                header="What's Next"
                footer={true}
                itemList={HowItWorksItems}
              />
            }
          >
            <Box color="text" lineHeight="28px">
              <MDXProvider components={components}>{children}</MDXProvider>
            </Box>
          </TOCLayout>
        )}

        <EasyStart
          description="Teleport is easy to deploy and use. We believe that simplicity and good user experience are key to first-class security."
          listDescription="Teleport consists of just two binaries."
          listItems={[
            <>
              The{" "}
              <span style={{ color: "#512FC9", fontFamily: "Ubuntu Mono" }}>
                tsh
              </span>{" "}
              client allows users to login to retrieve short-lived certificates.
            </>,
            <>
              The{" "}
              <span style={{ color: "#512FC9", fontFamily: "Ubuntu Mono" }}>
                teleport
              </span>{" "}
              agent can be installed on any server, database, application and
              Kubernetes cluster with a single command.
            </>,
          ]}
        >
          <Terminal>
            <components.pre className="hljs language-ruby">
              <Box
                as="code"
                flexDirection="column"
                display="flex"
                px={1}
                fontSize="text-md"
                wordBreak="break-word"
              >
                <span className="hljs-comment"># on a client</span>
                <span>
                  <span className="hljs-variable">$</span> tsh
                  login--proxy=example.com
                </span>
                <br />
                <span className="hljs-comment"># on a server</span>
                <span>
                  <span className="hljs-variable">$</span> apt install teleport
                </span>
                <br />
                <span className="hljs-comment"># in a Kubernetes cluster</span>
                <span>
                  <span className="hljs-variable">$</span> helm install
                </span>
              </Box>
            </components.pre>
          </Terminal>
        </EasyStart>

        <TryTeleport />
      </Layout>
      <Footer short={Boolean(meta.shortFooter)} />
      <Drift />
    </>
  );
}
