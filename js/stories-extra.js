/* Granny Boom — Fantasy & Horror story pack (6 + 6). Loaded after stories-data.js */
const EXTRA_STORIES = [
  /* ============ FANTASY ============ */
  {
    id: 'dragon-hatch', topic: 'fantasy', level: 1,
    title: 'The Dragon Egg',
    context: 'A girl discovers a warm egg glowing under the roots of an old oak.',
    sentences: [
      { opener: 'On the first day of summer,', slots: [
        { role: 'Who', options: [
          { text: 'Mira', correct: true },
          { text: 'she', why: 'Pronoun — name her first.' },
          { text: 'a girl', why: 'Generic.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'caught', correct: true },
          { text: 'saw', why: 'Filter verb.' },
          { text: 'noticed', why: 'Filter verb.' }
        ]},
        { role: 'Closer', options: [
          { text: 'a faint pulse of light beneath the oak roots.', correct: true },
          { text: 'something weird.', why: 'Vague.' },
          { text: 'a glow really brightly.', why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Kneeling in the moss,', slots: [
        { role: 'Who', options: [
          { text: 'she', correct: true },
          { text: 'Mira', why: 'Repetition.' },
          { text: 'a kid', why: 'Vague.' }
        ]},
        { role: 'Careful verb', options: [
          { text: 'scooped', correct: true },
          { text: 'got', why: 'Lazy.' },
          { text: 'picked up', why: 'Wordy + flat.' }
        ]},
        { role: 'Detail', options: [
          { text: 'away the damp leaves with both hands.', correct: true },
          { text: 'the leaves off fast.', why: "Tell-adverb 'fast'." },
          { text: 'some stuff.', why: 'Vague.' }
        ]}
      ]},
      { opener: 'Nestled in the hollow,', slots: [
        { role: 'Subject', options: [
          { text: 'an egg', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'a thing', why: 'Lazy.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'throbbed', correct: true },
          { text: 'was', why: 'Filter verb of being.' },
          { text: 'glowed', why: 'Close, but throbbed feels alive.' }
        ]},
        { role: 'Closer', options: [
          { text: 'with veins of molten gold.', correct: true },
          { text: 'really brightly.', why: 'Tell-adverb.' },
          { text: 'a lot.', why: 'Vague.' }
        ]}
      ]},
      { opener: 'Before she could breathe,', slots: [
        { role: 'Who', options: [
          { text: 'Mira', correct: true },
          { text: 'she', why: 'Re-naming heightens the moment.' },
          { text: 'a girl', why: 'Vague.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'felt', correct: true },
          { text: 'thought', why: 'Filter phrase.' },
          { text: 'knew', why: 'Telling.' }
        ]},
        { role: 'Closer', options: [
          { text: 'the shell crack, warm as a heartbeat against her palms.', correct: true },
          { text: 'it crack open.', why: 'Pronoun + flat.' },
          { text: 'something happen really fast.', why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'From the widening seam,', slots: [
        { role: 'Subject', options: [
          { text: 'a tiny dragon', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'a creature', why: 'Generic.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'unfurled', correct: true },
          { text: 'came out', why: 'Wordy + flat.' },
          { text: 'appeared', why: 'Filter verb.' }
        ]},
        { role: 'Closer', options: [
          { text: 'one wing, then another, and fixed her with coin-bright eyes.', correct: true },
          { text: 'and looked at her.', why: 'Filter phrase.' },
          { text: 'really cutely.', why: 'Tell-adverb.' }
        ]}
      ]}
    ]
  },

  {
    id: 'spellbook-shop', topic: 'fantasy', level: 1,
    title: 'The Spellbook Shop',
    context: 'A nervous apprentice buys her first real spellbook from a crooked little shop.',
    sentences: [
      { opener: 'With her last silver coin clenched in her fist,', slots: [
        { role: 'Who', options: [
          { text: 'Lena', correct: true },
          { text: 'she', why: 'Pronoun — name her first.' },
          { text: 'a girl', why: 'Generic.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'pushed', correct: true },
          { text: 'opened', why: 'Bland.' },
          { text: 'went through', why: 'Lazy.' }
        ]},
        { role: 'Closer', options: [
          { text: 'open the door of Ashwick\u2019s Spellbook Shop.', correct: true },
          { text: 'into the shop quickly.', why: "Tell-adverb 'quickly'." },
          { text: 'the door.', why: 'Incomplete.' }
        ]}
      ]},
      { opener: 'Inside,', slots: [
        { role: 'Subject', options: [
          { text: 'dusty towers of books', correct: true },
          { text: 'stuff', why: 'Lazy.' },
          { text: 'things', why: 'Generic.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'leaned', correct: true },
          { text: 'were', why: 'Filter verb.' },
          { text: 'stood', why: 'Bland.' }
        ]},
        { role: 'Closer', options: [
          { text: 'over the aisles like sleeping giants.', correct: true },
          { text: 'everywhere a lot.', why: 'Vague.' },
          { text: 'really high.', why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'From behind the tallest stack,', slots: [
        { role: 'Subject', options: [
          { text: 'a voice', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'noise', why: 'Generic.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'creaked', correct: true },
          { text: 'said', why: 'Filter verb.' },
          { text: 'spoke', why: 'Bland.' }
        ]},
        { role: 'Closer', options: [
          { text: ', "First spell, little spark?"', correct: true },
          { text: 'really loudly.', why: 'Tell-adverb.' },
          { text: 'something to her.', why: 'Vague.' }
        ]}
      ]},
      { opener: 'Heart hammering,', slots: [
        { role: 'Who', options: [
          { text: 'Lena', correct: true },
          { text: 'she', why: 'Re-naming heightens the moment.' },
          { text: 'a kid', why: 'Vague.' }
        ]},
        { role: 'Careful verb', options: [
          { text: 'slid', correct: true },
          { text: 'took', why: 'Bland.' },
          { text: 'got', why: 'Lazy.' }
        ]},
        { role: 'Closer', options: [
          { text: 'a thin green book from the shelf marked BEGINNERS.', correct: true },
          { text: 'a book really fast.', why: 'Tell-adverb.' },
          { text: 'one off the shelf.', why: 'Vague.' }
        ]}
      ]},
      { opener: 'The moment her fingers touched the cover,', slots: [
        { role: 'Subject', options: [
          { text: 'silver letters', correct: true },
          { text: 'words', why: 'Generic.' },
          { text: 'something', why: 'Vague.' }
        ]},
        { role: 'Magic verb', options: [
          { text: 'swirled', correct: true },
          { text: 'appeared', why: 'Filter verb.' },
          { text: 'were', why: 'Filter verb of being.' }
        ]},
        { role: 'Closer', options: [
          { text: 'into her name, bright as a struck match.', correct: true },
          { text: 'on it really brightly.', why: 'Tell-adverb.' },
          { text: 'and she felt happy.', why: 'Tells the emotion.' }
        ]}
      ]}
    ]
  },

  {
    id: 'enchanted-bridge', topic: 'fantasy', level: 2,
    title: 'The Enchanted Bridge',
    context: 'A knight must cross a bridge guarded by a creature who speaks in riddles.',
    sentences: [
      { opener: 'As mist curled off the river,', slots: [
        { role: 'Who', options: [
          { text: 'Sir Rowan', correct: true },
          { text: 'he', why: 'Pronoun — name him for grounding.' },
          { text: 'a knight', why: 'Distancing.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'halted', correct: true },
          { text: 'stopped', why: 'Bland.' },
          { text: 'stood', why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'before the rope bridge', correct: true },
          { text: 'at the bridge', why: 'Generic.' },
          { text: 'near it', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', its planks humming like struck harp strings.', correct: true },
          { text: ' really quickly.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses image.' }
        ]}
      ]},
      { opener: 'Blocking the far side,', slots: [
        { role: 'Subject', options: [
          { text: 'a shape', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'a thing', why: 'Lazy.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'unfolded', correct: true },
          { text: 'stood up', why: 'Wordy + flat.' },
          { text: 'was', why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'from the fog on wings of torn shadow', correct: true },
          { text: 'from the mist', why: 'Too plain.' },
          { text: 'really slowly', why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ' and grinned with too many teeth.', correct: true },
          { text: '.', why: 'Misses payoff.' },
          { text: ' and looked scary.', why: 'Telling.' }
        ]}
      ]},
      { opener: 'Lifting his visor,', slots: [
        { role: 'Who', options: [
          { text: 'Rowan', correct: true },
          { text: 'he', why: 'Pronoun — naming heightens the climax.' },
          { text: 'the knight', why: 'Distancing.' }
        ]},
        { role: 'Bold verb', options: [
          { text: 'called', correct: true },
          { text: 'said', why: 'Filter verb.' },
          { text: 'shouted', why: 'Close, but called is sharper.' }
        ]},
        { role: 'Detail', options: [
          { text: 'across the swaying planks', correct: true },
          { text: 'really loudly', why: 'Tell-adverb.' },
          { text: 'to it', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', "I seek the Crystal Vale."', correct: true },
          { text: ' about going.', why: 'Wordy + flat.' },
          { text: '.', why: 'Misses dialogue.' }
        ]}
      ]},
      { opener: 'The creature tapped one claw on the rope,', slots: [
        { role: 'Subject', options: [
          { text: 'the bridge', correct: true },
          { text: 'it', why: 'Pronoun without antecedent.' },
          { text: 'everything', why: 'Vague.' }
        ]},
        { role: 'Power verb', options: [
          { text: 'stilled', correct: true },
          { text: 'stopped moving', why: 'Wordy + flat.' },
          { text: 'was still', why: 'Filter passive.' }
        ]},
        { role: 'Detail', options: [
          { text: 'as if listening to a secret', correct: true },
          { text: 'really fast', why: 'Tell-adverb.' },
          { text: 'a lot', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and whispered, "Answer true, or fall."', correct: true },
          { text: ' and said a riddle.', why: 'Telling.' },
          { text: '.', why: 'Misses payoff.' }
        ]}
      ]},
      { opener: 'Without hesitation,', slots: [
        { role: 'Who', options: [
          { text: 'Rowan', correct: true },
          { text: 'he', why: 'Repetition slows the rhythm.' },
          { text: 'a man', why: 'Vague.' }
        ]},
        { role: 'Decisive verb', options: [
          { text: 'spoke', correct: true },
          { text: 'said', why: 'Filter verb.' },
          { text: 'told', why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the answer his grandmother taught him', correct: true },
          { text: 'something smart', why: 'Vague.' },
          { text: 'words really well', why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and the bridge blazed open in an arch of starlight.', correct: true },
          { text: ', and he was glad.', why: 'Tells the emotion.' },
          { text: '.', why: 'Misses payoff.' }
        ]}
      ]}
    ]
  },

  {
    id: 'wizard-trial', topic: 'fantasy', level: 2,
    title: "The Wizard's Trial",
    context: 'An apprentice faces three magical doors in the tower of the High Wizard.',
    sentences: [
      { opener: 'At the top of the spiral stairs,', slots: [
        { role: 'Who', options: [
          { text: 'Kai', correct: true },
          { text: 'he', why: 'Pronoun — name him first.' },
          { text: 'a boy', why: 'Generic.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'faced', correct: true },
          { text: 'saw', why: 'Filter verb.' },
          { text: 'looked at', why: 'Filter phrase.' }
        ]},
        { role: 'Detail', options: [
          { text: 'three doors carved with living runes', correct: true },
          { text: 'some doors', why: 'Vague.' },
          { text: 'things', why: 'Lazy.' }
        ]},
        { role: 'Closer', options: [
          { text: ' that pulsed in time with his heartbeat.', correct: true },
          { text: ' really brightly.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses image.' }
        ]}
      ]},
      { opener: 'From the chamber beyond,', slots: [
        { role: 'Subject', options: [
          { text: 'the High Wizard\u2019s voice', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'noise', why: 'Generic.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'rolled', correct: true },
          { text: 'said', why: 'Filter verb.' },
          { text: 'came', why: 'Flat.' }
        ]},
        { role: 'Detail', options: [
          { text: 'like thunder wrapped in silk', correct: true },
          { text: 'really loudly', why: 'Tell-adverb.' },
          { text: 'out', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ': "Choose the door that chooses you."', correct: true },
          { text: '.', why: 'Misses dialogue.' },
          { text: ' to him.', why: 'Flat.' }
        ]}
      ]},
      { opener: 'Pressing his palm to the iron,', slots: [
        { role: 'Who', options: [
          { text: 'Kai', correct: true },
          { text: 'he', why: 'Re-naming heightens the moment.' },
          { text: 'a kid', why: 'Vague.' }
        ]},
        { role: 'Magic verb', options: [
          { text: 'felt', correct: true },
          { text: 'thought', why: 'Filter phrase.' },
          { text: 'knew', why: 'Telling.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the middle door grow warm', correct: true },
          { text: 'one get hot', why: 'Pronoun + flat.' },
          { text: 'something', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', while the others bit cold as winter stone.', correct: true },
          { text: ' really fast.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses contrast.' }
        ]}
      ]},
      { opener: 'When he turned the handle,', slots: [
        { role: 'Subject', options: [
          { text: 'the room', correct: true },
          { text: 'it', why: 'Pronoun without antecedent.' },
          { text: 'everything', why: 'Vague.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'flooded', correct: true },
          { text: 'was full of', why: 'Filter phrase.' },
          { text: 'had', why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'with wind that smelled of rain and ink', correct: true },
          { text: 'wind', why: 'Too plain.' },
          { text: 'stuff', why: 'Lazy.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and his unfinished spell leapt alive on the air.', correct: true },
          { text: ' and he was amazed.', why: 'Tells the emotion.' },
          { text: '.', why: 'Misses payoff.' }
        ]}
      ]},
      { opener: 'Behind him,', slots: [
        { role: 'Subject', options: [
          { text: 'the High Wizard', correct: true },
          { text: 'someone', why: 'Vague.' },
          { text: 'a man', why: 'Generic.' }
        ]},
        { role: 'Warm verb', options: [
          { text: 'laughed', correct: true },
          { text: 'said', why: 'Filter verb.' },
          { text: 'smiled', why: 'Telling.' }
        ]},
        { role: 'Detail', options: [
          { text: 'once, deep and pleased', correct: true },
          { text: 'really happily', why: 'Tell-adverb.' },
          { text: 'a lot', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and pressed a silver pin to Kai\u2019s chest: "Apprentice no more."', correct: true },
          { text: ' because he passed.', why: 'Telling.' },
          { text: '.', why: 'Misses payoff.' }
        ]}
      ]}
    ]
  },

  {
    id: 'crown-of-stars', topic: 'fantasy', level: 3,
    title: 'The Crown of Stars',
    context: 'A sky-pirate captain races the moon to claim a crown woven from fallen stars.',
    sentences: [
      { opener: 'As the eclipse swallowed the horizon,', slots: [
        { role: 'Who', options: [
          { text: 'Captain Vesper', correct: true },
          { text: 'she', why: 'Pronoun — name her for grounding.' },
          { text: 'a pirate', why: 'Distancing.' }
        ]},
        { role: 'Bold verb', options: [
          { text: 'hauled', correct: true },
          { text: 'pulled', why: 'Basic.' },
          { text: 'got', why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the sky-sail tight', correct: true },
          { text: 'a rope', why: 'Vague.' },
          { text: 'it', why: 'Pronoun without antecedent.' }
        ]},
        { role: 'Closer', options: [
          { text: ', the rigging singing under her boots.', correct: true },
          { text: ' really hard.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses image.' }
        ]}
      ]},
      { opener: 'Above the cloud sea,', slots: [
        { role: 'Subject', options: [
          { text: 'the Crown of Stars', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'a thing', why: 'Lazy.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'drifted', correct: true },
          { text: 'was', why: 'Filter verb.' },
          { text: 'floated', why: 'Close, but drifted feels fated.' }
        ]},
        { role: 'Detail', options: [
          { text: 'in a halo of pale fire', correct: true },
          { text: 'up there', why: 'Vague.' },
          { text: 'really high', why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', just beyond her grappling hook\u2019s reach.', correct: true },
          { text: ' far away.', why: 'Telling.' },
          { text: '.', why: 'Misses tension.' }
        ]}
      ]},
      { opener: 'Teeth bared against the wind,', slots: [
        { role: 'Who', options: [
          { text: 'Vesper', correct: true },
          { text: 'she', why: 'Pronoun — naming heightens the climax.' },
          { text: 'the captain', why: 'Distancing.' }
        ]},
        { role: 'Power verb', options: [
          { text: 'launched', correct: true },
          { text: 'threw', why: 'Basic.' },
          { text: 'sent', why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'herself along the bow rope', correct: true },
          { text: 'her hook', why: 'Wrong target.' },
          { text: 'into the air', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', boots sparking on the iron sky.', correct: true },
          { text: ' really fast.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses image.' }
        ]}
      ]},
      { opener: 'For one breathless instant,', slots: [
        { role: 'Subject', options: [
          { text: 'her fingers', correct: true },
          { text: 'she', why: 'Wrong subject for the verb.' },
          { text: 'a hand', why: 'Vague.' }
        ]},
        { role: 'Precise verb', options: [
          { text: 'closed', correct: true },
          { text: 'got', why: 'Lazy.' },
          { text: 'grabbed', why: 'Close, but closed feels final.' }
        ]},
        { role: 'Detail', options: [
          { text: 'around the crown\u2019s lowest star', correct: true },
          { text: 'it', why: 'Pronoun.' },
          { text: 'the thing', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and the night shuddered like a struck bell.', correct: true },
          { text: ' really tight.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses payoff.' }
        ]}
      ]},
      { opener: 'When the eclipse broke,', slots: [
        { role: 'Subject', options: [
          { text: 'the crew', correct: true },
          { text: 'everyone', why: 'Vague.' },
          { text: 'people', why: 'Generic.' }
        ]},
        { role: 'Explosive verb', options: [
          { text: 'roared', correct: true },
          { text: 'cheered', why: 'Basic.' },
          { text: 'yelled', why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'her name into the clearing dark', correct: true },
          { text: 'really loudly', why: 'Tell-adverb.' },
          { text: 'a lot', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and Vesper, crown blazing, laughed like lightning finding land.', correct: true },
          { text: ', and she was happy.', why: 'Tells the emotion.' },
          { text: '.', why: 'Misses payoff.' }
        ]}
      ]}
    ]
  },

  {
    id: 'dragon-oath', topic: 'fantasy', level: 3,
    title: "The Dragon's Oath",
    context: 'A rider and her dragon must seal a bond before the volcano wakes.',
    sentences: [
      { opener: 'With ash already sifting from the sky,', slots: [
        { role: 'Who', options: [
          { text: 'Ryn', correct: true },
          { text: 'she', why: 'Pronoun — name her for grounding.' },
          { text: 'a girl', why: 'Generic.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'climbed', correct: true },
          { text: 'went up', why: 'Wordy + flat.' },
          { text: 'walked', why: 'Basic.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the black ridge toward the sleeping crater', correct: true },
          { text: 'the mountain', why: 'Too plain.' },
          { text: 'it', why: 'Pronoun.' }
        ]},
        { role: 'Closer', options: [
          { text: ', her dragon\u2019s shadow wheeling above.', correct: true },
          { text: ' really fast.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses image.' }
        ]}
      ]},
      { opener: 'At the lip of the caldera,', slots: [
        { role: 'Subject', options: [
          { text: 'the dragon', correct: true },
          { text: 'it', why: 'Pronoun — be specific here.' },
          { text: 'something', why: 'Vague.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'landed', correct: true },
          { text: 'came down', why: 'Wordy + flat.' },
          { text: 'was', why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'so close the heat blurred Ryn\u2019s vision', correct: true },
          { text: 'near her', why: 'Vague.' },
          { text: 'really hard', why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', scales gleaming like cooled lava.', correct: true },
          { text: ' and looked cool.', why: 'Telling.' },
          { text: '.', why: 'Misses image.' }
        ]}
      ]},
      { opener: 'Drawing her knife,', slots: [
        { role: 'Who', options: [
          { text: 'Ryn', correct: true },
          { text: 'she', why: 'Re-naming heightens the ritual.' },
          { text: 'a rider', why: 'Distancing.' }
        ]},
        { role: 'Ritual verb', options: [
          { text: 'scored', correct: true },
          { text: 'cut', why: 'Basic.' },
          { text: 'made', why: 'Vague.' }
        ]},
        { role: 'Detail', options: [
          { text: 'a thin line across her palm', correct: true },
          { text: 'her hand', why: 'Too plain.' },
          { text: 'herself', why: 'Wrong target.' }
        ]},
        { role: 'Closer', options: [
          { text: ' and offered it to the smoke.', correct: true },
          { text: ' really carefully.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses ritual.' }
        ]}
      ]},
      { opener: 'The dragon lowered its great head,', slots: [
        { role: 'Subject', options: [
          { text: 'its tongue', correct: true },
          { text: 'it', why: 'Pronoun — name the part.' },
          { text: 'something', why: 'Vague.' }
        ]},
        { role: 'Gentle verb', options: [
          { text: 'touched', correct: true },
          { text: 'licked', why: 'Close, but touched is more solemn.' },
          { text: 'hit', why: 'Wrong tone.' }
        ]},
        { role: 'Detail', options: [
          { text: 'her blood once, deliberate as a seal', correct: true },
          { text: 'her really fast', why: 'Tell-adverb.' },
          { text: 'the cut', why: 'Misses the bond image.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and fire bloomed between them without burning.', correct: true },
          { text: ' and she felt bonded.', why: 'Telling.' },
          { text: '.', why: 'Misses payoff.' }
        ]}
      ]},
      { opener: 'When the mountain groaned awake,', slots: [
        { role: 'Who', options: [
          { text: 'they', correct: true },
          { text: 'Ryn', why: 'The bond is both — plural fits.' },
          { text: 'she', why: 'Excludes the dragon.' }
        ]},
        { role: 'United verb', options: [
          { text: 'rose', correct: true },
          { text: 'went up', why: 'Wordy + flat.' },
          { text: 'flew', why: 'Only half the image.' }
        ]},
        { role: 'Detail', options: [
          { text: 'together into the ash-choked dawn', correct: true },
          { text: 'away quickly', why: "Tell-adverb 'quickly'." },
          { text: 'off', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', oath sealed, the volcano\u2019s fury breaking on their wings.', correct: true },
          { text: ', and they were brave.', why: 'Tells the emotion.' },
          { text: '.', why: 'Misses payoff.' }
        ]}
      ]}
    ]
  },

  /* ============ HORROR ============ */
  {
    id: 'attic-whisper', topic: 'horror', level: 1,
    title: 'The Attic Whisper',
    context: 'A child hears something breathing in the attic on a stormy night.',
    sentences: [
      { opener: 'When the power died,', slots: [
        { role: 'Who', options: [
          { text: 'Ellis', correct: true },
          { text: 'he', why: 'Pronoun — name him first.' },
          { text: 'a boy', why: 'Generic.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'heard', correct: true },
          { text: 'noticed', why: 'Filter verb.' },
          { text: 'thought he heard', why: 'Filter phrase.' }
        ]},
        { role: 'Closer', options: [
          { text: 'a slow drag of nails across the ceiling above his bed.', correct: true },
          { text: 'something scary.', why: 'Vague.' },
          { text: 'a noise really loudly.', why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Clutching a torch,', slots: [
        { role: 'Who', options: [
          { text: 'he', correct: true },
          { text: 'Ellis', why: 'Repetition.' },
          { text: 'a kid', why: 'Vague.' }
        ]},
        { role: 'Careful verb', options: [
          { text: 'crept', correct: true },
          { text: 'walked', why: 'Basic.' },
          { text: 'went', why: 'Lazy.' }
        ]},
        { role: 'Closer', options: [
          { text: 'up the attic ladder, one rung at a time.', correct: true },
          { text: 'upstairs really fast.', why: 'Tell-adverb.' },
          { text: 'to the attic.', why: 'Flat.' }
        ]}
      ]},
      { opener: 'In the slanted dark,', slots: [
        { role: 'Subject', options: [
          { text: 'a heap of covered furniture', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'stuff', why: 'Lazy.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'bulged', correct: true },
          { text: 'was', why: 'Filter verb.' },
          { text: 'moved', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: 'as if something beneath it had just turned over.', correct: true },
          { text: 'a lot.', why: 'Vague.' },
          { text: 'really weirdly.', why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'With his heart in his throat,', slots: [
        { role: 'Who', options: [
          { text: 'Ellis', correct: true },
          { text: 'he', why: 'Re-naming heightens the moment.' },
          { text: 'a boy', why: 'Vague.' }
        ]},
        { role: 'Bold verb', options: [
          { text: 'yanked', correct: true },
          { text: 'pulled', why: 'Basic.' },
          { text: 'took', why: 'Bland.' }
        ]},
        { role: 'Closer', options: [
          { text: 'the sheet away and found only his own winter coat, steaming faintly.', correct: true },
          { text: 'the sheet off really hard.', why: 'Tell-adverb.' },
          { text: 'it.', why: 'Vague.' }
        ]}
      ]},
      { opener: 'Behind him,', slots: [
        { role: 'Subject', options: [
          { text: 'a whisper', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'noise', why: 'Generic.' }
        ]},
        { role: 'Chilling verb', options: [
          { text: 'threaded', correct: true },
          { text: 'said', why: 'Filter verb.' },
          { text: 'came', why: 'Flat.' }
        ]},
        { role: 'Closer', options: [
          { text: 'his name from the open trapdoor below.', correct: true },
          { text: 'really quietly.', why: 'Tell-adverb.' },
          { text: 'something to him.', why: 'Vague.' }
        ]}
      ]}
    ]
  },

  {
    id: 'bus-stop-shadow', topic: 'horror', level: 1,
    title: 'The Bus Stop Shadow',
    context: 'Waiting alone after dark, a girl notices her shadow is one step behind.',
    sentences: [
      { opener: 'Under the flickering streetlamp,', slots: [
        { role: 'Who', options: [
          { text: 'Priya', correct: true },
          { text: 'she', why: 'Pronoun — name her first.' },
          { text: 'a girl', why: 'Generic.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'watched', why: 'Filter verb.' },
          { text: 'saw', why: 'Filter verb.' },
          { text: 'checked', correct: true }
        ]},
        { role: 'Closer', options: [
          { text: 'the road for the late bus.', correct: true },
          { text: 'the street.', why: 'Too plain.' },
          { text: 'everything really hard.', why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'When she glanced at the pavement,', slots: [
        { role: 'Subject', options: [
          { text: 'her shadow', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'it', why: 'Pronoun without antecedent.' }
        ]},
        { role: 'Wrong verb', options: [
          { text: 'lagged', correct: true },
          { text: 'was', why: 'Filter verb.' },
          { text: 'looked', why: 'Filter verb.' }
        ]},
        { role: 'Closer', options: [
          { text: 'one step behind her feet, head tilted the wrong way.', correct: true },
          { text: 'weird.', why: 'Telling.' },
          { text: 'really strange.', why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Swallowing hard,', slots: [
        { role: 'Who', options: [
          { text: 'Priya', correct: true },
          { text: 'she', why: 'Re-naming heightens the moment.' },
          { text: 'a kid', why: 'Vague.' }
        ]},
        { role: 'Test verb', options: [
          { text: 'lifted', correct: true },
          { text: 'put up', why: 'Wordy + flat.' },
          { text: 'raised', why: 'Close, but lifted is sharper.' }
        ]},
        { role: 'Closer', options: [
          { text: 'one hand; the shadow lifted both.', correct: true },
          { text: 'her hand really slowly.', why: 'Tell-adverb.' },
          { text: 'a hand.', why: 'Incomplete.' }
        ]}
      ]},
      { opener: 'Down the lane,', slots: [
        { role: 'Subject', options: [
          { text: 'headlights', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'a bus', why: 'Assumes too much.' }
        ]},
        { role: 'Relief verb', options: [
          { text: 'swept', correct: true },
          { text: 'came', why: 'Flat.' },
          { text: 'appeared', why: 'Filter verb.' }
        ]},
        { role: 'Closer', options: [
          { text: 'around the corner, painting her true shadow at her heels.', correct: true },
          { text: 'into view really fast.', why: 'Tell-adverb.' },
          { text: 'there.', why: 'Vague.' }
        ]}
      ]},
      { opener: 'As she boarded,', slots: [
        { role: 'Who', options: [
          { text: 'she', correct: true },
          { text: 'Priya', why: 'Pronoun keeps it flowing.' },
          { text: 'the girl', why: 'Distancing.' }
        ]},
        { role: 'Glance verb', options: [
          { text: 'risked', correct: true },
          { text: 'looked', why: 'Filter verb.' },
          { text: 'saw', why: 'Filter verb.' }
        ]},
        { role: 'Closer', options: [
          { text: 'one last look at the shelter, where a second silhouette still waited.', correct: true },
          { text: 'back and felt scared.', why: 'Telling.' },
          { text: 'outside.', why: 'Flat.' }
        ]}
      ]}
    ]
  },

  {
    id: 'mirror-hall', topic: 'horror', level: 2,
    title: 'The Mirror Hall',
    context: 'A museum guard walks a corridor of antique mirrors after closing time.',
    sentences: [
      { opener: 'With the keys still chiming in his pocket,', slots: [
        { role: 'Who', options: [
          { text: 'Marco', correct: true },
          { text: 'he', why: 'Pronoun — name him for grounding.' },
          { text: 'a guard', why: 'Distancing.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'paced', correct: true },
          { text: 'walked', why: 'Basic.' },
          { text: 'went', why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the mirror hall', correct: true },
          { text: 'down it', why: 'Vague.' },
          { text: 'the place', why: 'Generic.' }
        ]},
        { role: 'Closer', options: [
          { text: ', boots loud in the sudden silence.', correct: true },
          { text: ' really quickly.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses image.' }
        ]}
      ]},
      { opener: 'In the first glass panel,', slots: [
        { role: 'Subject', options: [
          { text: 'his reflection', correct: true },
          { text: 'he', why: 'Wrong subject.' },
          { text: 'something', why: 'Vague.' }
        ]},
        { role: 'Wrong verb', options: [
          { text: 'waved', correct: true },
          { text: 'was', why: 'Filter verb.' },
          { text: 'moved', why: 'Vague.' }
        ]},
        { role: 'Detail', options: [
          { text: 'a second after he did', correct: true },
          { text: 'at him', why: 'Flat.' },
          { text: 'really slowly', why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', fingers curling in a shape he did not know.', correct: true },
          { text: ' and looked scary.', why: 'Telling.' },
          { text: '.', why: 'Misses payoff.' }
        ]}
      ]},
      { opener: 'Trying not to run,', slots: [
        { role: 'Who', options: [
          { text: 'Marco', correct: true },
          { text: 'he', why: 'Re-naming heightens the moment.' },
          { text: 'a man', why: 'Vague.' }
        ]},
        { role: 'Counting verb', options: [
          { text: 'marked', correct: true },
          { text: 'looked at', why: 'Filter phrase.' },
          { text: 'saw', why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'each mirror as he passed', correct: true },
          { text: 'them all', why: 'Vague.' },
          { text: 'the mirrors', why: 'Misses the ritual tension.' }
        ]},
        { role: 'Closer', options: [
          { text: ', whispering, "Not real, not real."', correct: true },
          { text: ' and felt scared.', why: 'Telling.' },
          { text: '.', why: 'Misses coping detail.' }
        ]}
      ]},
      { opener: 'At the hall\u2019s end,', slots: [
        { role: 'Subject', options: [
          { text: 'the largest mirror', correct: true },
          { text: 'one', why: 'Vague.' },
          { text: 'it', why: 'Pronoun.' }
        ]},
        { role: 'Chilling verb', options: [
          { text: 'held', correct: true },
          { text: 'showed', why: 'Filter verb.' },
          { text: 'had', why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'an empty corridor behind him', correct: true },
          { text: 'nothing', why: 'Too plain.' },
          { text: 'him', why: 'Wrong image.' }
        ]},
        { role: 'Closer', options: [
          { text: ' while his own back faced the glass.', correct: true },
          { text: ' really clearly.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses paradox.' }
        ]}
      ]},
      { opener: 'When he finally reached the exit,', slots: [
        { role: 'Subject', options: [
          { text: 'every mirror', correct: true },
          { text: 'they', why: 'Pronoun without clear antecedent.' },
          { text: 'everything', why: 'Vague.' }
        ]},
        { role: 'Power verb', options: [
          { text: 'showed', correct: true },
          { text: 'was', why: 'Filter verb.' },
          { text: 'had', why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'him still walking the hall', correct: true },
          { text: 'something bad', why: 'Vague.' },
          { text: 'a monster', why: 'Too on-the-nose.' }
        ]},
        { role: 'Closer', options: [
          { text: ', forever one step from the door.', correct: true },
          { text: ' and he was trapped.', why: 'Telling.' },
          { text: '.', why: 'Misses payoff.' }
        ]}
      ]}
    ]
  },

  {
    id: 'basement-steps', topic: 'horror', level: 2,
    title: 'The Basement Steps',
    context: 'A girl goes down to reset a tripped fuse and finds wet footprints ascending.',
    sentences: [
      { opener: 'When the lights guttered out,', slots: [
        { role: 'Who', options: [
          { text: 'Hana', correct: true },
          { text: 'she', why: 'Pronoun — name her for grounding.' },
          { text: 'a girl', why: 'Generic.' }
        ]},
        { role: 'Practical verb', options: [
          { text: 'snatched', correct: true },
          { text: 'got', why: 'Lazy.' },
          { text: 'took', why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the torch from the kitchen drawer', correct: true },
          { text: 'a light', why: 'Vague.' },
          { text: 'it', why: 'Pronoun.' }
        ]},
        { role: 'Closer', options: [
          { text: ' and started down the basement stairs.', correct: true },
          { text: ' really fast.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses action.' }
        ]}
      ]},
      { opener: 'Halfway down,', slots: [
        { role: 'Subject', options: [
          { text: 'the air', correct: true },
          { text: 'it', why: 'Pronoun without antecedent.' },
          { text: 'everything', why: 'Vague.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'turned', correct: true },
          { text: 'was', why: 'Filter verb.' },
          { text: 'got', why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'cold enough to sting her teeth', correct: true },
          { text: 'really cold', why: 'Tell-adverb.' },
          { text: 'bad', why: 'Telling.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and the torch beam shook in her grip.', correct: true },
          { text: ' a lot.', why: 'Vague.' },
          { text: '.', why: 'Misses body detail.' }
        ]}
      ]},
      { opener: 'On the concrete floor,', slots: [
        { role: 'Subject', options: [
          { text: 'wet footprints', correct: true },
          { text: 'marks', why: 'Generic.' },
          { text: 'something', why: 'Vague.' }
        ]},
        { role: 'Wrong verb', options: [
          { text: 'climbed', correct: true },
          { text: 'were', why: 'Filter verb.' },
          { text: 'went', why: 'Vague.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the steps toward her', correct: true },
          { text: 'upstairs', why: 'Too plain.' },
          { text: 'away', why: 'Wrong direction.' }
        ]},
        { role: 'Closer', options: [
          { text: ', each print filling with dark water.', correct: true },
          { text: ' really clearly.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses image.' }
        ]}
      ]},
      { opener: 'Above her head,', slots: [
        { role: 'Subject', options: [
          { text: 'a floorboard', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'it', why: 'Pronoun.' }
        ]},
        { role: 'Sound verb', options: [
          { text: 'groaned', correct: true },
          { text: 'made noise', why: 'Wordy + bland.' },
          { text: 'creaked', why: 'Close, but groaned is heavier.' }
        ]},
        { role: 'Detail', options: [
          { text: 'under a weight that was not hers', correct: true },
          { text: 'really loudly', why: 'Tell-adverb.' },
          { text: 'a lot', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', dust drifting into the beam.', correct: true },
          { text: ' and she got scared.', why: 'Telling.' },
          { text: '.', why: 'Misses image.' }
        ]}
      ]},
      { opener: 'When she reached the fuse box,', slots: [
        { role: 'Who', options: [
          { text: 'Hana', correct: true },
          { text: 'she', why: 'Re-naming for the snap.' },
          { text: 'a kid', why: 'Vague.' }
        ]},
        { role: 'Sharp verb', options: [
          { text: 'slammed', correct: true },
          { text: 'pushed', why: 'Basic.' },
          { text: 'hit', why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the switch up', correct: true },
          { text: 'it', why: 'Pronoun.' },
          { text: 'the thing', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ' and the lights blazed on over empty, drying steps.', correct: true },
          { text: ' and felt better.', why: 'Telling.' },
          { text: '.', why: 'Misses payoff.' }
        ]}
      ]}
    ]
  },

  {
    id: 'last-lantern', topic: 'horror', level: 3,
    title: 'The Last Lantern',
    context: 'A lantern-bearer must cross a fog-choked village before the lights go out forever.',
    sentences: [
      { opener: 'As the fog swallowed the lane,', slots: [
        { role: 'Who', options: [
          { text: 'Old Marta', correct: true },
          { text: 'she', why: 'Pronoun — name her for grounding.' },
          { text: 'a woman', why: 'Distancing.' }
        ]},
        { role: 'Urgent verb', options: [
          { text: 'lifted', correct: true },
          { text: 'held up', why: 'Wordy + flat.' },
          { text: 'carried', why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the last working lantern in the village', correct: true },
          { text: 'a light', why: 'Vague.' },
          { text: 'it', why: 'Pronoun.' }
        ]},
        { role: 'Closer', options: [
          { text: ', its flame thin as a thread.', correct: true },
          { text: ' really high.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses image.' }
        ]}
      ]},
      { opener: 'Behind her,', slots: [
        { role: 'Subject', options: [
          { text: 'door after door', correct: true },
          { text: 'houses', why: 'Generic.' },
          { text: 'things', why: 'Lazy.' }
        ]},
        { role: 'Dark verb', options: [
          { text: 'clicked', correct: true },
          { text: 'shut', why: 'Bland.' },
          { text: 'closed', why: 'Basic.' }
        ]},
        { role: 'Detail', options: [
          { text: 'shut without a hand touching them', correct: true },
          { text: 'really fast', why: 'Tell-adverb.' },
          { text: 'all', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', as if the street itself were holding its breath.', correct: true },
          { text: ' and she was scared.', why: 'Telling.' },
          { text: '.', why: 'Misses image.' }
        ]}
      ]},
      { opener: 'Ahead in the whiteness,', slots: [
        { role: 'Subject', options: [
          { text: 'figures', correct: true },
          { text: 'people', why: 'Too ordinary.' },
          { text: 'something', why: 'Vague.' }
        ]},
        { role: 'Haunting verb', options: [
          { text: 'gathered', correct: true },
          { text: 'were', why: 'Filter verb.' },
          { text: 'stood', why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'without faces, hungry for her light', correct: true },
          { text: 'in the fog', why: 'Too plain.' },
          { text: 'really close', why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', boots scraping stone they never touched.', correct: true },
          { text: ' and looked scary.', why: 'Telling.' },
          { text: '.', why: 'Misses sensory detail.' }
        ]}
      ]},
      { opener: 'Shielding the flame with her body,', slots: [
        { role: 'Who', options: [
          { text: 'Marta', correct: true },
          { text: 'she', why: 'Pronoun — naming heightens the climax.' },
          { text: 'the woman', why: 'Distancing.' }
        ]},
        { role: 'Brave verb', options: [
          { text: 'ran', correct: true },
          { text: 'went', why: 'Lazy.' },
          { text: 'moved', why: 'Vague.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the last fifty metres to the chapel', correct: true },
          { text: 'there', why: 'Vague.' },
          { text: 'really fast', why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', each breath a knife in her chest.', correct: true },
          { text: ' as fast as she could.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses body detail.' }
        ]}
      ]},
      { opener: 'When she burst through the chapel doors,', slots: [
        { role: 'Subject', options: [
          { text: 'the lantern', correct: true },
          { text: 'it', why: 'Pronoun — focus the object.' },
          { text: 'fire', why: 'Generic.' }
        ]},
        { role: 'Final verb', options: [
          { text: 'flared', correct: true },
          { text: 'got bright', why: 'Tell-adverb phrase.' },
          { text: 'was', why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'once, gold and furious', correct: true },
          { text: 'really brightly', why: 'Tell-adverb.' },
          { text: 'a lot', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and the fog outside thinned like a startled breath.', correct: true },
          { text: ', and everyone was safe.', why: 'Telling.' },
          { text: '.', why: 'Misses payoff.' }
        ]}
      ]}
    ]
  },

  {
    id: 'locked-graveyard', topic: 'horror', level: 3,
    title: 'The Locked Graveyard',
    context: 'A boy finds the cemetery gate open on a night it should be sealed.',
    sentences: [
      { opener: 'Though the town bell had rung curfew,', slots: [
        { role: 'Who', options: [
          { text: 'Felix', correct: true },
          { text: 'he', why: 'Pronoun — name him for grounding.' },
          { text: 'a boy', why: 'Generic.' }
        ]},
        { role: 'Drawn verb', options: [
          { text: 'drifted', correct: true },
          { text: 'walked', why: 'Basic.' },
          { text: 'went', why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'to the iron cemetery gate', correct: true },
          { text: 'outside', why: 'Vague.' },
          { text: 'there', why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', drawn by a tune only he could hear.', correct: true },
          { text: ' really slowly.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses hook.' }
        ]}
      ]},
      { opener: 'Under the moon,', slots: [
        { role: 'Subject', options: [
          { text: 'the gate', correct: true },
          { text: 'it', why: 'Pronoun without antecedent.' },
          { text: 'something', why: 'Vague.' }
        ]},
        { role: 'Wrong verb', options: [
          { text: 'stood', correct: true },
          { text: 'was', why: 'Filter verb.' },
          { text: 'hung', why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'ajar, lock snapped but unrusted', correct: true },
          { text: 'open', why: 'Too plain.' },
          { text: 'broken', why: 'Misses the uncanny detail.' }
        ]},
        { role: 'Closer', options: [
          { text: ', as if opened from the inside.', correct: true },
          { text: ' really wide.', why: 'Tell-adverb.' },
          { text: '.', why: 'Misses implication.' }
        ]}
      ]},
      { opener: 'Between the leaning stones,', slots: [
        { role: 'Subject', options: [
          { text: 'candles', correct: true },
          { text: 'lights', why: 'Generic.' },
          { text: 'things', why: 'Lazy.' }
        ]},
        { role: 'Ghost verb', options: [
          { text: 'bloomed', correct: true },
          { text: 'were', why: 'Filter verb.' },
          { text: 'appeared', why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'one after another', correct: true },
          { text: 'everywhere', why: 'Vague.' },
          { text: 'really fast', why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', though no flame cast a shadow.', correct: true },
          { text: ' and looked spooky.', why: 'Telling.' },
          { text: '.', why: 'Misses rule-break.' }
        ]}
      ]},
      { opener: 'At the newest grave,', slots: [
        { role: 'Who', options: [
          { text: 'Felix', correct: true },
          { text: 'he', why: 'Re-naming heightens the moment.' },
          { text: 'a kid', why: 'Vague.' }
        ]},
        { role: 'Quiet verb', options: [
          { text: 'recognized', correct: true },
          { text: 'saw', why: 'Filter verb.' },
          { text: 'knew', why: 'Telling.' }
        ]},
        { role: 'Detail', options: [
          { text: 'his own name carved fresh in the stone', correct: true },
          { text: 'writing', why: 'Vague.' },
          { text: 'his name', why: 'Misses the fresh-carved chill.' }
        ]},
        { role: 'Closer', options: [
          { text: ', the date set to tomorrow.', correct: true },
          { text: ' and got scared.', why: 'Telling.' },
          { text: '.', why: 'Misses payoff.' }
        ]}
      ]},
      { opener: 'When he stumbled back to the gate,', slots: [
        { role: 'Subject', options: [
          { text: 'the tune', correct: true },
          { text: 'it', why: 'Pronoun without antecedent.' },
          { text: 'music', why: 'Generic.' }
        ]},
        { role: 'Final verb', options: [
          { text: 'followed', correct: true },
          { text: 'was', why: 'Filter verb.' },
          { text: 'came', why: 'Flat.' }
        ]},
        { role: 'Detail', options: [
          { text: 'him into the sleeping street', correct: true },
          { text: 'behind', why: 'Too plain.' },
          { text: 'really closely', why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and the lock clicked shut on its own behind him.', correct: true },
          { text: ', and he was safe.', why: 'Undercuts the dread.' },
          { text: '.', why: 'Misses payoff.' }
        ]}
      ]}
    ]
  }
];

if (typeof STORIES !== 'undefined' && Array.isArray(STORIES)) {
  STORIES.push.apply(STORIES, EXTRA_STORIES);
}
