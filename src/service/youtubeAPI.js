class Youtube {
  constructor(key){
    this.key = key;
  }

  async mostPopular(){
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=kr&key=${this.key}`,
        requestOptions
      );
      const result_1 = await response.json();
      return result_1.items;
    } catch (error) {
      return console.log('error', error);
    }
  }

  async handleSearch(query){
      const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=20&key=${this.key}`,
        requestOptions
      );
      const result_1 = await response.json();
      const items = result_1.items.map(item => ({ ...item, id: item.id.videoId }));
      return items;
    } catch (error) {
      return console.log('error', error);
    }
  }
}

export default Youtube;