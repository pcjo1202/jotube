class Youtube {
  constructor(key){
    this.key = key;
  }

  mostPopular(){
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    return fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=kr&key=${this.key}`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => result.items)
      .catch(error => console.log('error', error));
  }

  handleSearch(query){
      const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=20&key=${this.key}`,
      requestOptions
    )
      .then(response => response.json())
      .then(result =>
        result.items.map(item => ({ ...item, id: item.id.videoId }))
      )
      .then(items => items)
      .catch(error => console.log('error', error));
  }
}

export default Youtube;