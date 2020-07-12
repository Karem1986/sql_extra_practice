"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "todoItems", //as in Query pie name 
      [
        {
          task: "go to the picnic",
          deadline: "today",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "practice sql",
          deadline: "next weekend",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoItems", null, {});
  },
};
