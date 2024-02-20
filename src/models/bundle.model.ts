import { model, models, Schema } from 'mongoose';

const bundleSchema = new Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true, minlength: 1, maxlength: 15 },
    websites: [
      {
        type: String,
        required: true,
        validate: [arrayRange, 'List size must be between 1 and 10'],
      },
    ],
  },
  { timestamps: true }
);

function arrayRange(arr: string[]) {
  return arr.length > 0 && arr.length <= 10;
}

const Bundle = models.Bundle || model('Bundle', bundleSchema);

export default Bundle;
