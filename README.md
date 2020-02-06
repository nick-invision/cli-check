# cli-if
Simple node CLI utility that runs the provided command if condition evaluates to true.

# usage
```
cli-if contains [expected value] [actual value] [command to execute if true]
```

# examples
This will run the command the `npm run doSomething`
```
cli-if contains test testing npm run doSomething
```

This will exit without running the `npm run doSomething` command
```
cli-if contains testing 123 npm run doSomething
```
