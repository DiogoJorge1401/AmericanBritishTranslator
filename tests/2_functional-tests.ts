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
        .send({
          text: "The parking lot was full. By the time we got parked it was 13:15. Definitely not my favorite day.",
          locale: "american-to-british",
        })
        .then((res) => {
          assert.equal(res.status, 200);
          assert.equal(
            res.body.translation,
            `The <span class="highlight">car park</span> was full. By the time we got parked it was <span class="highlight">13.15</span>. Definitely not my <span class="highlight">favourite</span> day.`
          );
          done();
        });
    });

    test("Translation with text and invalid locale field", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({
          text: "The parking lot was full. By the time we got parked it was 13:15. Definitely not my favorite day.",
          locale: "american-british",
        })
        .then((res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, "Invalid value for locale field");
          done();
        });
    });

    test("Translation with missing text field", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({
          locale: "american-to-british",
        })
        .then((res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, "Required field(s) missing");
          done();
        });
    });

    test("Translation with missing locale field", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({
          text: "The parking lot was full. By the time we got parked it was 13:15. Definitely not my favorite day.",
        })
        .then((res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, "Required field(s) missing");
          done();
        });
    });

    test("Translation with empty text", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({
          text: "",
          locale: "american-to-british",
        })
        .then((res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, "No text to translate");
          done();
        });
    });

    test("Translation with text that needs no translation", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({
          text: "Hello",
          locale: "american-to-british",
        })
        .then((res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.translation, "Everything looks good to me!");
          done();
        });
    });
  });
});
