class Song {
    public readonly id: number;
    private name: string;
    private length: number;

    constructor(id: number, name: string, length: number) {
        this.id = id;
        this.name = name;
        this.length = length;
    }

    // Method to describe the song
    public describe(): void {
        console.log(this.id);
        console.log(this.name);
        console.log(this.length);
    }
}

const song = new Song(1, "Shape of You", 240);
song.describe();

// Changing name and length directly
song.name = "Perfect";
song.length = 270;

console.log("\nAfter changes:");
song.describe();
