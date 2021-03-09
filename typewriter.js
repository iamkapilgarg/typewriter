const print = (text) => {
  for (let i = 0; i <= text.length; i++) {
    setTimeout(() => {
      if (i === text.length) {
        process.stdout.write("\n");
      } else {
        process.stdout.write(text[i]);
      }
    }, i * 100);
  }
};

const sentence = "hello there from lighthouse labs";

print(sentence);