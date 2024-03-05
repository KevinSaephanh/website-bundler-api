import { model, Schema } from 'mongoose';

const bundleSchema = new Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true, minlength: 1, maxlength: 20 },
    websites: [
      {
        type: String,
        required: true,
        validate: [arrayRange, 'List size must be between 1 and 15'],
      },
    ],
  },
  { timestamps: true }
);

function arrayRange({ length }: string[]) {
  return length > 0 && length <= 15;
}

const Bundle = model('Bundle', bundleSchema);

export default Bundle;
