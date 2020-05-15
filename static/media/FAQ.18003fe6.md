##   Typescript

---

# What is static typing?
Javascript is a dynamically typed language; meaning that a variables 'type' is not known until runtime. This means that bugs related to an incorrect type being used will occur during runtime, which is less than ideal. Static typing means that these errors are thrown inside the IDE first.

# What is `as unknown` in typescript, and why is it used? When shouldn't it be used?
- All Javascript types are assignable to `unknown`.
- Known as a top type.
- The difference to the `any` type, is that `unknown` is only assignable to `unknown` or `any` types, e.g.

```
    let value: unknown;
    let value1: unknown = value // OK
    let value2: any = value     // OK
    let value3: boolean = value // Error
    let value4: string = value  // Error
    ... etc ...
```
# How can we narrow the unknown type?

- Type guards and type assertions can be used to define the type the unknown value actually is.
e.g.

```
    const valueIsString = (value: unknown): value as string => {
        return typeof value === "string";
    }

    const value: unknown = "Hello World";

    if(valueIsString(value)) {
        //do something
    }
```

- Type assertions don't actually check the type of our variable; the compiler is trusting the developer knows the correct type to set. This is pretty fragile and can lead to runtime errors.

```
    const validCountryCodes = ['uk', 'aus', 'nl'] as const;
    type ValidCountryCode = typeof validCountryCodes[number]
    const currentCountryCode: unknown = 'nz';
    const validCountryCode: ValidCountryCode = currentCountryCode as ValidCountryCode
    setCountryCode(validCountryCode) // No error
```

There are limited scenarios where this syntax is appropriate:

    1. External code is incorrectly typed
    2. When we are testing possible future types:
```
    // countryCode.tsx
    
    const validCountryCodes = ['uk', 'aus', 'nl'] as const;
    type ValidCountryCode = typeof validCountryCodes[number]
    const [countryCode, setCountryCode] = useState<ValidCountryCode>('uk')

    // test.tsx

    it('throws an error for invalid countryCode', () => {
        // mock for setCountryCode
        () => renderCountryCode('nz') // would throw an error post runtime.
        () => renderCountryCode('nz' as unknown as ValidCountryCode) // throws error we are testing in the countryCode.tsx
    })
```
# What is the `any` type? Why should/ shouldn't we use it?
- All Javascript types are assignable to `any`. e.g.
```
    let value: any;
    let value1: unknown = value // OK
    let value2: any = value     // OK
    let value3: boolean = value // OK
    let value4: string = value  // OK
    ... etc ...
```
- It is known as a 'top type', or 'universal supertype'.
- It removes the need for any type checking. Because this type is so permissive, code that is 'type correct', problems can arise at runtime due to the lack of type safety.

# What is a string literal?

# What is a const assertion?

# What are lookup types?
