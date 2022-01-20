import { suite } from "uvu";
import * as assert from "uvu/assert";

import capitalize from "./capitalize";

const Suite = suite("utils/capitalize");

Suite("Transform first letter of the first word to uppercase", () => {
  const result = capitalize("lorem ipsum dolor sit amet");

  assert.equal(result, "Lorem ipsum dolor sit amet");
});

Suite.run();
