import { model, Schema } from 'mongoose';

export enum Roles {
  Admin,
  User,
}

const userSchema = new Schema(
  {
    googleId: { type: String, required: true },
    name: { type: String, required: true, minlength: 1, maxlength: 25 },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 1,
      maxlength: 25,
    },
    role: {
      type: String,
      enum: [Roles.Admin, Roles.User],
      default: Roles.User,
    },
    bundles: Array<{ type: Schema.Types.ObjectId; ref: 'Bundle' }>,
  },
  { timestamps: true }
);

const User = model('User', userSchema);

export default User;
