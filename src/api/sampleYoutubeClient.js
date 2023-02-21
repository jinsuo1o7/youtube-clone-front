import axios from "axios";

export default class SampleYoutube {
  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get("/data/related.json")
      : axios.get("/data/search.json");
  }

  async videos() {
    return axios.get("/data/hot_trand.json");
  }

  async channels() {
    return axios.get("/data/channel_info.json");
  }
}
