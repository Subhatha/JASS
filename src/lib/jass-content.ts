export type JassSummary = {
  id: string;
  title?: string;
  paragraphs: string[];
};

export type JassStory = {
  id: string;
  name: string;
  role: string;
  portrait: string | null;
  portraitAlt: string;
  summaries: JassSummary[];
  acknowledgements?: JassSummary[];
  paragraphs: string[];
};

// Images live in public/images/jass.
// Replace each aaaaaa in summaries with the original summary text.
// Use one string per paragraph; leave the introduction paragraphs below unchanged.
// Long stories automatically show a preview with a “Read more” button.
export const jassStories: JassStory[] = [
  {
    id: "chef-susan",
    name: "Susan",
    acknowledgements: [
      {
        id: "to-my-children",
        title: "To my children",
        paragraphs: [
          "From the moment my children entered this world, my perspective on life shifted entirely. Before they were born, my days were defined by my own individual goals, routines, and desires. But the very first time I held them in my arms, a profound transformation took place. In an instant, the center of my universe moved outside of myself. Today, I can say with absolute certainty and a full heart: my children are my entire world.",
          "Every decision I make, no matter how large or small, is guided by their well-being. They are the driving force behind my hard work, the inspiration for my personal growth, and the reason I strive to be a better person every single day. Watching them grow, learn, and navigate life is the greatest privilege I have ever known. Their laughter fills our home with a warmth that no material success could ever replicate, and their comfort is my highest priority.",
          "Of course, parenthood comes with its share of sleepless nights, sacrifices, and endless worries. Yet, every challenge vanishes the moment they smile, offer a warm hug, or say \"I love you.\" They have taught me the true meaning of unconditional love, patience, and resilience.",
          "My children are not just a part of my life; they are the heart of it. They are my past achievements made meaningful, my present joy, and my hope for the future. No matter where life takes us, they will always be my greatest purpose, my proudest accomplishment, and my entire world.",
        ],
      },
      {
        id: "to-our-creator",
        title: "With gratitude to our Creator",
        paragraphs: [
          "Thank you, Heavenly Father, for the gift of this life that allows me to experience your world, and for the wisdom that allows me to know your love.",
          "I owe my entire existence and every breath i take to our Creator. Life is a wonderful gift. Every new morning gives me a chance to see the beauty of the world, and share love with others. Along with life, our Creator gave me the incredible gift of knowledge. Knowledge is a special light that helps me understand the world around me. It teaches me how to grow, how to solve problems, and how to help the people i care about. Through my minds and hearts, i learn to discover truth, create art, and seek a better path forward. Being thankful means appreciating these daily blessings. It means using my life and my understanding to do good, show kindness, and live with purpose. With a humble and happy heart, i say again thank you for the breath of life, the power of thought, and the endless grace that guides my way.",
        ],
      },
    ],
    summaries: [
      {
        id: "for-subha",
        paragraphs: [
          "Dear Subha,",
          "Our epic friendship did not start with a warm greeting. It started with professional ignoring. We both worked in the Island Hotel. Every single day, you walk past my station. No 'hello.\" No \"good morning.” Just pure, silent passing. We were like two ships passing in the night, the ships were surrounded by the noise of plates, glasses and cutleries.",
          "After a couple of weeks, the ice finally melted. Suddenly, a miracle happened: we actually exchanged a “good morning.” From that day on, the floodgates opened. We went from absolute silence to talking about random topic. The turning point was a hilariously intense debate about Superman. I was desperately searching the internet for a link to watch the movie, probably looking stressed. Out of nowhere, you transformed into a hero, offering to hunt down the perfect link for me. Superman saved the day, but you saved the movie night.",
          "As the weeks rolled by, we started digging into our passions. It turns out, you completely obsessed with technology and studying to be a web developer. My  eyes roll. For years, I had been searching for the perfect person to help me build my dream cookbook. We realized we shared the exact same passion for technology, with just one small difference: you are running on high-speed futuristic, modern code, and I am running on a decades-old system that I haven't practiced since the dawn of the internet. You are the high-tech future; I am the vintage past.",
          "What started as silence in a busy hotel kitchen turned into a beautiful, kind friendship. Behind the quiet intern is an absolute genius with a brilliant mind and a good heart. No matter how crazy or stressful the kitchen gets, you are always there with a smile on his face, ready to help or share a laugh. I am grateful for the day you finally said \"good morning,\" and I cannot wait to see where our shared passions-and our cookbook-take us next.",
        ],
      },
      {
        id: "for-dimitri",
        paragraphs: [
          "Dear Dimitri,",
          "Our friendship began simply. I am writing these words from the bottom of my heart to express how much your presence in my life means to me. When look back at how we first met, it fills me with humility to realize that a life-changing friendship can start with something as simple as a single fist bump.",
          "We work in the same island hotel, yet our daily routines keep us in different worlds-you serving guests in F&B, and me working away in the main kitchen. We come from entirely different nationalities, speak different dialects, and possess completely different temperaments. By all logic, we should have been strangers. Yet, against all odds, we understand each other on a level that words cannot fully explain. I hold immense respect for the person you are. You carry the passionate soul of a musician and a tough, resilient spirit that inspires me, but beneath it all, you have one of the kindest hearts I have ever known.",
          "Our friendship truly began to blossom and become beautiful the day I shared my love for dark hot chocolate. Your warmth made me feel safe enough to open up about my personal dreams and my deep goal of writing this cookbook.",
          "I still smile and laugh warmly whenever I think about our little misunderstanding. I was so incredibly excited, dreaming of tasting and savoring the traditional hot chocolate from your humble village, made the old-fashioned way with a baterol. Meanwhile, you missed my cues entirely because your mind was filled only with thoughts of your village's traditional food!",
          "Speaking of your home, I want to deeply thank your wonderful parents. Please pass along my humblest gratitude to them. Walking into their home and being welcomed so warmly is a memory I will cherish forever. Eating that delicious, traditional food together around the table made me feel like family, even though I am far from my own. They reflect the same beautiful kindness and strength that I see in you every day.",
          "Thank you for being my trusted friend, my anchor on this island, and a true person to me. Most of all for helping me to achieve this dreams-our cookbook.",
        ],
      },
    ],
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
    summaries: [
      {
        id: "summary",
        title: "How it all started",
        paragraphs: [
          "It’s really weird how people can meet sometimes. Plato said that friendship has to do with the connection of attraction and the search for commodity.",
          "This is how me and Susan - in a way - could someone say that we met.",
          "Everything started in 2025, during the hospitality season at Rhodes island while I was working as night room service. Most of the times I had to prepare the early breakfasts for the guest that they were leaving early in the morning. At the same time, in the same area, there was a petite woman who was preparing some hot meals for the buffet.",
          "In the beginning we weren’t paying much attention to each other - it was in the first weeks of the hotels operation - and we just greeted each other in a typical way just saying “Good morning”.  But as the days were passing by I kept seeing a “bashful” person and a thought came to my head saying: “How would I feel working in a foreign country to a business in which I don’t know anyone, seeing different people and the majority are native Greeks”? Certainly not good, I thought. So my sensitive side said that I have to find a way to “break the ice” and cheer her up. So I came up with the “fist bump” greeting. The result was positive and she changed her mood, so every time that we were seeing each other we were doing the same “signature gesture”.",
          "A couple of months later, an early morning in the kitchen, we greeted and had a small chat in which she revealed me her profession and what she achieved during the years. I confess that I was really amazed. She told me not to say anything to anyone and keep it a secret. “Always be humble”, she told me. In the next days she revealed me about her “in progress” project, about a cooking book. She told me that the main theme of the book is the traditional cooking and that the last part that was missing from it was Greece and that she will maybe give up because she didn’t knew anyone that could help her complete it. Then for a weird reason the conversation went really fast to my city Karditsa and some of the traditional foods that we have. She asked me in which part of Greece it was and she looked at it on the map. A couple of days later she told me that she would like me to help her with the last part of her book and become part of it. To be honest, I was a little hesitant because I didn’t knew how I would help her in this. I thought about it and I thought that it was something important to her and if I were in her shoes I would appreciate any kind of help. And the rest is history. In a short period of time we organised the things and the places that we had to visit. Our next meeting it was in my hometown in November, after we finished the work at the hotel. Our whole schedule lasted a week. We visited lots of places, we wandered around the city and to the beautiful outskirts that she told me it was similar with her home. We had a visit to an elderly couple that cooked us traditional food, we visited the field of herbs of Roulas and Ntinos showing us the machinery that they use and giving us an idea of how they use them, we paid a visit at our local winery of Mesenikolas village and had a taste of the procedure that they follow and we went  of course at my parents house. We saw a lot of traditional things and we ate traditional food. We also tried and drink Tsipouro but I think it was too strong for her.",
          "In general, she is a good and kind person and she grew up in a different way than us, Greeks. I believe that us, Greeks, we are a hospitable nation by our nature. We always take care of our guests and we always give the best of ourselves to them. I think she felt it at a satisfying point and it was probably something different that she probably felt among the countries that she visited so far.",
          "In conclusion, I believe that from all these, a different kind of friendship has been created. A friendship between two people (countries) with different mentalities, culture, tradition, temperament, which in this period of time, it supported difficult times, gave and took advices and until now share happy and sad moments.",
        ],
      },
    ],
    role: "MUSICIAN",
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
    summaries: [
      {
        id: "summary",
        title: "How it all started",
        paragraphs: [
          "I’m an international Computer Engineering student studying in Latvia, and one summer I got the opportunity to travel to Greece and work as a waiter at Gennadi Grand Resort.",
          "When I first arrived, everything was new. I didn’t know many people, and I was still trying to find my place. Then one ordinary day during lunch in the hotel cafeteria, a lady sitting nearby offered me some Tabasco. It was such a small moment, but somehow, that was the beginning of something much bigger.",
          "Her name was Susan, a chef at Gennadi Grand Resort. As time passed, I got to know her and discovered what a genuine, kind, and interesting person she was.",
          "One day, Susan was talking about a Superman movie she really wanted to watch. I told her, “Maybe I can find a link for you.” From that little conversation, we somehow became good friends.",
          "Eventually, I properly introduced myself and told her about my work with computers, programming, websites, and technology.",
          "Then Susan told me about a dream she had, creating her own inspirational cookbook and having a website where she could share her recipes, experiences, and passion for cooking.",
          "I simply said, **“Let’s do it.” And here we are.**",
        ],
      },
    ],
    role: "PROGRAMMER",
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
