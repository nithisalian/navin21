document.addEventListener("DOMContentLoaded", () => {
    const envelopeGrid = document.getElementById("envelopeGrid");
    const messageModal = document.getElementById("messageModal");
    const messageText = document.getElementById("messageText");
    const closeBtn = document.getElementById("closeBtn");

    if (!envelopeGrid || !messageModal || !messageText || !closeBtn) {
        return;
    }

    const totalEnvelopes = 25;
    const messages = [
        {
            text: `From parag:\n\nHappy Birthday Navin 🥳🎂🎉🎈🎊🎁\n\nSo glad I got to meet you freshman year, never met anyone so into sports until I met you 🙏\n\nWe didn’t get to run it this World Cup but gotta run hella sporting events starting with Bears @ Panthers. Keep Pounding!\n\nIt’s been an amazing 3 years at UNC basically living together. Next year we actually are living together it’s gonna be hella lit!!!\n\nAnd you also finally going to be 21, took you four scores and 7 years 😭 but it’s alright we got a whole senior year to make the most of it hitting up He’s every week (u can drink for me 😁)\n\nEnjoy your birthday man, Love you bro`
        },
        {
            text: `Happy birthday to my little Navin. Watching you grow up all these years to become the small man you are has been nothing short of spectacular. The hard work you’ve put in to your schooling, and your Mickey Mouse internships, they’ve made me reflect on who you are as a person. And I realize know, with a smile on my face, that even Charlie would be proud, and is beaming down on you from above. Another year, another milestone achievement. 50 never looked better. I miss you little cousin. - Arjun`
        },
        {
            text: `From mom: Happy 21st birthday to my beautiful son. I love you very much. I’m proud of your achievements and of you as a wonderful human being. Hope all the goodness and good wishes come your way. May you be blessed with success and happiness. I love you.`
        },
        {
            text: `Wishing this smart well read young man a very happy birthday! Lots of love, Mami Amar 🤗`,
            image: "Screenshot 2026-07-08 at 10.25.09 PM.png"
        },
        {
            text: `Dear Navin,\n\nI’ve spent every second of every day of the last month thinking “Wow, thank god I’m not the same age as Navin anymore,” and now that joy is being ripped away from me. I guess all good things must come to an end eventually (or 5 weeks later).\n\nThe last three years at UNC with you have been a blast. I am always entertained by your witty sarcasm and admire your consistent dedication to everything you take on (unless it’s PWAD 250, in which case you’re asleep). I don’t think I’ve told you this before, but you are one of the reasons I changed my major to PWAD. When you commit to things, you do so wholeheartedly, and hearing you talk about your PWAD classes and how unique the department was made me want to explore it too.\n\nI am so excited to make the most of senior year with you and bombacobb in the fall. I also can’t wait to see all the ways your hard work continues to pay off. I don’t watch sports, but I definitely will when you’re on ESPN :)\n\nHappy 21st birthday! I hope it’s the best year yet!\n\nLayla\n\nP.S. you still owe me a drink.`
        }
        ,
        {
            text: `happy happy birthday navin!! THE BIG 21!!! I can't believe you are SO OLD! I've loved getting to spend more time with you this summer and hang out and chat about everything and anything. You are a kind soul and a comedian (and a clown) when you wanna be but I love you all the same. It's been so cool to see you grow into the person you are and see what sparks joy for you. I hope you have the best day and continuing to work towards growing and learning everyday ❤️❤️ -Anissa`
        },
        {
            text: `check your texts for this message. file too swag and large to fit on here :/`
        },
        {
            text: `check your texts for this message. file too swag and large to fit on here :/`
        },
        {
            text: `Dear Navin,

My sweet sweet strong brother. I love you so much, more than words can describe. You are one of the best and I am so grateful to have you in my life. Through all of it, you have been there for me and I hope that you know you can count on me always. No matter the thing, big or small, I am there. Can’t believe you are 21!! You better have a blast and a smashing time this week!! Love you so much and I hope you realize what a treasure and blessing you are. So grateful to have you as my baby brother. From the cool sister (obvi), love you! - Preeya`
        }
    ];

    messages.push({
        media: {
            type: "video",
            src: "Sahej.mov"
        }
    });

    messages.push({
        text: `Happy Birthday, Navin! I can’t believe you’re 21! (almost LeBron numbers) Seeing you grow as a person and pursue your passions is so wonderful. Never stop being the cool, sassy lil bro that you are. I hope you go for all the things you want and never stop learning and growing. I hope to see you reporting on a Luka-level trade one day. Love, Kareena`
    });

    messages.push({
        text: `Happy Birthday, Navin!! Feels like yesterday we were playing poker in Cobb, and now you can finally drink. It’s time for me to make my money back. Crazy progression, my man. Last year, I prophesized great Bears and Bulls seasons... only one of those came true. May the Bears continue to bless your Sundays with miraculous plays, may the Bulls disappoint you a little less, and may you rack up plenty of handball dubs. Hope you have a great year, big dawg! -Aryan`
    });

    messages.push({
        text: `check your texts for this message. file too swag and large to fit on here :/`
    });

    messages.push({
        text: `Happy Birthday, Navin!

Hope you have a great day and get the chance to celebrate a little.

I just wanted to say that I’m really glad we’ve become friends. You’re genuinely one of the funniest people I know, and no matter what we’re talking about, you always manage to make the conversation more entertaining. Whether it’s sports, comics, or just random stuff, it’s always a good time.

You’re also just a great person to be around. You’re passionate about the things you care about, easy to talk to, and someone I know I can count on. I appreciate that more than I probably say.

I hope this year brings you a lot of success, good memories, and plenty of reasons to laugh. You deserve it.

Happy Birthday! -Favor`
    });

    messages.push({
        text: `Happy Birthday Navin! 21 years of age! I hope you have a great birthday and an even better year. Continue to be the strong, supportive and caring individual that you are. Never change! I love you. Love, Yaya`
    });

    messages.push({
        text: `Happy 21st Birthday Navin!!
I am so proud of the man you have become, and so excited to see where your life journey takes you. YOU will do amazing things and we will always be there to support you.
Love always, Dad.`
    });

    messages.push({
        text: `My precious precious Navin,

To try and capture your beautiful soul in writing is a task not even the most divinely inspired wordsmith could hope to come halfway to achieving, yet I shall dare to try here. I have only known your beautiful brown self for one season but the way you glide down the court to run a wing-in play from right wing is etched into my very essence. You handle the club’s funds and Eddy’s little body so well. Unlike DJ Moore’s routes, I know you’ll never stop running across my mind ;) Happy birthday sweetums and I can’t wait to see your beard again -Spencer`
    });

    messages.push({
        text: `Oh my sweet dear Navin boy,

It has really been a pleasure to know you and experience a friendship like yours, whether it be player defense together or drunk walking around Franklin.
I hope you have another great year at Carolina and make your last year wonderful, and hope life only treats you great. Cheers to an another year of Navin and I look forward to having a beer with ya. Happy Birthday Taste of Indian

Xav`
    });

    messages.push({
        text: `Happy birthday navin,

As the only other Indian on the team, we share a special bond only forged through the motherland. Even though only one of us can grow a full beard, I’m happy that we’ll get to share the court for the first time (since Jordan hates Indians). Real talk though, I’m very happy we’ve been able to get to know each other the last two years, and I can’t wait to make many more memories as we sit in the corner for an hour and watch Lukas pull it from 20 meters. Love ya goat and hope you have the best birthday

Charit`
    });

    messages.push({
        text: `Ohhh Navin my sweet, happy birthday! Genuinely so excited for another year of exec shenanigans with you. Every practice, hangout, match, and piece of writing is better with you involved. You’re one of the funniest and nicest guys I know and I’m lucky to call you a good friend of mine. I dread the day you graduate and leave me to run this shithole club without you and Luke (and ig weatherbee). I will miss you very much but not as much as doc ;)

Much love navin,

Pevin

Ps, you’re now my plug and ofc I WILL caddy for you, dont forget ts`
    });

    messages.push({
        text: `Happy Birthday my sweet boy,

From the first day I met you, I knew you were gonna be special. From OTPHJs, to stupid tier lists, to the formation of the dynamic duo, you have and will always be my best friend. I took you under my wing (see what I did there, we’re both wings, kiss me) and you became much more than I could ever be. You are leagues better defender than me and an ok treasurer. You always know how to make me laugh and we will always have the special way we bond 👀 continue to do great things which I know you will. I love you man and you will always have me in your corner.

Sincerely yours,
Sam Edmondson`
    });

    messages.push({
        text: `Ohhhh navin where do I begin. From freshman year geography class when i got rejected by that brown girl to watching that air force game faded as hell, the fibers of your 2nd place beard are intertwined with my memories of UNC. There has never been a better handball combination than our offense defense tournament sophomore year - our child will make hamm look like sean. Sometimes to brighten your day, you don’t need the whole biryani, you just need a little Taste of India, and you are my little piece of naan. Love you brotha - Luke`
    });

    messages.push({
        text: `Happy birthday navin.

You are a great friend, teammate, and person. I know that I can count on you just as much as I can count on a classic navin brick. I’m glad your team drafted Caleb Wilson and I’m proud of you for taking steps to further your career. Please know that you can do anything you put your mind to. Never give up, your opponent don’t know what’s coming 😉. I’ll never forget when you comforted me after I lost in secret hitler, and we shared a lil secret. Can’t wait to squeeze you tight, happy birthday tiger.
Much love, Jackson`
    });

    messages.push({
        text: `Happy Birthday pookie, hoping the year ahead brings you nothing but happiness, thanks for being my number one reels buddy, hope to see you and catch up soon! - Alex`
    });

    messages.push({
        text: `happy birthday to my best friend. ur finally 21 buddy, no more cougar or plug jokes from you ;). i love u so much, and i wish i could be there with you to celebrate but you're too employed i guess (jk how much cooler can u get). u are the most funniest (after me ofc, jk), coolest, smartest, and passionate person i know. i'm so lucky to call you my boyfriend, and i can't wait to celebrate every future birthday with you. for now, get yourself a lebron cake and wish for him to go to the bulls (we're dululu). here's to more years of exchanging jokes, reels, watching movies together and dissecting them after, talking about different books we've read/are currently reading, trying new restaurants, going to bookstores, travel, and u teaching me about sports. i love u and i hope u have the best day. :) love, nithi <3`
    });

    for (let i = messages.length; i < totalEnvelopes; i++) {
        messages.push({ text: `Happy Birthday, love. This is message ${i + 1}.` });
    }

    envelopeGrid.innerHTML = "";

    messages.forEach((messageData, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "envelope";
        button.innerHTML = `<span class="heart">💌</span>`;

        button.addEventListener("click", () => {
            messageText.innerHTML = "";

            if (messageData.image) {
                const image = document.createElement("img");
                image.src = messageData.image;
                image.alt = "Birthday message image";
                image.className = "message-image";
                messageText.appendChild(image);
            } else if (messageData.media) {
                const media = messageData.media;
                const mediaElement = media.type === "video"
                    ? document.createElement("video")
                    : document.createElement("img");

                if (media.type === "video") {
                    mediaElement.src = media.src;
                    mediaElement.controls = true;
                    mediaElement.preload = "metadata";
                    mediaElement.className = "message-image";
                } else {
                    mediaElement.src = media.src;
                    mediaElement.alt = "Birthday message media";
                    mediaElement.className = "message-image";
                }

                messageText.appendChild(mediaElement);
            }

            if (messageData.text) {
                const paragraph = document.createElement("p");
                paragraph.textContent = messageData.text;
                messageText.appendChild(paragraph);
            }

            messageModal.classList.remove("hidden");
            messageModal.setAttribute("aria-hidden", "false");
        });

        envelopeGrid.appendChild(button);
    });

    function closeModal() {
        messageModal.classList.add("hidden");
        messageModal.setAttribute("aria-hidden", "true");
    }

    closeBtn.addEventListener("click", closeModal);

    messageModal.addEventListener("click", (event) => {
        if (event.target === messageModal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    });
});