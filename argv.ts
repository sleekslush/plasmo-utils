export const argv =
  typeof globalThis.process !== "undefined" ? globalThis.process.argv : []

export const getNonFlagArgvs = (cmd = argv[2]) =>
  argv.filter((arg) => !arg.startsWith("--")).slice(argv.indexOf(cmd) + 1)
