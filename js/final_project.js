window.onload = function() {
    //$( '.posters' ).tooltip();
    var year = document.getElementById("year");
    year.value = '';
    year.focus();

    // the main container that will hold all the posters/panels
    var myMoviesDiv = document.getElementById("myMoviesDiv");
    
    // create a new div element 
    var newClickDiv = document.createElement("div");
    newClickDiv.style.display = "none";
                    
    // top grossing movies object with arrays of films
    var topGrossMovies = {
        2014: [
            "Transformers: Age of Extinction",
            "The Hobbit: The Battle of the Five Armies",
            "Guardians of the Galaxy",
            "Maleficent",
            "The Hunger Games: Mockingjay – Part 1",
            "X-Men: Days of Future Past",
            "Captain America: The Winter Soldier",
            "The Amazing Spider-Man 2",
            "Dawn of the Planet of the Apes",
            "Interstellar"
        ],
        2013: [
            "Frozen",
            "Iron Man 3",
            "Despicable Me 2",
            "The Hobbit: The Desolation of Smaug",
            "The Hunger Games: Catching Fire",
            "Fast & Furious 6",
            "Monsters University",
            "Gravity",
            "Man of Steel",
            "Thor: The Dark World"
        ],
        2012: [
            "The Avengers",
            "Skyfall",
            "The Dark Knight Rises",
            "The Hobbit: An Unexpected Journey",
            "Ice Age: Continental Drift",
            "The Twilight Saga: Breaking Dawn – Part 2",
            "The Amazing Spider-Man",
            "Madagascar 3: Europe's Most Wanted",
            "The Hunger Games",
            "Men in Black 3"
        ],
        2011: [
            "Harry Potter and the Deathly Hallows – Part 2",
            "Transformers: Dark of the Moon",
            "Pirates of the Caribbean: On Stranger Tides",
            "The Twilight Saga: Breaking Dawn – Part 1",
            "Mission: Impossible – Ghost Protocol",
            "Kung Fu Panda 2",
            "Fast Five",
            "The Hangover Part II",
            "The Smurfs",
            "Cars 2"
        ],
        2010: [
            "Toy Story 3",
            "Alice in Wonderland",
            "Harry Potter and the Deathly Hallows – Part 1",
            "Inception",
            "Shrek Forever After",
            "The Twilight Saga: Eclipse",
            "Iron Man 2",
            "Tangled",
            "Despicable Me",
            "How to Train Your Dragon"
        ],
        2009: [
            "Avatar",
            "Harry Potter and the Half-Blood Prince",
            "Ice Age: Dawn of the Dinosaurs",
            "Transformers: Revenge of the Fallen",
            "2012",
            "Up",
            "The Twilight Saga: New Moon",
            "Sherlock Holmes",
            "Angels & Demons",
            "The Hangover"
        ],
        2008: [
            "The Dark Knight",
            "Indiana Jones and the Kingdom of the Crystal Skull",
            "Kung Fu Panda",
            "Hancock",
            "Mamma Mia!",
            "Madagascar: Escape 2 Africa",
            "Quantum of Solace",
            "Iron Man",
            "WALL-E",
            "The Chronicles of Narnia: Prince Caspian"
        ],
        2007: [
            "Pirates of the Caribbean: At World's End",
            "Harry Potter and the Order of the Phoenix",
            "Spider-Man 3",
            "Shrek the Third",
            "Transformers",
            "Ratatouille",
            "I Am Legend",
            "The Simpsons Movie",
            "ational Treasure: Book of Secrets",
            "300"
        ],
        2006: [
            "Pirates of the Caribbean: Dead Man's Chest",
            "The Da Vinci Code",
            "Ice Age: The Meltdown",
            "Casino Royale",
            "Night at the Museum",
            "Cars",
            "X-Men: The Last Stand",
            "Mission: Impossible III",
            "Superman Returns",
            "Happy Feet"
        ],
        2005: [
            "Harry Potter and the Goblet of Fire",
            "Star Wars Episode III: Revenge of the Sith",
            "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
            "War of the Worlds",
            "King Kong",
            "Madagascar",
            "Mr. & Mrs. Smith",
            "Charlie and the Chocolate Factory",
            "Batman Begins",
            "Hitch"
        ],
        2004: [
            "Shrek 2",
            "Harry Potter and the Prisoner of Azkaban",
            "Spider-Man 2",
            "The Incredibles",
            "The Passion of the Christ ",
            "The Day After Tomorrow",
            "Meet the Fockers",
            "Troy",
            "Shark Tale",
            "Ocean's Twelve"
        ],
        2003: [
            "The Lord of the Rings: The Return of the King",
            "Finding Nemo",
            "The Matrix Reloaded",
            "Pirates of the Caribbean: The Curse of the Black Pearl",
            "Bruce Almighty",
            "The Last Samurai",
            "Terminator 3: Rise of the Machines",
            "The Matrix Revolutions",
            "X-Men 2",
            "Bad Boys II"
        ],
        2002: [
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
        ],
        2000: [
            "Mission: Impossible II",
            "Gladiator",
            "Cast Away",
            "What Women Want",
            "Dinosaur",
            "How the Grinch Stole Christmas",
            "Meet the Parents",
            "The Perfect Storm",
            "X-Men",
            "What Lies Beneath"
        ],
        1999: [
            "Star Wars Episode I: The Phantom Menace",
            "The Sixth Sense",
            "Toy Story 2",
            "The Matrix",
            "Tarzan",
            "The Mummy",
            "Notting Hill",
            "The World Is Not Enough",
            "American Beauty",
            "Austin Powers: The Spy Who Shagged Me"
        ],
        1998: [
            "Armageddon",
            "Saving Private Ryan",
            "Godzilla",
            "There's Something About Mary",
            "A Bug's Life",
            "Deep Impact",
            "Mulan",
            "Dr. Dolittle",
            "Shakespeare in Love",
            "Lethal Weapon 4"
        ],
        1997: [
            "Titanic",
            "The Lost World: Jurassic Park",
            "Men in Black",
            "Tomorrow Never Dies",
            "Air Force One",
            "As Good as It Gets",
            "Liar Liar",
            "My Best Friend's Wedding",
            "The Fifth Element",
            "The Full Monty"
        ],
        1996: [
            "Independence Day",
            "Twister",
            "Mission: Impossible",
            "The Rock",
            "The Hunchback of Notre Dame",
            "101 Dalmatians",
            "Ransom",
            "The Nutty Professor",
            "Jerry Maguire",
            "Eraser"
        ],
        1995: [
            "Die Hard with a Vengeance",
            "Toy Story",
            "Apollo 13",
            "GoldenEye",
            "Pocahontas",
            "Batman Forever",
            "Se7en",
            "Casper",
            "Waterworld",
            "Jumanji"
        ],
        1994: [
            "The Lion King",
            "Forrest Gump",
            "True Lies",
            "The Mask",
            "Speed",
            "The Flintstones",
            "Dumb and Dumber",
            "Four Weddings and a Funeral",
            "Interview with the Vampire: The Vampire Chronicles",
            "Clear and Present Danger"
        ],
        1993: [
            "Jurassic Park",
            "Mrs. Doubtfire",
            "The Fugitive",
            "Schindler's List",
            "The Firm",
            "Indecent Proposal",
            "Cliffhanger",
            "Sleepless in Seattle",
            "Philadelphia",
            "The Pelican Brief"
        ],
        1992: [
            "Aladdin",
            "The Bodyguard",
            "Home Alone 2: Lost in New York",
            "Basic Instinct",
            "Lethal Weapon 3",
            "Batman Returns",
            "A Few Good Men",
            "Sister Act",
            "Dracula",
            "Wayne's World"
        ],
        1991: [
            "Terminator 2: Judgment Day",
            "Robin Hood: Prince of Thieves",
            "Beauty and the Beast",
            "Hook",
            "The Silence of the Lambs",
            "JFK",
            "Addams Family",
            "Cape Fear",
            "Hot Shots!",
            "City Slickers"
        ],
        1990: [
            "Home Alone",
            "Ghost",
            "Dances with Wolves",
            "Pretty Woman",
            "Teenage Mutant Ninja Turtles",
            "The Hunt for Red October",
            "Total Recall",
            "Die Hard 2: Die Harder",
            "Dick Tracy",
            "Kindergarten Cop"
        ],
        1989: [
            "Batman",
            "Indiana Jones and the Last Crusade",
            "Lethal Weapon 2",
            "Look Who's Talking",
            "Honey, I Shrunk the Kids",
            "Back to the Future Part II",
            "Ghostbusters II",
            "Driving Miss Daisy",
            "Parenthood",
            "Dead Poets Society"
        ],
        1988: [
            "Rain Man",
            "Who Framed Roger Rabbit",
            "Coming to America",
            "Big",
            "Twins",
            "Crocodile Dundee II",
            "Die Hard",
            "The Naked Gun: From the Files of Police Squad!",
            "Cocktail",
            "Beetlejuice"
        ],
        1987: [
            "3 Men and a Baby",
            "Fatal Attraction",
            "Beverly Hills Cop II",
            "Good Morning, Vietnam",
            "Moonstruck",
            "The Untouchables",
            "The Secret of My Succe$s",
            "Stakeout",
            "Lethal Weapon",
            "The Witches of Eastwick"
        ],
        1986: [
            "Top Gun",
            "Crocodile Dundee",
            "Platoon",
            "The Karate Kid Part II",
            "Star Trek IV: The Voyage Home",
            "Back to School",
            "Aliens",
            "The Golden Child",
            "Ruthless People",
            "Ferris Bueller's Day Off"
        ],
        1985: [
            "Back to the Future",
            "Rambo: First Blood Part II",
            "Rocky IV",
            "The Color Purple",
            "Out of Africa",
            "Cocoon",
            "The Jewel of the Nile",
            "Witness",
            "The Goonies",
            "Spies Like Us"
        ],
        1984: [
            "Beverly Hills Cop",
            "Ghostbusters",
            "Indiana Jones and the Temple of Doom",
            "Gremlins",
            "The Karate Kid",
            "Police Academy",
            "Footloose",
            "Romancing the Stone",
            "Star Trek III: The Search for Spock",
            "Splash"
        ],
        1983: [
            "Star Wars: Episode VI - Return of the Jedi",
            "Terms of Endearment",
            "Flashdance",
            "Trading Places",
            "WarGames",
            "Octopussy",
            "Sudden Impact",
            "Staying Alive",
            "Mr. Mom",
            "Risky Business"
        ],
        1982: [
            "E.T.",
            "Tootsie",
            "An Officer and a Gentleman",
            "Rocky III",
            "Porky's",
            "Star Trek II: The Wrath of Khan",
            "48 HRS.",
            "Poltergeist",
            "The Best Little Whorehouse in Texas",
            "Annie"
        ],
        1981: [
            "Raiders of the Lost Ark",
            "On Golden Pond",
            "Superman II",
            "Arthur",
            "Stripes",
            "The Cannonball Run",
            "Chariots of Fire",
            "For Your Eyes Only",
            "The Four Seasons",
            "Time Bandits"
        ],
        1980: [
            "Star Wars:Episode V - The Empire Strikes Back",
            "Nine to Five",
            "Stir Crazy",
            "Airplane!",
            "Any Which Way You Can",
            "Private Benjamin",
            "Coal Miner's Daughter",
            "Smokey and the Bandit II",
            "The Blue Lagoon",
            "The Blues Brothers"
        ],
        1979: [
            "Kramer vs. Kramer",
            "The Amityville Horror",
            "Rocky II",
            "Apocalypse Now",
            "Star Trek: The Motion Picture",
            "Alien",
            "10",
            "The Jerk",
            "Moonraker",
            "The Muppet Movie"
        ],
        1978: [
            "Grease",
            "Superman",
            "Animal House",
            "Every Which Way but Loose",
            "Heaven Can Wait",
            "Hooper",
            "Jaws 2",
            "Dawn of the Dead",
            "Revenge of the Pink Panther",
            "The Deer Hunter"
        ],
        1977: [
            "Star Wars: Episode IV - A New Hope",
            "Smokey and the Bandit",
            "Close Encounters of the Third Kind",
            "The Goodbye Girl",
            "Saturday Night Fever",
            "Oh, God!",
            "A Bridge Too Far",
            "The Deep",
            "The Spy Who Loved Me",
            "Annie Hall"
        ],
        1976: [
            "Rocky",
            "To Fly!",
            "A Star Is Born",
            "All the President's Men",
            "The Omen",
            "In Search of Noah's Ark",
            "King Kong",
            "Silver Streak",
            "The Enforcer",
            "Midway"
        ],
        1975: [
            "Jaws",
            "The Rocky Horror Picture Show",
            "One Flew Over the Cuckoo's Nest",
            "Dog Day Afternoon",
            "Shampoo",
            "The Return of the Pink Panther",
            "Funny Lady",
            "The Apple Dumpling Gang",
            "Aloha, Bobby and Rose",
            "The Other Side of the Mountain"
        ],
        1974: [
            "Blazing Saddles",
            "The Towering Inferno",
            "The Trial of Billy Jack",
            "Young Frankenstein",
            "Earthquake",
            "The Godfather Part II",
            "Airport 1975",
            "The Life and Times of Grizzly Adams",
            "The Longest Yard",
            "Benji"
        ],
        1973: [
            "The Sting",
            "The Exorcist",
            "American Graffiti",
            "Papillon",
            "The Way We Were",
            "Magnum Force",
            "Jesus Christ Superstar",
            "Live and Let Die",
            "Robin Hood",
            "Paper Moon"
        ],
        1972: [
            "The Godfather",
            "The Poseidon Adventure",
            "What's Up, Doc?",
            "Deliverance",
            "Jeremiah Johnson",
            "Cabaret",
            "The Getaway",
            "Last Tango in Paris",
            "Fritz the Cat",
            "The Legend of Boggy Creek"
        ],
        1971: [
            "Fiddler on the Roof",
            "The French Connection",
            "Diamonds Are Forever",
            "Dirty Harry",
            "Billy Jack",
            "Summer of '42",
            "The Last Picture Show",
            "Carnal Knowledge",
            "A Clockwork Orange",
            "Bedknobs and Broomsticks"
        ],
        1970: [
            "Love Story",
            "Airport",
            "MASH",
            "Patton",
            "Woodstock",
            "The Aristocats",
            "Little Big Man",
            "Ryan's Daughter",
            "Tora! Tora! Tora!",
            "Chariots of the Gods"
        ],
        1969: [
            "Butch Cassidy and the Sundance Kid",
            "Midnight Cowboy",
            "Easy Rider",
            "Hello, Dolly!",
            "Bob & Carol & Ted & Alice",
            "Paint Your Wagon",
            "True Grit",
            "Cactus Flower",
            "Goodbye, Columbus",
            "On Her Majesty's Secret Service"
        ],
        1968: [
            "2001: A Space Odyssey",
            "Funny Girl",
            "The Love Bug",
            "The Odd Couple",
            "Bullitt",
            "Romeo and Juliet",
            "Oliver!",
            "Rosemary's Baby",
            "Planet of the Apes",
            "Night of the Living Dead"
        ],
        1967: [
            "The Graduate",
            "The Jungle Book",
            "Guess Who's Coming to Dinner",
            "Bonnie and Clyde",
            "The Dirty Dozen",
            "Valley of the Dolls",
            "You Only Live Twice",
            "To Sir, with Love",
            "The Born Losers",
            "Thoroughly Modern Millie"
        ],
        1966: [
            "The Bible: In the Beginning...",
            "Hawaii",
            "Who's Afraid of Virginia Woolf?",
            "The Sand Pebbles",
            "A Man For All Seasons",
            "The Good, the Bad and the Ugly",
            "Lt. Robin Crusoe, U.S.N.",
            "The Russians Are Coming, the Russians Are Coming",
            "Grand Prix",
            "Blow-up"
        ],
        1965: [
            "The Sound of Music",
            "Doctor Zhivago",
            "Thunderball",
            "Those Magnificent Men in their Flying Machines",
            "That Darn Cat!",
            "The Great Race",
            "Cat Ballou",
            "What's New Pussycat?",
            "Shenandoah",
            "Von Ryan's Express"
        ],
        1964: [
            "Goldfinger",
            "Mary Poppins",
            "My Fair Lady",
            "The Carpetbaggers",
            "From Russia with Love",
            "A Fistful of Dollars",
            "Father Goose",
            "A Shot in the Dark",
            "A Hard Day's Night",
            "The Night of the Iguana"
        ],
        1963: [
            "Cleopatra",
            "How the West Was Won",
            "It's a Mad, Mad, Mad, Mad World",
            "Tom Jones",
            "Irma la Douce",
            "The Sword in the Stone",
            "Son of Flubber",
            "The Birds",
            "Dr. No",
            "The V.I.P.s"
        ],
        1962: [
            "Lawrence of Arabia",
            "The Longest Day",
            "In Search of the Castaways",
            "That Touch of Mink",
            "The Music Man",
            "Mutiny on the Bounty",
            "To Kill a Mockingbird",
            "Hatari!",
            "Gypsy",
            "Bon Voyage!"
        ],
        1961: [
            "West Side Story",
            "The Guns of Navarone",
            "El Cid",
            "The Absent-Minded Professor",
            "The Parent Trap",
            "Lover Come Back",
            "King of Kings",
            "101 Dalmatians",
            "Splendor in the Grass",
            "Blue Hawaii"
        ],
        1960: [
            "Spartacus",
            "Psycho",
            "Exodus",
            "Swiss Family Robinson",
            "The Alamo",
            "The Apartment",
            "BUtterfield 8",
            "Ocean's 11",
            "Please Don't Eat the Daisies",
            "From the Terrace"
        ],
        1959: [
            "Ben-Hur",
            "Sleeping Beauty",
            "North by Northwest",
            "Some Like It Hot",
            "Pillow Talk",
            "Imitation of Life",
            "Suddenly, Last Summer",
            "The Nun's Story",
            "Rio Bravo",
            "Anatomy of a Murder"
        ],
        1958: [
            "South Pacific",
            "Auntie Mame",
            "Cat on a Hot Tin Roof",
            "No Time for Sergeants",
            "Gigi",
            "The Vikings",
            "Vertigo",
            "The Young Lions",
            "Some Came Running",
            "The Sheriff of Fractured Jaw"
        ],
        1957: [
            "The Bridge on the River Kwai",
            "Peyton Place",
            "Sayonara",
            "Old Yeller",
            "Raintree County",
            "Island in the Sun",
            "Will Success Spoil Rock Hunter?",
            "A Farewell to Arms",
            "Gunfight at the O.K. Corral",
            "Pal Joey"
        ],
        1956: [
            "The Ten Commandments",
            "Around the World in Eighty Days",
            "Giant",
            "War and Peace",
            "The King and I",
            "The Searchers",
            "Bus Stop",
            "The Girl Can't Help It",
            "High Society",
            "Written on the Wind"
        ],
        1955: [
            "Cinerama Holiday",
            "Mister Roberts",
            "Battle Cry",
            "Oklahoma!",
            "Guys and Dolls",
            "Lady and the Tramp",
            "Not as a Stranger",
            "To Hell and Back",
            "The Seven Year Itch",
            "Blackboard Jungle"
        ],
        1954: [
            "White Christmas",
            "20,000 Leagues Under the Sea",
            "Rear Window",
            "Demetrius and the Gladiators",
            "The Caine Mutiny",
            "Vera Cruz",
            "Carmen Jones",
            "The Country Girl",
            "The Barefoot Contessa",
            "A Star Is Born"
        ],
        1953: [
            "The Robe",
            "From Here to Eternity",
            "Shane",
            "How to Marry a Millionaire",
            "Peter Pan",
            "Hans Christian",
            "House of Wax",
            "Mogambo",
            "Gentlemen Prefer Blondes",
            "Salome"
        ],
        1952: [
            "The Greatest Show on Earth",
            "The Bad and the Beautiful",
            "The Snows of Kilimanjaro",
            "Ivanhoe",
            "Singin' in the Rain",
            "Sailor Beware",
            "Moulin Rouge",
            "Hans Christian Andersen",
            "Affair in Trinidad",
            "Monkey Business"
        ],
        1951: [
            "Quo Vadis",
            "Alice in Wonderland",
            "Show Boat",
            "A Streetcar Named Desire",
            "David and Bathsheba",
            "An American in Paris",
            "The African Queen",
            "A Place in the Sun",
            "Strangers on a Train",
            "Pandora and the Flying Dutchman"
        ],
        1950: [
            "Cinderella",
            "King Solomon's Mines",
            "Annie Get Your Gun",
            "Sunset Blvd.",
            "Father of the Bride",
            "Wabash Avenue",
            "All About Eve",
            "Born Yesterday",
            "At War with the Army",
            "My Blue Heaven"
        ],
        1949: [
            "Samson and Delilah",
            "Battleground",
            "Jolson Sings Again",
            "Sands of Iwo Jima",
            "Republic",
            "I Was a Male War Bride",
            "Twelve O'Clock High",
            "A Letter to Three Wives",
            "The Heiress",
            "Pinky",
            "All the King's Men"
        ],
        1948: [
            "The Red Shoes",
            "The Three Musketeers",
            "Red River",
            "The Treasure of the Sierra Madre",
            "When My Baby Smiles at Me",
            "Easter Parade",
            "Johnny Belinda",
            "The Snake Pit",
            "Joan of Arc",
            "Adventures of Don Juan",
            "Homecoming"
        ],
        1947: [
            "Unconquered",
            "The Bachelor and the Bobby-Soxer",
            "The Egg and I",
            "Mother Wore Tights",
            "Life With Father",
            "Green Dolphin Street",
            "Road to Rio",
            "Forever Amber",
            "Gentleman's Agreement",
            "Cass Timberlane",
            "The Ghost and Mrs. Muir"
        ],
        1946: [
            "Song of the South",
            "The Best Years of Our Lives",
            "Duel in the Sun",
            "The Postman Always Rings Twice",
            "Blue Skies",
            "The Yearling",
            "The Razor's Edge",
            "Notorious",
            "Till the Clouds Roll By",
            "Road to Utopia",
            "Gilda"
        ],
        1945: [
            "The Bells of St. Mary's",
            "Spellbound",
            "Leave Her to Heaven",
            "Mildred Pierce",
            "Anchors Aweigh",
            "Week-End at the Waldorf",
            "Saratoga Trunk",
            "Thrill of a Romance",
            "The Valley of Decision",
            "Wonder Man"
        ],
        1944: [
            "Going My Way",
            "Wilson",
            "Since You Went Away",
            "Lady in the Dark",
            "Meet Me in St. Louis",
            "Mrs. Parkington",
            "Here Come the Waves",
            "The Story of Dr. Wassell",
            "Winged Victory",
            "Hollywood Canteen"
        ],
        1943: [
            "For Whom the Bell Tolls",
            "This is the Army",
            "The Song of Bernadette",
            "Hitler's Children",
            "Star Spangled Rhythm",
            "Casablanca",
            "Air Force",
            "Destination Tokyo",
            "A Guy Named Joe",
            "Coney Island"
        ],
        1942: [
            "Mrs. Miniver",
            "Yankee Doodle Dandy",
            "Random Harvest",
            "Road to Morocco",
            "Reap the Wild Wind",
            "The Black Swan",
            "Somewhere I'll Find You",
            "Holiday Inn",
            "Eagle Squadron",
            "The Pride of the Yankees"
        ],
        1941: [
            "Sergeant York",
            "Honky Tonk",
            "Louisiana Purchase",
            "A Yank in the RAF",
            "How Green Was My Valley",
            "Babes on Broadway",
            "Caught in the Draft",
            "Road to Zanzibar",
            "Keep 'Em Flying",
            "In the Navy"
        ],
        1940: [
            "Boom Town",
            "North West Mounted Police",
            "The Great Dictator",
            "The Philadelphia Story",
            "The Grapes of Wrath",
            "Rebecca",
            "Strike Up the Band",
            "Northwest Passage",
            "The Fighting 69th",
            "The Sea Hawk"
        ],
        1939: [
            "Gone with the Wind",
            "Jesse James",
            "Mr. Smith Goes to Washington",
            "The Rains Came",
            "Babes in Arms",
            "Dodge City",
            "Goodbye, Mr. Chips",
            "The Wizard of Oz",
            "The Hunchback of Notre Dame",
            "Gunga Din"
        ],
        1938: [
            "Alexander's Ragtime Band",
            "Test Pilot",
            "Boys Town",
            "The Adventures of Robin Hood",
            "You Can't Take It with You",
            "Sweethearts",
            "Marie Antoinette",
            "Happy Landing",
            "Angels with Dirty Faces",
            "Out West with the Hardys"
        ],
        1937: [
            "Snow White and the Seven Dwarfs",
            "The Good Earth",
            "One Hundred Men and a Girl",
            "Topper",
            "Wee Willie Winkie",
            "Stella Dallas",
            "In Old Chicago",
            "The Prince and the Pauper",
            "Saratoga",
            "The Life of Emile Zola"
        ],
        1936: [
            "San Francisco",
            "The Great Ziegfeld",
            "Modern Times",
            "These Three",
            "Camille",
            "Three Smart Girls",
            "Poor Little Rich Girl",
            "Libeled Lady",
            "The Charge of the Light Brigade",
            "Wife vs. Secretary"
        ],
        1935: [
            "Mutiny on the Bounty",
            "Becky Sharp",
            "Top Hat",
            "The Littlest Rebel",
            "The Informer",
            "China Seas",
            "Barbary Coast",
            "Captain Blood",
            "Anna Karenina",
            "Curly Top"
        ],
        1934: [
            "Viva Villa!",
            "Cleopatra",
            "The Barretts of Wimpole Street",
            "It Happened One Night",
            "The Thin Man",
            "The Richest Girl in the World",
            "The Gay Divorcee",
            "Imitation of Life",
            "The Girl from Missouri",
            "The House of Rothschild"
        ],
        1933: [
            "Queen Christina",
            "I'm No Angel",
            "King Kong",
            "42nd Street",
            "She Done Him Wrong",
            "State Fair",
            "Dinner at Eight",
            "Hold Your Man",
            "Little Women",
            "Design for Living"
        ],
        1932: [
            "Shanghai Express",
            "Grand Hotel",
            "A Farewell to Arms",
            "Red Dust",
            "The Champ",
            "Trouble in Paradise",
            "Love Me Tonight",
            "Dr. Jekyll and Mr. Hyde",
            "Red-Headed Woman",
            "Scarface"
        ],
        1931: [
            "Frankenstein",
            "Cimarron",
            "Mata Hari",
            "City Lights",
            "A Free Soul",
            "Dracula",
            "Private Lives",
            "No Limit",
            "The Public Enemy",
            "The Smiling Lieutenant"
        ],
        1930: [
            "All Quiet on the Western Front",
            "Whoopee!",
            "Hell's Angels",
            "Animal Crackers",
            "Feet First",
            "The Rogue Song",
            "The Life of the Party",
            "Hold Everything",
            "Sunny",
            "The Vagabond King",
            "Song of the Flame",
            "The Green Goddess"
        ],
        1929: [
            "Gold Diggers of Broadway",
            "Sunny Side Up",
            "The Cock-Eyed World",
            "Welcome Danger",
            "In Old Arizona",
            "The Love Parade",
            "The Desert Song",
            "Rio Rita",
            "The Cocoanuts",
            "Why Bring That Up?",
            "Disraeli",
            "The Broadway Melody",
            "Hollywood Revue of 1929"
        ],
        1928: [
            "The Singing Fool",
            "Lights of New York",
            "Street Angel",
            "West of Zanzibar",
            "Steamboat Willie",
            "The Circus",
            "Lights of New York",
            "In Old Arizona"
        ],
        1927: [
            "The Jazz Singer",
            "Wings",
            "It",
            "Love",
            "Seventh Heaven",
            "Children of Divorce",
            "y Best Girl",
            "Hula",
            "The King of Kings",
            "Sunrise: A Song of Two Humans",
            "The Patent Leather Kid",
            "Metropolis"
        ],
        1926: [
            "Aloma of the South Seas",
            "What Price Glory?",
            "The Great K & A Train Robbery",
            "Beau Geste",
            "Flesh and the Devil",
            "Sparrows",
            "For Heaven's Sake",
            "My Yankee Senor",
            "Don Juan",
            "The Sea Beast",
            "La Bohème",
            "The Temptress",
            "Torrent"
        ],
        1925: [
            "The Big Parade",
            "Ben-Hur",
            "The Plastic Age",
            "The Freshman",
            "His People",
            "The Gold Rush",
            "The Merry Widow",
            "Stella Dallas",
            "The Lost World",
            "East Lynne"
        ],
        1924: [
            "The Sea Hawk",
            "He Who Gets Slapped",
            "Girl Shy",
            "A Society Scandal",
            "The Humming Bird",
            "The Marriage Circle",
            "Beau Brummel",
            "The Thief of Bagdad",
            "Greed",
            "Secrets",
            "Hot Water"
        ]
    }

    year.addEventListener("change", setUpMovies);

    // array to keep track of just the top 10 movies of the year selected 
    var movieYearArray = [];

    function yearValid(){
        console.log("Is yearValid() "+year.value);
        var myRegex = /^(192[4-9]|19[3-9]\d|200\d|201[0-4])$/; //years between 1924 and 2014, in the format YYYY
        return myRegex.test(year.value);
    }

    function setUpMovies(e) {
        // check and validate year here
        // insert if...else
        // this.value == year.value; 
        if (yearValid() ){ 
            document.title = "Top Movies of "+ this.value;
            myMoviesDiv.innerHTML = "";
                        
            // loop through my object
            for (var year in topGrossMovies) {
                // only show those that match the year entered
                if (topGrossMovies.hasOwnProperty(year) && year == this.value) {
                    //console.log(year + " ->\n" + topGrossMovies[year]);
                    movieYearArray.push(topGrossMovies[year]);
                }
            }

            // movieYearArray is now populated by those top (10) grossing movies for the selected year
            for (var l = 0; l < movieYearArray.length; l++) {
                for (var m = 0; m < 10; m++) {
                    // pass each individual movie in the array to the OMDB API
                    callOMDB(movieYearArray[l][m]);
                }
            }

            // setting parent's eventListener per Kirupa article
            // http://www.kirupa.com/html5/handling_events_for_many_elements.htm
            // we don't want to create an event listener for each element
            myMoviesDiv.addEventListener("click", function(e) {
                // making sure to handle the children and not the parent's event
                if (e.target !== e.currentTarget) {
                    var clickedItem = e.target;
                    
                    /// following css-tricks.com article
                    // "Automatic IMDb / Netflix / Amazon Movie Links" Published December 28, 2009 by Chris Coyier
                    // add a Wikipedia link with href pointing to the relevant article
                    var imdbURL = "http://www.imdb.com/find?s=tt&q=" + $(clickedItem).data( "imdb" );
                    //var wikiURL = "https://en.wikipedia.org/wiki/" + clickedItem.imdb; //+ "_(film)"; may bring up disambugation
                    
                    // create a link and add it to div ".titlePanels" and add that div to the posters 
                    var aTag = document.createElement('a');
                    aTag.href = imdbURL;
                    aTag.innerHTML = "...more at imdb";

                    // need to hide or remove panel
                    $(aTag).click(function() {
                        $( this ).parent().html("Going to iMDB");
                        this.parentNode.removeChild(this);
                        e.stopPropagation();
                        e.preventDefault();
                    });
                    
                    // whatever the current .poster's position, e.target.getBoundingClientRect()
                    // create a div ".titlePanels" with similar dimensions and toggle it's visibility
                    newClickDiv.setAttribute("class", "titlePanels");
                    newClickDiv.setAttribute("id", document.getElementById("year").value +"_"+clickedItem.alt); // why isn't year.value accessible?

                    // set the contents of the titlePanels text
                    if($(clickedItem).data( 'plot' ) != 'N/A'){
                        $(newClickDiv).html($(clickedItem).data( 'plot' ));
                        console.log(  $(clickedItem).data( 'title' )+"\n" +
                                      $(clickedItem).data( 'actor' )+"\n" + 
                    "TomatoMeter: " + $(clickedItem).data( 'tomato' ));
                    }else{
                        // sometime no plot available                    
                        $(newClickDiv).html("Plot not available.");
                    }

                    $(newClickDiv).css('text-align','justify');
                    $(newClickDiv).append($(aTag));
                    
                    // need to fix the positioning !
                    // OK in FF, misplaced in Chrome & Safari
                    // var newX = e.target.getBoundingClientRect().x;
                    // var newY = e.target.getBoundingClientRect().y;
                    
                    // using jQuery's position method seems to take care of most browsers
                    var newX = $(e.target).position().left;
                    var newY = $(e.target).position().top;
                    
                    newClickDiv.style.position = "absolute";
                    newClickDiv.style.left = (newX-7)+"px";
                    newClickDiv.style.top = newY+"px";
                    newClickDiv.style.display = "block";

                    $(this).append(newClickDiv);

                    // remove titlePanel info 
                    $(newClickDiv).delay(5500).fadeOut(450);
                }
                //stops the event from bubbling to the parent elements
                e.stopPropagation();
            }, false); // default false (bubble), or handle ".posters" 1st
            //e.preventDefault();
        }
        //  the year entered is false
        else{
            document.getElementById("year").value = '';
            console.clear();
            console.log("Invalid year " + this.value);
            console.log("Please enter a year (YYYY) between 1924 and 2014");
            myMoviesDiv.innerHTML = "";
            
            // create a span tag to display error message to user
            var spanTag = document.createElement("span");
            spanTag.setAttribute('id', 'message');
            
            var text = document.createTextNode("Enter a year (YYYY) between 1924 and 2014");
            spanTag.appendChild(text);
            spanTag.style.display = "block";
            
            myMoviesDiv.appendChild(spanTag);
            this.focus();
        }
    }

    // function createLoadingImage(){
    //     var loadingDiv = document.createElement("div")
    //     loadingDiv.setAttribute("id","loadingImage");
    //     myMoviesDiv.appendChild(loadingDiv);
    //     $('#loadingDiv').show( "fast" );
    //     return $(this); //?
    // }

    function callOMDB(movieName, e) {

        // make an send an XmlHttpRequest
        var x = new XMLHttpRequest();
        console.log("...making API call to OMDB...");

        // set up the url and parameters
        var url = "http://www.omdbapi.com?t=";
        //"this.value" is the year "this.value[0]" is the top movie of that year
        var param1 = topGrossMovies[year.value][0];
        var param1 = movieName;
        var param2 = "&y=" + year.value + "&plot=short&r=json&tomatoes=true";

        x.open("GET", url + param1 + param2, true);
        x.send();

        // set up a listener for the response
        x.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
                // the loading gif in case remote call too long
                //$('#loadingDiv').remove();

                //alert(this.response);
                var movie = this.response;
                var m = JSON.parse(movie);

                // make sure title exists
                if (m.Response !== "False") {

                    // to prevent a visually empty space in case no image available to fill div
                    if (m.Poster && m.Poster != "N/A" && m.Poster != null) {
                    
                    // build the html here
                    // add each returned movies as a div
                    (function() {
                        // create a new div element 
                        var newDiv = document.createElement("div");
                        newDiv.setAttribute("class", "posters jqTooltip");
                        newDiv.setAttribute("title", "Director: " + m.Director + "\n" +
                                                      "Released: " + m.Released + "\n" +
                                                      "Runtime: " + m.Runtime);

                        var titleSpan = document.createElement('span');
                        // if title too long cut it so it stays within panel
                        if(m.Title.length < 27){
                            titleSpan.setAttribute("class", "title");
                            titleSpan.innerHTML = m.Title;
                        }else{
                            console.log("title too long, abbreviating...");
                            titleSpan.setAttribute("class", "title");
                            titleSpan.innerHTML = m.Title.substring(0, 25)+"..";
                        }

                        var horizonLine = document.createElement('hr');

                        var newPoster = document.createElement("img");
                        newPoster.setAttribute("src", m.Poster);
                        newPoster.setAttribute("height", "auto");
                        newPoster.setAttribute("width", "200");
                        
                        // didn't want to mix and match jQuery with plain js
                        // but couldn't get the setAttribute to work with data 
                        $(newPoster).data("title", m.Title);
                        $(newPoster).data("director", m.Director);
                        $(newPoster).data("released", m.Released);
                        $(newPoster).data("actor", m.Actors);
                        $(newPoster).data("runtime", m.Runtime);
                        $(newPoster).data("plot", m.Plot);
                        $(newPoster).data("imdb", m.imdbID);
                        $(newPoster).data("tomato", m.tomatoMeter);
                        
                        newPoster.setAttribute("alt", m.Title);
                        
                        newDiv.appendChild(newPoster); //add the img div
                        newDiv.appendChild(horizonLine); //add <hr> 
                        newDiv.appendChild(titleSpan); //add the title span 
                        
                        // add the newly created element and its content into the DOM 
                        //var currentDiv = document.getElementById("div1"); 
                        myMoviesDiv.appendChild(newDiv);
                    })()

                }
                    console.log(m.Title + "\n" +
                        "Director: " + m.Director + "\n" +
                        "Released: " + m.Released + "\n" +
                        "Runtime: " + m.Runtime+ "\n");

                } else {
                    console.log("Movie not found");
                }
            }
        }
    }
}