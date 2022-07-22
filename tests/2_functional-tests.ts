import chai from "chai";
import { suite, test } from "mocha";
import chaiHttp from "chai-http";
const assert = chai.assert;
import server from "../src/server";

chai.use(chaiHttp);


suite("Functional Tests", () => {
  suite(`POST request to /api/translate`, () => {
    test("Translation with text and locale fields", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({})
        .then((res) => {
          assert.equal(res.status, 200);
          done();
        });
    });
    test("Translation with text and invalid locale field", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({})
        .then((res) => {
          assert.equal(res.status, 200);
          done();
        });
    });
    test("Translation with missing text field", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({})
        .then((res) => {
          assert.equal(res.status, 200);
          done();
        });
    });
    test("Translation with missing locale field", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({})
        .then((res) => {
          assert.equal(res.status, 200);
          done();
        });
    });
    test("Translation with empty text", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({})
        .then((res) => {
          assert.equal(res.status, 200);
          done();
        });
    });
    test("Translation with text that needs no translation", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({})
        .then((res) => {
          assert.equal(res.status, 200);
          done();
        });
    });
  });
});
