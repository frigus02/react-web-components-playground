const render = require("./index");

async function main() {
  const result = await render(
    "my-greeting",
    { salutation: "hi" },
    { traits: ["super", "boring"] }
  );
  console.log(result);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
