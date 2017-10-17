//write a function to retrieve a blob of JSON
//make an ajax request! Use the 'fetch' function
//available with default js as of 2015
//http://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
//   //fetch also returns a promise
//   fetch('http://rallycoding.herokuapp.com/api/music_albums')
//     .then(res => res.json())
//     .then(json => console.log(json));
// }

const fetchAlbums = async () => {
  //fetch also returns a promise
  const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();
  console.log(json);
};

fetchAlbums();
