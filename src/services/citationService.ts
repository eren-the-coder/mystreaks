export interface Citation {
  text: string;
  author: string;
}

const citations: Citation[] = [
  // Discipline & Travail
  { text: "La discipline est le pont entre les objectifs et l'accomplissement.", author: "Jim Rohn" },
  { text: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.", author: "Albert Schweitzer" },
  { text: "Le travail acharné bat le talent quand le talent ne travaille pas dur.", author: "Tim Notke" },
  { text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.", author: "Steve Jobs" },
  { text: "La motivation vous fait démarrer, l'habitude vous fait continuer.", author: "Jim Ryun" },
  { text: "Ne remettez jamais à demain ce que vous pouvez faire aujourd'hui.", author: "Benjamin Franklin" },
  
  // Argent & Abondance
  { text: "Si vous voulez être riche, pensez à épargner autant qu'à gagner.", author: "Benjamin Franklin" },
  { text: "L'argent ne fait pas le bonheur, mais il y contribue fortement.", author: "Coluche" },
  { text: "Le risque vient de ne pas savoir ce que l'on fait.", author: "Warren Buffett" },
  { text: "Pour réussir, votre désir de réussite doit être plus grand que votre peur de l'échec.", author: "Bill Cosby" },
  { text: "Investissez en vous-même. C'est le meilleur investissement que vous ferez.", author: "Warren Buffett" },
];

export const getRandomCitation = (): Citation => {
  const randomIndex = Math.floor(Math.random() * citations.length);
  return citations[randomIndex];
};
