export type JassStory = {
  id: string;
  name: string;
  role: string;
  portrait: string | null;
  portraitAlt: string;
  paragraphs: string[];
};

// Images live in public/images/jass.
// Replace aaaaaa with the full story, using one string per paragraph.
// Long stories automatically show a preview with a “Read more” button.
export const jassStories: JassStory[] = [
  {
    id: "chef-susan",
    name: "Susan",
    role: "CHEF",
    portrait: "/images/jass/susan.JPG",
    portraitAlt: "Susan, main chef",
    paragraphs: [
      "Before I enrolled in culinary class, I studied Bachelor of Science in " +
        "Computer Engineering at AMA University Makati Philippines. I passed " +
        "the Academic Scholarship, and also a Varsity Player in Table Tennis " +
        "when I was in College. But as years went by, I was still searching " +
        "for my passion... and cooking is my passion!! I became part of the " +
        "Genius Book of Records, created 5,485 cheese recipes, and competed " +
        "in 2009 World FHA Competition held in Singapore as a culinary " +
        "competitor with Shangri-La Hotel Makati Philippines & MIHCA Culinary " +
        "Schools, where we won a Silver Medal. And that's when opportunity strikes.",

      "My culinary journey spans twenty-two years of trials and triumphs. " +
        "Like many chefs, I started cooking with my mother, who is an amazing " +
        "cook. I really love food. I love guessing and deciphering the " +
        "ingredients used in each dish, especially for foods I've never " +
        "tried before. It also applies to familiar dishes, as you know. " +
        "The only way to make it special is to add your very own secret " +
        "ingredients! So I cook traditional cuisine, but I don't want to " +
        "stick to the original recipes. Adding my personal touch is extremely " +
        "important and makes the dish feel more personal. But again, cooking " +
        "is a very personal matter.",

      "It is important to decide what type of food will be your staple. " +
        "Work with great chefs and you will become a great chef. I think " +
        "the most important thing is not to be afraid to ask questions, " +
        "make mistakes, learn from those mistakes, and always be a sponge. " +
        "Confidence is built thru practice, receiving compliments from " +
        "chefs and peers, and being an all-around team player. Not every " +
        "culinary journey is the same.",

      "I never imagined accomplishing all the amazing things I have done " +
        "in my life, but none of it comes without hard work. Your network " +
        "equals your net worth, but without showcasing your talent, saying " +
        "yes to opportunities, and hitting a home run with each one, more " +
        "opportunities won't come your way.",

      "One day, just maybe, you will be a chef somewhere. You will need to " +
        "train and motivate the people who work for you, guide them, lead " +
        "them, teach them, and inspire them. Take care of yourself and get " +
        "as much sleep as you can so you wake up feeling refreshed and on " +
        "time. Travel and experience another culture by eating their food. " +
        "Learn to appreciate the time you have right now, enjoy the journey " +
        "and the process, and don't rush to become a sous chef or make a " +
        "lot of money.",

      "And most of all, be humble and teachable!",

      "With Lots of Love,.... Chef Sue",
    ],
  },
  {
    id: "chef-dimitri",
    name: "Dimitri",
    role: "CHEF",
    portrait: "/images/jass/dimitri.png",
    portraitAlt: "Dimitri, chef",
    paragraphs: 
      [
  "Greetings! My name is Dimitris, I’m born in '96 and I’m from Greece. I was " +
    "born and raised in a small city right in the centre - or better in the heart - " +
    "of Greece, which is called «Karditsa» and I’ll explain you the reference and " +
    "the connectedness of my city’s name and the position it has on the map. So, " +
    "the word “heart” in Greek, is translated as “kar-dia” and the second component " +
    "“itsa” we use it sometimes when we want to specify when something is “small” " +
    "but not all the times! (Greek dialect is a bit strange sometimes). There are " +
    "also some other explanations from where my city took her name (yes, we use " +
    "definitive articles for naming our cities) but I will let Google to inform you about it.",

  "I was raised in an Orthodox Christian family, as my father is a priest, so you " +
    "can say that I am a religious person. In my early years I graduated from a music " +
    "school and I’ve learned to play the violin and the piano and simultaneously I " +
    "was attending to Byzantine music classes. (Who would imagine that many years " +
    "later I would achieve my diploma and become a “teacher”. Not me, for sure!). " +
    "After my high school graduation (6 years) I got in to university and I studied " +
    "“Agricultural Engineering” and more specific I had to do with every piece of " +
    "machinery that exist to the agricultural world. We were doing drawing on a " +
    "paper and at computers different components of machinery, programming and a " +
    "little bit of hydroponic greenhouse, but I never followed this path.",

  "So, after my graduation I did different kind of works in order to support myself. " +
    "I’ve been from tomato factories to my last job with was a car body repair shop. " +
    "Small city, small job opportunities. But the spark of music never faded away so " +
    "at the same time I was taking classes at western music (classical) and focusing " +
    "also at my Byzantine music. Nowadays I am focusing on my second degree at western " +
    "music and I already achieved my diploma at Byzantine music. At this moment, by " +
    "the time I’m writing this text, I currently work in hospitality as night shifter " +
    "at a hotel in an island far from home.",

  "Now, me, as a person, I’m considered a mysterious person. I don’t open myself " +
    "“too much” but I’m not “closed” to myself either. I like to observe people’s " +
    "behaviour because it’s easy for me to “read” them, so that I will know what to " +
    "expect from them and I can tell what type of persons are. Most of the time I’m " +
    "silent and calm, I have a lot of patience, I try to be kind and helpful with " +
    "everyone (but if you betray that kindness its game over) and I’m deeply romantic " +
    "(with all the fancy dinner and flower package included). Also I use to be very " +
    "funny because I love making jokes or say funny things to my friends or family, " +
    "but when the it’s time for serious talking I’m a completely different person. " +
    "I’m not a person that can easily lie or hold a grudge against someone. I love " +
    "music (obviously) and nature. I like good food, traveling and exploring different " +
    "places with friends or by myself.",
],
  },
  {
    id: "developer-subhatha",
    name: "Subhatha",
    role: "DEVELOPER",
    portrait: "/images/jass/subhatha.jpg",
    portraitAlt: "Subhatha, developer",
    paragraphs:
      [
  "I was born and raised in Sri Lanka with a curiosity to discover what life " +
    "had to offer beyond what I already knew. That curiosity eventually brought " +
    "me thousands of kilometres away from home to Latvia, where I studied " +
    "Computer Science.",

  "Moving to Europe became one of the biggest chapters of my life. Living " +
    "abroad taught me independence, patience, and how to keep moving forward " +
    "even when the future was uncertain. During my studies, I also had the " +
    "opportunity to spend an exchange semester in Austria, allowing me to " +
    "experience new cultures, people, and perspectives.",

  "Today, I work as a Full-Stack Developer, continuing to learn, grow, and " +
    "build my career in technology. Outside of my professional life, I continue " +
    "to explore my passions for cinematic videography, travelling, hiking, " +
    "and esports.",

  "My dream has never been only about having a successful career. I want to " +
    "experience the world, create memories, challenge myself, and turn the " +
    "things I love into meaningful parts of my life.",

  "My journey is still being written, and I believe you don't always need " +
    "to know the destination. Sometimes, you just need the courage to begin.",

  "With Love,.... Subhatha Senanayake",

    ],
  },
];

export type JassSlide = {
  id: string;
  src: string | null;
  alt: string;
  caption: string;
};

// Gallery photographs, separate from the three portraits above.
export const jassSlides: JassSlide[] = [
  {
    id: "in-the-kitchen",
    src: "/images/jass/echef.jpg",
    alt: "A chef preparing food in a professional kitchen",
    caption: "In the kitchen",
  },
  {
    id: "in-the-field",
    src: "/images/jass/field.jpg",
    alt: "Three people visiting a field of crops",
    caption: "Beyond the kitchen",
  },
  {
    id: "sharing-knowledge",
    src: "/images/jass/lec.JPG",
    alt: "A speaker addressing a group beside shelves of glassware",
    caption: "Sharing knowledge",
  },
  {
    id: "the-team",
    src: "/images/jass/staff.jpg",
    alt: "A culinary team posing together in chef uniforms",
    caption: "Together at the table",
  },
  {
    id: "conversation-one",
    src: "/images/jass/susan2.JPG",
    alt: "Two people in conversation at a table with microphones",
    caption: "Stories shared",
  },
  {
    id: "conversation-two",
    src: "/images/jass/susan3.JPG",
    alt: "Two people looking at an open book during a conversation",
    caption: "Between the pages",
  },
];
