import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bd7df3f23a2049208653b6059e51f572",
  },
});
