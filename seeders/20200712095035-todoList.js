"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "todoLists", //as in Query pie name 
      [
        {
          name: "Leo's list",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dan's list",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoLists", null, {});
  },
};
