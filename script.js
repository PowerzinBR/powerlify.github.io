function search() {
    const query = document.getElementById('searchInput').value;
    const accessToken = 'YOUR_ACCESS_TOKEN';  // Replace with your actual access token
  
    fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';
  
      const tracks = data.tracks.items;
      tracks.forEach(track => {
        const trackDiv = document.createElement('div');
        trackDiv.innerHTML = `<p>${track.name} - ${track.artists[0].name}</p>`;
        trackDiv.addEventListener('click', () => play(track.preview_url));
        resultsDiv.appendChild(trackDiv);
      });
    })
    .catch(error => console.error('Error:', error));
  }
  
  function play(url) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = url;
    audioPlayer.play();
  }
  