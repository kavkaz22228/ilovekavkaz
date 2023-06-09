"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Efate"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Efate", { offset: true, expect: "Asia/Sakhalin" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Efate", { abbr: true, expect: "Asia/Sakhalin" }),

	"1912" : helpers.makeTestYear("Pacific/Efate", [
		["1912-01-12T12:46:44+00:00", "23:46:44", "+11", -660]
	]),

	"1973" : helpers.makeTestYear("Pacific/Efate", [
		["1973-12-22T11:59:59+00:00", "22:59:59", "+11", -660],
		["1973-12-22T12:00:00+00:00", "00:00:00", "+12", -720]
	]),

	"1974" : helpers.makeTestYear("Pacific/Efate", [
		["1974-03-30T11:59:59+00:00", "23:59:59", "+12", -720],
		["1974-03-30T12:00:00+00:00", "23:00:00", "+11", -660]
	]),

	"1983" : helpers.makeTestYear("Pacific/Efate", [
		["1983-09-24T12:59:59+00:00", "23:59:59", "+11", -660],
		["1983-09-24T13:00:00+00:00", "01:00:00", "+12", -720]
	]),

	"1984" : helpers.makeTestYear("Pacific/Efate", [
		["1984-03-24T11:59:59+00:00", "23:59:59", "+12", -720],
		["1984-03-24T12:00:00+00:00", "23:00:00", "+11", -660],
		["1984-09-22T12:59:59+00:00", "23:59:59", "+11", -660],
		["1984-09-22T13:00:00+00:00", "01:00:00", "+12", -720]
	]),

	"1985" : helpers.makeTestYear("Pacific/Efate", [
		["1985-03-23T11:59:59+00:00", "23:59:59", "+12", -720],
		["1985-03-23T12:00:00+00:00", "23:00:00", "+11", -660],
		["1985-09-28T12:59:59+00:00", "23:59:59", "+11", -660],
		["1985-09-28T13:00:00+00:00", "01:00:00", "+12", -720]
	]),

	"1986" : helpers.makeTestYear("Pacific/Efate", [
		["1986-03-22T11:59:59+00:00", "23:59:59", "+12", -720],
		["1986-03-22T12:00:00+00:00", "23:00:00", "+11", -660],
		["1986-09-27T12:59:59+00:00", "23:59:59", "+11", -660],
		["1986-09-27T13:00:00+00:00", "01:00:00", "+12", -720]
	]),

	"1987" : helpers.makeTestYear("Pacific/Efate", [
		["1987-03-28T11:59:59+00:00", "23:59:59", "+12", -720],
		["1987-03-28T12:00:00+00:00", "23:00:00", "+11", -660],
		["1987-09-26T12:59:59+00:00", "23:59:59", "+11", -660],
		["1987-09-26T13:00:00+00:00", "01:00:00", "+12", -720]
	]),

	"1988" : helpers.makeTestYear("Pacific/Efate", [
		["1988-03-26T11:59:59+00:00", "23:59:59", "+12", -720],
		["1988-03-26T12:00:00+00:00", "23:00:00", "+11", -660],
		["1988-09-24T12:59:59+00:00", "23:59:59", "+11", -660],
		["1988-09-24T13:00:00+00:00", "01:00:00", "+12", -720]
	]),

	"1989" : helpers.makeTestYear("Pacific/Efate", [
		["1989-03-25T11:59:59+00:00", "23:59:59", "+12", -720],
		["1989-03-25T12:00:00+00:00", "23:00:00", "+11", -660],
		["1989-09-23T12:59:59+00:00", "23:59:59", "+11", -660],
		["1989-09-23T13:00:00+00:00", "01:00:00", "+12", -720]
	]),

	"1990" : helpers.makeTestYear("Pacific/Efate", [
		["1990-03-24T11:59:59+00:00", "23:59:59", "+12", -720],
		["1990-03-24T12:00:00+00:00", "23:00:00", "+11", -660],
		["1990-09-22T12:59:59+00:00", "23:59:59", "+11", -660],
		["1990-09-22T13:00:00+00:00", "01:00:00", "+12", -720]
	]),

	"1991" : helpers.makeTestYear("Pacific/Efate", [
		["1991-03-23T11:59:59+00:00", "23:59:59", "+12", -720],
		["1991-03-23T12:00:00+00:00", "23:00:00", "+11", -660],
		["1991-09-28T12:59:59+00:00", "23:59:59", "+11", -660],
		["1991-09-28T13:00:00+00:00", "01:00:00", "+12", -720]
	]),

	"1992" : helpers.makeTestYear("Pacific/Efate", [
		["1992-01-25T11:59:59+00:00", "23:59:59", "+12", -720],
		["1992-01-25T12:00:00+00:00", "23:00:00", "+11", -660],
		["1992-10-24T12:59:59+00:00", "23:59:59", "+11", -660],
		["1992-10-24T13:00:00+00:00", "01:00:00", "+12", -720]
	]),

	"1993" : helpers.makeTestYear("Pacific/Efate", [
		["1993-01-23T11:59:59+00:00", "23:59:59", "+12", -720]
	])
};