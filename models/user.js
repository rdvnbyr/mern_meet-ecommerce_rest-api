const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema(
    {
        product: {
            type: Schema.Types.ObjectId,
            ref: "Products",
            required: true
        }
    }
);

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    wishlist: [wishlistSchema]
}, {timestamps: true}
);

module.exports = mongoose.model('User', userSchema);