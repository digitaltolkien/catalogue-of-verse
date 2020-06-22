const chapterSelect = document.getElementById("chapter");
const verses = document.getElementById("verses");

const chapters = [];

lotr.forEach(poem => {
  if (!chapters.includes(poem.bookChapter)) {
    chapters.push(poem.bookChapter);
  }
});

for (const chapter of chapters) {
  const option = document.createElement("option");
  option.text = option.value = chapter;
  chapterSelect.appendChild(option);
}

const getSelectedVerses = () => {
  let selectedVerses = ``;
  lotr.forEach(verse => {
    if (verse.bookChapter === chapterSelect.options[chapterSelect.selectedIndex].value) {
      selectedVerses = selectedVerses.concat(`<p>${verse.firstLine}<br>${verse.bookChapter}</br>${verse.linesByStanza}</p>`)
    }
  });
  return selectedVerses;
};

verses.innerHTML = getSelectedVerses();;

chapterSelect.addEventListener("change", () => {
  verses.innerHTML = getSelectedVerses();;
})
