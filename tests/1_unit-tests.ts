import chai from "chai";
import { suite, test } from "mocha";
const assert = chai.assert;
import Translator from "../src/components/translator";
const translator = new Translator();

suite("Unit Tests", () => {
  suite("American to British English", () => {
    test("Translate 'Mangoes are my favorite fruit.' to British English", (done) => {
      const result = translator.translate(
        "Mangoes are my favorite fruit.",
        "american-to-british"
      );
      assert.equal(
        result,
        `Mangoes are my <span class="highlight">favourite</span> fruit.`
      );
      done();
    });

    test("Translate 'I ate yogurt for breakfast.' to British English", (done) => {
      const result = translator.translate(
        "I ate yogurt for breakfast.",
        "american-to-british"
      );
      assert.equal(
        result,
        `I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.`
      );
      done();
    });

    test("Translate 'We had a party at my friend's condo.' to British English", (done) => {
      const result = translator.translate(
        "We had a party at my friend's condo.",
        "american-to-british"
      );
      assert.equal(
        result,
        `We had a party at my friend's <span class="highlight">flat</span>.`
      );
      done();
    });

    test("Translate 'Can you toss this in the trashcan for me?' to British English", (done) => {
      const result = translator.translate(
        "Can you toss this in the trashcan for me?",
        "american-to-british"
      );
      assert.equal(
        result,
        `Can you toss this in the <span class="highlight">bin</span> for me?`
      );
      done();
    });

    test("Translate 'The parking lot was full.' to British English", (done) => {
      const result = translator.translate(
        "The parking lot was full.",
        "american-to-british"
      );
      assert.equal(
        result,
        `The <span class="highlight">car park</span> was full.`
      );
      done();
    });

    test("Translate 'Like a high tech Rube Goldberg machine.' to British English", (done) => {
      const result = translator.translate(
        "Like a high tech Rube Goldberg machine.",
        "american-to-british"
      );
      assert.equal(
        result,
        `Like a high tech <span class="highlight">Heath Robinson device</span>.`
      );
      done();
    });

    test("Translate 'To play hooky means to skip class or work.' to British English", (done) => {
      const result = translator.translate(
        "To play hooky means to skip class or work.",
        "american-to-british"
      );
      assert.equal(
        result,
        `To <span class="highlight">bunk off</span> means to skip class or work.`
      );
      done();
    });

    test("Translate 'No Mr. Bond, I expect you to die.' to British English", (done) => {
      const result = translator.translate(
        "No Mr. Bond, I expect you to die.",
        "american-to-british"
      );
      assert.equal(
        result,
        `No <span class="highlight">Mr</span> Bond, I expect you to die.`
      );
      done();
    });

    test("Translate 'Dr. Grosh will see you now.' to British English", (done) => {
      const result = translator.translate(
        "Dr. Grosh will see you now.",
        "american-to-british"
      );
      assert.equal(
        result,
        `<span class="highlight">Dr</span> Grosh will see you now.`
      );
      done();
    });

    test("Translate 'Lunch is at 12:15 today.' to British English", (done) => {
      const result = translator.translate(
        "Lunch is at 12:15 today.",
        "american-to-british"
      );
      assert.equal(
        result,
        `Lunch is at <span class="highlight">12.15</span> today.`
      );
      done();
    });
  });

  suite("British to American English", () => {
    test("Translate 'We watched the footie match for a while.' to American English", (done) => {
      const result = translator.translate(
        "We watched the footie match for a while.",
        "british-to-american"
      );
      assert.equal(
        result,
        `We watched the <span class="highlight">soccer</span> match for a while.`
      );
      done();
    });

    test("Translate 'Paracetamol takes up to an hour to work.' to American English", (done) => {
      const result = translator.translate(
        "Paracetamol takes up to an hour to work.",
        "british-to-american"
      );
      assert.equal(
        result,
        `<span class="highlight">acetaminophen</span> takes up to an hour to work.`
      );
      done();
    });

    test("Translate 'First, caramelise the onions.' to American English", (done) => {
      const result = translator.translate(
        "First, caramelise the onions.",
        "british-to-american"
      );
      assert.equal(
        result,
        `First, <span class="highlight">caramelize</span> the onions.`
      );
      done();
    });

    test("Translate 'I spent the bank holiday at the funfair.' to American English", (done) => {
      const result = translator.translate(
        "I spent the bank holiday at the funfair.",
        "british-to-american"
      );
      assert.equal(
        result,
        `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`
      );
      done();
    });

    test("Translate 'I had a bicky then went to the chippy.' to American English", (done) => {
      const result = translator.translate(
        "I had a bicky then went to the chippy.",
        "british-to-american"
      );
      assert.equal(
        result,
        `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-<span class="highlight">fish-and-chip shop</span></span>.`
      );
      done();
    });

    test("Translate 'I've just got bits and bobs in my bum bag.' to American English", (done) => {
      const result = translator.translate(
        "I've just got bits and bobs in my bum bag.",
        "british-to-american"
      );
      assert.equal(
        result,
        `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`
      );
      done();
    });

    test("Translate 'The car boot sale at Boxted Airfield was called off.' to American English", (done) => {
      const result = translator.translate(
        "The car boot sale at Boxted Airfield was called off.",
        "british-to-american"
      );
      assert.equal(
        result,
        `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`
      );
      done();
    });

    test("Translate 'Have you met Mrs Kalyani?' to American English", (done) => {
      const result = translator.translate(
        "Have you met Mrs Kalyani?",
        "british-to-american"
      );
      
      assert.equal(
        result,
        `Have you met <span class="highlight">Mrs.</span> Kalyani?`
      );
      done();
    });

    test("Translate 'Prof Joyner of King's College, London.' to American English", (done) => {
      const result = translator.translate(
        "Prof Joyner of King's College, London.",
        "british-to-american"
      );
      assert.equal(
        result,
        `<span class="highlight">Prof.</span> Joyner of King's College, London.`
      );
      done();
    });

    test("Translate 'Tea time is usually around 4 or 4.30.' to American English", (done) => {
      const result = translator.translate(
        "Tea time is usually around 4 or 4.30.",
        "british-to-american"
      );
      assert.equal(
        result,
        `Tea time is usually around 4 or <span class="highlight">4:30</span>.`
      );
      done();
    });

    test("Highlight translation in 'Mangoes are my favorite fruit'", (done) => {
      const result = translator.translate(
        "Mangoes are my favorite fruit",
        "american-to-british"
      );
      assert.include(result, `span`);
      done();
    });

    test("Highlight translation in 'I ate yogurt for breakfast'", (done) => {
      const result = translator.translate(
        "I ate yogurt for breakfast",
        "american-to-british"
      );
      assert.include(result, `span`);
      done();
    });

    test("Highlight translation in 'We watched the footie match for a while'", (done) => {
      const result = translator.translate(
        "We watched the footie match for a while",
        "british-to-american"
      );
      assert.include(result, `span`);
      done();
    });

    test("Highlight translation in 'Paracetamol takes up to an hour to work'", (done) => {
      const result = translator.translate(
        "Paracetamol takes up to an hour to work",
        "british-to-american"
      );
      assert.include(result, `span`);
      done();
    });
  });
});
