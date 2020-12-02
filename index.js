const backgroundColor = "#131417";
const foregroundColor = "#ebf8ff";
const cursorColor = "#00485A";
const borderColor = "#14262C";
const colors = {
  black: backgroundColor,
  red: "#F43F5E",
  green: "#10B981",
  yellow: "#FFD6AE",
  blue: "#3B82F6",
  magenta: "#F43F5E",
  cyan: "#22D3EE",
  white: foregroundColor,
  lightBlack: "#171a21",
  lightRed: "#F43F5E",
  lightGreen: "#10B981",
  lightYellow: "#FFD6AE",
  lightBlue: "#3B82F6",
  lightMagenta: "#F43F5E",
  lightCyan: "#22D3EE",
  lightWhite: foregroundColor,
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    colors,
    cursorColor: config.cursorColor || cursorColor,
    cursorShape: config.cursorShape || "BEAM",
    fontSize: config.fontSize || 14,
    fontFamily: config.fontFamily || '"Dank Mono"',
    termCSS: `
            ${config.termCSS || ""}
            ::selection {
                background: rgba(60,109,155,0.3) !important;
            }
            x-screen x-row {
                font-variant-ligatures: initial;
            }
            span {
                font-weight: normal !important;
            }
        `,
    css: `
            ${config.css || ""}
            ::selection {
                background: rgba(60,109,155,0.3) !important;
            }
        `,
  });
};
