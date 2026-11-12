/* ===== The list of stories =====
   HOW TO ADD A NEW STORY
   1. Put the story's HTML file in the main website folder (next to index.html).
   2. Find its topic below and add   file: "Your File Name.html"
   Topics without a file show as "Coming soon".
   level is "primary" or "middle".
*/
const TOPICS = [
  {level:"primary", title:"Counting and Number", blurb:"Tally sticks, knotted strings and the first numbers."},
  {level:"primary", title:"Zero and Place Value", blurb:"How 'nothing' became one of the greatest inventions."},
  {level:"primary", title:"Hindu-Arabic Numerals", blurb:"The journey of 0 to 9 from India to the whole world."},
  {level:"primary", title:"Fractions", blurb:"Egyptian scribes sharing bread among workers."},
  {level:"primary", title:"Odd and Even Numbers", blurb:"The mystery of the numbers that pair up."},
  {level:"primary", title:"Divisibility Rules", blurb:"The mathematical tricks of ancient scholars."},
  {level:"primary", title:"Decimals", blurb:"Tenths and hundredths from China to Stevin."},
  {level:"primary", title:"Measurement and the Metric System", blurb:"From cubits and feet to the metre."},

  {level:"middle", title:"Negative Numbers", blurb:"The number that wasn't supposed to exist: a journey in four chapters.",
   file:"Negative Numbers_ A Journey in Four Chapters.html"},
  {level:"middle", title:"HCF and LCM", blurb:"Sharing, packing and the cycles of the calendar."},
  {level:"middle", title:"Prime Numbers", blurb:"The building blocks every number is made from."},
  {level:"middle", title:"Origins of Geometry", blurb:"Measuring fields after the Nile floods."},
  {level:"middle", title:"Pythagoras' Theorem", blurb:"Right angles known long before Pythagoras."},
  {level:"middle", title:"Pi", blurb:"The endless chase to measure a circle."},
  {level:"middle", title:"Algebra", blurb:"Al-Khwarizmi and the art of restoring and balancing."},
  {level:"middle", title:"Algebraic Symbols", blurb:"How x, + and = were invented."},
  {level:"middle", title:"Coordinate Geometry", blurb:"Descartes joins numbers and shapes."},
  {level:"middle", title:"Proof and Euclid's Axioms", blurb:"Why mathematicians demand proof."},
  {level:"middle", title:"Probability", blurb:"A gambling puzzle that started a new mathematics."}
];

/* Draws story cards into a container. Used by the Stories page. */
function renderTopics(container, list) {
  container.innerHTML = "";
  list.forEach(t => {
    const el = document.createElement(t.file ? "a" : "div");
    el.className = "card" + (t.file ? "" : " soon");
    if (t.file) el.href = encodeURI(t.file);
    el.innerHTML =
      '<span class="num">' + (t.level === "primary" ? "Primary school" : "Middle school") + "</span>" +
      "<h3></h3><p></p>" +
      '<span class="tag">' + (t.file ? "Open story &rarr;" : "Coming soon") + "</span>";
    el.querySelector("h3").textContent = t.title;
    el.querySelector("p").textContent = t.blurb;
    container.appendChild(el);
  });
}
