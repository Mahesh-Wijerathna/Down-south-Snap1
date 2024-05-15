// Import the necessary modules for testing
const { expect } = require('chai');
const sinon = require('sinon');

// Import the controller module
const controller = require('../src/controller');

describe('Controller', () => {
  describe('query', () => {
    it('should create a valid query object', () => {
      // Define the input values for the test
      const searchCenter = [0, 0];
      const radius = 100;

      // Call the function to create the query object
      const query = controller.createQuery(searchCenter, radius);

      // Assert that the query object is created correctly
      expect(query).to.deep.equal({
        location: {
          $geoWithin: {
            $centerSphere: [searchCenter, radius / 6371]
          }
        }
      });
    });
  });
});