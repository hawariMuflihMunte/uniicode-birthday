<script setup lang="ts">
import UniicodeLogo from './components/UniicodeLogo.vue';
import CodeBlock from './components/CodeBlock.vue';

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
}
</script>

<template>
  <div class="container">
    <div class="centered">
      <UniicodeLogo />
    </div>
    <main>
      <template v-for="(code, language) in codes" :key="language">
        <CodeBlock :language="language">
          {{ code() }}
        </CodeBlock>
      </template>
    </main>
  </div>
</template>

<style>
.container {
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
}

@media (max-width: 576px) {
  .container {
    max-width: 96%;
  }
}

.centered {
  display: flex;
  place-content: center;
  place-items: center;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  place-items: center;
}
</style>
