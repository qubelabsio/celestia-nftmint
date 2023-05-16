const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.tsx", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.pink[100],
          to_bg: colors.pink[400],
        },
        titles: colors.pink[600],
        links: {
          txt: colors.pink[600],
          hover_txt: colors.pink[700],
        },
        loading_spinner: colors.pink[500],
        popups: {
          bg: colors.white,
          txt: colors.slate[800],
          internal_border: colors.slate[200],
        },
        warning: {
          txt: colors.slate[800],
          bg: colors.pink[400],
          border: colors.pink[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.slate[800],
          bg: colors.white,
          border: colors.slate[200],
          hover_txt: colors.slate[800],
          hover_bg: colors.slate[100],
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: colors.white,
          bg: colors.pink[500],
          border: colors.pink[500],
          hover_txt: colors.white,
          hover_bg: colors.pink[600],
          hover_border: colors.pink[600],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.pink[600],
        txt_input: {
          txt: colors.pink[600],
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: colors.pink[600],
          focus_bg: colors.slate[50],
          focus_border: colors.pink[300],
          placeholder_txt: colors.pink[600],
        },

        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[800],
          bg: colors.pink[100],
        },

        // Mint widget
        token_preview: colors.pink[200],
      },
    },
  },
  variants: {},
  plugins: [],
};
