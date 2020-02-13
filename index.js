#!/usr/bin/env node
const { execSync } = require('child_process');

const args = process.argv;
const supported = [
    'contains',
    'not-contains'
]
const root = args[2]
const expected = args[3];
const actual = args[4];
const cmd = args.slice(5).join(' ');

if (args.length < 5) {
    throw new Error(`Required format: <${supported.join('|')}> <expected> <actual> [cmd to execute if true]`)
} else if (!supported.some(cmd => cmd === root)) {
    throw new Error (`Command '${root}' is not supported.  Must be one of ${supported.join('|')}`)
}

const contains = (expected, actual) => {
    return `${actual}`.includes(expected)
}

(()=>{
    switch (root) {
        case 'contains':
            if (!contains(expected, actual)) {
                console.error(`${actual} does not contain ${expected}.  Exiting.`)
                process.exit(0);
            }
            break;
        case 'not-contains':
            if (contains(expected, actual)) {
                console.error(`${actual} contains ${expected} but was not expected.  Exiting.`)
                process.exit(0);
            }
            break;
        default:
            throw new Error(`Command '${root}' is not yet implemented.`)
    }

    execSync(cmd, {stdio: 'inherit'})
})()