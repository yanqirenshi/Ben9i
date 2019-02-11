#|
  This file is a part of ben9i project.
|#

(defsystem "ben9i"
  :version "0.0.1"
  :author ""
  :license ""
  :depends-on ("cxml-rng")
  :components ((:module "src"
                :components
                ((:file "package"))))
  :description ""
  :long-description
  #.(read-file-string
     (subpathname *load-pathname* "README.markdown"))
  :in-order-to ((test-op (test-op "ben9i-test"))))
