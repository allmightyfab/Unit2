class MyMovies {
    constructor(show1, show2, show3) {
        this.show1 = show1;
        this.show2 = show2;
        this.show3 = show3;
    }

    // Method to display all shows
    displayShows() {
        console.log("Shows:");
        console.log("1. " + this.show1);
        console.log("2. " + this.show2);
        console.log("3. " + this.show3);
    }

    // Method to display a specific show by its number
    displayShow(number) {
        switch (number) {
            case 1:
                console.log("Show 1: " + this.show1);
                break;
            case 2:
                console.log("Show 2: " + this.show2);
                break;
            case 3:
                console.log("Show 3: " + this.show3);
                break;
            default:
                console.log("Invalid show number");
        }
    }
}

// Create an instance of MyMovies
let myMovies = new MyMovies("Rick and Morty", "Breaking Bad", "Stranger Things");


