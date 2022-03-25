const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least  3 characters"]
    },
    image: { 
        type: String,
        required: [true, "Image is required"],
        minlength: [3, "Title must be at least  3 characters"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Catch Phrase is required!"],
        minlength: [5, "Pirate Catch Phrase must be longer than 5 characters!"]
    },
    crewPosition: { 
        type: String,
        required: [true, "Must choose a Crew Position!"],
        minlength: [3]
    },
    pegLeg: { 
        type: Boolean,
        required: true
    },
    eyePatch: { 
        type: Boolean,
        required: true
    },
    hookHand: { 
        type: Boolean,
        required: true
    },
    numChests: {
        type: Number,
        required: [true, "Number of Treasure Chests is required"],
        min:[0, "You can't have a negative Treasure Chests!"]
    }
}, { timestamps: true });
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);