import { writeFileSync, readFileSync } from "fs";
import { join } from "path";

import template from "utils/template";

const rootDir = "utils/fixtures/source";

describe("utils/template", () => {
  it("Result and fixture are equal", () => {
    const source = readFileSync(
      join(process.cwd(), "utils/fixtures/source/base.md"),
      "utf-8"
    );
    const result = readFileSync(
      join(process.cwd(), "utils/fixtures/result.md"),
      "utf-8"
    );

    const processed = template(source, rootDir, {
      teleport: { version: "1.0" },
    });

    expect(processed).toEqual(result);
  });
});
