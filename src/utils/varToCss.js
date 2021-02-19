import throwError from "./throwError";

function setCssVariables({ node, variables, prefix = null }) {
  if (prefix === null) {
    prefix = "sv"
  }
  const propertyPrefix = `--${prefix === "" ? "" : `${prefix}-`}`
  Object.entries(variables).forEach(([name, value]) => {
    node.style.setProperty(`${propertyPrefix}${name}`, value)
  })
}

export default function varToCss(node, options = throwError("Options must be provided")) {
  // @ts-ignore
  setCssVariables({ node, prefix: options.prefix, variables: options.variables })
  return {
    update(options) {
      setCssVariables({ node, prefix: options.prefix, variables: options.variables })
    }
  }
}