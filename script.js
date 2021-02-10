const clickBtn = x => {
    const inputValue = document.getElementById("input").value;
    const url = `https://api.lyrics.ovh/suggest/${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => display(data.data))


}

const display = fetchData => {
    const main = document.getElementById("main");
    main.innerHTML = '';
    fetchData.forEach(element => {
        const section = document.createElement('section');
        section.innerHTML =
            `
            <div class="search-result col-md-8 mx-auto py-4">
                <div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-9">
                        <h3 class="lyrics-name">${element.title}</h3>
                        <p class="author lead">Album by <span>${element.artist.name}<span></p>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick="getLyrics
                        ('${element.artist.name}','${element.title}')" class="btn btn-success"> Get Lyrics 
                        </button>
                    </div>
                    <audio controls>
                        <source src="${element.preview}" type="audio/mpeg">
                    </audio>
                </div>
            </div>
            `
        main.appendChild(section)
    });
}

const getLyrics = (artist, title) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    fetch(url)
        .then(res => res.json())
        .then(data => Display(data.lyrics))

}
const Display = lyric => {
    const lyrics_container = document.getElementById('lyrics-container');
    lyrics_container.innerText = lyric;
}