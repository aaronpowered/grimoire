(ns multiplayer.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [multiplayer.core-test]))

(doo-tests 'multiplayer.core-test)

