import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  todos: [{ title: String, status: String }],

  name: String,

  lastName: String,

  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const TodoUser = models.TodoUser || model("TodoUser", userSchema);

export default TodoUser;
