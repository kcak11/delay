#!/usr/bin/env node

var secs = process.argv[2];
if (isNaN(secs)) {
    console.log("\nUsage:\ndelay seconds\n\naliases: delay, pause, defer, dosleep, dowait\n");
    process.exit(1);
}
setTimeout(function () { }, secs * 1000);
