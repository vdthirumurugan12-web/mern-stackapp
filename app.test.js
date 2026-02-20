const request = require("supertest");
const app = require("./server");

describe("Health check", () => {
  it("should return status UP", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe("UP");
  });
});
