let animals = new Map([
   ["dog", "Mila"],
   ["cat", "Surik"],
   ["parrot", "Lulu"]
]);
for (let vid of animals.keys()){
   console.log(vid + " это - х, " + animals.get(vid) + " это - y");
}