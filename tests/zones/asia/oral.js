"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Oral"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Oral", { offset: true, expect: "Asia/Karachi" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Oral", { abbr: true, expect: "Asia/Karachi" }),

	"1924" : helpers.makeTestYear("Asia/Oral", [
		["1924-05-01T20:34:36+00:00", "23:34:36", "+03", -180]
	]),

	"1930" : helpers.makeTestYear("Asia/Oral", [
		["1930-06-20T20:59:59+00:00", "23:59:59", "+03", -180],
		["1930-06-20T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1981" : helpers.makeTestYear("Asia/Oral", [
		["1981-03-31T18:59:59+00:00", "23:59:59", "+05", -300],
		["1981-03-31T19:00:00+00:00", "01:00:00", "+06", -360],
		["1981-09-30T17:59:59+00:00", "23:59:59", "+06", -360],
		["1981-09-30T18:00:00+00:00", "00:00:00", "+06", -360]
	]),

	"1982" : helpers.makeTestYear("Asia/Oral", [
		["1982-03-31T17:59:59+00:00", "23:59:59", "+06", -360],
		["1982-03-31T18:00:00+00:00", "00:00:00", "+06", -360],
		["1982-09-30T17:59:59+00:00", "23:59:59", "+06", -360],
		["1982-09-30T18:00:00+00:00", "23:00:00", "+05", -300]
	]),

	"1983" : helpers.makeTestYear("Asia/Oral", [
		["1983-03-31T18:59:59+00:00", "23:59:59", "+05", -300],
		["1983-03-31T19:00:00+00:00", "01:00:00", "+06", -360],
		["1983-09-30T17:59:59+00:00", "23:59:59", "+06", -360],
		["1983-09-30T18:00:00+00:00", "23:00:00", "+05", -300]
	]),

	"1984" : helpers.makeTestYear("Asia/Oral", [
		["1984-03-31T18:59:59+00:00", "23:59:59", "+05", -300],
		["1984-03-31T19:00:00+00:00", "01:00:00", "+06", -360],
		["1984-09-29T20:59:59+00:00", "02:59:59", "+06", -360],
		["1984-09-29T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1985" : helpers.makeTestYear("Asia/Oral", [
		["1985-03-30T20:59:59+00:00", "01:59:59", "+05", -300],
		["1985-03-30T21:00:00+00:00", "03:00:00", "+06", -360],
		["1985-09-28T20:59:59+00:00", "02:59:59", "+06", -360],
		["1985-09-28T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1986" : helpers.makeTestYear("Asia/Oral", [
		["1986-03-29T20:59:59+00:00", "01:59:59", "+05", -300],
		["1986-03-29T21:00:00+00:00", "03:00:00", "+06", -360],
		["1986-09-27T20:59:59+00:00", "02:59:59", "+06", -360],
		["1986-09-27T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1987" : helpers.makeTestYear("Asia/Oral", [
		["1987-03-28T20:59:59+00:00", "01:59:59", "+05", -300],
		["1987-03-28T21:00:00+00:00", "03:00:00", "+06", -360],
		["1987-09-26T20:59:59+00:00", "02:59:59", "+06", -360],
		["1987-09-26T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1988" : helpers.makeTestYear("Asia/Oral", [
		["1988-03-26T20:59:59+00:00", "01:59:59", "+05", -300],
		["1988-03-26T21:00:00+00:00", "03:00:00", "+06", -360],
		["1988-09-24T20:59:59+00:00", "02:59:59", "+06", -360],
		["1988-09-24T21:00:00+00:00", "02:00:00", "+05", -300]
	]),

	"1989" : helpers.makeTestYear("Asia/Oral", [
		["1989-03-25T20:59:59+00:00", "01:59:59", "+05", -300],
		["1989-03-25T21:00:00+00:00", "02:00:00", "+05", -300],
		["1989-09-23T21:59:59+00:00", "02:59:59", "+05", -300],
		["1989-09-23T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1990" : helpers.makeTestYear("Asia/Oral", [
		["1990-03-24T21:59:59+00:00", "01:59:59", "+04", -240],
		["1990-03-24T22:00:00+00:00", "03:00:00", "+05", -300],
		["1990-09-29T21:59:59+00:00", "02:59:59", "+05", -300],
		["1990-09-29T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1991" : helpers.makeTestYear("Asia/Oral", [
		["1991-03-30T21:59:59+00:00", "01:59:59", "+04", -240],
		["1991-03-30T22:00:00+00:00", "03:00:00", "+05", -300],
		["1991-09-28T21:59:59+00:00", "02:59:59", "+05", -300],
		["1991-09-28T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1992" : helpers.makeTestYear("Asia/Oral", [
		["1992-01-18T21:59:59+00:00", "01:59:59", "+04", -240],
		["1992-01-18T22:00:00+00:00", "03:00:00", "+05", -300],
		["1992-03-28T20:59:59+00:00", "01:59:59", "+05", -300],
		["1992-03-28T21:00:00+00:00", "02:00:00", "+05", -300],
		["1992-09-26T21:59:59+00:00", "02:59:59", "+05", -300],
		["1992-09-26T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1993" : helpers.makeTestYear("Asia/Oral", [
		["1993-03-27T21:59:59+00:00", "01:59:59", "+04", -240],
		["1993-03-27T22:00:00+00:00", "03:00:00", "+05", -300],
		["1993-09-25T21:59:59+00:00", "02:59:59", "+05", -300],
		["1993-09-25T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1994" : helpers.makeTestYear("Asia/Oral", [
		["1994-03-26T21:59:59+00:00", "01:59:59", "+04", -240],
		["1994-03-26T22:00:00+00:00", "03:00:00", "+05", -300],
		["1994-09-24T21:59:59+00:00", "02:59:59", "+05", -300],
		["1994-09-24T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1995" : helpers.makeTestYear("Asia/Oral", [
		["1995-03-25T21:59:59+00:00", "01:59:59", "+04", -240],
		["1995-03-25T22:00:00+00:00", "03:00:00", "+05", -300],
		["1995-09-23T21:59:59+00:00", "02:59:59", "+05", -300],
		["1995-09-23T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1996" : helpers.makeTestYear("Asia/Oral", [
		["1996-03-30T21:59:59+00:00", "01:59:59", "+04", -240],
		["1996-03-30T22:00:00+00:00", "03:00:00", "+05", -300],
		["1996-10-26T21:59:59+00:00", "02:59:59", "+05", -300],
		["1996-10-26T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1997" : helpers.makeTestYear("Asia/Oral", [
		["1997-03-29T21:59:59+00:00", "01:59:59", "+04", -240],
		["1997-03-29T22:00:00+00:00", "03:00:00", "+05", -300],
		["1997-10-25T21:59:59+00:00", "02:59:59", "+05", -300],
		["1997-10-25T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1998" : helpers.makeTestYear("Asia/Oral", [
		["1998-03-28T21:59:59+00:00", "01:59:59", "+04", -240],
		["1998-03-28T22:00:00+00:00", "03:00:00", "+05", -300],
		["1998-10-24T21:59:59+00:00", "02:59:59", "+05", -300],
		["1998-10-24T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"1999" : helpers.makeTestYear("Asia/Oral", [
		["1999-03-27T21:59:59+00:00", "01:59:59", "+04", -240],
		["1999-03-27T22:00:00+00:00", "03:00:00", "+05", -300],
		["1999-10-30T21:59:59+00:00", "02:59:59", "+05", -300],
		["1999-10-30T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"2000" : helpers.makeTestYear("Asia/Oral", [
		["2000-03-25T21:59:59+00:00", "01:59:59", "+04", -240],
		["2000-03-25T22:00:00+00:00", "03:00:00", "+05", -300],
		["2000-10-28T21:59:59+00:00", "02:59:59", "+05", -300],
		["2000-10-28T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"2001" : helpers.makeTestYear("Asia/Oral", [
		["2001-03-24T21:59:59+00:00", "01:59:59", "+04", -240],
		["2001-03-24T22:00:00+00:00", "03:00:00", "+05", -300],
		["2001-10-27T21:59:59+00:00", "02:59:59", "+05", -300],
		["2001-10-27T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"2002" : helpers.makeTestYear("Asia/Oral", [
		["2002-03-30T21:59:59+00:00", "01:59:59", "+04", -240],
		["2002-03-30T22:00:00+00:00", "03:00:00", "+05", -300],
		["2002-10-26T21:59:59+00:00", "02:59:59", "+05", -300],
		["2002-10-26T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"2003" : helpers.makeTestYear("Asia/Oral", [
		["2003-03-29T21:59:59+00:00", "01:59:59", "+04", -240],
		["2003-03-29T22:00:00+00:00", "03:00:00", "+05", -300],
		["2003-10-25T21:59:59+00:00", "02:59:59", "+05", -300],
		["2003-10-25T22:00:00+00:00", "02:00:00", "+04", -240]
	]),

	"2004" : helpers.makeTestYear("Asia/Oral", [
		["2004-03-27T21:59:59+00:00", "01:59:59", "+04", -240],
		["2004-03-27T22:00:00+00:00", "03:00:00", "+05", -300],
		["2004-10-30T21:59:59+00:00", "02:59:59", "+05", -300]
	])
};