import assert from 'assert';

// First try of testing
var assertLib = assert;
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assertLib.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


// Examples and definitions

// AAA -Arrange: setup of all the needed for tests.
// -Act: execute the text
// - Assert: Ensure the the reveived value is the expected

describe("Customer classifier", () => {
  test("When customer spent more than 500$, should be classified as premium", () => {
    //Arrange
    const customerToClassify = { spent: 505, joined: new Date(), id: 1 };
    const DBStub = sinon.stub(dataAccess, "getCustomer").reply({ id: 1, classification: "regular" });

    //Act
    const receivedClassification = customerClassifier.classifyCustomer(customerToClassify);

    //Assert
    expect(receivedClassification).toMatch("premium");
  });
});

// Only black-box testing, we don't care internal function of the API in the front for example.

//Use right Doubles to test
// Dummy: are passed around but never actually used. Usually they are just used to fill parameter lists.
// Fake: actually have working implementations, but usually take some shortcut which makes them not suitable for production (an in memory database is a good example).
// Stubs: provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.
// Spies: are stubs that also record some information based on how they were called. One form of this might be an email service that records how many messages it was sent.
// Mocks: are objects pre-programmed with expectations which form a specification of the calls they are expected to receive.


//Don't foo, use realistic input, we can use chancejs to fake meaningful data.

it("When adding new valid product, get successful confirmation", async () => {
  const addProductResult = addProduct(chance.commerce.productName(), chance.random.number());
  //Generated random input: {'Sleek Cotton Computer',  85481}
  expect(addProductResult).to.be.true;
  //Test failed, the random input triggered some path we never planned for.
  //We discovered a bug early!
});

// Try many combinations as possible
//Fuzzing or Fuzz test is a technique to automate invalidad, unexpected or random data to our functions.
// We can use js-verify, testcheck or fast-check for this, the last one is the best.

import fc from "fast-check";

describe("Product service", () => {
  describe("Adding new", () => {
    //this will run 100 times with different random properties
    it("Add new product with random yet valid properties, always successful", () =>
      fc.assert(
        fc.property(fc.integer(), fc.string(), (id, name) => {
          expect(addNewProduct(id, name).status).toEqual("approved");
        })
      ));
  });
});


//Snapshots, this is used to make sure that our UI does not change unexpectedly. Try to use inline snapshots.

it("When visiting TestJavaScript.com home page, a menu is displayed", () => {
  //Arrange

  //Act
  const receivedPage = renderer
    .create(<DisplayPage page="http://www.testjavascript.com"> Test JavaScript </DisplayPage>)
    .toJSON();

  //Assert

  const menu = receivedPage.content.menu;
  expect(menu).toMatchInlineSnapshot(`
<ul>
<li>Home</li>
<li> About </li>
<li> Contact </li>
</ul>
`);
});

// Try to categorize tests under at least 2 levels, one for unit block that is testing and the other one to describe it more.

// Unit under test
describe("Transfer service", () => {
  //Scenario
  describe("When no credit", () => {
    //Expectation
    test("Then the response status should decline", () => {});

    //Expectation
    test("Then it should send email to admin", () => {});
  });
});


//Test middlewares isolated
//We can use libraries like node-mock-http to try req and res params and spy them

//the middleware we want to test
const unitUnderTest = require("./middleware");
const httpMocks = require("node-mocks-http");
//Jest syntax, equivelant to describe() & it() in Mocha
test("A request without authentication header, should return http status 403", () => {
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/user/42",
    headers: {
      authentication: ""
    }
  });
  const response = httpMocks.createResponse();
  unitUnderTest(request, response);
  expect(response.statusCode).toBe(403);
});


//When testing frontend separate data and logic from UI details

test("When users-list is flagged to show only VIP, should display only VIP members", () => {
  // Arrange
  const allUsers = [{ id: 1, name: "Yoni Goldberg", vip: false }, { id: 2, name: "John Doe", vip: true }];

  // Act
  const { getAllByTestId } = render(<UsersList users={allUsers} showOnlyVIP={true} />);

  // Assert - Extract the data from the UI first
  const allRenderedUsers = getAllByTestId("user").map(uiElement => uiElement.textContent);
  const allRealVIPUsers = allUsers.filter(user => user.vip).map(user => user.name);
  expect(allRenderedUsers).toEqual(allRealVIPUsers); //compare data with data, no UI here
});


