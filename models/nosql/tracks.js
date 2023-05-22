const mongoose = require("mongoose")
const TracksSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        album: {
            type: String
        },
        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL",
            },
        },
        artist: {
            name: {
                type: String
            },
            nickname: {
                type: String
            },
            nationality: {
                type: String
            },
        },
        duration: {
            start: {
                type: Number,
            },
            end: {
                type: Number,
            },
        },
        mediaId: {
            type: mongoose.Types.ObjectId
        },
        deleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true, //createdAt, updateAt
        versionKey: false
    }
);

TracksSchema.statics.findNotDeleted = function () {
    return this.find({ deleted: false });
};

TracksSchema.statics.softDeleteById = function (trackId) {
    return this.findByIdAndUpdate(trackId, { deleted: true });
};

module.exports = mongoose.model("tracks", TracksSchema)