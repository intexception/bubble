// Project imports
var BotPlayer = require('./BotPlayer');
var FakeSocket = require('./FakeSocket');
var PacketHandler = require('../PacketHandler');

function BotLoader(gameServer,botAmount) {
	this.gameServer = gameServer;
	
	// Names
	this.randomNames = ["Bacteria","Spore","Satanist","Earth","Nazi","Moon","Poland","sanik","ayy lmao","Reddit","CIA","wojak","doge","sir","facepunch","8","Russia","Circle","Blob","4chan","Mars","Ogar","NASA","Helper","Parasite","Square","Round","Bug","Splitting","Ice"];
	this.nameIndex = 0;
	/*
	 array1 = new Array("Aback", "Abaft", "Abandoned", "Abashed", "Aberrant", "Abhorrent", "Abiding", "Abject", "Ablaze", "Able", "Abnormal", "Aboard", "Aboriginal", "Abortive", "Abounding", "Abrasive", "Abrupt", "Absent-Minded", "Absent", "Absorbed", "Absorbing", "Abstracted", "Absurd", "Abusive", "Acceptable", "Accepted", "Accessible", "Accidental", "Accurate", "Acoustic", "Acrid", "Active", "Actually", "Ad Hoc", "Adamant", "Adaptable", "Addicted", "Adhesive", "Adjoining", "Adorable", "Adventurous", "Affable", "Affected", "Affectionate", "Afraid", "African", "Aggresive", "Agnostic", "Agonizing", "Ahead", "Alarmist", "Alcoholic", "Alert", "Alike", "Alive", "Alleged", "Alluring", "Aloof", "Ambiguous", "Ambitious", "Amiable", "Ample", "Amuck", "Amused", "Anal", "Analytical", "Ancient", "Angry", "Animated", "Annoyed", "Anorexic", "Anxious", "Apathetic", "Apologetic", "Apoplexic", "Apprehensive", "Aquatic", "Argumentative", "Aristocratic", "Aromatic", "Arrogant", "Articulate", "Aspiring", "Assorted", "Astonished", "Astonishing", "Attentive", "Auspicious", "Available", "Average", "Aware", "Awkward", "Axiomatic", "Babbling", "Babyish", "Backward", "Bad", "Baked", "Bald", "Bankrupt", "Baptist", "Barbarous", "Bashful", "Bawdy", "Beautiful", "Befitting", "Belligerent", "Bemused", "Benevolent", "Bereft", "Berserk", "Better", "Bewildered", "Big", "Billowy", "Bitching", "Bizarre", "Black", "Blase'", "Blind", "Bloody", "Blue", "Blunt", "Blurry", "Boiling", "Bold", "Bombastic", "Boorish", "Bored", "Boring", "Bossy", "Bottomless", "Boundless", "Bow-Legged", "Brainy", "Brash", "Brave", "Brawny", "Breezy", "Brief", "Bright", "Brilliant", "Broad", "Broke", "Broken", "Brutish", "Buddhist", "Bummed", "Bumpy", "Buried", "Burly", "Burning", "Bushwacked", "Busy", "Buxom", "Cagey", "Callous", "Calm", "Canadian", "Candid", "Cantankerous", "Capable", "Capricious", "Careful", "Careless", "Caring", "Catholic", "Caustic", "Cautious", "Ceaseless", "Changeable", "Charismatic", "Charming", "Cheeky", "Cheerful", "Childish", "Childlike", "Chilled", "Chilly", "Chinese", "Chirpy", "Chivalrous", "Christian Scientist", "Chronic", "Chubby", "Chunky", "Clairvoyant", "Clammy", "Classy", "Clever", "Cloistered", "Cloudy", "Clueless", "Clumsy", "Coarse", "Coherent", "Cold-Hearted", "Cold", "Colossal", "Combative", "Comfortable", "Compassionate", "Complacent", "Compulsive", "Conceited", "Concerned", "Confident", "Confused", "Conscientious", "Considerate", "Cooing", "Cool", "Cooperative", "Cosmic", "Courageous", "Cowardly", "Crabby", "Crafty", "Cranky", "Craven", "Crazy", "Creamy", "Credible", "Creepy", "Critical", "Crooked", "Cross-Eyed", "Cross", "Cruel", "Cuddly", "Cultured", "Curious", "Curly", "Curved", "Cynical", "Daffy", "Daft", "Daily", "Damaged", "Damaging", "Damp", "Dangerous", "Dapper", "Daring", "Dark", "Dashing", "Dauntless", "Dazzling", "Deadly", "Deadpan", "Deaf", "Death", "Debonair", "Deceitful", "Decisive", "Decorous", "Deep-Thinking", "Deep", "Deeply", "Defective", "Delightful", "Demanding", "Demented", "Demonic", "Dependable", "Depressed", "Deranged", "Deserted", "Desperate", "Detailed", "Determined", "Devilish", "Diabolical", "Didactic", "Diligent", "Direful", "Dirty", "Disagreeable", "Discouraged", "Discreet", "Disgusted", "Dishevelled", "Dishonest", "Disillusioned", "Dismayed", "Disparaging", "Dispensable", "Disrespectful", "Dissatisfied", "Distressed", "Disturbed", "Divergent", "Dixie", "Dizzy", "Domineering", "Doubtful", "Draconian", "Dramatic", "Drooling", "Drug-Addled", "Drunk", "Dry", "Dull", "Dusty", "Dutiful", "Dying", "Dynamic", "Dysfunctional", "Eager", "Early", "Earsplitting", "Earthy", "Easygoing", "Eatable", "Economic", "Educated", "Effervescent", "Efficacious", "Efficient", "Egomaniacal", "Elated", "Elderly", "Electric", "Elfin", "Elite", "Eloquent", "Embarrassed", "Eminent", "Emotional", "Emotionally-Absent", "Empty", "Enchanted", "Enchanting", "Encouraging", "Endearing", "Endurable", "Energetic", "Enhanced", "Entertaining", "Enthusiastic", "Equable", "Erect", "Erratic", "Ethereal", "Evanescent", "Evasive", "Evil", "Exacting", "Excellent", "Excited", "Exclusive", "Exhausted", "Exhibitionist", "Exotic", "Expensive", "Expert", "Extremely-Allergic", "Exuberant", "Exultant", "Fabulous", "Facetious", "Faded", "Fair", "Faithful", "Fallacious", "Famous", "Fanatical", "Fanciful", "Fancy", "Fantastic", "Fascinated", "Fast", "Fat", "Faulty", "Fearless", "Feigned", "Feisty", "Fertile", "Festive", "Fey", "Fidgety", "Fiendish", "Fierce", "Fiery", "Filthy", "Finicky", "Finnish", "Flagrant", "Flaming", "Flashy", "Flattened", "Flattered", "Flawless", "Flippant", "Flowery", "Foamy", "Foolish", "Foregoing", "Forgetful", "Forlorn", "Formal", "Fortunate", "Foul", "Fragrant", "Frail", "Frank", "French", "Fresh", "Fretful", "Friendly", "Frigid", "Frost-Bitten", "Frustrated", "Functional", "Funny", "Furtive", "Futuristic", "Gabby", "Gainful", "Galactic", "Galloping", "Gambling", "Gamy", "Gaping", "Garrulous", "Gassy", "Gaudy", "Gawking", "Gay", "Generous", "Genius", "Gentle", "Ghostly", "Giant", "Giddy", "Gifted", "Gigantic", "Giggling", "Giving", "Glamorous", "Glazed", "Gleaming", "Glib", "Glistening", "Gloomy", "Glorified", "Glorious", "Glossy", "Glum", "Godlike", "Godly", "Gone", "Good", "Goofy", "Gorgeous", "Graceful", "Gragarious", "Grandiose", "Grateful", "Gratis", "Great", "Greedy", "Green", "Gregarious", "Grizzled", "Groomed", "Groovy", "Grotesque", "Grouchy", "Gruesome", "Grumpy", "Guarded", "Guiltless", "Guilty", "Gullible", "Gusty", "Guttural", "Habitual", "Half", "Hallowed", "Halting", "Handicapped", "Handled", "Handsome", "Handsomely", "Hapless", "Happy", "Hardy", "Harmonious", "Harried", "Harsh", "Hateful", "Haughty", "Heady", "Healthy", "Heartbreaking", "Heavenly", "Heavily-Medicated", "Heavy", "Hebophrenic", "Hell's", "Hellish", "Helpful", "Hermaphrodite", "Heroic", "Hesitant", "High", "Highfalutin", "Hilarious", "Hindu", "Hippy", "Historical", "Holistic", "Hollow", "Hollywood", "Holy", "Homophobic", "Honest", "Honking", "Honorable", "Hoodwinked", "Hopeful", "Hopeless", "Horny", "Horrible", "Horrified", "Hospitable", "Hot", "Huge", "Hulking", "Humble", "Humdrum", "Humorous", "Hungarian", "Hungry", "Hurried", "Hurt", "Hyperactive", "Hypnotic", "Hypochondriac", "Hysterical", "Icky", "Idiotic", "Ignorant", "Ill-Bred", "Illegal", "Illustrious", "Imaginary", "Imaginative", "Immaculate", "Immature", "Immense", "Imminent", "Impartial", "Impatient", "Imperfect", "Impolite", "Imported", "Imposing", "Impudent", "Impulsive", "Inactive", "Incandescent", "Incensed", "Incompetent", "Inconclusive", "Inconsiderate", "Indecent", "Independent", "Indicted", "Industrious", "Inert", "Ingratiating", "Inimiable", "Innate", "Innocent", "Insane", "Insipid", "Insistent", "Insolent", "Instinctive", "Insufferable", "Intelligent", "Intergalactic", "Internal", "Intolerant", "Intractable", "Intrepid", "Intrigued", "Invincible", "Iranian", "Irate", "Island", "Italian", "Itchy", "Jaded", "Jagged", "Japanese", "Jazzy", "Jealous", "Jehova Witness", "Jewish", "Jittery", "Jobless", "Jolly", "Jovial", "Joyous", "Judicious", "Jumbled", "Jumpy", "Juvenile", "Kaput", "Keen", "Kind", "Kindhearted", "Kindly", "Knobby", "Knocked-Up", "Knotty", "Knowing", "Knowledgeable", "Known", "Korean", "Labored", "Lackadaisical", "Lacking", "Lamentable", "Languid", "Large", "Late", "Latin", "Latvian", "Laughable", "Lavish", "Law-Breaking", "Lazy", "Leader", "Leaky", "Lean", "Learned", "Lecherous", "Legal", "Lethal", "Level", "Lewd", "Light", "Likeable", "Liquid", "Lisping", "Literate", "Little", "Lively", "Lobotomized", "Logical", "Lonely", "Long", "Longing", "Loopy", "Loose", "Lopsided", "Loquacious", "Lost", "Loutish", "Lovely", "Loving", "Low", "Lowly", "Loyal", "Lucky", "Ludicrous", "Lumbering", "Luminous", "Lush", "Lusty", "Luxuriant", "Lying", "Lyrical", "Macabre", "Macho", "Mad", "Maddening", "Madly", "Magenta", "Magical", "Magnificent", "Majestic", "Makeshift", "Malicious", "Mammoth", "Mangled", "Maniacal", "Many", "Marked", "Massive", "Materialistic", "Mature", "Mean", "Measly", "Meek", "Melodic", "Merciful", "Mere", "Messy", "Methodist", "Meticulous", "Mighty", "Mindless", "Miniature", "Minor", "Misanthropic", "Mischievous", "Miscreant", "Miserable", "Misunderstood", "Moaning", "Modern", "Modest", "Moldy", "Momentous", "Moody", "Morbid", "Mormon", "Moronic", "Mother", "Mournful", "Mousy", "Muddled", "Mundane", "Munificent", "Murderous", "Murky", "Muscular", "Mushy", "Muslim", "Musty", "Mute", "Mysterious", "Naive", "Naked", "Nappy", "Narrow", "Nasty", "Naughty", "Nauseating", "Nebulous", "Needless", "Needy", "Negligent", "Neighborly", "Nervous", "Neurotic", "Neutered", "New", "Nice", "Nifty", "Noiseless", "Noisy", "Nonchalant", "Nondescript", "Nonstop", "Norwegian", "Nostalgic", "Nosy", "Noxious", "Nuanced", "Nuclear", "Nudist", "Null", "Numberless", "Numerous", "Nutritious", "Oafish", "Obedient", "Obeisant", "Obliging", "Obnoxious", "Obscene", "Obsequious", "Observant", "Obsolete", "Obtainable", "Obvious", "Oceanic", "Odd", "Offbeat", "Old", "Omniscient", "Onerous", "Optimal", "Optimistic", "Orange", "Ordinary", "Organic", "Orgasmic", "Orthodox Jewish", "Ossified", "Outgoing", "Oval", "Overconfident", "Overjoyed", "Overrated", "Overt", "Overwhelmed", "Overwrought", "Painful", "Painstaking", "Panoramic", "Paranoid", "Parched", "Parsimonious", "Passive-Aggresive", "Passive", "Pastoral", "Pathetic", "Peaceful", "Penitent", "Penniless", "Pensive", "Perfect", "Perfunctory", "Periodic", "Permissible", "Perpetual", "Perplexed", "Petite", "Petulant", "Philanthropic", "Phobic", "Picayune", "Picky", "Piquant", "Placid", "Plant", "Plausible", "Pleasant", "Plucky", "Pointless", "Poison", "Polish", "Polite", "Political", "Polygamist", "Pompous", "Poor", "Poorly-Adjusted", "Popular", "Positive", "Possessive", "Precious", "Precise", "Premium", "Pretty", "Prickly", "Productive", "Profuse", "Proper", "Prosperous", "Protective", "Proud", "Psychedelic", "Psychotic", "Puffy", "Pumped", "Punchdrunk", "Puny", "Purple", "Quack", "Quaint", "Quarrelsome", "Questionable", "Quick", "Quickest", "Quiet", "Quixotic", "Quizzical", "Rabid", "Racial", "Racist", "Radioactive", "Ragged", "Rail-Thin", "Rainy", "Rambling", "Rambunctious", "Rampant", "Randy", "Ransacked", "Ranting", "Rare", "Raspy", "Rational", "Ratty", "Raucous", "Rebel", "Receptive", "Recondite", "Red", "Redundant", "Reflective", "Regal", "Relentless", "Reliable", "Relieved", "Religious", "Reminiscent", "Resolute", "Resonant", "Responsible", "Restless", "Retarded", "Retired", "Rhetorical", "Rich", "Righteous", "Rightful", "Rigid", "Ritzy", "Roasted", "Robust", "Romantic", "Roomy", "Rough", "Round", "Rowdy", "Royal", "Ruddy", "Rude", "Ruined", "Rural", "Russian", "Rustic", "Rusty", "Ruthless", "Sable", "Sad", "Sadsack", "Safe", "Saintly", "Sandy", "Sanguine", "Sarcastic", "Sassy", "Satan-Worshiping", "Satisfied", "Satisfying", "Saturday Night", "Savoy", "Scandalous", "Scarce", "Scared", "Scary", "Schizophrenic", "Scientific", "Scintillating", "Scrawny", "Screwed", "Secretive", "Sedate", "Seemly", "Seething", "Selective", "Selfish", "Selfless", "Sensitive", "Serious", "Sexually-Ambiguous", "Sexually Deviant", "Sexy", "Shady", "Shaky", "Shallow", "Sharp", "Shocking", "Short-Tempered", "Short", "Shrieking", "Shrill", "Shy", "Silly", "Sincere", "Singing", "Skillful", "Skinny", "Skittish", "Slap Happy", "Sleepy", "Slick", "Slim", "Slippery", "Sloppy", "Slow", "Slutty", "Sly", "Small", "Smart", "Smelly", "Smooth-Talking", "Snarling", "Sneaky", "Sneezing", "Snickering", "Snobbish", "Snotty", "Snuggled", "Soggy", "Somber", "Sonic", "Sordid", "Sorry", "South African", "Southern", "Spastic", "Spectacular", "Spent", "Spicy", "Spiffy", "Spinning", "Spiritual", "Splendid", "Spoiled", "Spooky", "Spurious", "Squalid", "Square", "Squeamish", "Squishy", "Staking", "Standing", "Star Struck", "Statuesque", "Steadfast", "Stereotyped", "Stimulating", "Stingy", "Strange", "Stressed", "Strict", "Stubborn", "Stumbling", "Stupid", "Stupified", "Stuttering", "Subdued", "Subsequent", "Successful", "Succinct", "Sucker-Free", "Sulky", "Superficial", "Supine", "Supreme", "Surly", "Surrendering", "Suspicious", "Swanky", "Sweaty", "Swedish", "Sweet", "Sweltering", "Sympathetic", "Symptomatic", "Synonymous", "Taboo", "Tacit", "Tacky", "Tainted", "Talented", "Talkative", "Tall", "Tame", "Tan", "Tangible", "Tangy", "Tart", "Tasteful", "Tawdry", "Tearful", "Telling", "Temporary", "Tender", "Tenuous", "Terminal", "Terrified", "Tested", "Testy", "Thankful", "Therapeutic", "Thick", "Thinkable", "Thoughtful", "Thoughtless", "Threatening", "Thrifty", "Thrilled", "Tight", "Tightfisted", "Tiny", "Tired", "Tiresome", "Tolerant", "Toothsome", "Torpid", "Touchy", "Tough", "Towering", "Tranquil", "Transient", "Trashy", "Traveling", "Tricky", "Trite", "Troubled", "Troubling", "Truculent", "Trusting", "Trustworthy", "Turgid", "Twisted", "Twitching", "Typical", "Ubiquitous", "Ugliest", "Ugly", "Ultra", "Unable", "Unaccountable", "Unadvised", "Unarmed", "Unbalanced", "Unbecoming", "Unbiased", "Uncovered", "Undead", "Underrated", "Understood", "Underwhelmed", "Undesirable", "Undulating", "Unequaled", "Uneven", "Unfriendly", "Unhappy", "Unlucky", "Unscrupulous", "Unsightly", "Unsuitable", "Unswayed", "Unusual", "Upbeat", "Uppity", "Upset", "Uptight", "Urbane", "Used", "Useful", "Useless", "Utopian", "Utter", "Uttermost", "Vacuous", "Vagabond", "Vague", "Various", "Vast", "Velvet", "Vengeful", "Venomous", "Verbose", "Verdant", "Versed", "Vicious", "Victorious", "Vigorous", "Vindictive", "Violent", "Viva", "Vivacious", "Voiceless", "Volatile", "Voracious", "Vulgar", "Wacky", "Wagging", "Waggish", "Wakeful", "Wandering", "Wanting", "Warlike", "Warm", "Wary", "Wasted", "Wasteful", "Watchful", "Watery", "Weak", "Wealthy", "Weary", "Wee", "Well-Traveled", "Wet", "Whimsical", "Whispering", "Whistling", "Wholesale", "Wicked", "Wide", "Wiggly", "Willing", "Wimpy", "Winking", "Wiped Out", "Wiry", "Wise", "Wistful", "Witty", "Wobbly", "Woebegone", "Womanly", "Wonderful", "Wooden", "Woozy", "Workable", "Workaholic", "Worried", "Worthless", "Wounded", "Wrathful", "Wretched", "Wrong", "Wry", "X-Rated", "Xenophobic", "Yellow", "Yielding", "Young", "Youthful", "Yummy", "Zany", "Zealous", "Zippy", "Zonked");

 array2 = new Array("Aardvark","Addax","Alligator","Alpaca","Anteater","Antelope","Aoudad","Ape","Argali","Armadillo","Ass","Basilisk","Bat","Bear", "Beaver","Bighorn","Bison","Buffalo","Bull","Bunny","Burro","Camel","Canary","Capybara", "Cat","Chameleon","Chamois","Cheetah","Chimpanzee","Chinchilla","Chipmunk","Civet", "Coati","Colt","Cony","Cougar","Cow","Coyote","Crocodile","Crow", "Deer","Dingo","Doe","Dog","Donkey","Dormouse","Dromedary","Duckbill","Dugong","Eland","Elephant","Elk", "Ermine","Ewe","Fawn","Ferret", "Finch","Fish","Fox","Frog Gazelle","Gemsbok","Gila Monster","Giraffe Gnu","Goat","Gopher","Gorilla Grizzly Bear","Ground Hog","Guanaco","Guinea Pig","Hamster","Hare","Hartebeest","Hedgehog","Hippopotamus","Hog","Horse","Hyena","Ibex","Iguana","Impala","Jackal","Jaguar","Jerboa","Kangaroo","Kinkajou","Kitten","Koala","Koodoo","Lamb","Lemur","Leopard","Lion","Lizard","Llama","Lovebird","Lynx","Mandrill","Mare","Marmoset","Marten","Mink","Mole","Mongoose","Monkey","Moose","Mountain Goat","Mouse","Mule","Musk Deer","Musk-Ox","Muskrat","Mustang","Mynah Bird","Newt","Ocelot","Okapi","Opossum","Orangutan","Oryx","Otter","Ox","Panda","Panther","Parakeet","Parrot","Peccary","Pig","Platypus","Polar Bear","Pony","Porcupine","Porpoise","Prairie Dog","Pronghorn","Puma","Quagga","Rabbit","Raccoon","Ram","Rat","Reindeer","Reptile","Rhinoceros","Roebuck","Salamander","Seal","Sheep","Shrew","Silver Fox","Skunk","Sloth","Snake","Springbok","Squirrel","Stallion","Steer","Tapir","Tiger","Toad","Turtle","Vicuna","Walrus","Warthog","Waterbuck","Weasel","Whale","Wildcat","Wolf","Wolverine","Wombat","Woodchuck","Yak","Zebra","Zebu");


 */

	array3 = new Array(
		"Victor",
		"pcku",
		"Nejfaz",
		"Losa",
		"Monst3r",
		"szukam klanu 2",
		"Haymakerr",
		"BRIXX",
		"sza man",
		"Oskar Wasiluk",
		"ognos",
		"Xcution",
		"mafia",
		"Bytar",
		"Magiq",
		"SYLWIALW",
		"Shogi",
		"Thik",
		"lil cloud",
		"flipper",
		"chcebycnext",
		"bazy884",
		"KORDEN"
	)


	for (var i = 0; i < botAmount; i++) {
		var s = new FakeSocket();
		s.playerTracker = new BotPlayer(gameServer, s);
		s.packetHandler = new PacketHandler(gameServer, s);
		
		// Add to client list
		gameServer.clients.push(s);
		
		// Add to world
		s.packetHandler.setNickname(this.getName());
	}
}

module.exports = BotLoader;

/*
BotLoader.prototype.getName = function() {
	var name = "";
	 strRandomizer=array1[Math.floor(Math.random()*array1.length)] + " " + array2[Math.floor(Math.random()*array2.length)] + " "
	// Picks a random name for the bot
	if (/*this.randomNames.length > 0 true) {
		var index = Math.floor(Math.random() * this.randomNames.length);
		//name = this.randomNames[index];
		name = strRandomizer;
		this.randomNames.splice(index,1);
	} else {
		name = "bot" + ++this.nameIndex;
	}
	
	return name;
}
*/

BotLoader.prototype.getName = function() {
	var name = "";
	 strRandomizer=array3[Math.floor(Math.random()*array3.length)]
	// Picks a random name for the bot
	if (true) {
		var index = Math.floor(Math.random() * this.randomNames.length);
		//name = this.randomNames[index];
		name = strRandomizer;
		this.randomNames.splice(index,1);
	} else {
		name = "bot" + ++this.nameIndex;
	}
	
	return name;
}

