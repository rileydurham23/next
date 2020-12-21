import Head from "next/head";
import { Tabs, TabItem } from "components/tabs";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hellow world!</div>
      <br />
      <br />
      <Tabs>
        <TabItem label="Label 1">Content 1</TabItem>
        <TabItem selected label="Label 2">
          Content 2
        </TabItem>
      </Tabs>
    </>
  );
}
