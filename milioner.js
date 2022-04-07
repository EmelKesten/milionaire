const oldQuestions = [
    {
        "question" : "In what children's game are participants chased by someone designated \"It\"?",
        "content" : [
            "Tag",
            "Simon Says",
            "Charades",
            "Hopscotch"
        ],
        "correct" : 0
    },
    {
        "question" : "On a radio, stations are changed by using what control?",
        "content" : [
            "Tuning",
            "Volume",
            "Bass",
            "Treble"
        ],
        "correct" : 0
    },
    {
        "question" : "Which material is most dense?",
        "content" : [
            "Silver",
            "Styrofoam",
            "Butter",
            "Gold"
        ],
        "correct" : 3
    },
    {
        "question" : "Which state in the United States is largest by area?",
        "content" : [
            "Alaska",
            "California",
            "Texas",
            "Hawaii"
        ],
        "correct" : 0
    },
    {
        "question" : "What is Aurora Borealis commonly known as?",
        "content" : [
            "Fairy Dust",
            "Northern Lights",
            "Book of ages",
            "a Game of Thrones main character"
        ],
        "correct" : 1
    },
    {
        "correct": 3,
        "content": [
            "developed the telescope",
            "discovered four satellites of Jupiter",
            "discovered that the movement of pendulum produces a regular time measurement",
            "All of the above"
        ],
        "question": "Galileo was an Italian astronomer who"
    },
    {
        "correct": 3,
        "content": [
            "the infrared light kills bacteria in the body",
            "resistance power increases",
            "the pigment cells in the skin get stimulated and produce a healthy tan",
            "the ultraviolet rays convert skin oil into Vitamin D"
        ],
        "question": "Exposure to sunlight helps a person improve his health because"
    },
    {
        "correct": 0,
        "content": [
            "a club or a local sport association for remarkable achievements",
            "amateur athlete, not necessarily an Olympian",
            "National Olympic Committee for outstanding work",
            "None of the above"
        ],
        "question": "Sir Thomas Fearnley Cup is awarded to"
    },
    {
        "correct": 1,
        "content": [
            "1968",
            "1929",
            "1901",
            "1965"
        ],
        "question": "Oscar Awards were instituted in"
    },
    {
        "correct": 2,
        "content": [
            "1998",
            "1989",
            "1979",
            "1800"
        ],
        "question": "When did Margaret Thatcher became the first female Prime Minister of Britain?"
    },
    {
        "correct": 2,
        "content": [
            "15th April",
            "12th December",
            "1st May",
            "1st August"
        ],
        "question": "When is the International Workers' Day?"
    },
    {
        "correct": 2,
        "content": [
            "1962",
            "1963",
            "1964",
            "1965"
        ],
        "question": "When did China test their first atomic device?"
    },
    {
        "correct": 3,
        "content": [
            "1904",
            "1905",
            "1908",
            "1909"
        ],
        "question": "When did Commander Robert Peary discover the North Pole?"
    },
    {
        "correct": 0,
        "content": [
            "819/sq. km",
            "602/sq. km",
            "415/sq. km",
            "500/sq. km"
        ],
        "question": "What is the population density of Kerala?"
    },
    {
        "correct": 1,
        "content": [
            "4 km",
            "25 km",
            "500 m to 9 km",
            "150 km"
        ],
        "question": "What is the range of missile 'Akash'?"
    },
    {
        "question" : "In the U.S., if it's not Daylight Saving Time, it's what?",
        "content" : [
            "Borrowed time",
            "Overtime",
            "Standard time",
            "Party time"
        ],
        "correct" : 2
    },
    {
        "question" : "Which part of the body are you most likely to \"stub\"?",
        "content" : [
            "Toe",
            "Knee",
            "Elbow",
            "Brain"
        ],
        "correct" : 0
    },
    {
        "question" : "Which country is largest by area?",
        "content" : [
            "UK",
            "USA",
            "Russia",
            "China"
        ],
        "correct" : 2
    },
    {
        "question" : "What does the \"F\" stand for in FBI?",
        "content" : [
            "Foreign",
            "Federal",
            "Flappy",
            "Face"
        ],
        "correct" : 1
    },
    {
        "question" : "The US declared war on which country after the bombing of Pearl Harbor?",
        "content" : [
            "Japan",
            "Russia",
            "Germany",
            "China"
        ],
        "correct" : 0
    },
    {
        "correct": 0,
        "content": [
            "Letter of Credit (L/C)",
            "laissezfaire",
            "inflation",
            "None of the above"
        ],
        "question": "A guarantee to an exporter that the importer of his goods will pay immediately for the goods ordered by him, is known as"
    },
    {
        "correct": 3,
        "content": [
            "Visible light",
            "Infrared radiation",
            "X-rays and gamma rays",
            "Ultraviolet radiation"
        ],
        "question": "The ozone layer restricts"
    },
    {
        "correct": 0,
        "content": [
            "the first Buddhist pilgrim of China to visit India during the reign of Chandragupta Vikramaditya",
            "the discoverer of Puerto Rico and Jamaica",
            "the first Buddhist pilgrim of India to visit China",
            "None of the above"
        ],
        "question": "Fa-Hien was"
    },
    {
        "correct": 0,
        "content": [
            "Harvard",
            "University of Washington",
            "Yale",
            "Oxford"
        ],
        "question": "What was the first university in the United States"
    },
    {
        "correct": 0,
        "content": [
            "The amount of energy it takes to move an electron through a potential difference of 1 volt",
            "The number of volts it takes to move an electon a meter",
            "The number of electrons it takes to kill a human being",
            "The flux of current through a surface parallel to a capacitor"
        ],
        "question": "An electron volt is"
    },
    {
        "correct": 0,
        "content": [
            "14th November",
            "11th December",
            "15th October",
            "1st July"
        ],
        "question": "When is the World's Diabetes Day?"
    },
    {
        "correct": 0,
        "content": [
            "Kelvin",
            "Celsius",
            "Centigrade",
            "Fahrenheit"
        ],
        "question": "What is the S.I. unit of temperature?"
    },
    {
        "correct": 0,
        "content": [
            "July 21, 1969",
            "July 21, 1970",
            "July 21, 1963",
            "July 21, 1972"
        ],
        "question": "When did US astronauts Neil Armstrong and Edwin E. Aldrin land on the moon?"
    },
    {
        "correct": 0,
        "content": [
            "the density of milk increases",
            "the density of milk decreases",
            "the density of milk remains unchanged",
            "it becomes more viscous"
        ],
        "question": "When cream is separated from milk"
    },
    {
        "correct": 0,
        "content": [
            "1999",
            "1989",
            "1979",
            "1969"
        ],
        "question": "When did 19 NATO members and 11 'Partners for Peace' join hands for peace plan for Kosovo Crisis?"
    },
    {
        "question" : "An albino gorilla usually has what color fur?",
        "content" : [
            "Brown",
            "Black",
            "White",
            "Golden"
        ],
        "correct" : 2
    },
    {
        "question" : "When you enter a situation without a definite plan of action, you are said to be \"playing it by\" what?",
        "content" : [
            "Fingertips",
            "Ear",
            "Nose",
            "Mouth"
        ],
        "correct" : 1
    },
    {
        "question" : "What is commonly known as the \"Emerald City\" in the United States?",
        "content" : [
            "Palos Verdes, CA",
            "Seattle, WA",
            "New York, NY",
            "Dallas, TX"
        ],
        "correct" : 1
    },
    {
        "question" : "What is the national emblem of Canada?",
        "content" : [
            "Maple Leaf",
            "Brown Bear",
            "Maple Syrup",
            "Waffle"
        ],
        "correct" : 0
    },
    {
        "question" : "What is the name of the largest freshwater lake in the world?",
        "content" : [
            "Lake Union",
            "Lake Superior",
            "Lake Largest",
            "Lake Goodwin"
        ],
        "correct" : 0
    },
    {
        "correct": 2,
        "content": [
            "Birds",
            "Cell formation",
            "Relation between organisms and their environment",
            "Tissues"
        ],
        "question": "Ecology deals with"
    },
    {
        "correct": 0,
        "content": [
            "Earth's gravitational pull",
            "Moon's gravitational pull",
            "Centripetal force due to the earth's rotation",
            "Pressure of the atmosphere"
        ],
        "question": "The escape velocity of a rocket fired from the earth towards the moon is the velocity required to overcome"
    },
    {
        "correct": 3,
        "content": [
            "was a great Italian painter, sculptor and architect",
            "got universal fame form his masterpiece \"Mona lisa\"",
            "drew models of organs such as the heart, lungs and womb",
            "All of the above"
        ],
        "question": "Leonardo da Vinci"
    },
    {
        "correct": 2,
        "content": [
            "2000",
            "2001",
            "2002",
            "2003"
        ],
        "question": "Hamid Karzai was chosen president of Afghanistan in"
    },
    {
        "correct": 0,
        "content": [
            "New York, USA",
            "Haque (Netherlands)",
            "Geneva",
            "Paris"
        ],
        "question": "The headquarters of UN are situated at"
    },
    {
        "correct": 2,
        "content": [
            "friction between the earth and the bus",
            "friction between the passengers and the earth",
            "inertia of the passengers",
            "inertia of the bus"
        ],
        "question": "When a moving bus stops suddenly, the passenger are pushed forward because of the"
    },
    {
        "correct": 1,
        "content": [
            "1908 at London",
            "1980 at Moscow",
            "1936 at Berlin",
            "1924 at Paris"
        ],
        "question": "When and where was hockey introduced for women in Olympics?"
    },
    {
        "correct": 0,
        "content": [
            "increase the alkalinity of the soil",
            "increase the acidity of the soil",
            "restore nitrates to the soil",
            "make the soil more porous"
        ],
        "question": "Lime is sometimes applied to soil in order to"
    },
    {
        "correct": 1,
        "content": [
            "discovered Greenland",
            "travelled through China, India and other parts of Asia",
            "travelled round the cape of Good Hope",
            "discovered Canada"
        ],
        "question": "Marco Polo"
    },
    {
        "correct": 1,
        "content": [
            "Guruji",
            "Man of Peace",
            "Punjab Kesari",
            "Mahamana"
        ],
        "question": "Lal Bahadur Shastri is also known as"
    },
    {
        "question" : "Which of the following consumer goods is the Gerber Products Co. best known for?",
        "content" : [
            "Potato chips",
            "Fine wines",
            "Chewing gum",
            "Baby Food"
        ],
        "correct" : 3
    },
    {
        "question" : "In which of these household appliances would you find a lint screen?",
        "content" : [
            "Dishwasher",
            "Microwave oven",
            "Clothes dryer",
            "Trash compactor"
        ],
        "correct" : 2
    },
    {
        "question" : "What are the three primary colors?",
        "content" : [
            "Red, green, blue",
            "Magenta, pink, cyan",
            "Yellow, salmon, brown",
            "White, grey, black"
        ],
        "correct" : 0
    },
    {
        "question" : "In aviation, what does UFO stand for?",
        "content" : [
            "Unified Flying Object",
            "Unitary Flinging Obsession",
            "United Flag Opposition",
            "Unidentified Flying Object"
        ],
        "correct" : 3
    },
    {
        "question" : "In aviation, what does UFO stand for?",
        "content" : [
            "Unified Flying Object",
            "Unitary Flinging Obsession",
            "United Flag Opposition",
            "Unidentified Flying Object"
        ],
        "correct" : 3
    },
    {
        "correct": 0,
        "content": [
            "low melting point",
            "high resistance",
            "high melting point",
            "low specific heat"
        ],
        "question": "For safety, the fuse wire used in the mains for household supply of electricity must be made of metal having"
    },
    {
        "correct": 3,
        "content": [
            "slowing down of economic activity over a limited period",
            "period during which unemployment may rise and demand and output may fall, leading to slump in trade",
            "period that results from accumulation of unsold goods, owing to fall in demand",
            "All of the above"
        ],
        "question": "Recession is"
    },
    {
        "correct": 3,
        "content": [
            "Nagaland",
            "Arunachal Pradesh",
            "Assam",
            "All of the above"
        ],
        "question": "Guwahati High Court is the judicature of"
    },
    {
        "correct": 0,
        "content": [
            "Orissa",
            "Tamil nadu",
            "Andhra Pradesh",
            "Kerala"
        ],
        "question": "Heavy Water Project (Talcher) and Fertilizer plant (Paradeep) are famous industries of"
    },
    {
        "correct": 0,
        "content": [
            "the amount of moisture it can hold decreases",
            "its absolute humidity decreases",
            "its relative humidity remains constant",
            "its absolute humidity increases"
        ],
        "question": "When a given amount of air is cooled"
    },
    {
        "correct": 2,
        "content": [
            "1789 AD",
            "1798 AD",
            "1792 AD",
            "1729 AD"
        ],
        "question": "When did France became Republic?"
    },
    {
        "correct": 2,
        "content": [
            "Group A only",
            "Group B only",
            "Group A and O",
            "Group AB only"
        ],
        "question": "Of the blood groups A, B, AB and O, which one is transfused into a person whose blood group is A?"
    },
    {
        "correct": 0,
        "content": [
            "coins",
            "numbers",
            "stamps",
            "space"
        ],
        "question": "Numismatics is the study of"
    },
    {
        "correct": 2,
        "content": [
            "a classed unique society",
            "a united society",
            "a classed society",
            "None of the above"
        ],
        "question": "Karl Marx's ideology advocated"
    },
    {
        "correct": 0,
        "content": [
            "Maharashtra",
            "Rajasthan",
            "Madhya Pradesh",
            "Himachal Pradesh"
        ],
        "question": "Mahabaleshwar is located in"
    },
    {
        "question" : "What kind of animal traditionally lives in a sty?",
        "content" : [
            "Cow",
            "Pig",
            "Fox",
            "Teenager"
        ],
        "correct" : 1
    },
    {
        "question" : "The EPA urges people to produce less waste by engaging in efforts to reduce, reuse and what?",
        "content" : [
            "Recycle",
            "Rewrap",
            "Repossess",
            "Retire"
        ],
        "correct" : 0
    },
    {
        "question" : "What is the second most common gas in the air?",
        "content" : [
            "Nitrogen",
            "Oxygen",
            "Water",
            "Helium"
        ],
        "correct" : 1
    },
    {
        "question" : "Which month has only 28 days (unless it's a leap year)?",
        "content" : [
            "March",
            "September",
            "June",
            "Feburary"
        ],
        "correct" : 3
    },
    {
        "correct": 1,
        "content": [
            "give",
            "prove",
            "both",
            "None of the above"
        ],
        "question": "Pythagoras was first to ____ the universal validity of geometrical theorem."
    },
    {
        "correct": 0,
        "content": [
            "George Washington",
            "Bill Clinton",
            "George Bush",
            "None of the above"
        ],
        "question": "The American General who led the revolt against the British and declared American independence was"
    },
    {
        "correct": 0,
        "content": [
            "1986 at Athens",
            "1988 at Seoul",
            "1924 at St. Louis",
            "1908 at London"
        ],
        "question": "When and where was weightlifting introduced in Olympics?"
    },
    {
        "correct": 1,
        "content": [
            "Junagarh, Gujarat",
            "Diphu, Assam",
            "Kohima, Nagaland",
            "Gangtok, Sikkim"
        ],
        "question": "Garampani sanctuary is located at"
    },
    {
        "correct": 3,
        "content": [
            "states that no one was to be imprisoned without a writ or warrant stating the charge against him",
            "provided facilities to a prisoner to obtain either speedy trial or release in bail",
            "safeguarded the personal liberties of the people against arbitrary imprisonment by the king's orders",
            "All of the above"
        ],
        "question": "The Habeas Corpus Act of 1679"
    },
    {
        "correct": 1,
        "content": [
            "1960",
            "1961",
            "1962",
            "1963"
        ],
        "question": "When did Yuri Alekseyevich Gagaris of Russia, the first man to reach space, reach space?"
    },
    {
        "question" : "What are the dimensions of A4 paper?",
        "content" : [
            "8.3\" x 11.7\"",
            "8.5\" x 11\"",
            "30cm x 50cm",
            "8.5\" x 14\""
        ],
        "correct" : 0
    },
    {
        "correct": 2,
        "content": [
            "energy",
            "speed",
            "distance",
            "intensity"
        ],
        "question": "Light Year is related to"
    },
    {
        "correct": 2,
        "content": [
            "a type of asset that is in cash in the current account of the commercial bank",
            "a type of asset that is in the form of a deposit in the current account of the commercial bank",
            "either of these",
            "None of the above"
        ],
        "question": "A liquid asset is"
    },
    {
        "correct": 1,
        "content": [
            "largest airport",
            "highest airport",
            "lowest airport",
            "busiest airport"
        ],
        "question": "Lhasa airport at Tibet is the World's"
    },
    {
        "correct": 2,
        "content" : [
            "Ethiopia",
            "Nigeria",
            "Zambia",
            "Chad"
        ],
        "question": "Which of these African countries is situated south of the equator?"
    }
]
let questions
const player = {
    score: 100,
    highScore: localStorage.getItem("highscore"),
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
document.querySelector('#highestScore').innerHTML = player.highScore;
let executed = false;

function startTimer() {
    setInterval(function(){
        sec++
        timer.innerHTML = sec
    }, 1000
    )
    function stopTimer(){
        return
    }
}   
function resetTimer(){
    sec = 0;
} 
newGame()

function setActiveClass(element){
    setTimeout(()=>{
        element.classList.remove('rightAnswer')

    }, 3000)
}

function setClass(element){
    setTimeout(()=>{
        element.classList.remove('wrongAnswer')
        popupLost()
    }, 3000)
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
    if(event.innerHTML == questions[player.currentIndex].content[questions[player.currentIndex].correct]){ 
        player.currentIndex += 1;
        player.score = player.score*2;
        event.classList.add("rightAnswer");
        setActiveClass(event)
        if(player.currentIndex > questions.length){
            isGameOver()
        }
        setTimeout(()=>{
            question.innerHTML = questions[player.currentIndex].question
            btn1.innerHTML = questions[player.currentIndex].content[0];
            btn2.innerHTML = questions[player.currentIndex].content[1];
            btn3.innerHTML = questions[player.currentIndex].content[2];
            btn4.innerHTML = questions[player.currentIndex].content[3];
            document.querySelector('#currentScore').innerHTML = player.score;
            document.querySelector('#highestScore').innerHTML = player.highScore;
            sec2 = 30;
        }, 3000)
    }
    else{
        event.classList.add('wrongAnswer')
        setClass(event)
    }
}

function newGame(){
    questions = oldQuestions.sort(() => Math.random() - 0.5);
    question.innerHTML = questions[0].question
    btn1.innerHTML = questions[0].content[0];
    btn2.innerHTML = questions[0].content[1];
    btn3.innerHTML = questions[0].content[2];
    btn4.innerHTML = questions[0].content[3];
    if(!executed){
        startTimer()
        executed=true
    }
    else{
        resetTimer() 
    }
    lostPopup.classList.add("lost-wrapper");
    timerWrapper.style.display = 'inline-block';
    sec=0;
    sec2=30;
    player.score = 100;
}

function isGameOver(){
    winPopup.classList.remove('win-wrapper');
    winInnerPopup.innerHTML = 'CONGRATS! <br> You won the game <br> Your time is: <br>' + timer.innerHTML
}
