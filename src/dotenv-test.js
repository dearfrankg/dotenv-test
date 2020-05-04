#!/usr/bin/env node

/*
    ***NOTE***

    dotenv defaults to the CWD which I think is kind f'n strange.

    So you have to manually configure to grab the .env
    See how we did that here:
*/

const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const show = () => {
  console.log("env var values:", process.env.testOne, process.env.testTwo);
};

show();
