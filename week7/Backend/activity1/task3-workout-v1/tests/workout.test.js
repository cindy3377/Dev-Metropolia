const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api.post("/api/user/signup").send({
    email: "mattiv@matti.fi",
    password: "R3g5T7#gh",
  });
  token = result.body.token;
});

describe("Workouts API", () => {
  describe("When there are initially some workouts saved", () => {
    beforeEach(async () => {
      await Workout.deleteMany({});
      await api
        .post("/api/workouts")
        .set("Authorization", `bearer ${token}`)
        .send(workouts[0])
        .send(workouts[1]);
    });

    it("should return workouts as JSON with status 200", async () => {
      const response = await api
        .get("/api/workouts")
        .set("Authorization", `bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toMatch(/application\/json/);
    });

    it("should successfully add a new workout with status 201", async () => {
      const newWorkout = {
        title: "testworkout",
        reps: 10,
        load: 100,
      };
      const response = await api
        .post("/api/workouts")
        .set("Authorization", `bearer ${token}`)
        .send(newWorkout);

      expect(response.status).toBe(201);
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
