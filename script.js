function searchMovie(){

    let movie = document.getElementById("searchInput").value.toLowerCase();

    let title = document.getElementById("movieTitle");
    let year = document.getElementById("movieYear");
    let genre = document.getElementById("movieGenre");
    let image = document.getElementById("movieImage");

    if(movie === "avatar"){

        title.innerHTML = "Avatar";
        year.innerHTML = "Year: 2009";
        genre.innerHTML = "Genre: Sci-Fi";

        image.src = "images/avatar.jpg";
    }

    else if(movie === "squid game"){

        title.innerHTML = "Squid Game";
        year.innerHTML = "Year: 2021";
        genre.innerHTML = "Genre: Thriller, Drama";

        image.src = "images/squidgame.jpg";
    }

    else if(movie === "all of us are dead"){

        title.innerHTML = "All of Us Are Dead";
        year.innerHTML = "Year: 2022";
        genre.innerHTML = "Genre: Zombie, Thriller";

        image.src = "images/allofus.jpg";
    }

    else if(movie === "vincenzo"){

        title.innerHTML = "Vincenzo";
        year.innerHTML = "Year: 2021";
        genre.innerHTML = "Genre: Crime, Action";

        image.src = "images/vincenzo.jpg";
    }

    else{

        title.innerHTML = "Movie Not Found";
        year.innerHTML = "";
        genre.innerHTML = "";

        image.src =
        "https://via.placeholder.com/250x350";
    }
}