import vfile, { VFileOptions } from "vfile";
import remark from "remark";
import mdx from "remark-mdx";
import remarkLinks from "./remark-links";

const transformer = (options: VFileOptions) =>
  remark().use(mdx).use(remarkLinks).processSync(vfile(options)).toString();

describe("utils/remark-links", () => {
  it("Removes .md and and adds './'", () => {
    const result = transformer({
      contents: "[Some link](workflow.mdx)",
      path: "/docs/enterprize/index.mdx",
    });

    expect(result).toEqual("[Some link](./workflow/)\n");
  });

  it("Removes .md and and adds '../'", () => {
    const result = transformer({
      contents: "[Some link](workflow.md)",
      path: "/docs/enterprize.md",
    });

    expect(result).toEqual("[Some link](../workflow/)\n");
  });

  it("Replaces index.md with the '/'", () => {
    const result = transformer({
      contents: "[Some link](workflow/index.md)",
      path: "/docs/enterprize/index.md",
    });

    expect(result).toEqual("[Some link](./workflow/)\n");
  });

  it("Correctly resolves parent folder", () => {
    const result = transformer({
      contents: "[Some link](../workflow.md)",
      path: "/docs/enterprize.md",
    });

    expect(result).toEqual("[Some link](../../workflow/)\n");
  });

  it("Correctly resolves root paths", () => {
    const result = transformer({
      contents: "[Some link](/workflow.md)",
      path: "/docs/enterprize.md",
    });

    expect(result).toEqual("[Some link](/workflow/)\n");
  });

  it("Correctly resolves links with hashes", () => {
    const result = transformer({
      contents: "[Some link](workflow.mdx#anchor)",
      path: "/docs/enterprize.md",
    });

    expect(result).toEqual("[Some link](../workflow/#anchor)\n");
  });

  it("Correctly resolves non .md paths", () => {
    const result = transformer({
      contents: "[Some link](../image.png)",
      path: "/docs/index.md",
    });

    expect(result).toEqual("[Some link](../image.png)\n");
  });

  it("Leave external links as is", () => {
    const result = transformer({
      contents: "[Some link](https://yandex.ru/workflow.md)",
      path: "/docs/enterprize.md",
    });

    expect(result).toEqual("[Some link](https://yandex.ru/workflow.md)\n");
  });

  it("Work with mdx components", () => {
    const result = transformer({
      contents: '<Component href="../workflow.mdx"/>',
      path: "/docs/enterprize/index.mdx",
    });

    expect(result).toEqual('<Component href="../workflow/"/>\n');
  });
});
