const API = {
  GetChatbotResponse: async (message) => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (message === "hi")
          resolve("Hello! Welcome to Travigo! How may I help you?");
        if (message.includes("book a hotel"))
          resolve(
            "Great! We have a lot of options available. In which country do you want to stay in?"
          );
        if (
          message === "United States" ||
          message === "United Kingdom" ||
          message === "Italy" ||
          message === "Mexico" ||
          message === "Switzerland" ||
          message === "Tanzania" ||
          message === "Netherlands" ||
          message === "Fiji" ||
          message === "Indonesia" ||
          message === "Canada" ||
          message === "Thailand" ||
          message === "United Arab Emirates" ||
          message === "Greece" ||
          message === "Costa Rica" ||
          message === "Japan" ||
          message === "Maldives"
        ) {
          let country_name = message;
          resolve(
            "Great! Please enter your travel dates and number of people."
          );
        }
        const regex = /\d/;

        // Test the string against the regular expression
        if (message.includes("/")) {
          resolve(
            "Great! Do you need Premium Rooms or Deluxe Rooms or Standard Rooms?"
          );
        }
        if (
          message.includes("Premium") ||
          message.includes("Deluxe") ||
          message.includes("Standard")
        ) {
          resolve("Okay!! Do you need extra beds?");
        }
        if (message.includes("Yes") || message.includes("No")) {
          resolve(
            "Excellent! Any extra requirements you want to add on? Like breakfast, lunch, dinner, dessert?"
          );
        }
        if (
          message.includes("breakfast") ||
          message.includes("lunch") ||
          message.includes("dinner") ||
          message.includes("dessert")
        ) {
          resolve(
            "Okay! Please tell us your budget within which you are searching rooms.."
          );
        }
        if (regex.test(message)) {
          resolve(
            "We are good to go now. In the meantime we recommend you hotels, please enter your name."
          );
        }
        if (message.includes("My name is") || message.includes("I am")) {
          message = message.trim();

          // Split the sentence into words using space as delimiter
          const words = message.split(" ");

          // Return the last word
          let name_customer = words[words.length - 1];
          resolve("Okay! " + name_customer + " Please enter your email id");
        }
        if (message.includes("@")) {
          resolve(
            "Okay! Please enter your phone number with the country code.."
          );
        }
        if (message.includes("+")) {
          resolve("Amazing!! here are a few hotels that we recommend for you.");
          {
            if (country_name === "United States")
              resolve(
                "Cozy BeachFront Cottage \nModern Loft in Downtown \nMountain Retreat \nScheduled Treehouse Getaway \nBeachFront Paradise \nRustic Cabin by the Lake \nLuxury Penthouse with City Views \nHistoric Canal House \nCharming Cottage in Cotswolds \nHistoric Brownstone in Boston \nLakefront Cabin in New Hampshire \nSki Chalet in Aspen \nSecluded Beach House in Costa Rica"
              );
            if (country_name === "Italy") resolve("Historic Villa in Tuscany");
            if (country_name === "Mexico") resolve("Beachfront Paradise");
            if (country_name === "Switzerland")
              resolve("Ski-In/Ski-Out Chalet");
            if (country_name === "Tanzania")
              resolve("Safari Lodge in the Serengeti");
            if (country_name === "Netherlands") resolve("Historic Canal House");
            if (country_name === "Fiji") resolve("Private Island Retreat");
            if (country_name === "United Kingdom")
              resolve(
                "Charming Cottage in the Costwolds \nHistoric Castle in Scotland"
              );
            if (country_name === "Indonesia")
              resolve("Beachfront Bungalow in Bali");
            if (country_name === "Canada")
              resolve(
                "Mountain View Cabin in Banff \nLakefront Cabin in New Hampshire"
              );
            if (country_name === "Thailand")
              resolve("Tropical Villa in Phuket");
            if (country_name === "United Arab Emirates")
              resolve("Dessert Oasis in Dubai");
            if (country_name === "Greece")
              resolve("Beachfront Villa in Greece");
            if (country_name === "Japan") resolve("Modern Apartment in Tokyo");
            if (country_name === "Costa Rica")
              resolve(
                "Secluded Beach House in Costa Rica \nEco-Friendly Treehouse Retreat"
              );
            if (country_name === "Maldives")
              resolve("Luxury Villa in Maldives");
          }
        } else resolve("We dont have " + message + " in our database. Please try again.");
      }, 2000);
    });
  },
};

export default API;
