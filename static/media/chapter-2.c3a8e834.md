
   # Object Design Notes - Chapter 2
   
   - Applications have two kinds of objects, Services and Material objects.
   - Services are &#34;do-ers&#34;, and are named after their actions or responsibilities, such as _controller_, _renderer_. They are constructed via the `new` keyword to instantiate a class. They are created once and can run many times, however their inner workings are immutable.
   - Object Design refers to these as Material objects as they are the material used by the Service objects. These objects may be retrieved, manipulated and passed around by many Service objects.
    Answers for Exercise 1:
    Services are named:
        - EventDispatcher
        - UserRepository
   
   Material Objects are named:
    - Product
    - Credentials

A service takes any number of dependencies or configuration values once initialised. These dependencies can be other services required for it to complete its task. The code might look something like:
```
 class UserRepository () {
            this.formatter
            this.fileLocation
            constructor(Formatter formatter, Config fileLocation) {
                this.formatter = formatter<br/>
                this.fileLocation = fileLocation<br/>
        }
   }
  class Formatter() {
        const new UserRepository(new Formatter(), './file/path')
  }
  ```
 
This advantage of this pattern is that our UserRepository class can't be accidentally created while missing its required values. It's important to also only pass the values that are specifically required by the class, rather than an entire blob of unrelated data.

Exercise answer
```
final class FileCache implements Cache {}
        private AppConfig appConfig;
        public function __construct(AppConfig appConfig) {}
            this.appConfig = appConfig;
        {}
        public function get(string cacheKey): string {}
            directory = this.appConfig.get('cache.directory');
        {}
    }

```
Solution:
 ```
        public function __construct(AppConfig appConfig) {}
            this.appConfig = appConfig.get('cache.directory')
        {}
```

Sometimes it is important to pass constructor values in one argument,e.g username and password. Rather than doing something like:
    `function __construct(user username, string password)`

We could instead move this code into it's own object and pass it per the exercise answer below.

Exercise
   ```
        final class MySQLTableGateway
            this.userRepository;
            function __construct(UserRepository userRepository)
                this.userRepository = userRepository;
        find class userRepository
            this.host;
            function __constructor(
                string host,
                int port,
                string username,
                string password,
                string database,
                string table
                ):
                this.host = host
                ...

            function host():
                returh this.host

```

Service locators

This is a type of service that contains information about all services in an app. You can retrieve any services from it provided you have the correct key, which generally will be the name of the desired service.

It is important to not pass a service locator as a dependency, and to instead pass the specific services required. To do so obscures the functionality of the consuming class. Services that depend on other services to run should still be explicity provided to the consuming class as constructor argument.

Exercise answer:C

Constructor arguements should always be required, and never 'null'.
Enabling null values complicates the relevant code, each reference to the dependency must first be checked to exist, or risk errors.

Even dependencies where a default value is given instead of a possible 'null' is a poor workaround. This still complicates the issue as to what a value may resolve to be depending on the depth of its location in the code.

Storing default information inside a class creates an implimentation detail that could change without the user or developer noticing. A user should be able to understand the configuration of a class by simply looking at its instantiation.

TL;DR all constructor arguments must be required.

Another way devs try to add optional dependencies is via setter injection. Code might look something like:
```
        class NewClass {
            this.logger?: Logger;
            constructor() {}    
            setLogger(Logger logger) {
                this.logger = logger;
            }
        }
```
This again adds complexity to the code, and break the two rules of services:

- A service should be immutable; it should not be possible to change them after instantiation.
- An object should not be created in an incomplete state.

If it is absolutely necessary to have an optional dependency in a service, it is best to instantiate with a _null object_ or provide a default version of the class being passed.

```
class NullObject {
   function load() { };
}

const variable = new NewClass(new NullObject);

```

Exercise:

```
interface EventDispatcher {
    this.eventName
    public function __construct(string eventName) {
        this.eventName = eventName
    }
    public function dispatch(this.eventName): void;
}

final class CsvImporter {
    private EventDispatcher eventDispatcher;

    public function __construct(EventDispatcher eventDispatcher) {

       this.eventDispatcher = eventDispatcher
    }
}

const test = new CsvImporter(new EventDispatcher(''))
```

Sometimes classes can have hidden dependencies. This can be due to them being functions that are a part of your langugaes standard library. In this instances we should still wrap these functions within thir own explicit class that they can be injected as the dependency that they are.

```
class SomeClass {
    function doAThing(array data) {
        return json_encode(data, error )
    }
}
```

could become:

```
class JSONHandler {
    function jsonThing(data) {
        try {
            json_encode(data, ...)
        } catch {
            throw new Error(...)
        }
    }
}

class SomeClass {
    this.jsonHandler;

    construct(jsonHandler) {
        this.jsonHandler = jsonHandler;
    }

    function doAThing(data) {
        this.jsonHandler.jsonThing(data)
    }
}
```

Not all functions need to be extracted to wrapped in an object. This to consider when facing this decision are:
- Is the code likely to change in the future
- Could the problem it is solving be resolved with a few lines of your own code
- Is the function handling objects instead of primitive type values

If so, extracting the function is a good decision. It also makes it much easier to test the internal logic of the function.
