"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Djibouti"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Djibouti", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Djibouti", { abbr: true, expect: "Africa/Nairobi" }),

	"1908" : helpers.makeTestYear("Africa/Djibouti", [
		["1908-04-30T21:32:44+00:00", "00:02:44", "+0230", -150]
	]),

	"1928" : helpers.makeTestYear("Africa/Djibouti", [
		["1928-06-30T21:29:59+00:00", "23:59:59", "+0230", -150],
		["1928-06-30T21:30:00+00:00", "00:30:00", "EAT", -180]
	]),

	"1930" : helpers.makeTestYear("Africa/Djibouti", [
		["1930-01-04T20:59:59+00:00", "23:59:59", "EAT", -180],
		["1930-01-04T21:00:00+00:00", "23:30:00", "+0230", -150]
	]),

	"1936" : helpers.makeTestYear("Africa/Djibouti", [
		["1936-12-31T21:29:59+00:00", "23:59:59", "+0230", -150],
		["1936-12-31T21:30:00+00:00", "00:15:00", "+0245", -165]
	]),

	"1942" : helpers.makeTestYear("Africa/Djibouti", [
		["1942-07-31T21:14:59+00:00", "23:59:59", "+0245", -165]
	])
};