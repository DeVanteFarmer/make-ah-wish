const database = {
    kids: [
        { name: "James Mcguire", wish: "receiving a ton of gold" },
        { name: "Emma Thomson", wish: "exploring space" },
        { name: "Lucas Gray", wish: "meeting a superhero" },
        { name: "Isabella Johnson", wish: "swimming with dolphins" },
        { name: "Ethan Wright", wish: "becoming a wizard" },
        { name: "Olivia Martin", wish: "visiting a castle" },
        { name: "Mason Lee", wish: "riding a dragon" },
        { name: "Sophia Hall", wish: "finding a hidden treasure" }
    ],
    celebs: [
        { name: "LeBron James", sport: "Basketball" },
        { name: "Chris Hemsworth", sport: "Acting" },
        { name: "Serena Williams", sport: "Tennis" },
        { name: "Ellen DeGeneres", sport: "Comedy" },
        { name: "David Beckham", sport: "Football" },
        { name: "Gal Gadot", sport: "Acting" },
        { name: "Usain Bolt", sport: "Sprinting" },
        { name: "Adele", sport: "Singing" }
    ],
    pairings: [
        { kidName: "James Mcguire", celebName: "LeBron James" },
        { kidName: "Emma Thomson", celebName: "Chris Hemsworth" },
        { kidName: "Lucas Gray", celebName: "Serena Williams" },
        { kidName: "Isabella Johnson", celebName: "Ellen DeGeneres" },
        { kidName: "Ethan Wright", celebName: "David Beckham" },
        { kidName: "Olivia Martin", celebName: "Gal Gadot" },
        { kidName: "Mason Lee", celebName: "Usain Bolt" },
        { kidName: "Sophia Hall", celebName: "Adele" }
    ]
};


export const getKids = () => {
    return database.kids.map(kids => ({...kids}))
}

export const getCelebs = () => {
    return database.celebs.map(celebs => ({...celebs}))
}

export const getPairings = () => {
    return database.pairings.map(pairings => ({...pairings}))
}