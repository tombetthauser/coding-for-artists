console.log("Welcome to the console! You're officially programming! Type updates() and hit enter to see whats new on VAiT.")
console.log(`To list members type members("all") and hit enter.`)
console.log(`To see individual member info enter members("member name") and hit enter.`)

let MEMBERS_INDEX = [
  "erin kaczkowski",
  "tom betthauser"
]

let MEMBERS_DETAILS = {
  "erin kaczkowski": {
    email: "erinkaczkowski@gmail.com",
    website: "www.erinkaczkowski.com"
  },
  "tom betthauser": {
    email: "tombetthauser@gmail.com",
    website: "www.tombetthauser.com"
  }
}

let updates = () => {
  console.log("No new updates at this time!")
}

let members = (input) => {
  if (input === 'all' || !input) {
    for (let i = 0; i < MEMBERS_INDEX.length; i++) {
      console.log(MEMBERS_INDEX[i])
    }
  } else if (MEMBERS_INDEX.includes(input)) {
    console.log(MEMBERS_DETAILS[input])
  }
}