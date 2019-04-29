const movies = [
    {
        id: '1',
        title: 'Oceans 8',
        category: 'Comedy',
        likes: {
            number: 4,
            clicked: false},
        dislikes: {
            number: 1,
            clicked: false},
        image: 'https://gentlemanmoderne.com/wp-content/uploads/2018/06/ocean-8-critique.jpg',
        description: 'Cinq ans, huit mois, 12 jours... et le compteur tourne toujours ! C\'est le temps qu\'il aura fallu à Debbie Ocean pour échafauder le plus gros braquage de sa vie. Elle sait désormais ce qu\'il lui faut : recruter une équipe de choc. À commencer par son associée Lou Miller. Ensemble, elles engagent une petite bande d\'expertes : Amita, la bijoutière, Constance, l\'arnaqueuse, Tammy, la receleuse, Nine Ball, la hackeuse et Rose, la styliste de mode.'
    }, {
        id: '2',
        title: 'Midnight Sun',
        category: 'Comedy',
        likes: {
            number: 2,
            clicked: false},
        dislikes: {
            number: 0,
            clicked: false},
        image: 'https://www.10wallpaper.com/wallpaper/2880x1800/1804/Midnight_Sun_2018_Film_4K_Poster_2880x1800.jpg',
        description: 'Midnight Sun ou Soleil de minuit au Québec est un film dramatique américain réalisé par Scott Speer, sorti en 2018. C\'est un remake du film japonais Taiyō no Uta sorti en 2006.'
    }, {
        id: '3',
        title: 'Les indestructibles 2',
        category: 'Animation',
        likes: {
            number: 3,
            clicked: false},
        dislikes: {
            number: 1,
            clicked: false},
        image: 'https://i0.wp.com/www.profession-spectacle.com/wp-content/uploads/2018/10/Les-Indestructibles-2-Une-e1539265280697.jpg?fit=800%2C450&ssl=1',
        description: 'Hélène se retrouve sur le devant de la scène et laisse à Bob le soin de mener à bien les mille et une missions de la vie quotidienne et de s\'occuper de Violette, Flèche et de bébé Jack-Jack. C\'est un changement de rythme difficile pour la famille d\'autant que personne ne mesure réellement l\'étendue des incroyables pouvoirs du petit dernier. Lorsqu\'un nouvel ennemi fait surface, les familles et Frozone vont devoir s\'allier comme jamais pour déjouer son plan machiavélique.'
    }, {
        id: '4',
        title: 'Sans un bruit',
        category: 'Thriller',
        likes: {
            number: 6,
            clicked: false},
        dislikes: {
            number: 6,
            clicked: false},
        image: 'https://cinerama7art.files.wordpress.com/2018/07/affiche-news-sans-un-bruit.jpg?w=640',
        description: 'S\'ils vous entendent, ils vous pourchassent. Une famille tente de survivre en silence pour éviter l\'attaque de créatures mystérieuses qui identifient leurs proies grâce aux sons émis. Sachant que le moindre murmure peut être fatal, Evelyn et Lee sont déterminés à trouver le moyen de protéger leurs enfants tout en cherchant désespérément un moyen de se défendre.'
    }, {
        id: '5',
        title: 'Creed II',
        category: 'Drame',
        likes: {
            number: 16,
            clicked: false},
        dislikes: {
            number: 2,
            clicked: false},
        image: 'https://4.bp.blogspot.com/-K1-PHhwqSZI/W9NFq0W3LmI/AAAAAAAA8X8/HsgXf8374igvF_j4m4tPOYJ5wEPZpAa2ACLcBGAs/s1600/IMG_20181026_184215-1.jpg',
        description: 'La vie est devenue un numéro d\'équilibriste pour Adonis Creed. Entre ses obligations personnelles et son entraînement pour son prochain grand match, il est à la croisée des chemins. L\'enjeu du combat est d\'autant plus élevé que son rival est lié au passé de sa famille. Toutefois, il peut compter sur la présence de Rocky Balboa à ses côtés : avec lui, il comprendra ce qui vaut la peine de se battre et découvrira qu\'il n\'y a rien de plus important que les valeurs familiales.'
    }, {
        id: '6',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: {
            number: 11,
            clicked: false},
        dislikes: {
            number: 3,
            clicked: false},
        image: 'https://cdn-media.rtl.fr/cache/sdzT9quI8LObqmiOG7eADw/880v587-0/online/image/2014/0523/7772210672_pulp-fiction-de-quentin-tarantino.jpg',
        description: 'L\'odyssée sanglante et burlesque de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s\'entremêlent. Dans un restaurant, un couple de jeunes braqueurs, Pumpkin et Yolanda, discutent des risques que comporte leur activité. Deux truands, Jules Winnfield et son ami Vincent Vega, qui revient d\'Amsterdam, ont pour mission de récupérer une mallette au contenu mystérieux et de la rapporter à Marsellus Wallace.'
    }, {
        id: '7',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: {
            number: 12333,
            clicked: false},
        dislikes: {
            number: 32,
            clicked: false},
        image: 'https://cdn-media.rtl.fr/cache/sdzT9quI8LObqmiOG7eADw/880v587-0/online/image/2014/0523/7772210672_pulp-fiction-de-quentin-tarantino.jpg',
        description: 'L\'odyssée sanglante et burlesque de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s\'entremêlent. Dans un restaurant, un couple de jeunes braqueurs, Pumpkin et Yolanda, discutent des risques que comporte leur activité. Deux truands, Jules Winnfield et son ami Vincent Vega, qui revient d\'Amsterdam, ont pour mission de récupérer une mallette au contenu mystérieux et de la rapporter à Marsellus Wallace.'
    }, {
        id: '8',
        title: 'Seven',
        category: 'Thriller',
        likes: {
            number: 2,
            clicked: false},
        dislikes: {
            number: 1,
            clicked: false},
        image: 'http://fincher.free.fr/download/wp_7_big.jpg',
        description: 'Peu avant sa retraite, l\'inspecteur William Somerset, un flic désabusé, est chargé de faire équipe avec un jeune idéaliste, David Mills. Ils enquêtent tout d\'abord sur le meurtre d\'un homme obèse que son assassin a obligé à manger jusqu\'à ce que mort s\'ensuive. L\'enquête vient à peine de commencer qu\'un deuxième crime, tout aussi macabre, est commis, puis un troisième. Petit à petit, les deux policiers font le lien entre tous ces assassinats.'
    }, {
        id: '9',
        title: 'Inception',
        category: 'Thriller',
        likes: {
            number: 2,
            clicked: false},
        dislikes: {
            number: 1,
            clicked: false},
        image: 'https://occ-0-987-990.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABSuGrkMm9vgA4hxR1rMMskpJlp7DetSqONngRHDVFScqGWPV7Lej0G7bQa-u2eiWF-6YeDsyClmGIBmLV4-w8dwcsg6yGxCqvOEkywSgZA4YYadRZBtLZ4QYOfB2u-tzz59udA6tCQ.jpg',
        description: 'Dom Cobb est un voleur expérimenté dans l\'art périlleux de `l\'extraction\' : sa spécialité consiste à s\'approprier les secrets les plus précieux d\'un individu, enfouis au plus profond de son subconscient, pendant qu\'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l\'univers trouble de l\'espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier. Cependant, une ultime mission pourrait lui permettre de retrouver sa vie d\'avant.'
    }, {
        id: '10',
        title: 'Gone Girl',
        category: 'Thriller',
        likes: {
            number: 22,
            clicked: false},
        dislikes: {
            number: 12,
            clicked: false},
        image: 'http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-04/gonegirlreview2.jpg',
        description: 'Couple en vue à New York où ils résident, Amy et Nick Dune doivent s\'installer dans le Missouri quand Nick perd son emploi. Alors qu\'ils s\'apprêtent à fêter le cinquième anniversaire de leur mariage, Amy disparaît. Remarquant des traces de lutte dans la maison, Nick appelle tout de suite la police. Les pistes suivies et les indices recueillis orientent les soupçons des médias et du voisinage vers Nick.'
    },
];

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies));

// async componentDidMount() {
//     const data = await movies$;
//     this.setState({ data });
// }