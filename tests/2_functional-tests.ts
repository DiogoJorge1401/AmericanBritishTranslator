import chai from "chai";
import { suite, test } from "mocha";
import chaiHttp from "chai-http";
const assert = chai.assert;
import server from "../src/server";
import Translator from '../src/components/translator';

chai.use(chaiHttp);

suite("Functional Tests", () => {});
