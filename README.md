# cli-if
Simple node CLI utility that runs the specified command if condition evaluates to true.

## Usage
Intended to run inside of an NPM script when a false evaluation should just exit the script
```
cli-if [compare] [expected] [actual] [runIfTrue]
```

* `compare`: performs a case-sensitive evaluation of two values
* `expected`: expected value
* `actual`: actual value to compare `expected` with
* `runIfTrue`: command that gets executed if condition evaluates to true

## Supported Compare Types
- contains

## Examples
This will run the command the `npm run doSomething`
```
cli-if contains test testing npm run doSomething
```

This will exit without running the `npm run doSomething` command
```
cli-if contains testing 123 npm run doSomething
```
