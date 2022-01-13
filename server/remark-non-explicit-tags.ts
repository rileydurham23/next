/*
 * mdx 2.0.0-rc.1 removed support for styling/replacing html tags with components
 * in provider. `components={{ h1: ... }}` will now work only on `# title`, but not on
 * <h1>title</h1>. This plugin ebales styling back.
 */

import type { Transformer } from "unified";

import { visit } from "unist-util-visit";

export default function remarkNonExplicitTags(): Transformer {
  return (root) => {
    visit(root, function (node) {
      if (node.data && node.data._mdxExplicitJsx) {
        delete node.data._mdxExplicitJsx;
      }
    });
  };
}
