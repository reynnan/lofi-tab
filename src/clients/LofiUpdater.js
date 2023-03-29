const LofiUpdater = {
  getLofiUrl: async () => {
    const getLiveStreams = async () => {
      const LOFI_CHANNEL_ID = "UCSJ4gkVC6NrvII8umztf0Ow";
      const API_KEY = "";
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&eventType=live&channelId=${LOFI_CHANNEL_ID}`
        );
        const data = await response.json();
        return data.items;
      } catch (error) {
        console.error(error);
      }
    };

    const title = "lofi hip hop radio";
    const results = await getLiveStreams();
    let response = results
      .filter((element) => element.snippet.title.includes(title))
      .map((element) => element.id.videoId);
    return response?.length ? response[0] : null;
  },
};

export default LofiUpdater;
