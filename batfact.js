(function() {
    $.bind('command', function(event) {
        var sender = event.getSender();
        var command = event.getCommand();

        if (command.equalsIgnoreCase('batfact')) {;
            var facts = [
                'Insect eating bats are worth an estimated $23 billion to the US economy as natural pest control.',
                'The bumblebee bat is the world’s smallest mammal.',
                'While you’ve seen bats wiggle their ears, you may have also noticed their noses wiggle as well. Doing this directs their echolocation!',
                'There is a species of bat (you’re welcome https://goo.gl/7UvLUF) called the Honduran White Bat, who like to snuggle together in groups inside of leaf tents when they sleep! valeHug ',
                'There are over 1,300 species of bats! Only 3 of which are vampire bats, who yes, actually do have a blood-based diet.',
                'Vampire bats have an enzyme called “draculin” that is an anticoagulant. This makes feeding easier! Additionally, it’s being used by researchers to possibly treat strokes and heart attacks in humans.',
                'Vampire bats have heat seeking noses that they use to find the warmest spots on their prey, where the blood would be closest to the surface.',
                'There’s a “bat god” called Camazotz in Mayan mythology. It demanded ritual blood sacrifices.',
                'A species of bat called the Heart-Nosed Bat sings to claim its territory.',
                'Fruit bats have a higher alcohol tolerance than humans - probably to help with eating fermented fruit!',
                'Although flying foxes are typically called “fruit bats”, their favorite food is actually flowers!',
                'The Small Flying Fox Bat is found to use its wings as an umbrella when it’s raining AND as a fan when it’s too hot!',
                'April 17th is Bat Appreciation Day!',
                'When researchers “translated” bat talk, they found that bats argue. A lot. Usually about food or sleeping arrangements.',
                'Livingstone’s Fruit Bats are the only bat with round ears.',
                'Vampire bats share food with each other by regurgitating so their friends and family don’t starve. Gross AND wholesome!',
                'Young bats aren’t able to fly until they are about 90% grown.',
                'Bats can swim. Yes, there are videos.',
                'Bats actually are not blind! Jebaited',
                'Flying foxes are extremely clean bats, and spend a lot of time grooming themselves.',
                'Fruit bats don’t eat the entire fruit, they squeeze out the juices and good stuff and spit out what is called a “spat”. If they ate the whole thing, they’d be too fat to fly LUL .',
                'Bats do not have an appendix.',
                'Bats are especially susceptible to extinction due to their long gestation periods and how they typically only have one pup at a time.',
                'Bat nipples are located in their armpits.',
                'Bats are the only mammal capable of powered, continuous flight, and fly with more accuracy than most birds.',
                '25% of all mammal species are bats.',
                'Relative to body size, the Spotted Bat has the largest ears out of all species of bat.',
                'The vampire bat is the only species of bat that can run.',
                'Bats are actually really loud, but to humans it seems quiet because we are unable to hear the octave that echolocation is used at.',
                'All leaf-nosed bats emit echolocation through their noses.',
                'Some baby bats babble a lot like adolescent human children.',
                'Bats are responsible for the pollination of agave, which is the plant used to make tequila. THANKS BATS!',
                'You might not be able to own a pet bat, but you can build or buy a bat house (just like birdhouses!) that bats can roost in.',
                'Most people believe bats are related to rodents. Most people are wrong.',
                'Vampire bats tend to adopt orphaned baby bats within their colony.',
                'Moths can detect echolocation and emit clicking sounds back to the bats to “jam” the echolocation, making it difficult for the bat to prey on them.',
                'Some female bats can time a pregnancy when THEY want, like when food is sufficient enough for her and her baby to live comfortably.',
                'A species called Chapin’s Free-Tailed Bat has a mohawk. It’s used for courtship, but also to look really cool.',
                'Tube-lipped Nectar Bats have tongues that are 1.5 times longer than their bodies. It has longest tongue relative to its body size of any mammal!',
                'Not every bat uses echolocation - like large fruit bats! They don’t need to use it, they rely on sight and smell to forage for food.',
                'Most bats can’t take off from the ground, many need to drop 2 or 3 feet before taking flight. Vampire bats can take flight from the ground by doing a strong “push-up” and then off they go!',
                'Echolocation is so fine tuned, that bats can detect extremely small and thin objects like a single human hair.',
                'Bat species that eat frogs can tell the difference between safe frogs and poisonous frogs by listening to the male frogs call. Also some bats eat frogs.',
                'A group of bats is called a colony! Not as cool as a murder of crows...but that’s fine.',
                'Typically, the larger bat species eat fruits, and the smaller species eat insects or have a blood diet.',
                'Guano was used during the Civil War as gunpowder.',
                'Australian bats are not poisonous, but they don’t eat Tim Tams either valeTaxic ',
                'There is a park next to the Sydney Opera House that is home to many giant Flying Foxes that fly freely and live together with really weird looking birds. Australia is weird.',
                'Evidence found of the earliest bat-like mammal dates back 50 million years ago.',
                'Vampire bats often return to and remember the same exact prey that they fed on during a previous night.',
                'Small Club-Footed bats roost INSIDE of bamboo stalks in Southeast Asia.',
                'In West Africa, Small Wooly bats live in large spider webs. Spooky.',
                'White Winged Vampire Bats are known to snuggle up to hens and pretend to be one of the chicks, then they feed off the mother hen’s blood.',
                'White nose syndrome is a deadly disease that affects nearly every single species of bat. Researchers are trying hard to find a treatment for this disease, since every single species of bat is important to the environment, and us as humans! From pollination to spreading seeds, using enzymes to treat strokes, and pest control, this world can’t live without bats :( !',
                'Bats live happily on every single continent except Antarctica.',
                'Approximately 70% of all species of bat are insect eaters.',
                'In China and Japan, bats have been associated with good fortune throughout history. It’s opposite for Europe and North America where bats are associated with witchcraft and evil.',
                'Pipistrelle bats may weigh less than 2 pennies, but can actually eat up to 3,000 bugs in one day.',
                'Dracula originated in Eastern Europe, but vampire bats don’t even live there. They actually are found in Central & South America.',
                'Bats are easily divided into 2 ‘suborders’ in classification: Megachiroptera (large) and Microchiroptera (small).',
                'The largest bat species title belongs to the Giant Golden Crowned Flying Fox. Their wingspan can get up to 5.6 feet (1.7m) long.',
                'Relative to its size, bats live longer than any other mammal. Captive bats can live up to 30 or 40 years.',
                'One single Brown Bat can eat approximately 1,200 mosquitoes (or mosquito sized bugs) per hour.',
                'Less than 10 people in North America have ever contracted rabies from a bat. They will only bite in self defense and don’t care much for humans, they just wanna hang out and do their own thing mostly.',
                'The largest bat colony known in the world is located at Bracken Cave in Texas, USA.',
                'Bats have one of the highest rates of homosexual sexual behavior among mammals valeGasm ',
                'Tropical fruit bats are responsible for up to 95% of tree establishment in restored rainforest.',
                'Mexican Free-Tailed Bats can fly at up to 60 miles per hour.',
                'Little Brown Bats can be taken several hours by car away from their home range and find their way back. Most tropical species cannot be moved even a few miles!',
                'Bats can breathe through their wings - about 10-15% of gas exchange occurs across the wing membrane.',
                'The “fingers” in a bats wings are really the third, fourth, and fifth digit (middle, ring, and pinky fingers). The second finger has become reduced and braces the third.',
                'Sucker-footed bats have natural suction cups on their wings and can stick to surfaces, like completely vertical walls!',
                'Several species of bat can only be distinguished from one another by a few millimeters difference in tooth width or the length of their ear hair, but are COMPLETELY genetically distinct.'
            ];
            
            $.say( facts[Math.floor(Math.random() * facts.length)] );
            return;
        }
    });

    $.bind('initReady', function()
    {
        $.registerChatCommand('./commands/batfact.js', 'batfact', 7);
    });
})();
