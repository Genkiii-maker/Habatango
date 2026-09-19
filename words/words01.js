const WORDS01 = [
  {
    "no": 1,
    "word": "a (an)",
    "star": true,
    "pos": "冠",
    "meaning": "１つの、１人の",
    "example": "I have a dog.",
    "circle": false
  },
  {
    "no": 2,
    "word": "a.m.",
    "star": false,
    "pos": "副",
    "meaning": "午前",
    "example": "A: What time is it now?   B: It's 10 a.m.",
    "circle": false
  },
  {
    "no": 3,
    "word": "ability",
    "star": false,
    "pos": "名",
    "meaning": "能力",
    "example": "He has the ability to make wonderful music.",
    "circle": true
  },
  {
    "no": 4,
    "word": "able",
    "star": false,
    "pos": "形",
    "meaning": "※be able to ～　　～することができる",
    "example": "I want to be able to speak English.",
    "circle": false
  },
  {
    "no": 5,
    "word": "about",
    "star": true,
    "pos": "前・副",
    "meaning": "①（前）～について\n②（副）約、だいたい",
    "example": "①I want to know about Australia.\n②Our school has about 300 students.",
    "circle": false
  },
  {
    "no": 6,
    "word": "above",
    "star": false,
    "pos": "前",
    "meaning": "～の上に(へ)",
    "example": "This place is about 400 meters above sea level.",
    "circle": false
  },
  {
    "no": 7,
    "word": "abroad",
    "star": false,
    "pos": "副",
    "meaning": "外国へ（に、で）、海外へ　　※study abroad　　留学する",
    "example": "I want to study abroad in the future.",
    "circle": false
  },
  {
    "no": 8,
    "word": "absent",
    "star": false,
    "pos": "形",
    "meaning": "欠席の      ※be absent from ～　～を欠席する",
    "example": "I was absent from school yesterday.",
    "circle": true
  },
  {
    "no": 9,
    "word": "academic",
    "star": false,
    "pos": "形",
    "meaning": "学問の、学問的な",
    "example": "This shop sells only academic books.",
    "circle": true
  },
  {
    "no": 10,
    "word": "accept",
    "star": false,
    "pos": "動",
    "meaning": "受け入れる",
    "example": "We should accept other cultures.",
    "circle": false
  },
  {
    "no": 11,
    "word": "access",
    "star": false,
    "pos": "名",
    "meaning": "（場所への）接近方法、（サービスなどを）利用できること",
    "example": "You have access to the Internet here.",
    "circle": true
  },
  {
    "no": 12,
    "word": "accident",
    "star": false,
    "pos": "名",
    "meaning": "事故",
    "example": "I had a car accident.",
    "circle": false
  },
  {
    "no": 13,
    "word": "according",
    "star": false,
    "pos": "副",
    "meaning": "※according to ～ ～によれば",
    "example": "According to the forecast, it will be warmer next week.",
    "circle": true
  },
  {
    "no": 14,
    "word": "achieve",
    "star": false,
    "pos": "動",
    "meaning": "達成する",
    "example": "You can achieve your goal if you try hard.",
    "circle": true
  },
  {
    "no": 15,
    "word": "achievement",
    "star": false,
    "pos": "名",
    "meaning": "達成、やり遂げること",
    "example": "Winning the game was a great achievement for our team.",
    "circle": true
  },
  {
    "no": 16,
    "word": "across",
    "star": false,
    "pos": "前・副",
    "meaning": "～を横切って、～の向こう側に",
    "example": "The park is across the street from the bank.",
    "circle": false
  },
  {
    "no": 17,
    "word": "act",
    "star": false,
    "pos": "動",
    "meaning": "行動する、（役を）演じる",
    "example": "We think and act differently in each culture.",
    "circle": false
  },
  {
    "no": 18,
    "word": "action",
    "star": false,
    "pos": "名",
    "meaning": "行動、動き",
    "example": "I watched their actions carefully.",
    "circle": false
  },
  {
    "no": 19,
    "word": "active",
    "star": true,
    "pos": "形",
    "meaning": "活発な",
    "example": "You should be active in class.",
    "circle": false
  },
  {
    "no": 20,
    "word": "activity",
    "star": false,
    "pos": "名",
    "meaning": "活動",
    "example": "We enjoyed a lot of activities in English.",
    "circle": false
  },
  {
    "no": 21,
    "word": "actor",
    "star": false,
    "pos": "名",
    "meaning": "俳優",
    "example": "The actor's performance was very good.",
    "circle": false
  },
  {
    "no": 22,
    "word": "actually",
    "star": false,
    "pos": "副",
    "meaning": "実際に、実は",
    "example": "Actually, I know the truth.",
    "circle": false
  },
  {
    "no": 23,
    "word": "add",
    "star": false,
    "pos": "動",
    "meaning": "付け加える",
    "example": "What should I add to my speech?",
    "circle": false
  },
  {
    "no": 24,
    "word": "addition",
    "star": false,
    "pos": "名",
    "meaning": "つけ加えること    ※in addition to ～ ～に加えて、さらに",
    "example": "In addition to him, two other students joined us.",
    "circle": false
  },
  {
    "no": 25,
    "word": "address",
    "star": false,
    "pos": "名",
    "meaning": "あて名、住所",
    "example": "Please write your name and address.",
    "circle": false
  },
  {
    "no": 26,
    "word": "adult",
    "star": false,
    "pos": "名",
    "meaning": "大人、成人",
    "example": "The fee for an adult is one thousand yen.",
    "circle": false
  },
  {
    "no": 27,
    "word": "advantage",
    "star": false,
    "pos": "名",
    "meaning": "有利な立場、利点",
    "example": "Living near the station is a great advantage.",
    "circle": false
  },
  {
    "no": 28,
    "word": "adventure",
    "star": false,
    "pos": "名",
    "meaning": "冒険",
    "example": "I like books which have a lot of adventure.",
    "circle": false
  },
  {
    "no": 29,
    "word": "advice",
    "star": false,
    "pos": "名",
    "meaning": "忠告、助言、アドバイス",
    "example": "Thank you for your advice.",
    "circle": false
  },
  {
    "no": 30,
    "word": "affect",
    "star": false,
    "pos": "動",
    "meaning": "影響を及ぼす",
    "example": "The snow affected trains and buses this morning.",
    "circle": true
  },
  {
    "no": 31,
    "word": "afraid",
    "star": false,
    "pos": "形",
    "meaning": "恐れて、こわがって　　　　　※be afraid of ～　～を恐れる",
    "example": "Don’t be afraid of making mistakes.",
    "circle": false
  },
  {
    "no": 32,
    "word": "Africa",
    "star": false,
    "pos": "名",
    "meaning": "アフリカ",
    "example": "I want to go to Africa.",
    "circle": false
  },
  {
    "no": 33,
    "word": "African",
    "star": false,
    "pos": "形",
    "meaning": "アフリカ(人)の",
    "example": "I like African dance.",
    "circle": true
  },
  {
    "no": 34,
    "word": "after",
    "star": false,
    "pos": "前・接",
    "meaning": "～のあとに　　　            ※after school　放課後",
    "example": "I will see you after lunch.",
    "circle": false
  },
  {
    "no": 35,
    "word": "afternoon",
    "star": true,
    "pos": "名",
    "meaning": "午後                     　　   ※Good afternoon. こんにちは",
    "example": "I play baseball in the afternoon.",
    "circle": false
  },
  {
    "no": 36,
    "word": "again",
    "star": true,
    "pos": "副",
    "meaning": "もう一度、また、（否定文で）二度と",
    "example": "See you again.",
    "circle": false
  },
  {
    "no": 37,
    "word": "against",
    "star": false,
    "pos": "前",
    "meaning": "～に対して、～に反対して",
    "example": "She was always against war.",
    "circle": false
  },
  {
    "no": 38,
    "word": "age",
    "star": false,
    "pos": "名",
    "meaning": "①年齢　　　　※at the age of ～ ～歳の時に\n②時代",
    "example": "①I came to Japan at the age of six.\n②The age of AI is coming now.",
    "circle": false
  },
  {
    "no": 39,
    "word": "ago",
    "star": false,
    "pos": "副",
    "meaning": "～前に　　　※long ago 　ずっと前に",
    "example": "He came to Japan three years ago.",
    "circle": false
  },
  {
    "no": 40,
    "word": "agree",
    "star": false,
    "pos": "動",
    "meaning": "賛成する、同意する    ※agree with ～ ～に賛成する",
    "example": "I agree with you.",
    "circle": false
  },
  {
    "no": 41,
    "word": "agriculture",
    "star": false,
    "pos": "名",
    "meaning": "農業",
    "example": "I am interested in local agriculture.",
    "circle": true
  },
  {
    "no": 42,
    "word": "ah",
    "star": false,
    "pos": "間",
    "meaning": "ああ、まあ",
    "example": "Ah, now I understand your idea.",
    "circle": true
  },
  {
    "no": 43,
    "word": "AI",
    "star": false,
    "pos": "名",
    "meaning": "人工知能（artificial intelligenceの略）",
    "example": "These days, we use AI technology in our daily lives.",
    "circle": true
  },
  {
    "no": 44,
    "word": "air",
    "star": false,
    "pos": "名",
    "meaning": "空気、大気",
    "example": "We need air and water to live.",
    "circle": false
  },
  {
    "no": 45,
    "word": "air conditioner",
    "star": false,
    "pos": "名",
    "meaning": "エアコン",
    "example": "It's too hot.  Let's turn on the air conditioner.",
    "circle": false
  },
  {
    "no": 46,
    "word": "airplane",
    "star": true,
    "pos": "名",
    "meaning": "飛行機",
    "example": "Airplanes often fly above our school.",
    "circle": true
  },
  {
    "no": 47,
    "word": "airport",
    "star": false,
    "pos": "名",
    "meaning": "空港",
    "example": "There is an airport in Kobe.",
    "circle": false
  },
  {
    "no": 48,
    "word": "alarm",
    "star": false,
    "pos": "名",
    "meaning": "警報",
    "example": "We can hear earthquake alarms on our cellphones.",
    "circle": true
  },
  {
    "no": 49,
    "word": "alarm clock",
    "star": false,
    "pos": "名",
    "meaning": "目覚まし時計",
    "example": "The alarm clock wakes me up every morning.",
    "circle": true
  },
  {
    "no": 50,
    "word": "album",
    "star": false,
    "pos": "名",
    "meaning": "アルバム",
    "example": "This album is very important to me.",
    "circle": false
  },
  {
    "no": 51,
    "word": "alive",
    "star": false,
    "pos": "形",
    "meaning": "生きて",
    "example": "Luckily, the person was alive after the accident.",
    "circle": true
  },
  {
    "no": 52,
    "word": "all",
    "star": true,
    "pos": "代・形・副",
    "meaning": "①（代・形）すべて（の）～、全部（の）\n②（副）まったく、すっかり　   ※not ～ at all 全く～ない",
    "example": "①All of the students joined the festival.\n②There are trees all around the house.",
    "circle": false
  },
  {
    "no": 53,
    "word": "allow",
    "star": false,
    "pos": "動",
    "meaning": "許す",
    "example": "Swimming is not allowed at this beach.",
    "circle": false
  },
  {
    "no": 54,
    "word": "almost",
    "star": false,
    "pos": "副",
    "meaning": "ほとんど",
    "example": "We are almost there.",
    "circle": false
  },
  {
    "no": 55,
    "word": "alone",
    "star": false,
    "pos": "副",
    "meaning": "１人で、ただ～だけで",
    "example": "My younger sister was alone until I came back.",
    "circle": false
  },
  {
    "no": 56,
    "word": "along",
    "star": false,
    "pos": "前",
    "meaning": "（道・川など）に沿って",
    "example": "Walk along this street for a few minutes.",
    "circle": false
  },
  {
    "no": 57,
    "word": "aloud",
    "star": false,
    "pos": "副",
    "meaning": "声に出して",
    "example": "Please read the sentence aloud.",
    "circle": true
  },
  {
    "no": 58,
    "word": "alphabet",
    "star": false,
    "pos": "名",
    "meaning": "アルファベット",
    "example": "Can you say the alphabet from A to Z?",
    "circle": true
  },
  {
    "no": 59,
    "word": "already",
    "star": false,
    "pos": "副",
    "meaning": "すでに、もう",
    "example": "I have already finished my homework.",
    "circle": false
  },
  {
    "no": 60,
    "word": "also",
    "star": false,
    "pos": "副",
    "meaning": "～もまた、さらに　※not only ～ but also ...  ～だけでなく...もまた",
    "example": "She likes Japanese food.  She also likes cooking it.",
    "circle": false
  },
  {
    "no": 61,
    "word": "ALT",
    "star": false,
    "pos": "名",
    "meaning": "外国語指導助手（Assistant Language Teacher の略）",
    "example": "Our ALT is from America.",
    "circle": false
  },
  {
    "no": 62,
    "word": "although",
    "star": false,
    "pos": "接",
    "meaning": "～だけれど",
    "example": "Although I like dogs, my mother likes cats.",
    "circle": false
  },
  {
    "no": 63,
    "word": "always",
    "star": true,
    "pos": "副",
    "meaning": "いつも、常に",
    "example": "I always listen to music.",
    "circle": false
  },
  {
    "no": 64,
    "word": "am",
    "star": true,
    "pos": "動",
    "meaning": "～である、（～に）いる、ある （主語が I の時の現在形） \n 【活用】 am - was - been    ※am ～ing  ～している",
    "example": "I am a junior high school student.",
    "circle": false
  },
  {
    "no": 65,
    "word": "amazing",
    "star": false,
    "pos": "形",
    "meaning": "驚くべき、目を見張らせる",
    "example": "That's amazing!",
    "circle": false
  },
  {
    "no": 66,
    "word": "ambassador",
    "star": false,
    "pos": "名",
    "meaning": "大使",
    "example": "I want to be an ambassador to a foreign country.",
    "circle": true
  },
  {
    "no": 67,
    "word": "ambulance",
    "star": false,
    "pos": "名",
    "meaning": "救急車",
    "example": "Please call 119 for an ambulance.",
    "circle": true
  },
  {
    "no": 68,
    "word": "America",
    "star": false,
    "pos": "名",
    "meaning": "アメリカ合衆国",
    "example": "Did you enjoy your stay in America?",
    "circle": false
  },
  {
    "no": 69,
    "word": "American",
    "star": false,
    "pos": "名・形",
    "meaning": "アメリカ(人)の",
    "example": "I learned a lot about American history.",
    "circle": false
  },
  {
    "no": 70,
    "word": "among",
    "star": false,
    "pos": "前",
    "meaning": "～の間に（で、の）、～の中のひとりで",
    "example": "That singer has become popular among young people.",
    "circle": false
  },
  {
    "no": 71,
    "word": "amount",
    "star": false,
    "pos": "名",
    "meaning": "量、額、総計",
    "example": "An elephant eats a large amount of food every day.",
    "circle": true
  },
  {
    "no": 72,
    "word": "amusement park",
    "star": true,
    "pos": "名",
    "meaning": "遊園地",
    "example": "I was always excited at the amusement park.",
    "circle": true
  },
  {
    "no": 73,
    "word": "ancient",
    "star": false,
    "pos": "形",
    "meaning": "古代の",
    "example": "Nara was an ancient capital of Japan.",
    "circle": true
  },
  {
    "no": 74,
    "word": "and",
    "star": true,
    "pos": "接",
    "meaning": "～と・・・、そして～",
    "example": "I need a pen and a notebook.",
    "circle": false
  },
  {
    "no": 75,
    "word": "angel",
    "star": false,
    "pos": "名",
    "meaning": "天使",
    "example": "She was always kind like an angel.",
    "circle": true
  },
  {
    "no": 76,
    "word": "angry",
    "star": false,
    "pos": "形",
    "meaning": "怒った、怒って",
    "example": "What’s the matter?  You look angry.",
    "circle": false
  },
  {
    "no": 77,
    "word": "animal",
    "star": true,
    "pos": "名",
    "meaning": "動物",
    "example": "I like animals.",
    "circle": false
  },
  {
    "no": 78,
    "word": "animation",
    "star": false,
    "pos": "名",
    "meaning": "動画、アニメーション",
    "example": "Japanese animation is famous around the world.",
    "circle": false
  },
  {
    "no": 79,
    "word": "anime",
    "star": false,
    "pos": "名",
    "meaning": "（日本の）アニメ",
    "example": "Japanese manga and anime are loved in many countries.",
    "circle": false
  },
  {
    "no": 80,
    "word": "ankle",
    "star": false,
    "pos": "名",
    "meaning": "足首",
    "example": "My ankle was hurt in the accident.",
    "circle": true
  },
  {
    "no": 81,
    "word": "anniversary",
    "star": false,
    "pos": "名",
    "meaning": "記念日、～周年",
    "example": "This year is our school's tenth anniversary.",
    "circle": false
  },
  {
    "no": 82,
    "word": "announce",
    "star": false,
    "pos": "動",
    "meaning": "発表する",
    "example": "They announced that the train would be late.",
    "circle": false
  },
  {
    "no": 83,
    "word": "announcement",
    "star": false,
    "pos": "名",
    "meaning": "発表、アナウンス",
    "example": "The announcement said that the train would be late.",
    "circle": true
  },
  {
    "no": 84,
    "word": "another",
    "star": false,
    "pos": "代・形",
    "meaning": "もう一つ（の）、別（の）　\n※another cup (piece) of ～　～をもう一杯（一つ）",
    "example": "Would you like another cup of coffee?",
    "circle": false
  },
  {
    "no": 85,
    "word": "answer",
    "star": false,
    "pos": "動・名",
    "meaning": "答え（る）",
    "example": "I will answer your question.",
    "circle": false
  },
  {
    "no": 86,
    "word": "ant",
    "star": false,
    "pos": "名",
    "meaning": "アリ",
    "example": "Ants live in very large groups.",
    "circle": true
  },
  {
    "no": 87,
    "word": "any",
    "star": false,
    "pos": "形",
    "meaning": "①（疑問文・条件文で）いくつかの～、何人かの～　\n②（否定文で）１つ（の～）も、１人（の～）も～ない\n③（肯定文で）どんな～も",
    "example": "①Do you have any questions?\n②I don't have any questions.\n③You can ask any question.",
    "circle": false
  },
  {
    "no": 88,
    "word": "anymore",
    "star": false,
    "pos": "副",
    "meaning": "（否定文・疑問文で）もう～（でない）",
    "example": "I am not hungry anymore.",
    "circle": false
  },
  {
    "no": 89,
    "word": "anyone",
    "star": false,
    "pos": "代",
    "meaning": "①（肯定文で）誰でも\n②（疑問文で）誰か",
    "example": "①Anyone is welcome to our school festival.\n②Does anyone know who he is?",
    "circle": false
  },
  {
    "no": 90,
    "word": "anything",
    "star": false,
    "pos": "代",
    "meaning": "①（肯定文で）何でも\n②（疑問文で）何か",
    "example": "①I can eat anything.\n②Do you have anything to do after lunch?",
    "circle": false
  },
  {
    "no": 91,
    "word": "anytime",
    "star": false,
    "pos": "副",
    "meaning": "いつでも",
    "example": "You can visit us anytime.",
    "circle": false
  },
  {
    "no": 92,
    "word": "anyway",
    "star": false,
    "pos": "副",
    "meaning": "とにかく",
    "example": "Anyway, let's go back to our classroom.",
    "circle": false
  },
  {
    "no": 93,
    "word": "anywhere",
    "star": false,
    "pos": "副",
    "meaning": "①（肯定文で）どこにでも\n②（否定文で）どこにも～ない",
    "example": "①You can sit anywhere.\n②Don't go anywhere!",
    "circle": false
  },
  {
    "no": 94,
    "word": "apart",
    "star": false,
    "pos": "副",
    "meaning": "離れて",
    "example": "My brother is now living apart from us.",
    "circle": true
  },
  {
    "no": 95,
    "word": "apartment",
    "star": false,
    "pos": "名",
    "meaning": "アパート、マンション",
    "example": "I am looking for a nice apartment.",
    "circle": true
  },
  {
    "no": 96,
    "word": "apologize",
    "star": false,
    "pos": "動",
    "meaning": "謝る",
    "example": "You hurt her feelings.  You should apologize.",
    "circle": true
  },
  {
    "no": 97,
    "word": "app",
    "star": false,
    "pos": "名",
    "meaning": "アプリ、アプリケーション（applicationを短くした形）",
    "example": "With this app, you can watch interesting videos.",
    "circle": true
  },
  {
    "no": 98,
    "word": "appear",
    "star": false,
    "pos": "動",
    "meaning": "現れる",
    "example": "The man appeared after the meeting started.",
    "circle": false
  },
  {
    "no": 99,
    "word": "apple",
    "star": true,
    "pos": "名",
    "meaning": "リンゴ",
    "example": "I like apples better than oranges.",
    "circle": false
  },
  {
    "no": 100,
    "word": "apply",
    "star": false,
    "pos": "動",
    "meaning": "当てはめる、当てはまる",
    "example": "You can apply this story to your daily life.",
    "circle": true
  }
];
