const poems = [
  {
    title: "She Remembers",
    tag: "Poem",
    body: `Every girl remembers\nthe first time a stare stayed too long,\nwhen someone looked at her\nlike she wasn't a person\nbut just a body.\n\nA touch that wasn't asked for.\nWords that made her skin crawl.\nA moment that passed for the world,\nbut stayed inside her mind.\n\nNow she walks a little faster,\nchecks every shadow behind her,\nher heart racing in crowded places\nfor reasons no one sees.\n\nAnd people say,\n"It was just a moment."\n\nBut they don't know\nhow one moment can live inside someone for years.`
  },
  {
    title: "A True Man",
    tag: "Poem",
    body: `From childhood, we were taught\nthe difference between a boy and a man,\nyet lessons fall short\nuntil life explains them.\n\nThen I saw a man,\nnot defined by words,\nbut by the weight of his dreams.\n\nBy the comfort he gives,\nby the respect he holds,\nhe speaks without speaking,\nstrength wrapped in gentleness.\n\nHe chases his purpose\nlike a hungry lion chases the wild,\nwith fire in his veins\nand hunger in his soul.\n\nHe showed me\nthat a man is built\nfrom patience, passion, and pain,\nnot age.\n\nIf perfection ever needed a name,\nI would whisper his in reverence,\nnot to define him,\nbut to honor what he stands for.\n\nMay God shower endless blessings\non a soul so genuine,\none who walks his dreams\nwith dignity, faith,\nand a heart that never forgets\nwhat it means to be human.`
  },
  {
    title: "I Wish",
    tag: "Poem",
    body: `I wish I could save myself\nbefore I started breaking inside.\n\nI wish I could hold on\nto those fragile pieces of me\nthat once knew\nonly how to live,\nonly how to laugh,\nonly how to fly,\n\nThey were so full of light,\nso desperate for the sky,\nthat one day\nthey flew away,\n\nleaving my hands empty\nand my heart behind.\n\nNow I look up every night,\nreaching the endless sky,\nhoping those lost pieces\nwill find their way back to me\nand whisper,\n\nhere is your old self,\nhere is who you were.`
  },
  {
    title: "My Unexpected Comfort",
    tag: "Poem",
    body: `Before you, I was a little shy,\nan introvert heart, letting moments pass by.\nTalking too much to stranger boys was never my way,\nI stayed in my space, safe and away.\n\nI had good friends, kind and true,\nbut something felt different the day we talked to each other.\nI don't know how, I don't know why,\nour vibes just matched, no need to try.\n\nWith you, I never felt strange or small,\nno fear, no walls, no silence at all.\nYou became my comfort zone,\na place where my real safe space was known.\n\nI shared my things like never before,\nwith time, even more and more.\nTrusted you without even a single doubt,\nletting my feelings come out.\n\nThere are things about me that aren't easy to say,\nsome past moments shaped me this way.\nI keep my distance, I guard my space,\nbecause not every closeness feels safe.\n\nBut with you, it felt calm and true,\nno pressure, no fear, just peace I knew.\nYour presence alone made my heart slow down,\na different kind of comfort, deep and sound.\n\nYes, I get angry, my temper is strong,\nour fights were messy, loud, and long.\nThere was a time we stopped talking at all,\nfive months long, no texts, no call.\n\nLife moved on, days passed by,\nyet your silence never felt like goodbye.\n\nWhen we spoke again, it felt the same,\nno awkward pause, no need to explain.\nAs if time between us didn't exist,\nas if those months were quietly missed.\n\nWe talked like we always used to do,\nsame comfort, same honesty, same you.\nNo distance lived between our words,\njust two people speaking, undisturbed.\n\nThat's when I knew our bond was rare,\nnot broken by time, not fading with air.\nSome connections are just God-crafted,\nwill always, always be grateful.\n\nNandini`
  },
  {
    title: "Funny How Life Works",
    tag: "Poem",
    body: `Funny how life works.\n\nWe know exactly\nwhat can break a heart,\nwe warn others about the same pain.\n\nBut when life tests us\nwith the very thing\nwe once gave advice about,\n\nsuddenly all that wisdom\nfalls apart,\n\nand we realize\nknowing the pain\ndoesn't make it easier\nto survive it.`
  },
  {
    title: "Between Home And Dreams",
    tag: "Poem",
    body: `Some days I just want to pack my bags\nand go back home.\n\nStay with the people\nwho make everything feel okay.\n\nBut then my mind reminds me,\nthere's a future waiting\nthat I have to build.\n\nAnd somewhere between\nmissing home\nand chasing dreams,\n\nI realized\nI didn't choose this distance,\nlife quietly placed my family\non one side\nand my studies on the other.`
  }
];

const poemList = document.getElementById("poem-list");
const mainPage = document.getElementById("main-page");
const readerPage = document.getElementById("reader-page");
const contributeForm = document.getElementById("contribute-form");
const formMessage = document.getElementById("form-message");
const overlayClose = document.getElementById("overlay-close");
const overlayTag = document.getElementById("overlay-tag");
const overlayTitle = document.getElementById("overlay-title");
const overlayBody = document.getElementById("overlay-body");
const overlayAuthor = document.getElementById("overlay-author");

poems.forEach((poem, index) => {
  const article = document.createElement("article");
  article.className = "poem-card";
  article.style.animation = `rise 700ms ease ${index * 140}ms both`;
  article.tabIndex = 0;
  article.setAttribute("role", "button");
  article.setAttribute("aria-label", `Open poem ${poem.title}`);

  const preview = getPreview(poem.body, 5);

  article.innerHTML = `
    <p class="poem-meta">${poem.tag}</p>
    <h4>${poem.title}</h4>
    <p class="poem-preview">${preview}</p>
    <p class="poem-read-more">Click to read full poem</p>
  `;

  article.addEventListener("click", () => openPoem(poem));
  article.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPoem(poem);
    }
  });

  poemList.appendChild(article);
});

function getPreview(body, lineCount) {
  const lines = body.split("\n").filter((line) => line.trim() !== "");
  const previewLines = lines.slice(0, lineCount).join("\n");
  return lines.length > lineCount ? `${previewLines}...` : previewLines;
}

function openPoem(poem) {
  overlayTag.textContent = poem.tag;
  overlayTitle.textContent = poem.title;
  overlayBody.textContent = poem.body;
  overlayAuthor.textContent = "Nandini Dubey";
  mainPage.classList.add("hidden");
  readerPage.classList.remove("hidden");
  readerPage.setAttribute("aria-hidden", "false");
  window.scrollTo(0, 0);
}

function closePoem() {
  readerPage.classList.add("hidden");
  readerPage.setAttribute("aria-hidden", "true");
  mainPage.classList.remove("hidden");
  window.scrollTo(0, 0);
}

overlayClose.addEventListener("click", closePoem);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !readerPage.classList.contains("hidden")) {
    closePoem();
  }
});

contributeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("contributor-name").value.trim();
  const pdfFile = document.getElementById("poem-pdf").files[0];

  if (!name || !pdfFile) {
    formMessage.textContent = "Please enter your name and upload a PDF.";
    return;
  }

  formMessage.textContent = `Thank you, ${name}. Your PDF "${pdfFile.name}" is ready to be shared.`;
  contributeForm.reset();
});
