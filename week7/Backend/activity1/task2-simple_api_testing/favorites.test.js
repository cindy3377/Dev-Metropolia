const { request, expect } = require("./config");

describe("Airport API", function () {
  describe("POST /favorites", function () {
    it("should require authentication to create a favorite", async function () {
      const response = await request.post("/favorites").send({
        airport_id: "YBR",
        note: "Going to Canada",
      });

      expect(response.status).to.eql(401);
      expect(response.body.error).to.eql("Authentication required");
    });

    it("should allow a user to retrieve their favorite airports", async function () {
      // Create a favorite airport.
      const createResponse = await request
        .post("/favorites")
        .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x")
        .send({
          airport_id: "YBR",
          note: "Going to Canada",
        });

      expect(createResponse.status).to.eql(201);
      const favoriteId = createResponse.body.data.id;

      // Retrieve the user's favorite airports.
      const retrieveResponse = await request
        .get("/favorites")
        .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x");

      expect(retrieveResponse.status).to.eql(200);
      expect(retrieveResponse.body.data).to.be.an("array");
      expect(retrieveResponse.body.data.length).to.be.greaterThan(0);

      // Clean up: Delete the created favorite airport.
      const deleteResponse = await request
        .delete(`/favorites/${favoriteId}`)
        .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x");

      expect(deleteResponse.status).to.eql(204);
    });

    it("should allow a user to save, update, and delete their favorite airports", async function () {
      // Create a favorite airport.
      const createResponse = await request
        .post("/favorites")
        .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x")
        .send({
          airport_id: "YBR",
          note: "Going to Canada",
        });

      expect(createResponse.status).to.eql(201);
      const favoriteId = createResponse.body.data.id;

      // Update the note of the created favorite airport.
      const updateResponse = await request
        .put(`/favorites/${favoriteId}`)
        .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x")
        .send({
          note: "My usual layover when visiting family and friends",
        });

      expect(updateResponse.status).to.eql(200);
      expect(updateResponse.body.data.attributes.note).to.eql(
        "My usual layover when visiting family and friends"
      );

      // Delete the created favorite airport.
      const deleteResponse = await request
        .delete(`/favorites/${favoriteId}`)
        .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x");

      expect(deleteResponse.status).to.eql(204);

      // Verify that the record was deleted.
      const retrieveResponse = await request
        .get(`/favorites/${favoriteId}`)
        .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x");

      expect(retrieveResponse.status).to.eql(404);
    });
  });
});
