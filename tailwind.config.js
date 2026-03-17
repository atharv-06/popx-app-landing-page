export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
  colors: {
    primary: "#6C25FF",
    primaryLight: "#EDE6FF",
    textGray: "#6B7280"
  },
  boxShadow: {
    card: "0 10px 25px rgba(0,0,0,0.05)"
  }
},
  },
  plugins: [],
}