const oldQuestions = [
    [ 
        {
          question:
            "A person with well-developed abdominal muscles is said to have a what?",
          answers: ["One-pack", "Six-Pack", "12-pack", "Family-pack"],
          correctAnswer: "Six-Pack",
        },
        {
          question: "Where would a 'peruke' be worn?",
          answers: [
            "Around the neck",
            "On the head",
            "Around the waist",
            "On the wrist",
          ],
          correctAnswer: "On the head",
        },
        {
          question: "What sort of animal is Walt Disney's Dumbo?",
          answers: ["Deer", "Rabbit", "Elephant", "Donkey"],
          correctAnswer: "Elephant",
        },
        {
          question:
            "The hammer and sickle is one of the most recognisable symbols of which political ideology?",
          answers: ["Republicanism", "Communism", "Conservatism", "Liberalism"],
          correctAnswer: "Communism",
        },
        {
          question:
            "Which toys have been marketed with the phrase “robots in disguise”?",
          answers: [
            "Bratz Dolls",
            "Sylvanian Families",
            "Hatchimals",
            "Transformers",
          ],
          correctAnswer: "Transformers",
        },
        {
          question:
            "Which Disney character famously leaves a glass slipper behind at a royal ball?",
          answers: ["Pocahontas", "Sleeping Beauty", "Cinderella", "Elsa"],
          correctAnswer: "Cinderella",
        },
        {
          question:
            'In what children\'s game are participants chased by someone designated "It"?',
          answers: ["Tag", "Simon Says", "Charades", "Hopscotch"],
          correctAnswer: "Tag",
        },
        {
          question: "On a radio, stations are changed by using what control?",
          answers: ["Tuning", "Volume", "Bass", "Treble"],
          correctAnswer: "Tuning",
        },
        {
          question: "Which material is most dense?",
          answers: ["Silver", "Styrofoam", "Butter", "Gold"],
          correctAnswer: "Gold",
        },
        {
          question: "Which state in the United States is largest by area?",
          answers: ["Alaska", "California", "Texas", "Hawaii"],
          correctAnswer: "Alaska",
        },
        {
          question: "What is Aurora Borealis commonly known as?",
          answers: [
            "Fairy Dust",
            "Northern Lights",
            "Book of ages",
            "a Game of Thrones main character",
          ],
          correctAnswer: "Northern Lights",
        },
        {
          question: "When is the International Workers' Day?",
          answers: ["15th April", "12th December", "1st May", "1st August"],
          correctAnswer: "1st May",
        },
        {
          question: "Which country is largest by area?",
          answers: ["UK", "USA", "Russia", "China"],
          correctAnswer: "Russia",
        },
        {
          question: 'What does the "F" stand for in FBI?',
          answers: ["Foreign", "Federal", "Flappy", "Face"],
          correctAnswer: "Federal",
        },
        {
          question:
            "The US declared war on which country after the bombing of Pearl Harbor?",
          answers: ["Japan", "Russia", "Germany", "China"],
          correctAnswer: "Japan",
        },
        {
          question:
            "An albino gorilla usually has what color fur?",
          answers: ["Brown", "Black", "White", "Golden"],
          correctAnswer: "White",
        },
        {
          question:
            "What is the national emblem of Canada?",
          answers: ["Maple Leaf", "Brown Bear", "Maple Syrup", "Waffle"],
          correctAnswer: "Maple Leaf",
        },
        {
          question:
            "Ecology deals with",
          answers: ["Birds", "Cell formation", "Relation between organisms and their environment", "Tissues"],
          correctAnswer: "Relation between organisms and their environment",
        },
        {
          question:
            "In which of these household appliances would you find a lint screen?",
          answers: ["Dishwasher", "Microwave oven", "Clothes dryer", "Trash compactor"],
          correctAnswer: "Clothes dryer",
        },
        {
          question:
            "What are the three primary colors?",
          answers: ["Red, yellow, blue", "Magenta, pink, cyan", "Yellow, salmon, brown", "White, grey, black"],
          correctAnswer: "Red, yellow, blue",
        },
        {
          question:
            "In aviation, what does UFO stand for?",
          answers: ["Unified Flying Object", "Unitary Flinging Obsession", "United Flag Opposition", "Unidentified Flying Object"],
          correctAnswer: "Unidentified Flying Object",
        },
        {
          question:
            "What kind of animal traditionally lives in a sty?",
          answers: ["Cow", "Pig", "Fox", "Teenager"],
          correctAnswer: "Pig",
        },
        {
          question:
            "What is the second most common gas in the air?",
          answers: ["Nitrogen", "Oxygen", "Water", "Helium"],
          correctAnswer: "Oxygen",
        },
        {
          question:
            "Which month has only 28 days (unless it's a leap year)?",
          answers: ["March", "September", "June", "Feburary"],
          correctAnswer: "Feburary",
        },
        {
          question:
            "Pythagoras was first to ____ the universal validity of geometrical theorem.",
          answers: ["give", "prove", "both", "None of the above"],
          correctAnswer: "prove",
        },
        {
          question:
            "Light Year is related to",
          answers: ["energy", "speed", "distance", "intensity"],
          correctAnswer: "distance",
        },
        {
          question:
            "Which of these animals has the highest life expectancy",
          answers: ["bat", "snail", "dolphin", "owl"],
          correctAnswer: "dolphin",
        },
        {
          question:
            "In children’s stories, how many wishes are granted by a genie or fairy?",
          answers: ["One", "Two", "Three", "Four"],
          correctAnswer: "Three",
        },
        {
          question:
            "In which sport do two teams pull at the opposite ends of a rope?",
          answers: ["Tug of war", "Basketball", "Ice hockey", "Polo"],
          correctAnswer: "Tug of war",
        },
        {
          question:
            "Where does a cowboy wear chaps?",
          answers: ["On his head", "On his arms", "On his legs", "On his hands"],
          correctAnswer: "On his legs",
        },
        {
          question:
            "Who is the richest man alive?",
          answers: ["Elon Musk", "Jeff Bezos", "Zhong Shanshan", "Miroslav Mišković"],
          correctAnswer: "Elon Musk",
        },
        {
          question: "When did WW2 start?",
          answers: ["1939", "1945", "1918", "2022"],
          correctAnswer: "1939",
        },
        {
          question: "What is the capital of Italy?",
          answers: ["Mersaill", "Paris", "Madrid", "Rome"],
          correctAnswer: "Rome",
        },
        {
          question: "Who is Michel Jackson?",
          answers: ["Singer", "Dancer", "Artist", "Actor"],
          correctAnswer: "Singer",
        },
      ],
      [
        {
          question: "What is the Celsius equivalent of 77 degrees Fahrenheit",
          answers: ["15", "20", "25", "30"],
          correctAnswer: "25",
        },
        {
          question: "Which is the largest city in the USA's largest state?",
          answers: ["Dallas", "Los Angeles", "New York", "Anchorage"],
          correctAnswer: "Anchorage",
        },
        {
          question: "From which author's work did scientists take the word 'quark'?",
          answers: ["Lewis Carroll", "Edward Lear", "James Joyce", "Aldous Huxley"],
          correctAnswer: "James Joyce",
        },
        {
          question:
            "Which of these islands was ruled by Britain from 1815 until 1864?",
          answers: ["Crete", "Cyprus", "Corsica", "Corfu"],
          correctAnswer: "Corfu",
        },
        {
          question:
            "Which of the following men does not have a chemical element named for him?",
          answers: ["Albert Einstein", "Niels Bohr", "Isaac Newton", " Enrico Fermi"],
          correctAnswer: "Isaac Newton",
        },
        {
          question:
            "In the UK, the abbreviation NHS stands for National what Service?",
          answers: ["Humanity", "Health", "Honour", "Household"],
          correctAnswer: "Health",
        },
        {
          question:
            "What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?",
          answers: ["Hangar", "Terminal", "Concourse", "Carousel"],
          correctAnswer: "Carousel",
        },
        {
          question:
            "Which of these brands was chiefly associated with the manufacture of household locks?",
          answers: ["Phillips", "Flymo", "Chubb", "Ronseal"],
          correctAnswer: "Chubb",
        },
        {
          question: "What does the word loquacious mean?",
          answers: ["Angry", "Chatty", "Beautiful", "Shy"],
          correctAnswer: "Chatty",
        },
        {
          question:
            "At the closest point, which island group is only 50 miles south-east of the coast of Florida?",
          answers: [
            "Bahamas",
            "US Virgin Islands",
            "Turks and Caicos Islands",
            "Bermuda",
          ],
          correctAnswer: "Bahamas",
        },
        {
          question: "Which of these cetaceans is classified as a “toothed whale”?",
          answers: ["Gray whale", "Minke whale", "Sperm whale", "Humpback whale"],
          correctAnswer: "Sperm whale",
        },
        {
          question: "Galileo was an Italian astronomer who",
          answers: [
            "developed the telescope",
            "discovered four satellites of Jupiter",
            "discovered that the movement of pendulum produces a regular time measurement",
            "All of the above",
          ],
          correctAnswer: "All of the above",
        },
        {
          question: "Exposure to sunlight helps a person improve his health because",
          answers: [
            "the infrared light kills bacteria in the body",
            "resistance power increases",
            "the pigment cells in the skin get stimulated and produce a healthy tan",
            "the ultraviolet rays convert skin oil into Vitamin D",
          ],
          correctAnswer: "the ultraviolet rays convert skin oil into Vitamin D",
        },
        {
          question: "In the U.S., if it's not Daylight Saving Time, it's what?",
          answers: ["Borrowed time", "Overtime", "Standard time", "Party time"],
          correctAnswer: "Standard time",
        },
        {
          question: 'Which part of the body are you most likely to "stub"?',
          answers: ["Toe", "Knee", "Elbow", "Brain"],
          correctAnswer: "Toe",
        },
        {
          question:
            "The escape velocity of a rocket fired from the earth towards the moon is the velocity required to overcome",
          answers: ["Earth's gravitational pull", "Moon's gravitational pull", "Centripetal force due to the earth's rotation", "Pressure of the atmosphere"],
          correctAnswer: "Earth's gravitational pull",
        },
        {
          question:
            "Leonardo da Vinci",
          answers: ["was a great Italian painter, sculptor and architect", "got universal fame form his masterpiece \"Mona lisa\"", "drew models of organs such as the heart, lungs and womb", "All of the above"],
          correctAnswer: "All of the above",
        },
        {
          question:
            "The headquarters of UN are situated at",
          answers: ["New York, USA", "Haque (Netherlands)", "Geneva", "Paris"],
          correctAnswer: "New York, USA",
        },
        {
          question:
            "When a moving bus stops suddenly, the passenger are pushed forward because of the",
          answers: ["friction between the earth and the bus", "friction between the passengers and the earth", "inertia of the passengers", "inertia of the bus"],
          correctAnswer: "inertia of the passengers",
        },
        {
          question:
            "Marco Polo",
          answers: ["discovered Greenland", "travelled through China, India and other parts of Asia", "travelled round the cape of Good Hope", "discovered Canada"],
          correctAnswer: "travelled through China, India and other parts of Asia",
        },
        {
          question:
            "Which of the following consumer goods is the Gerber Products Co. best known for?",
          answers: ["Potato chips", "Fine wines", "Chewing gum", "Baby Food"],
          correctAnswer: "Baby Food",
        },
        {
          question:
            "For safety, the fuse wire used in the mains for household supply of electricity must be made of metal having",
          answers: ["low melting point", "high resistance", "high melting point", "low specific heat"],
          correctAnswer: "low melting point",
        },
        {
          question:
            "Recession is",
          answers: ["slowing down of economic activity over a limited period", "period during which unemployment may rise and demand and output may fall, leading to slump in trade", "period that results from accumulation of unsold goods, owing to fall in demand", "All of the above"],
          correctAnswer: "All of the above",
        },
        {
          question:
            "When did France became Republic?",
          answers: ["1789 AD", "1798 AD", "1792 AD", "1729 AD"],
          correctAnswer: "1792 AD",
        },
        {
          question:
            "The EPA urges people to produce less waste by engaging in efforts to reduce, reuse and what?",
          answers: ["Recycle", "Rewrap", "Repossess", "Retire"],
          correctAnswer: "Recycle",
        },
        {
          question:
            "The American General who led the revolt against the British and declared American independence was",
          answers: ["George Washington", "Bill Clinton", "George Bush", "None of the above"],
          correctAnswer: "George Washington",
        },
        {
          question:
            "When and where was weightlifting introduced in Olympics?",
          answers: ["1986 at Athens", "1988 at Seoul", "1924 at St. Louis", "1908 at London"],
          correctAnswer: "1986 at Athens",
        },
        {
          question:
            "A liquid asset is",
          answers: ["a type of asset that is in cash in the current account of the commercial bank", "a type of asset that is in the form of a deposit in the current account of the commercial bank", "either of these", "None of the above"],
          correctAnswer: "either of these",
        },
        {
          question:
            "Which legal document states a person’s wishes regarding the disposal of their property after death?",
          answers: ["Would", "Shall", "Should", "Will"],
          correctAnswer: "Will",
        },
        {
          question:
            "Which of these phrases refers to a brief success?",
          answers: ["Blaze in the pot", "Spark in the tub", "Flare in the jug", "Flash in the pan"],
          correctAnswer: "Flash in the pan",
        },
        {
          question:
            "Which of these is a type of hat",
          answers: ["Sausage roll", "Pork pie", "Scotch egg", "Potato crisp"],
          correctAnswer: "Pork pie",
        },
        {
          question:
            "The Walrus And The Carpenter is a well-known verse in which children’s novel?",
          answers: ["Swallows And Amazons", "The Hobbit", "Through The Looking Glass", "Stig Of The Dump"],
          correctAnswer: "Through The Looking Glass",
        },
        {
          question:
            "The young of which creature is known as a squab?",
          answers: ["Salmon", "Horse", "Pigeon", "Octopus"],
          correctAnswer: "Pigeon",
        },
        {
          question:
            "Construction of which of these famous landmarks was completed first?",
          answers: [
            "Empire State Building",
            "Royal Albert Hall",
            "Eiffel Tower",
            "Big Ben Clock Tower",
          ],
          correctAnswer: "Big Ben Clock Tower",
        },
        {
          question: "The Earth is approximately how many miles away from the Sun?",
          answers: ["9.3 million", "39 million", "93 million", "193 million"],
          correctAnswer: "93 million",
        },
        {
          question:
            "Which of these have to pass a test on ‘The Knowledge’ to get a licence?",
          answers: ["Taxi drivers", "Bus drivers", "Police officers", "Ambulance drivers"],
          correctAnswer: "Taxi drivers",
        },
      ],
        [
        
        {
          question:
            "Which of these religious observances lasts for the shortest period of time during the calendar year?",
          answers: ["Ramadan", "Diwali", "Lent", "Hanukkah"],
          correctAnswer: "Diwali",
        },
        {
          question:
            "Obstetrics is a branch of medicine particularly concerned with what?",
          answers: ["Childbirth", "Broken bones", "Heart conditions", "Old age"],
          correctAnswer: "Childbirth",
        },
        {
          question:
            "Who is the only British politician to have held all four “Great Offices of State” at some point during their career?",
          answers: [
            "David Lloyd George",
            "Harold Wilson",
            "James Callaghan",
            "John Major",
          ],
          correctAnswer: "James Callaghan",
        },
        {
          question:
            "In 1718, which pirate died in battle off the coast of what is now North Carolina?",
          answers: [
            "Calico Jack",
            "Blackbeard",
            "Bartholomew Roberts",
            "Captain Kidd",
          ],
          correctAnswer: "Blackbeard",
        },
        {
          question: "Sir Thomas Fearnley Cup is awarded to",
          answers: [
            "a club or a local sport association for remarkable achievements",
            "amateur athlete, not necessarily an Olympian",
            "National Olympic Committee for outstanding work",
            "None of the above",
          ],
          correctAnswer:
            "a club or a local sport association for remarkable achievements",
        },
        {
          question: "Oscar Awards were instituted in",
          answers: ["1968", "1929", "1901", "1965"],
          correctAnswer: "1929",
        },
        {
          question:
            "When did Margaret Thatcher became the first female Prime Minister of Britain?",
          answers: ["1998", "1989", "1979", "1800"],
          correctAnswer: "1979",
        },
        {
          question: "When did China test their first atomic device?",
          answers: ["1962", "1963", "1964", "1965"],
          correctAnswer: "1964",
        },
        {
          question: "When did Commander Robert Peary discover the North Pole?",
          answers: ["1904", "1905", "1908", "1909"],
          correctAnswer: "1909",
        },
        {
          question: "What is the population density of Kerala?",
          answers: ["819/sq. km", "602/sq. km", "415/sq. km", "500/sq. km"],
          correctAnswer: "819/sq. km",
        },
        {
          question: "What is the range of missile 'Akash'?",
          answers: ["4 km", "25 km", "500 m to 9 km", "150 km"],
          correctAnswer: "25 km",
        },
        {
          question:
            "When did 19 NATO members and 11 'Partners for Peace' join hands for peace plan for Kosovo Crisis?",
          answers: ["1999", "1989", "1979", "1969"],
          correctAnswer: "1999",
        },
        {
          question:
            "What is commonly known as the \"Emerald City\" in the United States?",
          answers: ["Palos Verdes, CA", "Seattle, WA", "New York, NY", "Dallas, TX"],
          correctAnswer: "Seattle, WA",
        },
        {
          question:
            "What is the name of the largest freshwater lake in the world?",
          answers: ["Lake Union", "ake Superior", "Lake Largest", "Lake Goodwin"],
          correctAnswer: "Lake Union",
        },
        {
          question:
            "Hamid Karzai was chosen president of Afghanistan in",
          answers: ["2000", "2001", "2002", "2003"],
          correctAnswer: "2002",
        },
        {
          question:
            "When and where was hockey introduced for women in Olympics?",
          answers: ["1908 at London", "1980 at Moscow", "1936 at Berlin", "1924 at Paris"],
          correctAnswer: "1980 at Moscow",
        },
        {
          question:
            "Lime is sometimes applied to soil in order to",
          answers: ["increase the alkalinity of the soil", "increase the acidity of the soil", "restore nitrates to the soil", "make the soil more porous"],
          correctAnswer: "increase the alkalinity of the soil",
        },
        {
          question:
            "Lal Bahadur Shastri is also known as",
          answers: ["Guruji", "Man of Peace", "Punjab Kesari", "Mahamana"],
          correctAnswer: "Man of Peace",
        },
        {
          question:
            "Guwahati High Court is the judicature of",
          answers: ["Nagaland", "Arunachal Pradesh", "Assam", "All of the above"],
          correctAnswer: "All of the above",
        },
        {
          question:
            "Heavy Water Project (Talcher) and Fertilizer plant (Paradeep) are famous industries of",
          answers: ["Orissa", "Tamil nadu", "Andhra Pradesh", "Kerala"],
          correctAnswer: "Orissa",
        },
        {
          question:
            "When a given amount of air is cooled",
          answers: ["the amount of moisture it can hold decreases", "its absolute humidity decreases", "its relative humidity remains constant", "its absolute humidity increases"],
          correctAnswer: "the amount of moisture it can hold decreases",
        },
        {
          question:
            "Mahabaleshwar is located in",
          answers: ["Maharashtra", "Rajasthan", "Madhya Pradesh", "Himachal Pradesh"],
          correctAnswer: "Maharashtra",
        },
        {
          question:
            "When did Yuri Alekseyevich Gagaris of Russia, the first man to reach space, reach space?",
          answers: ["1960", "1961", "1962", "1963"],
          correctAnswer: "1961",
        },
        {
          question:
            "What are the dimensions of A4 paper?",
          answers: ["8.3\" x 11.7\"", "8.5\" x 11\"", "30cm x 50cm", "8.5\" x 14\""],
          correctAnswer: "8.3\" x 11.7\"",
        },
        {
          question:
            "Lhasa airport at Tibet is the World's",
          answers: ["largest airport",
          "highest airport",
          "lowest airport",
          "busiest airport"],
          correctAnswer: "highest airport",
        },
        {
          question:
            "Which of these African countries is situated south of the equator",
          answers: ["Ethiopia",
          "Nigeria",
          "Zambia",
          "Chad"],
          correctAnswer: "Zambia",
        },
        {
          question:
            "In 2001, Donald Campbell’s Bluebird was recovered from which lake?",
          answers: ["Bala Lake", "Kleder Water", "Coniston Water", "Lake Windermere"],
          correctAnswer: "Coniston Water",
        },
        {
          question:
            "In Welsh, what does ‘afon’ mean?",
          answers: ["Fort", "Meadow", "Pool", "River"],
          correctAnswer: "River",
        },
        {
          question:
            "In 1581, Sir Francis Drake became mayor of which city?",
          answers: ["Hull", "Glasgow", "Plymouth", "Bristol"],
          correctAnswer: "Plymouth",
        }
    ]
]
      
let questions = [
    [],
    [],
    []
]
const player = {
    score: 100,
    highScore: localStorage.getItem("highscore"),
    difficulty: 0,
    currentIndex: 0,
}
setInterval(function(){
    if(player.highScore !== undefined){
        if (player.score > player.highScore) {
            localStorage.setItem("highscore", player.score);      
        }
    }
    else{
        localStorage.setItem("highscore", player.score);
    }
}, 500)




const question = document.querySelector(".question");
const btn1 = document.querySelector(".answer1");
const btn2 = document.querySelector(".answer2");
const btn3 = document.querySelector(".answer3");
const btn4 = document.querySelector(".answer4");
const lostPopup = document.getElementById("lost-wrapper");
const lostInnerPopup = document.querySelector('#losing');
const winPopup = document.querySelector('#win-wrapper');
const winInnerPopup = document.querySelector('#win');
const newGameBTN = document.getElementById('newgame');
const timer = document.getElementById("timer")
const ansTimer = document.querySelector('#ansTimer')
const timerWrapper = document.querySelector('.timer-wrapper')
let sec = 0;
let sec2 = 30;

newGameBTN.addEventListener('click', newGame);
document.querySelector('#currentScore').innerHTML = player.score;
document.querySelector('#highestScore').innerHTML = localStorage.getItem("highscore");
let executed = false;

function startTimer() {
    setInterval(function(){
        sec++
        timer.innerHTML = sec
    }, 1000
    )
}   
function resetTimer(){
    sec = 0;
} 
newGame()
function nextDifficulty() {
    player.difficulty += 1;
    player.currentIndex = 0;
}
function setActiveClass(element){
    setTimeout(()=>{
        element.classList.remove('rightAnswer')

    }, 1500)
}

function setClass(element){
    setTimeout(()=>{
        element.classList.remove('wrongAnswer')
        popupLost()
    }, 1500)
}

function popupLost(){
    lostPopup.classList.remove("lost-wrapper");
    lostInnerPopup.innerHTML = 'You Lost <br> Your score is: <br>' + player.score + '<br> Youre total time is: <br>' + timer.innerHTML + ' sec'
    timerWrapper.style.display = 'none'
}

function answerTime(event){
    setInterval(()=>{
        sec2--
        event.innerHTML = sec2
        if(sec2 === 0){
            popupLost()
        }
    }, 1000)
}
answerTime(ansTimer)
btn1.addEventListener('click', ()=> isAnswerRight(btn1))
btn2.addEventListener('click', ()=> isAnswerRight(btn2))
btn3.addEventListener('click', ()=> isAnswerRight(btn3))
btn4.addEventListener('click', ()=> isAnswerRight(btn4))

function isAnswerRight(event){
    if(event.innerHTML == questions[player.difficulty][player.currentIndex].correctAnswer ) { 
        player.currentIndex += 1;
        player.score = player.score*2;
        event.classList.add("rightAnswer");
        setActiveClass(event)
        if(player.difficulty > questions.length){
            isGameOver()
        }
        if(player.currentIndex > questions[player.difficulty].length-1){
                nextDifficulty()
            }
        
        setTimeout(()=>{
            
            //console.log(player.currentIndex)
            //console.log(player.difficulty)
            question.innerHTML = questions[player.difficulty][player.currentIndex].question
            btn1.innerHTML = questions[player.difficulty][player.currentIndex].answers[0];
            btn2.innerHTML = questions[player.difficulty][player.currentIndex].answers[1];
            btn3.innerHTML = questions[player.difficulty][player.currentIndex].answers[2];
            btn4.innerHTML = questions[player.difficulty][player.currentIndex].answers[3];
            document.querySelector('#currentScore').innerHTML = player.score;
            document.querySelector('#highestScore').innerHTML = localStorage.getItem("highscore");
            sec2 = 30;
        }, 1500)
    }
    else{
        event.classList.add('wrongAnswer')
        setClass(event)
    }
}

function newGame(){
    questions[0] = oldQuestions[0].sort(() => Math.random() - 0.5);
    questions[1] = oldQuestions[1].sort(() => Math.random() - 0.5);
    questions[2] = oldQuestions[2].sort(() => Math.random() - 0.5);
    lostPopup.classList.add("lost-wrapper");
    timerWrapper.style.display = 'inline-block';
    sec=0;
    sec2=30;
    player.score = 100;
    player.currentIndex = 0;
    player.difficulty = 0;
    question.innerHTML = questions[player.difficulty][player.currentIndex].question
    btn1.innerHTML = questions[player.difficulty][player.currentIndex].answers[0];
    btn2.innerHTML = questions[player.difficulty][player.currentIndex].answers[1];
    btn3.innerHTML = questions[player.difficulty][player.currentIndex].answers[2];
    btn4.innerHTML = questions[player.difficulty][player.currentIndex].answers[3];
    if(!executed){
        startTimer()
        executed=true
    }
    else{
        resetTimer() 
    }
}

function isGameOver(){
    winPopup.classList.remove('win-wrapper');
    winInnerPopup.innerHTML = 'CONGRATS! <br> You won the game <br> Your time is: <br>' + timer.innerHTML
}
