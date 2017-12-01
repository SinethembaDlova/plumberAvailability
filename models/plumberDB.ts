import {Schema, model, Document} from 'mongoose';

var plumberSchema: Schema = new Schema ({
    plumberName: {
        type: String,
        unique: true,
        sparse: true,
    },
    password: String,
    contactNumber: Number,
    session: {
        day:String,
        slot: String
    }
});

plumberSchema.index({
    plumberName: 1
}, {
        unique: true
    });

export default model<Document>('plumberDB', plumberSchema);
