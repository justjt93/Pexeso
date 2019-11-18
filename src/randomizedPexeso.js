let randomCards = [];
for (let i = 0; i < 10; i++) {
  randomCards.push(
    `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/200/200`
  );
}
const randomCardsCopy = randomCards.slice();
const randomizedPexeso = randomCards.concat(randomCardsCopy);

const shuffle = array => {
  array.sort(() => Math.random() - 0.5);
};

shuffle(randomizedPexeso);

export { randomizedPexeso };
