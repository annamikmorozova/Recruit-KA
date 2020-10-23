const Sequelize = require("sequelize");
const db = require("../db");

const Plan = db.define("plan", {
    name: {
        type: Sequelize.ENUM("basic", "discovery", "vip"),
        defaultValue: "basic"
    }
});

module.exports = Plan;