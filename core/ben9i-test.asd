#|
  This file is a part of ben9i project.
|#

(defsystem "ben9i-test"
  :defsystem-depends-on ("prove-asdf")
  :author ""
  :license ""
  :depends-on ("ben9i"
               "prove")
  :components ((:module "tests"
                :components
                ((:test-file "ben9i"))))
  :description "Test system for ben9i"

  :perform (test-op (op c) (symbol-call :prove-asdf :run-test-system c)))
