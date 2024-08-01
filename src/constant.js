
export const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.03",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3"
}

export const CODE_SNIPPETS = {
    javascript: `// JavaScript Example
function greet(name) {
    return \`Hello, \${name}!\`;
}
console.log(greet('World'));`,

    typescript: `// TypeScript Example
function greet(name: string): string {
    return \`Hello, \${name}!\`;
}
console.log(greet('World'));`,

    python: `# Python Example
def greet(name):
    return f"Hello, {name}!"

print(greet('World'))`,

    java: `// Java Example
public class Main {
    public static void main(String[] args) {
        System.out.println(greet("World"));
    }

    public static String greet(String name) {
        return "Hello, " + name + "!";
    }
}`,

    csharp: `// C# Example
using System;

class Program {
    static void Main() {
        Console.WriteLine(greet("World"));
    }

    static string greet(string name) {
        return "Hello, " + name + "!";
    }
}`,

    php: `
<?php
function greet($name) {
    return "Hello, " . $name . "!";
}

echo greet('World');
?>
`
};
