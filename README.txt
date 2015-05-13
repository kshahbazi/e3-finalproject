README.txt

K Shahbazi
CSCI E-3 Final Project 

This project has the user enter a four digit year (YYYY) to output the highest grossing movies for that year.
Only a four digit entry between 1924 and 2014 is accepted (regex).

The event listener on the input box on change calls setUpMovies() method.
A local json object in the following format is parsed:
	 ...2002: [
            "The Lord of the Rings: The Two Towers",
            "Harry Potter and the Chamber of Secrets",
            "Spider-Man",
            "Star Wars Episode II: Attack of the Clones",
            "Men in Black II",
            "Die Another Day",
            "Signs",
            "Ice Age",
            "My Big Fat Greek Wedding",
            "Minority Report"
        ],
        2001: [
            "Harry Potter and the Sorcerer's Stone",
            "The Lord of the Rings: The Fellowship of the Ring",
            "Monsters, Inc.",
            "Shrek",
            "Ocean's Eleven",
            "Pearl Harbor",
            "The Mummy Returns",
            "Jurassic Park III",
            "Planet of the Apes",
            "Hannibal"
        ],..... 

Unfortunately I had issues in getting an API key from either iMDB or Rotten Tomatoes in time; that would've made it unnecessary to create such a huge object. I had to scrape Wikipedia to create this object. In future versions, this object will be replaced, initially moved to an external, standalone file and ultimately removed.

In setUpMovies() method, for year entered, local array is populated: movieYearArray.push(topGrossMovies[year]). Then callOMDB() method is called with movieYearArray[l][m], i.e. each of the top ten movies for the year. Each movie is submitted to another API, the Open Movie DB (OMDB), which in turn returns a json object itself, containing among other things, Director, Date Released, Runtime, Poster (image) and Plot. We parse this object and dynamically create and load our main div, "myMoviesDiv", with individual divs that contain the image as well as datasets with pertinent details. Since we've loaded some of this data into the title attribute of our div:

                         newDiv.setAttribute("title", "Director: " + m.Director + "\n" +
                                                      "Released: " + m.Released + "\n" +
                                                      "Runtime: " + m.Runtime);

we can view this info by having our cursor hover over each poster/image. We can also click on each image and with the event listener a new div is created superimposed on the movie poster that contains the plot summary for each movie as well as a link to iMDB website. Clicking that links takes us to the page relevant to the movie. Additional feedback is shown in the console.

Of the seven requirements, I believe I have six completed (Closures the exception).
    1) DOM element creation, deletion or modification - numerous times, similar to above snippet newDiv.setAttribute
    2) DOM traversal - this.parentNode.removeChild(this);
    3) Capturing and handling events (beyond just a “Do it!” button) - 3 instances: change on input box (Year), click 
          on Poster and link appended to the end of each "titlePanels" divs. 
    4) Creating and handling a data structure (JSON, custom objects, etc) - topGrossMovies as well as the OMDB object
    5) Form validation - user needs to enter a year in format YYYY only
    6) Closures - ?
    7) AJAX - calling OMDB and loading main div with each new year entered