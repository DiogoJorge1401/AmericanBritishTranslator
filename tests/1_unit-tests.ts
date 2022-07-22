import chai from "chai";
import { suite, test } from "mocha";
const assert = chai.assert;
import Translator from "../src/components/translator";
const translator = new Translator();

suite("Unit Tests", () => {
  test("Translate 'Mangoes are my favorite fruit.' to British English", (done) => {
    translator.translate(
      "Mangoes are my favorite fruit.",
      "american-to-british"
    );
    done();
  });
  test("Translate 'I ate yogurt for breakfast.' to British English", (done) => {
    translator.translate("I ate yogurt for breakfast.", "american-to-british");
    done();
  });
  test("Translate 'We had a party at my friend's condo.' to British English", (done) => {
    translator.translate(
      "We had a party at my friend's condo.",
      "american-to-british"
    );
    done();
  });
  test("Translate 'Can you toss this in the trashcan for me?' to British English", (done) => {
    translator.translate(
      "Can you toss this in the trashcan for me?",
      "american-to-british"
    );
    done();
  });
  test("Translate 'The parking lot was full.' to British English", (done) => {
    translator.translate("The parking lot was full.", "american-to-british");
    done();
  });
  test("Translate 'Like a high tech Rube Goldberg machine.' to British English", (done) => {
    translator.translate(
      "Like a high tech Rube Goldberg machine.",
      "american-to-british"
    );
    done();
  });
  test("Translate 'To play hooky means to skip class or work.' to British English", (done) => {
    translator.translate(
      "To play hooky means to skip class or work.",
      "american-to-british"
    );
    done();
  });
  test("Translate 'No Mr. Bond, I expect you to die.' to British English", (done) => {
    translator.translate(
      "No Mr. Bond, I expect you to die.",
      "american-to-british"
    );
    done();
  });
  test("Translate 'Dr. Grosh will see you now.' to British English", (done) => {
    translator.translate("Dr. Grosh will see you now.", "american-to-british");
    done();
  });
  test("Translate 'Lunch is at 12:15 today.' to British English", (done) => {
    translator.translate("Lunch is at 12:15 today.", "american-to-british");
    done();
  });
  test("Translate 'We watched the footie match for a while.' to American English", (done) => {
    translator.translate("We watched the footie match for a while.", "british-to-american");
    done();
  });
  test("Translate 'Paracetamol takes up to an hour to work.' to American English", (done) => {
    translator.translate("Paracetamol takes up to an hour to work.", "british-to-american");
    done();
  });
  test("Translate 'First, caramelise the onions.' to American English", (done) => {
    translator.translate("First, caramelise the onions.", "british-to-american");
    done();
  });
  test("Translate 'I spent the bank holiday at the funfair.' to American English", (done) => {
    translator.translate("I spent the bank holiday at the funfair.", "british-to-american");
    done();
  });
  test("Translate 'I had a bicky then went to the chippy.' to American English", (done) => {
    translator.translate("I had a bicky then went to the chippy.", "british-to-american");
    done();
  });
  test("Translate 'I've just got bits and bobs in my bum bag.' to American English", (done) => {
    translator.translate("I've just got bits and bobs in my bum bag.", "british-to-american");
    done();
  });
  test("Translate 'The car boot sale at Boxted Airfield was called off.' to American English", (done) => {
    translator.translate("The car boot sale at Boxted Airfield was called off.", "british-to-american");
    done();
  });
  test("Translate 'Have you met Mrs Kalyani?' to American English", (done) => {
    translator.translate("Have you met Mrs Kalyani?", "british-to-american");
    done();
  });
  test("Translate 'Prof Joyner of King's College, London.' to American English", (done) => {
    translator.translate("Prof Joyner of King's College, London.", "british-to-american");
    done();
  });
  test("Translate 'Tea time is usually around 4 or 4.30.' to American English", (done) => {
    translator.translate("Tea time is usually around 4 or 4.30.", "british-to-american");
    done();
  });
  test("Highlight translation in 'Mangoes are my favorite fruit'", (done) => {
    done();
  });
  test("Highlight translation in 'I ate yogurt for breakfast'", (done) => {
    done();
  });
  test("Highlight translation in 'We watched the footie match for a while'", (done) => {
    done();
  });
  test("Highlight translation in 'Paracetamol takes up to an hour to work'", (done) => {
    done();
  });
});
