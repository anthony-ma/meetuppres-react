#Problem
Our view binding sucked.  We were using jQuery and manually binding fields, validating, etc. and it was painful.

###Are you f*$%ing serious? jQuery?
Yes, I'm serious.  We knew we needed something better so we started looking around.

###Hello, React!
So we looked at a lot of different frameworks (Angular, Knockout, Aurelia, etc.) but we settled on React.  

We chose React for a few reasons:
* 1. Speed
* 2. Reusability
* 3. Elegance

####Tell me more about speed!
React is the king of speed.  Analysis after analysis after analysis proves that it trumps all of the other frameworks, and in some cases can defeat even raw DOM manipulation.  This is very important as we all need responsive applications.

####Isn't new code better than old code?
No... just no....  I know everyone enjoys rewriting System.Web and including it in every project they can find, but you should really come in from the rain and get DRY like the rest of us.  React is based around composition, so you're encouraged to reuse code (components) as often as possible to make your life easier.

####But how fancy is it really?
React is purpose built and doesn't try to reinvent the wheel and the rim and the axle and the CV joints and the rest of the car.  It is strictly for view binding, and that's all it does out of the box.  It encourages separation of concerns and leads to cleaner, more testable code.  I enjoy a haphazardly structured, sprawling, sloppy, duct-tape and bailing wire, spaghetti code jungle as much as the next guy, but you need to ship at some point.  React doesn't try to be everything and do everything, and we love that about it.
