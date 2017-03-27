'use strict'

/**
 * Domain service. Has nothing related with HTTP context.
 */
module.exports = {
    parseTime,
    unixTime,
    dateTime
}

function parseTime(iso) {
    return new ParseTime(new Date(iso))
}

function unixTime(iso) {
    return new UnixTime(new Date(iso))
}

function dateTime(iso) {
    return new DateTime(new Date(iso))
}

/**
 * Domain entity
 */
function ParseTime(date) {
    this.hour = date.getHours()
    this.minute = date.getMinutes()
    this.second = date.getSeconds()
}

/**
 * Domain entity
 */
function DateTime(date) {
    this.hour = date.getHours()
    this.minute = date.getMinutes()
    this.second = date.getSeconds()
    this.day = date.getDay()
    this.month = date.getMonth() + 1
    this.year = date.getYear()
}

/**
 * Domain entity
 */
function UnixTime(date) {
    this.unixtime = date.getTime()
}
