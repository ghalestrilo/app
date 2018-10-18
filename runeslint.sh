#!/bin/sh
FLAGS="--fix"
ESLINTBIN="node_modules/.bin/eslint"
JSDIRS="actions components constants containers reducers styles"

# Parse options
for f in $*; do
    if [ "$f" = "-q" ]; then FLAGS="$FLAGS --quiet"; fi
    if [ "$f" = "-d" ]; then FLAGS="$FLAGS --debug"; fi
    if [ "$f" = "-D" ]; then DRYRUN=true; fi
done

if ! $DRYRUN; then FLAGS="--fix $FLAGS"; fi

find $JSDIRS -name "*.js" | xargs ./$ESLINTBIN $FLAGS
