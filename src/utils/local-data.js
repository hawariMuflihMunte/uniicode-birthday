const codes = {
  js: () => {
    return `document.write('Aku Cinta UNIICODE')`.trim();
  },
  c: () => {
    return `#include <stdio.h>

    int main () {
      printf("Aku Cinta UNIICODE\n");

      return 0;
    }
    `.trim();
  },
  cpp: () => {
    return `#include <iostream>
    using namespace std;

    int main() {
      cout << "Aku cinta UNIICODE";

      return 0;
    }
    `.trim();
  },
  java: () => {
    return `public class Main {
      public static void main(String[] args) {
        System.out.println("Aku Cinta UNIICODE");
      }
    }`.trim();
  },
  python: () => {
    return `print('Aku Cinta UNIICODE')`.trim();
  },
  ruby: () => {
    return `puts "Aku Cinta UNIICODE"`.trim();
  },
  go: () => {
    return `package main

    import "fmt"

    func main() {
        fmt.Println("Aku Cinta UNIICODE")
    }
    `.trim();
  },
  haskell: () => {
    return `main :: IO()
    main = putStrLn "Aku Cinta UNIICODE"
    `.trim();
  }
};

export { codes };
