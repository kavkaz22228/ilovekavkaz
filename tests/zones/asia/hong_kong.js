"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Hong_Kong"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Hong_Kong", { offset: true, expect: "Asia/Manila" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Hong_Kong", { abbr: true }),

	"1904" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1904-10-29T17:00:00+00:00", "01:00:00", "HKT", -480]
	]),

	"1941" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1941-06-14T18:59:59+00:00", "02:59:59", "HKT", -480],
		["1941-06-14T19:00:00+00:00", "04:00:00", "HKST", -540],
		["1941-09-30T18:59:59+00:00", "03:59:59", "HKST", -540],
		["1941-09-30T19:00:00+00:00", "03:30:00", "HKWT", -510],
		["1941-12-24T15:29:59+00:00", "23:59:59", "HKWT", -510],
		["1941-12-24T15:30:00+00:00", "00:30:00", "JST", -540]
	]),

	"1945" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1945-11-17T16:59:59+00:00", "01:59:59", "JST", -540],
		["1945-11-17T17:00:00+00:00", "01:00:00", "HKT", -480]
	]),

	"1946" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1946-04-20T15:59:59+00:00", "23:59:59", "HKT", -480],
		["1946-04-20T16:00:00+00:00", "01:00:00", "HKST", -540],
		["1946-11-30T19:29:59+00:00", "04:29:59", "HKST", -540],
		["1946-11-30T19:30:00+00:00", "03:30:00", "HKT", -480]
	]),

	"1947" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1947-04-12T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1947-04-12T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1947-11-29T19:29:59+00:00", "04:29:59", "HKST", -540],
		["1947-11-29T19:30:00+00:00", "03:30:00", "HKT", -480]
	]),

	"1948" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1948-05-01T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1948-05-01T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1948-10-30T19:29:59+00:00", "04:29:59", "HKST", -540],
		["1948-10-30T19:30:00+00:00", "03:30:00", "HKT", -480]
	]),

	"1949" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1949-04-02T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1949-04-02T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1949-10-29T19:29:59+00:00", "04:29:59", "HKST", -540],
		["1949-10-29T19:30:00+00:00", "03:30:00", "HKT", -480]
	]),

	"1950" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1950-04-01T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1950-04-01T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1950-10-28T19:29:59+00:00", "04:29:59", "HKST", -540],
		["1950-10-28T19:30:00+00:00", "03:30:00", "HKT", -480]
	]),

	"1951" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1951-03-31T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1951-03-31T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1951-10-27T19:29:59+00:00", "04:29:59", "HKST", -540],
		["1951-10-27T19:30:00+00:00", "03:30:00", "HKT", -480]
	]),

	"1952" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1952-04-05T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1952-04-05T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1952-11-01T19:29:59+00:00", "04:29:59", "HKST", -540],
		["1952-11-01T19:30:00+00:00", "03:30:00", "HKT", -480]
	]),

	"1953" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1953-04-04T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1953-04-04T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1953-10-31T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1953-10-31T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1954" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1954-03-20T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1954-03-20T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1954-10-30T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1954-10-30T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1955" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1955-03-19T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1955-03-19T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1955-11-05T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1955-11-05T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1956" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1956-03-17T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1956-03-17T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1956-11-03T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1956-11-03T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1957" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1957-03-23T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1957-03-23T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1957-11-02T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1957-11-02T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1958" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1958-03-22T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1958-03-22T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1958-11-01T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1958-11-01T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1959" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1959-03-21T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1959-03-21T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1959-10-31T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1959-10-31T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1960" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1960-03-19T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1960-03-19T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1960-11-05T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1960-11-05T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1961" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1961-03-18T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1961-03-18T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1961-11-04T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1961-11-04T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1962" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1962-03-17T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1962-03-17T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1962-11-03T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1962-11-03T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1963" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1963-03-23T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1963-03-23T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1963-11-02T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1963-11-02T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1964" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1964-03-21T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1964-03-21T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1964-10-31T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1964-10-31T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1965" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1965-04-17T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1965-04-17T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1965-10-16T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1965-10-16T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1966" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1966-04-16T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1966-04-16T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1966-10-15T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1966-10-15T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1967" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1967-04-15T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1967-04-15T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1967-10-21T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1967-10-21T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1968" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1968-04-20T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1968-04-20T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1968-10-19T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1968-10-19T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1969" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1969-04-19T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1969-04-19T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1969-10-18T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1969-10-18T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1970" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1970-04-18T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1970-04-18T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1970-10-17T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1970-10-17T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1971" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1971-04-17T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1971-04-17T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1971-10-16T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1971-10-16T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1972" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1972-04-15T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1972-04-15T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1972-10-21T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1972-10-21T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1973" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1973-04-21T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1973-04-21T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1973-10-20T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1973-10-20T18:30:00+00:00", "02:30:00", "HKT", -480],
		["1973-12-29T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1973-12-29T19:30:00+00:00", "04:30:00", "HKST", -540]
	]),

	"1974" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1974-10-19T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1974-10-19T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1975" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1975-04-19T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1975-04-19T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1975-10-18T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1975-10-18T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1976" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1976-04-17T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1976-04-17T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1976-10-16T18:29:59+00:00", "03:29:59", "HKST", -540],
		["1976-10-16T18:30:00+00:00", "02:30:00", "HKT", -480]
	]),

	"1979" : helpers.makeTestYear("Asia/Hong_Kong", [
		["1979-05-12T19:29:59+00:00", "03:29:59", "HKT", -480],
		["1979-05-12T19:30:00+00:00", "04:30:00", "HKST", -540],
		["1979-10-20T18:29:59+00:00", "03:29:59", "HKST", -540]
	])
};