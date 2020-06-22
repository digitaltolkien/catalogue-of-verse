const lotr = JSON.parse(`[
  {
    "firstLine": "The Road goes ever on and on",
    "bookChapter": "1.01",
    "linesByStanza": "[8]"
  },
  {
    "firstLine": "One Ring to rule them all, One Ring to find them,",
    "bookChapter": "1.02",
    "linesByStanza": "[2]"
  },
  {
    "firstLine": "Three Rings for the Elven-kings under the sky,",
    "bookChapter": "1.02",
    "linesByStanza": "[8]"
  },
  {
    "firstLine": "The Road goes ever on and on",
    "bookChapter": "1.03",
    "linesByStanza": "[8]"
  },
  {
    "firstLine": "Upon the hearth the fire is red,",
    "bookChapter": "1.03",
    "linesByStanza": "[10, 10, 10]"
  },
  {
    "firstLine": "Snow-white! Snow-white! O Lady clear!",
    "bookChapter": "1.03",
    "linesByStanza": "[4, 4, 4, 4]"
  },
  {
    "firstLine": "Ho! Ho! Ho! to the bottle I go",
    "bookChapter": "1.04",
    "linesByStanza": "[6]"
  },
  {
    "firstLine": "Sing hey! for the bath at close of day",
    "bookChapter": "1.05",
    "linesByStanza": "[4, 4, 4, 4]"
  },
  {
    "firstLine": "Farewell we call to hearth and hall!",
    "bookChapter": "1.05",
    "linesByStanza": "[4, 4, 4, 2]"
  },
  {
    "firstLine": "O! Wanderers in the shadowed land",
    "bookChapter": "1.06",
    "linesByStanza": "[7]"
  },
  {
    "firstLine": "Hey dol! merry dol! ring a dong dillo!",
    "bookChapter": "1.06",
    "linesByStanza": "[3]"
  },
  {
    "firstLine": "Hey! Come merry dol! derry dol! My darling!",
    "bookChapter": "1.06",
    "linesByStanza": "[14]"
  },
  {
    "firstLine": "Hop along, my little friends, up the Withywindle!",
    "bookChapter": "1.06",
    "linesByStanza": "[8]"
  },
  {
    "firstLine": "Hey! Come derry dol! Hop along, my hearties!",
    "bookChapter": "1.06",
    "linesByStanza": "[3]"
  },
  {
    "firstLine": "Now let the song begin! Let us sing together",
    "bookChapter": "1.06",
    "linesByStanza": "[6]"
  },
  {
    "firstLine": "O slender as a willow-wand! O clearer than clear water!",
    "bookChapter": "1.07",
    "linesByStanza": "[4]"
  },
  {
    "firstLine": "Old Tom Bombadil is a merry fellow;",
    "bookChapter": "1.07",
    "linesByStanza": "[2]"
  },
  {
    "firstLine": "I had an errand there: gathering water-lilies,",
    "bookChapter": "1.07",
    "linesByStanza": "[10]"
  },
  {
    "firstLine": "And that proved well for you – for now I shall no longer",
    "bookChapter": "1.07",
    "linesByStanza": "[6]"
  },
  {
    "firstLine": "Ho! Tom Bombadil, Tom Bombadillo!",
    "bookChapter": "1.07",
    "linesByStanza": "[4]"
  },
  {
    "firstLine": "Cold be hand and heart and bone,",
    "bookChapter": "1.08",
    "linesByStanza": "[8]"
  },
  {
    "firstLine": "Ho! Tom Bombadil, Tom Bombadillo!",
    "bookChapter": "1.08",
    "linesByStanza": "[4]"
  },
  {
    "firstLine": "Old Tom Bombadil is a merry fellow,",
    "bookChapter": "1.08",
    "linesByStanza": "[4]"
  },
  {
    "firstLine": "Get out, you old Wight! Vanish in the sunlight!",
    "bookChapter": "1.08",
    "linesByStanza": "[6]"
  },
  {
    "firstLine": "Wake now my merry lads! Wake and hear me calling!",
    "bookChapter": "1.08",
    "linesByStanza": "[4]"
  },
  {
    "firstLine": "Hey! now! Come hoy now! Whither do you wander?",
    "bookChapter": "1.08",
    "linesByStanza": "[4]"
  },
  {
    "firstLine": "Tom’s country ends here: he will not pass the borders.",
    "bookChapter": "1.08",
    "linesByStanza": "[2]"
  },
  {
    "firstLine": "There is an inn, a merry old inn",
    "bookChapter": "1.09",
    "linesByStanza": "[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]"
  },
  {
    "firstLine": "Gil-galad was an Elven-king.",
    "bookChapter": "1.11",
    "linesByStanza": "[4, 4, 4]"
  },
  {
    "firstLine": "The leaves were long, the grass was green,",
    "bookChapter": "1.11",
    "linesByStanza": "[8, 8, 8, 8, 8, 8, 8, 8, 8]"
  },
  {
    "firstLine": "Troll sat alone on his seat of stone,",
    "bookChapter": "1.12",
    "linesByStanza": "[7, 7, 7, 7, 7, 7, 7, 7]"
  },
  {
    "firstLine": "Eärendil was a mariner",
    "bookChapter": "2.01",
    "linesByStanza": "[8, 12, 16, 16, 20, 16, 12, 12, 12]"
  },
  {
    "firstLine": "A Elbereth Gilthoniel,",
    "bookChapter": "2.01",
    "linesByStanza": "[7]"
  },
  {
    "firstLine": "Seek for the Sword that was broken:",
    "bookChapter": "2.02",
    "linesByStanza": "[8]"
  },
  {
    "firstLine": "All that is gold does not glitter,",
    "bookChapter": "2.02",
    "linesByStanza": "[8]"
  },
  {
    "firstLine": "When winter first begins to bite",
    "bookChapter": "2.03",
    "linesByStanza": "[4]"
  },
  {
    "firstLine": "I sit beside the fire and think",
    "bookChapter": "2.03",
    "linesByStanza": "[4, 4, 4, 4, 4, 4]"
  },
  {
    "firstLine": "Annon edhellen, edro hi ammen!",
    "bookChapter": "2.04",
    "linesByStanza": "[2]"
  },
  {
    "firstLine": "The world was young, the mountains green,",
    "bookChapter": "2.04",
    "linesByStanza": "[10, 6, 8, 8, 4, 10]"
  },
  {
    "firstLine": "An Elven-maid there was of old,",
    "bookChapter": "2.06",
    "linesByStanza": "[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]"
  },
  {
    "firstLine": "When evening in the Shire was grey",
    "bookChapter": "2.07",
    "linesByStanza": "[4, 4, 4, 4, 4, 4]"
  },
  {
    "firstLine": "The finest rockets ever seen:",
    "bookChapter": "2.07",
    "linesByStanza": "[4]"
  },
  {
    "firstLine": "I sang of leaves, of leaves of gold, and leaves of gold there grew:",
    "bookChapter": "2.08",
    "linesByStanza": "[14]"
  },
  {
    "firstLine": "Ai! laurië lantar lassi súrinen",
    "bookChapter": "2.08",
    "linesByStanza": "[7, 1, 7, 2]"
  },
  {
    "firstLine": "Through Rohan over fen and field where the long grass grows",
    "bookChapter": "3.01",
    "linesByStanza": "[10]"
  },
  {
    "firstLine": "From the mouths of the Sea the South Wind flies, from the sandhills and the stones;",
    "bookChapter": "3.01",
    "linesByStanza": "[10]"
  },
  {
    "firstLine": "From the Gate of Kings the North Wind rides, and past the roaring falls;",
    "bookChapter": "3.01",
    "linesByStanza": "[10]"
  },
  {
    "firstLine": "Gondor! Gondor, between the Mountains and the Sea!",
    "bookChapter": "3.02",
    "linesByStanza": "[6]"
  },
  {
    "firstLine": "Learn now the lore of Living Creatures!",
    "bookChapter": "3.04",
    "linesByStanza": "[6]"
  },
  {
    "firstLine": "Beaver the builder, buck the leaper,",
    "bookChapter": "3.04",
    "linesByStanza": "[3]"
  },
  {
    "firstLine": "Eagle in eyrie, ox in pasture,",
    "bookChapter": "3.04",
    "linesByStanza": "[3]"
  },
  {
    "firstLine": "In the willow-meads of Tasarinan I walked in the Spring.",
    "bookChapter": "3.04",
    "linesByStanza": "[18]"
  },
  {
    "firstLine": "When Spring unfolds the beechen leaf, and sap is in the bough;",
    "bookChapter": "3.04",
    "linesByStanza": "[4, 4, 4, 4, 4, 4, 2]"
  },
  {
    "firstLine": "O Orofarnë, Lassemista, Carnimírië!",
    "bookChapter": "3.04",
    "linesByStanza": "[8]"
  },
  {
    "firstLine": "To Isengard! Though Isengard be ringed and barred with doors of stone;",
    "bookChapter": "3.04",
    "linesByStanza": "[7]"
  },
  {
    "firstLine": "Where now are the Dúnedain, Elessar, Elessar?",
    "bookChapter": "3.05",
    "linesByStanza": "[6]"
  },
  {
    "firstLine": "Legolas Greenleaf long under tree",
    "bookChapter": "3.05",
    "linesByStanza": "[4]"
  },
  {
    "firstLine": "Where now the horse and the rider? Where is the horn that was blowing?",
    "bookChapter": "3.06",
    "linesByStanza": "[8]"
  },
  {
    "firstLine": "In Dwimordene, in Lórien",
    "bookChapter": "3.06",
    "linesByStanza": "[10]"
  },
  {
    "firstLine": "Arise now, arise, Riders of Théoden!",
    "bookChapter": "3.06",
    "linesByStanza": "[4]"
  },
  {
    "firstLine": "Ere iron was found or tree was hewn,",
    "bookChapter": "3.08",
    "linesByStanza": "[4]"
  },
  {
    "firstLine": "‘Though Isengard be strong and hard, as cold as stone and bare as bone,",
    "bookChapter": "3.09",
    "linesByStanza": "[2]"
  },
  {
    "firstLine": "Ents the earthborn, old as mountains,",
    "bookChapter": "3.10",
    "linesByStanza": "[4]"
  },
  {
    "firstLine": "Tall ships and tall kings",
    "bookChapter": "3.11",
    "linesByStanza": "[6]"
  },
  {
    "firstLine": "The cold hard lands",
    "bookChapter": "4.02",
    "linesByStanza": "[10]"
  },
  {
    "firstLine": "Alive without breath;",
    "bookChapter": "4.02",
    "linesByStanza": "[14]"
  },
  {
    "firstLine": "Grey as a mouse,",
    "bookChapter": "4.03",
    "linesByStanza": "[22]"
  },
  {
    "firstLine": "Seek for the Sword that was Broken.",
    "bookChapter": "4.04",
    "linesByStanza": "[2]"
  },
  {
    "firstLine": "Gilthoniel A Elbereth!",
    "bookChapter": "4.10",
    "linesByStanza": "[1]"
  },
  {
    "firstLine": "A Elbereth Gilthoniel",
    "bookChapter": "4.10",
    "linesByStanza": "[4]"
  },
  {
    "firstLine": "Over the land there lies a long shadow,",
    "bookChapter": "5.02",
    "linesByStanza": "[12]"
  },
  {
    "firstLine": "From dark Dunharrow in the dim morning",
    "bookChapter": "5.03",
    "linesByStanza": "[21]"
  },
  {
    "firstLine": "Arise, arise, Riders of Théoden!",
    "bookChapter": "5.05",
    "linesByStanza": "[5]"
  },
  {
    "firstLine": "Ride now, ride now! Ride to Gondor!",
    "bookChapter": "5.05",
    "linesByStanza": "[1]"
  },
  {
    "firstLine": "Mourn not overmuch! Mighty was the fallen,",
    "bookChapter": "5.06",
    "linesByStanza": "[3]"
  },
  {
    "firstLine": "Faithful servant yet master’s bane,",
    "bookChapter": "5.06",
    "linesByStanza": "[2]"
  },
  {
    "firstLine": "Out of doubt, out of dark to the day’s rising",
    "bookChapter": "5.06",
    "linesByStanza": "[4]"
  },
  {
    "firstLine": "We heard of the horns in the hills ringing,",
    "bookChapter": "5.06",
    "linesByStanza": "[27]"
  },
  {
    "firstLine": "When the black breath blows",
    "bookChapter": "5.08",
    "linesByStanza": "[6]"
  },
  {
    "firstLine": "Silver flow the streams from Celos to Erui",
    "bookChapter": "5.09",
    "linesByStanza": "[7]"
  },
  {
    "firstLine": "In western lands beneath the Sun",
    "bookChapter": "6.01",
    "linesByStanza": "[8, 8]"
  },
  {
    "firstLine": "‘Long live the Halflings! Praise them with great praise!",
    "bookChapter": "6.04",
    "linesByStanza": "[10]"
  },
  {
    "firstLine": "To the Sea, to the Sea! The white gulls are crying,",
    "bookChapter": "6.04",
    "linesByStanza": "[12]"
  },
  {
    "firstLine": "Sing now, ye people of the Tower of Anor,",
    "bookChapter": "6.05",
    "linesByStanza": "[3, 5, 4, 3, 1]"
  },
  {
    "firstLine": "Out of doubt, out of dark, to the day’s rising",
    "bookChapter": "6.06",
    "linesByStanza": "[5]"
  },
  {
    "firstLine": "The Road goes ever on and on",
    "bookChapter": "6.06",
    "linesByStanza": "[8]"
  },
  {
    "firstLine": "Still round the corner there may wait",
    "bookChapter": "6.09",
    "linesByStanza": "[6]"
  },
  {
    "firstLine": "A! Elbereth Gilthoniel!",
    "bookChapter": "6.09",
    "linesByStanza": "[7]"
  },
  {
    "firstLine": ""
  }
]`);