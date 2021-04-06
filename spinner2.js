const frames = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let timer = 100;
for (let i = 0; i < 8; i++) {
  setTimeout(() => {
    process.stdout.write(i < 4 ? frames[i] : frames[i - 4]);
  }, timer);
  timer += 200;
}