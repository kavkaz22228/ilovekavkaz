"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Katmandu"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Katmandu", { offset: true, expect: "Asia/Kathmandu" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Katmandu", { abbr: true, expect: "Asia/Kathmandu" }),

	"1919" : helpers.makeTestYear("Asia/Katmandu", [
		["1919-12-31T18:18:44+00:00", "23:48:44", "+0530", -330]
	]),

	"1985" : helpers.makeTestYear("Asia/Katmandu", [
		["1985-12-31T18:29:59+00:00", "23:59:59", "+0530", -330]
	])
};