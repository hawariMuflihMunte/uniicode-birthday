<script setup lang="ts">
import UniicodeLogo from './components/UniicodeLogo.vue';
import CodeBlock from './components/CodeBlock.vue';

import hawari from './assets/person/hawari.jpg';
import cakAdi from './assets/person/cakAdi.jpg';
import galih from './assets/person/galih.jpg';
import raihan from './assets/person/raihan.jpg';

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
</script>

<template>
  <div class="container">
    <div class="centered">
      <UniicodeLogo />
    </div>
    <main>
      <section class="person">
        <img src="@/assets/person/hawari.jpg" alt="Hawari" class="person-img">
        <CodeBlock language="c">
          {{ codes.c() }}
        </CodeBlock>
      </section>
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
  margin: 50px 0;
}

.uniicode-button {
  cursor: pointer;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: capitalize;
  letter-spacing: 2px;
  padding: 8px 16px;
  outline: 0;
  border: 0;
  border-radius: 2px;
  background-color: #B7FD00;
  transition: all 200ms linear;
}

.uniicode-button:hover {
  background-color: #d7fd00;
}

.person {
  min-width: 600px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 576px) {
  .person {
    min-width: 280px;
  }
}

.person-img {
  display: block;
  max-width: 60px;
  max-height: 60px;
  border-radius: 50%;
}
</style>
