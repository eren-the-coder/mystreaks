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
  {
    text: "La discipline bat toujours la motivation.",
    author: "Inconnu"
  },
  {
    text: "Travaille en silence, laisse ton succès faire le bruit.",
    author: "Frank Ocean"
  },
  {
    text: "Tu dois choisir : souffrir de la discipline ou souffrir du regret.",
    author: "Jim Rohn"
  },
  {
    text: "Chaque minute que tu passes distrait t’éloigne de la vie que tu veux vraiment.",
    author: "Inconnu"
  },
  {
    text: "Fais ce que la plupart ne feront jamais, et tu vivras comme la plupart ne vivront jamais.",
    author: "Inconnu"
  },
  {
    text: "Le succès n’est pas donné, il est loué. Et le loyer est dû chaque jour.",
    author: "J.J. Watt"
  },
  {
    text: "Tu ne seras jamais payé au-dessus de ta valeur actuelle. Alors augmente ta valeur.",
    author: "Inconnu"
  },
  {
    text: "L’argent va à ceux qui ont le courage de s’améliorer chaque jour.",
    author: "Inconnu"
  },
  {
    text: "Si tu veux être payé comme un pro, tu dois travailler comme un pro.",
    author: "Inconnu"
  },
  {
    text: "Tu veux gagner plus ? Deviens quelqu’un qui mérite plus.",
    author: "Inconnu"
  },
  {
    text: "Pendant que tu dors, quelqu'un travaille pour prendre ta place.",
    author: "Inconnu"
  },
  {
    text: "Le succès appartient aux gens capables de rester concentrés quand tout le monde se disperse.",
    author: "Inconnu"
  },
  {
    text: "Si tu veux contrôler ta vie, commence par contrôler ton attention.",
    author: "Inconnu"
  },
  {
    text: "L’argent suit la discipline, pas l’impulsivité.",
    author: "Inconnu"
  },
  {
    text: "La version de toi dans 5 ans dépend de ce que tu fais aujourd’hui.",
    author: "Inconnu"
  },
  {
    text: "Ton futur compte plus que ta distraction du moment.",
    author: "Inconnu"
  },
  {
    text: "La différence entre les riches et les autres : la capacité à se concentrer longtemps.",
    author: "Inconnu"
  },
  {
    text: "La réussite exige ce que la paresse refuse.",
    author: "Inconnu"
  },
  {
    text: "Étudie comme si tu étais fauché. Investis comme si tu étais riche.",
    author: "Inconnu"
  },
  {
    text: "Personne ne viendra te sauver. C'est ton travail de devenir la meilleure version de toi-même.",
    author: "Inconnu"
  },

  {
    text: "Travaille jusqu’à ce que ton idole devienne ton rival.",
    author: "Inconnu"
  },
  {
    text: "Pendant que tu cherches des excuses, quelqu’un construit son empire.",
    author: "Inconnu"
  },
  {
    text: "Personne ne devient riche en étant confortable.",
    author: "Inconnu"
  },
  {
    text: "Le grind ne trahit jamais.",
    author: "Inconnu"
  },
  {
    text: "Si tu t'arrêtes, quelqu’un d’autre prend ta place.",
    author: "Inconnu"
  },
  {
    text: "La liberté s’achète. Et son prix, c’est le travail.",
    author: "Inconnu"
  },
  {
    text: "Le succès demande des sacrifices que les autres refusent de faire.",
    author: "Inconnu"
  },
  {
    text: "Les riches se créent. Les pauvres attendent.",
    author: "Inconnu"
  },
  {
    text: "Investis dans toi jusqu’à devenir impossible à ignorer.",
    author: "Inconnu"
  },
  {
    text: "Le confort détruit les rêves. L’inconfort construit les fortunes.",
    author: "Inconnu"
  },
  {
    text: "Tu n’as pas besoin de permission pour devenir puissant.",
    author: "Inconnu"
  },
  {
    text: "Chaque heure qui passe peut soit te rapprocher du million, soit t’en éloigner.",
    author: "Inconnu"
  },
  {
    text: "Les distractions sont l’impôt que tu paies pour ne pas être discipliné.",
    author: "Inconnu"
  },
  {
    text: "Lève-toi. Personne ne bâtira ta richesse à ta place.",
    author: "Inconnu"
  },
  {
    text: "Le monde appartient à ceux qui n’attendent pas qu’on leur donne.",
    author: "Inconnu"
  },
  {
    text: "La vie que tu veux est cachée derrière le travail que tu évites.",
    author: "Inconnu"
  },
  {
    text: "L'argent aime la vitesse. Pas l’hésitation.",
    author: "Inconnu"
  },
  {
    text: "Ce que tu fais en privé sera payé en public.",
    author: "Inconnu"
  },
  {
    text: "Deviens tellement bon qu’ils ne peuvent plus t’ignorer.",
    author: "Steve Martin"
  },
  {
    text: "Le grind de maintenant devient le luxe de demain.",
    author: "Inconnu"
  },
  {
    text: "Reste pauvre en excuses. Riche en actions.",
    author: "Inconnu"
  },
  {
    text: "La discipline te paiera plus que n’importe quel job.",
    author: "Inconnu"
  },
  {
    text: "Tu veux la vie dont tout le monde rêve ? Alors fais ce que personne ne fait.",
    author: "Inconnu"
  },
  {
    text: "Les millionnaires lisent. Les autres scrollent.",
    author: "Inconnu"
  },
  {
    text: "Plus tu deviens dangereux, plus la vie devient facile.",
    author: "Inconnu"
  },
  { text: "Reste focussé. Le reste attend.", author: "Inconnu" },
  { text: "Travaille. Améliore-toi. Recommence demain.", author: "Inconnu" },
  { text: "Moins parler, plus construire.", author: "Inconnu" },
  { text: "La discipline crée les résultats.", author: "Inconnu" },
  { text: "Arrête de rêver. Commence à agir.", author: "Inconnu" },
  { text: "Le progrès aime le silence.", author: "Inconnu" },
  { text: "Ignore tout. Avance fort.", author: "Inconnu" },
  { text: "Fais plus. Dis moins.", author: "Inconnu" },
  { text: "Le temps travaille contre toi.", author: "Inconnu" },
  { text: "Reste dangereux. Reste concentré.", author: "Inconnu" },
  { text: "Chaque seconde perdue t’appauvrit.", author: "Inconnu" },
  { text: "La procrastination détruit plus que l’échec.", author: "Inconnu" },
  { text: "Pendant que tu hésites, d’autres gagnent.", author: "Inconnu" },
  { text: "Ta future vie dépend de maintenant.", author: "Inconnu" },
  { text: "Tu n’as aucune excuse. Agis.", author: "Inconnu" },
  { text: "Procrastiner, c'est saboter ton futur.", author: "Inconnu" },
  { text: "Les paresseux rêvent, les forts construisent.", author: "Inconnu" },
  { text: "Si tu n’agis pas, tu recules.", author: "Inconnu" },
  { text: "Ton confort te tue lentement.", author: "Inconnu" },
  { text: "Tu peux souffrir maintenant ou regretter toujours.", author: "Inconnu" },
  { text: "Ton futur te jugera.", author: "Inconnu" },
  { text: "Personne ne sera responsable de ton échec.", author: "Inconnu" },
  { text: "Investis dans toi avant tout.", author: "Inconnu" },
  { text: "L’argent récompense la compétence.", author: "Inconnu" },
  { text: "La liberté coûte du travail.", author: "Inconnu" },
  { text: "Ton revenu suit ta valeur.", author: "Inconnu" },
  { text: "Riche est celui qui crée, pas celui qui attend.", author: "Inconnu" },
  { text: "L’argent aime la discipline.", author: "Inconnu" },
  { text: "Construis des actifs, pas des excuses.", author: "Inconnu" },
  { text: "L’argent vient avec la maîtrise, jamais avec la paresse.", author: "Inconnu" },
  { text: "Le travail acharné est une monnaie.", author: "Inconnu" },
  { text: "L’indépendance se construit, elle ne tombe pas.", author: "Inconnu" },
  { text: "Les riches lisent, les pauvres scrollent.", author: "Inconnu" },
  { text: "Le salaire nourrit, les actifs libèrent.", author: "Inconnu" },
  { text: "La routine gagne la guerre.", author: "Discipline Militaire" },
  { text: "Fais ce qui doit être fait.", author: "Discipline Militaire" },
  { text: "La douleur forge le soldat.", author: "Discipline Militaire" },
  { text: "Discipline avant motivation.", author: "Discipline Militaire" },
  { text: "Agis, même sans envie.", author: "Discipline Militaire" },
  { text: "Reste droit. Continue.", author: "Discipline Militaire" },
  { text: "Une mission. Pas d'excuses.", author: "Discipline Militaire" },
  { text: "La rigueur bat le talent.", author: "Discipline Militaire" },
  { text: "Moins de gens, plus de résultats.", author: "Focus" },
  { text: "Isolement = évolution.", author: "Focus" },
  { text: "L'objectif d'abord, le reste après.", author: "Focus" },
  { text: "Seul, tu vas plus vite.", author: "Focus" },
  { text: "Personne ne t'attend. Avance.", author: "Focus" },
  { text: "Silence. Travail. Résultats.", author: "Focus" },
  { text: "Zéro distraction. Zéro excuse.", author: "Focus" },
  { text: "Les amis viendront après le succès.", author: "Focus" },
  { text: "Concentre-toi sur ton propre chemin.", author: "Focus" },
  { text: "Contrôle-toi, pas le monde.", author: "Stoïcisme" },
  { text: "Ce que tu évites, te contrôle.", author: "Stoïcisme" },
  { text: "Le présent est suffisant.", author: "Stoïcisme" },
  { text: "La force est intérieure.", author: "Stoïcisme" },
  { text: "Respire. Agis. Accepte.", author: "Stoïcisme" },
  { text: "Le choix, c’est la liberté.", author: "Stoïcisme" },
  { text: "Le calme est une arme.", author: "Stoïcisme" },
  { text: "Endure et persévère.", author: "Stoïcisme" },
  { text: "Ce qui arrive devait arriver.", author: "Stoïcisme" },
  { text: "Ton esprit décide de tout.", author: "Stoïcisme" },
  {
    text: "Si tu veux avancer, écrase tes limites.",
    author: "Eren Yeager",
  },
  {
    text: "Le monde ne te doit rien. Prends ce que tu veux.",
    author: "Levi Ackerman",
  },
  {
    text: "La discipline bat la peur.",
    author: "Mikasa Ackerman",
  },

  // Naruto
  {
    text: "Travaille pendant que les autres dorment.",
    author: "Rock Lee",
  },
  {
    text: "Le chemin est dur, mais je le marcherai seul.",
    author: "Sasuke Uchiha",
  },
  {
    text: "Ta volonté forge ton destin.",
    author: "Kakashi Hatake",
  },

  // One Piece
  {
    text: "Si tu veux devenir fort, sacrifie ton confort.",
    author: "Roronoa Zoro",
  },
  {
    text: "Aucun échec ne peut arrêter celui qui continue.",
    author: "Monkey D. Luffy",
  },
  {
    text: "Le vrai pouvoir vient de la patience.",
    author: "Jinbe",
  },

  // Dragon Ball
  {
    text: "Garde ton esprit aiguisé. Le reste suivra.",
    author: "Goku",
  },
  {
    text: "Le progrès exige solitude et discipline.",
    author: "Vegeta",
  },

  // Jujutsu Kaisen
  {
    text: "La douleur n'est qu'un rappel que tu vis encore.",
    author: "Sukuna",
  },
  {
    text: "Un esprit calme est une arme invincible.",
    author: "Gojo Satoru",
  },

  // Demon Slayer
  {
    text: "La persévérance transforme les faibles en légendes.",
    author: "Tanjiro Kamado",
  },
  {
    text: "Coupe ce qui t'empêche d'avancer.",
    author: "Giyu Tomioka",
  },

  // Vinland Saga
  {
    text: "L'homme libre est celui qui maîtrise lui-même.",
    author: "Thorfinn",
  },
  {
    text: "Endure. Deviens meilleur. Recommence.",
    author: "Askeladd",
  },

  // Solo Leveling
  {
    text: "Personne ne viendra te sauver. Deviens plus fort.",
    author: "Sung Jin-Woo",
  },
  {
    text: "Le pouvoir se gagne, jamais il ne se demande.",
    author: "Sung Jin-Woo",
  },

  // Bleach
  {
    text: "Le seul ennemi réel, c’est toi-même.",
    author: "Ichigo Kurosaki",
  },
  {
    text: "Le silence et l’effort donnent des résultats.",
    author: "Byakuya Kuchiki",
  },

  // Hunter x Hunter
  {
    text: "Le talent sans discipline est inutile.",
    author: "Killua Zoldyck",
  },
  {
    text: "Poursuis ton objectif, même seul.",
    author: "Kurapika",
  },

  // Mob Psycho 100
  {
    text: "La vraie force est intérieure.",
    author: "Shigeo (Mob)",
  },

  // Code Geass
  {
    text: "Le pouvoir appartient à ceux qui osent le prendre.",
    author: "Lelouch Lamperouge",
  },
  {
    text: "Le contrôle de soi est une arme.",
    author: "Lelouch Lamperouge",
  },
  // ===== SASUKE PACK (solitude / vengeance / discipline) =====
  {
    text: "Je marche seul. Le chemin n’a pas besoin d’être compris.",
    author: "Sasuke Uchiha"
  },
  {
    text: "La solitude forge une détermination que personne ne peut briser.",
    author: "Sasuke Uchiha"
  },
  {
    text: "Coupe tout ce qui t’éloigne de ton objectif.",
    author: "Sasuke Uchiha"
  },
  {
    text: "Les émotions affaiblissent. La discipline te libère.",
    author: "Sasuke Uchiha"
  },
  {
    text: "Si tu veux la force, accepte la douleur.",
    author: "Sasuke Uchiha"
  },

  // ===== HAJIME NO IPPO (effort pur / sacrifice / endurance) =====
  {
    text: "Un pas de plus. Toujours un pas de plus.",
    author: "Ippo Makunouchi"
  },
  {
    text: "La fatigue n’est qu’un témoin de ta progression.",
    author: "Ippo Makunouchi"
  },
  {
    text: "Travaille en silence. L’arène parlera pour toi.",
    author: "Takamura Mamoru"
  },

  // ===== MY HERO ACADEMIA =====
  {
    text: "Lève-toi, même quand ton corps dit non.",
    author: "Deku"
  },
  {
    text: "Ta limite ? Brise-la. Encore.",
    author: "Deku"
  },
  {
    text: "L’excuse n’existe pas pour celui qui veut devenir le meilleur.",
    author: "Bakugo Katsuki"
  },

  // ===== MOB PSYCHO 100 (maîtrise de soi / stoïcisme) =====
  {
    text: "Le contrôle de soi est ta plus grande force.",
    author: "Shigeo (Mob)"
  },
  {
    text: "Reste calme. Tu avanceras plus loin que les autres.",
    author: "Shigeo (Mob)"
  },

  // ===== ONE PUNCH MAN =====
  {
    text: "La routine. La discipline. Le progrès.",
    author: "Saitama"
  },
  {
    text: "Deviens tellement fort que le doute ne survit pas.",
    author: "Saitama"
  },
  {
    text: "Aucun raccourci. Juste du travail honnête.",
    author: "Saitama"
  },
  {
    text: "L’amélioration commence quand l’excuse disparaît.",
    author: "Genos"
  },

  // ===== ATTACK ON TITAN =====
  {
    text: "Avance. Peu importe ce que tu dois écraser.",
    author: "Eren Yeager"
  },
  {
    text: "Ce monde n’offre rien. Prends ce que tu veux.",
    author: "Eren Yeager"
  },
  {
    text: "La discipline transforme la peur en arme.",
    author: "Levi Ackerman"
  },
  {
    text: "Les regrets viennent de l’inaction — pas de l’effort.",
    author: "Hange Zoe"
  },

  // ===== JUJUTSU KAISEN =====
  {
    text: "Endure la douleur. Elle te rend plus dangereux.",
    author: "Yuji Itadori"
  },
  {
    text: "Le calme absolu est une force absolue.",
    author: "Gojo Satoru"
  },
  {
    text: "Le monde appartient à ceux qui supportent l’obscurité.",
    author: "Sukuna"
  },

  // ===== DORORO =====
  {
    text: "Je n’avais rien. Alors je suis devenu tout.",
    author: "Hyakkimaru"
  },
  {
    text: "Ton passé ne te définit pas. Seule ta volonté avance.",
    author: "Hyakkimaru"
  },
  {
    text: "La solitude n’est pas une faiblesse, mais un chemin.",
    author: "Hyakkimaru"
  },
  {
    text: "Ne montre jamais de faiblesse. Les ennemis guettent.",
    author: "Thomas Shelby"
  },
  {
    text: "Le contrôle est la seule arme qui compte.",
    author: "Thomas Shelby"
  },
  {
    text: "La patience forge le succès des audacieux.",
    author: "Thomas Shelby"
  },
  {
    text: "Si tu veux la puissance, accepte la solitude.",
    author: "Thomas Shelby"
  },
  {
    text: "Chaque pièce déplacée doit servir ton empire.",
    author: "Thomas Shelby"
  },
  {
    text: "Le respect se gagne par la discipline, pas les mots.",
    author: "Arthur Shelby"
  },
  {
    text: "Ne pardonne jamais. La mémoire est une arme.",
    author: "Thomas Shelby"
  },
  {
    text: "Les émotions sont un luxe que seuls les faibles paient.",
    author: "Thomas Shelby"
  },
  {
    text: "L’argent ne dort jamais. Tu ne dois pas dormir non plus.",
    author: "Thomas Shelby"
  },
  {
    text: "Le monde n’offre rien. Prends ce qui est à toi.",
    author: "Thomas Shelby"
  },
  {
    text: "Un plan bien exécuté vaut plus que mille mots.",
    author: "Thomas Shelby"
  },
  {
    text: "Travaille dans l’ombre. L’effet dans la lumière sera brutal.",
    author: "Thomas Shelby"
  },
  {
    text: "La peur est pour les faibles. La stratégie pour les puissants.",
    author: "Thomas Shelby"
  },
  {
    text: "Seul le sang et le courage construisent un empire.",
    author: "Thomas Shelby"
  },
  {
    text: "La loyauté est une arme. Utilise-la avec soin.",
    author: "Thomas Shelby"
  },
  {
    text: "Ne parle pas de ton plan. Laisse tes actions parler.",
    author: "Thomas Shelby"
  },
  {
    text: "Chaque ennemi peut devenir ton allié. Ou ton cadavre.",
    author: "Thomas Shelby"
  },
  {
    text: "Le pouvoir n’attend personne. Il se prend.",
    author: "Thomas Shelby"
  },
  {
    text: "Rien ne t’est dû. Tout doit être gagné.",
    author: "Thomas Shelby"
  },
  {
    text: "La discipline transforme l’homme en légende.",
    author: "Thomas Shelby"
  },
  { text: "L’argent ne dort jamais. Toi non plus.", author: "Thomas Shelby" },
  { text: "Le pouvoir se prend, jamais il n’est donné.", author: "Thomas Shelby" },
  { text: "Chaque mouvement doit servir ton empire.", author: "Thomas Shelby" },
  { text: "Investis dans toi. Le reste suivra.", author: "Thomas Shelby" },
  { text: "Les opportunités ne frappent pas. Elles se créent.", author: "Thomas Shelby" },
  { text: "Le business est un jeu. Gagne-le, ou disparais.", author: "Thomas Shelby" },
  { text: "Le risque paie ceux qui savent agir.", author: "Thomas Shelby" },
  { text: "Ne mélange jamais affaires et émotions.", author: "Thomas Shelby" },
  { text: "Rien n’est gratuit. Tout se mérite.", author: "Thomas Shelby" },
  { text: "Construis ton empire. La loyauté viendra après.", author: "Thomas Shelby" },
  { text: "Les ennemis observent. Les alliés aussi. Anticipe.", author: "Thomas Shelby" },
  { text: "La richesse est une arme silencieuse.", author: "Thomas Shelby" },
  { text: "Ils ne méritent pas ton respect.", author: "Thomas Shelby" },
  { text: "Ignore-les tous et avance.", author: "Thomas Shelby" },
  { text: "Les faibles crient. Les forts agissent.", author: "Thomas Shelby" },
  { text: "Aucune loyauté pour ceux qui trahissent.", author: "Thomas Shelby" },
  { text: "La vengeance est un plat que je mange froid.", author: "Thomas Shelby" },
  { text: "Rien ne m’arrêtera. Personne.", author: "Thomas Shelby" },
  { text: "Fais ce que tu veux. Qu’ils crient.", author: "Thomas Shelby" },
  { text: "Seul le pouvoir compte. Tout le reste est distraction.", author: "Thomas Shelby" },
  { text: "Les règles sont pour les faibles.", author: "Thomas Shelby" },
  { text: "Ils ne voient pas le danger. Moi si.", author: "Thomas Shelby" },
  { text: "Pas de pardon. Pas d’excuses.", author: "Thomas Shelby" },
  { text: "Je fais ce qui doit être fait. Toujours.", author: "Thomas Shelby" },
];

export const getRandomCitation = (): Citation => {
  const randomIndex = Math.floor(Math.random() * citations.length);
  return citations[randomIndex];
};
