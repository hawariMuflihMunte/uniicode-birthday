<script setup lang="ts">
import UniicodeLogo from './components/UniicodeLogo.vue';
import CodeBlock from './components/CodeBlock.vue';

const codes = {
  js: () => {
    return `console.log('Aku Cinta UNIICODE')`.trim();
  },
  c: () => {
    return `#include <stdio.h>

    int main () {
      printf("Aku Cinta UNIICODE");

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
  },
  php: () => {
    return `
      // NativePHP

      echo "Aku Cinta UNIICODE"
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
      <section class="code-wrapper">
        <section class="flex-col">
          <img src="@/assets/person/hawari.jpg" alt="Hawari" class="person-img">
          <img src="@/assets/person/reihan.jpg" alt="Raihan" class="person-img">
        </section>
        <CodeBlock language="c">
          {{ codes.c() }}
        </CodeBlock>
      </section>
      <section class="code-wrapper">
        <section class="flex-col">
          <img src="@/assets/person/hawari.jpg" alt="Hawari" class="person-img">
          <img src="@/assets/person/reihan.jpg" alt="Raihan" class="person-img">
          <img src="@/assets/person/galih.jpg" alt="Galih" class="person-img">
        </section>
        <CodeBlock language="c">
          {{ codes.js() }}
        </CodeBlock>
      </section>
      <section class="code-wrapper">
        <section class="flex-col">
          <img src="@/assets/person/hawari.jpg" alt="Hawari" class="person-img">
        </section>
        <CodeBlock language="ruby">
          {{ codes.ruby() }}
        </CodeBlock>
      </section>
      <section class="code-wrapper">
        <section class="flex-col">
          <img src="@/assets/person/galih.jpg" alt="Galih" class="person-img">
        </section>
        <CodeBlock language="php">
          {{ codes.php() }}
        </CodeBlock>
      </section>
      <p>
        <center>HBD Bang Galih 😀</center>
        <br>
        Semoga dengan memasuki U20 gajinya 20 digit juga wkwkwk...🤣
        <br>
        Dan Semoga yang disemogakan tersemogakan 🤲
        <br>
        <br>
        Barakallah fi umrik 🤗
        <br>
        <br>
        Semangat terus <code>Team Lead</code> UNIICODE 💪
      </p>
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

.code-wrapper {
  min-width: 500px;
  display: flex;
  margin: 20px 0;
  border: 3px solid #B7FD00;
  padding: 0 12px 0 8px;
  border-radius: 2px;
}

@media (max-width: 576px) {
  .code-wrapper {
    min-width: 260px;
  }
}

.flex-col {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 6px;
}

.person-img {
  display: block;
  max-width: 60px;
  max-height: 60px;
  border-radius: 50%;
}
</style>
