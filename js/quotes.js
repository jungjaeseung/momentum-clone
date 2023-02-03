const quotes = [
  {
    quote:
      "지금 적극적으로 실행되는 괜찮은 계획이 다음 주의 완벽한 계획보다 낫다.",
    author: "George S. Patton",
  },
  {
    quote: "현재가 과거와 다르길 바란다면 과거를 공부하라.",
    author: "Baruch Spinoza",
  },
  {
    quote:
      "나는 전투를 준비하면서 계획은 무용하나 계획하는 것은 꼭 필요함을 항상 발견해왔다.",
    author: "Dwight D. Eisenhower",
  },
  {
    quote:
      "신은 우리가 성공할 것을 요구하지 않는다. 우리가 노력할 것을 요구할 뿐이다.",
    author: "Mother Teresa",
  },
  {
    quote: "행복은 성취의 기쁨과 창조적 노력이 주는 쾌감 속에 있다.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "강력한 이유는 강력한 행동을 낳는다.",
    author: "William Shakespeare",
  },
  {
    quote: "실천이 말보다 낫다.",
    author: "Benjamin Franklin",
  },
  {
    quote: "배움은 의무도, 생존도 아니다.",
    author: "W. Edwards Deming",
  },
  {
    quote:
      "어떤 생각에 동의하지 않고도 그 생각을 해볼 수 있는 것이 교육받은 사람의 특징이다.",
    author: "Aristotle",
  },
  {
    quote: "행동만이 삶에 힘을 주고, 절제만이 삶에 매력을 준다.",
    author: "Jean Paul Richter",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;
