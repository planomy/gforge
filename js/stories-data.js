/* Granny Boom — story templates (TOPICS + STORIES). Loaded before index.html game script. */
/* --------------------- STORY CONTENT --------------------- */
/* Data shape:
   { id, topic, level (1-3), title, context,
     sentences: [
       { opener: "Fixed phrase,", slots: [
           { role: 'role label', options: [
             { text: 'CORRECT', correct: true },
             { text: 'distractor', why: 'one-line teaching tip' }, ...
           ] }, ...
       ] }, ...
     ]
   }
   When assembled: opener + ' ' + slot1.text + ' ' + slot2.text + ' ' + ... + '.'
   The LAST slot of each sentence includes the trailing punctuation.
*/

const TOPICS = [
  { id: 'sport',     name: 'Sport',     emoji: '⚽' },
  { id: 'adventure', name: 'Adventure', emoji: '🗺️' },
  { id: 'mystery',   name: 'Mystery',   emoji: '🔍' },
  { id: 'scifi',     name: 'Sci-Fi',    emoji: '🚀' },
  { id: 'fantasy',   name: 'Fantasy',   emoji: '🐉' },
  { id: 'horror',    name: 'Horror',    emoji: '🦇' }
];

const STORIES = [
  /* ============ SPORT ============ */
  {
    id: 'final-shot', topic: 'sport', level: 1,
    title: 'The Final Shot',
    context: 'Final seconds of the basketball championship — one shot to win.',
    sentences: [
      { opener: 'As the final buzzer drew closer,', slots: [
        { role: 'Who is this about?', options: [
          { text: 'Marcus', correct: true },
          { text: 'he',     why: 'Pronoun — name him to ground the scene.' },
          { text: 'the boy',why: 'Too vague — give him a name.' }
        ]},
        { role: 'Action verb', options: [
          { text: 'clutched', correct: true },
          { text: 'held',     why: 'Bland — pick a verb that shows tension.' },
          { text: 'had',      why: 'Filter verb — what was he DOING with it?' }
        ]},
        { role: 'Sensory detail', options: [
          { text: 'the ball with trembling fingers.', correct: true },
          { text: 'the ball tightly.',                 why: "'Tightly' tells — show how it felt." },
          { text: 'the ball.',                          why: 'No detail — add a sensory image.' }
        ]}
      ]},
      { opener: 'With sweat dripping from his brow,', slots: [
        { role: 'Who', options: [
          { text: 'he', correct: true },
          { text: 'Marcus', why: 'You already named him — pronoun keeps it flowing.' },
          { text: 'the player', why: 'Vague after you have already named him.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'scanned', correct: true },
          { text: 'looked at', why: "'Looked at' is a filter — show the searching." },
          { text: 'watched',   why: 'Filter verb — distances the reader.' }
        ]},
        { role: 'Specific detail', options: [
          { text: 'the defenders for an opening.', correct: true },
          { text: 'the team quickly.',             why: "Wrong target + tell-adverb 'quickly'." },
          { text: 'the others.',                    why: 'Too vague — name what he saw.' }
        ]}
      ]},
      { opener: 'Without warning,', slots: [
        { role: 'Who', options: [
          { text: 'he', correct: true },
          { text: 'Marcus', why: 'Repeating his name slows it down here.' },
          { text: 'the boy', why: 'Vague + repetitive.' }
        ]},
        { role: 'Power verb', options: [
          { text: 'darted', correct: true },
          { text: 'ran',    why: 'Basic verb — pick something sharper.' },
          { text: 'went',   why: 'Lazy verb — what did he actually do?' }
        ]},
        { role: 'Decisive action', options: [
          { text: 'left and launched a desperate shot.', correct: true },
          { text: 'left and threw the ball.',            why: 'Bland — match the drama of the moment.' },
          { text: 'sideways quickly.',                    why: "Vague direction + tell-adverb 'quickly'." }
        ]}
      ]},
      { opener: 'Spinning through the air,', slots: [
        { role: 'Subject', options: [
          { text: 'the ball', correct: true },
          { text: 'it',       why: 'Pronoun — be specific here to focus attention.' },
          { text: 'the thing', why: 'Vague — name what is flying.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'kissed', correct: true },
          { text: 'hit',    why: 'Basic — try something more poetic.' },
          { text: 'touched', why: 'Bland — pick a verb with feeling.' }
        ]},
        { role: 'Closing image', options: [
          { text: 'the rim before swishing through the net.', correct: true },
          { text: 'the basket.',                               why: 'No drama — extend the moment.' },
          { text: 'it loudly.',                                why: "Pronoun + tell-adverb 'loudly'." }
        ]}
      ]},
      { opener: 'When the ball dropped through the hoop,', slots: [
        { role: 'Subject', options: [
          { text: 'the crowd', correct: true },
          { text: 'everyone', why: 'Vague — name the source of the noise.' },
          { text: 'people',   why: 'Generic — be specific.' }
        ]},
        { role: 'Explosive verb', options: [
          { text: 'erupted', correct: true },
          { text: 'cheered', why: 'Basic — pick a verb that explodes off the page.' },
          { text: 'yelled',  why: 'Bland — match the scale of the moment.' }
        ]},
        { role: 'Sensory closer', options: [
          { text: 'into a roar that shook the gymnasium.', correct: true },
          { text: 'really loudly.',                         why: 'Two intensifiers, no image.' },
          { text: 'because they were happy.',               why: 'Tells the emotion — show it instead.' }
        ]}
      ]}
    ]
  },

  {
    id: 'wipeout', topic: 'sport', level: 1,
    title: 'The Wipeout',
    context: 'A young surfer paddles out into a huge swell.',
    sentences: [
      { opener: 'Paddling hard against the swell,', slots: [
        { role: 'Who', options: [
          { text: 'Kai', correct: true },
          { text: 'he',  why: 'Pronoun — name him so we care.' },
          { text: 'a boy', why: 'Generic — give him identity.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'charged', correct: true },
          { text: 'went',    why: 'Lazy verb — replace with something powerful.' },
          { text: 'paddled', why: 'Already used in opener — repetition.' }
        ]},
        { role: 'Sensory detail', options: [
          { text: 'toward the rolling wall of water.', correct: true },
          { text: 'into the sea.',                      why: 'Flat — paint the picture.' },
          { text: 'out fast.',                          why: "Tell-adverb 'fast'." }
        ]}
      ]},
      { opener: 'Rising up the steep face,', slots: [
        { role: 'Subject', options: [
          { text: 'the board', correct: true },
          { text: 'it', why: 'Pronoun where we need clarity.' },
          { text: 'his thing', why: 'Vague — be specific.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'shuddered', correct: true },
          { text: 'shook',     why: 'Basic — choose a verb with texture.' },
          { text: 'moved',     why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'beneath his shaking knees.', correct: true },
          { text: 'a lot.',                      why: 'Vague — add a sensory image.' },
          { text: 'fast.',                       why: "Tell-adverb." }
        ]}
      ]},
      { opener: 'For one frozen second,', slots: [
        { role: 'Who', options: [
          { text: 'Kai', correct: true },
          { text: 'he', why: 'Repeating his name re-grounds the moment.' },
          { text: 'a boy', why: 'Vague after he was named.' }
        ]},
        { role: 'Powerful verb', options: [
          { text: 'hovered', correct: true },
          { text: 'stood',   why: 'Bland — show the suspension.' },
          { text: 'stayed',  why: 'Flat verb.' }
        ]},
        { role: 'Image', options: [
          { text: 'at the lip of the giant wave.', correct: true },
          { text: 'on his board.',                  why: 'Obvious — give us awe.' },
          { text: 'still.',                          why: 'Tell-word.' }
        ]}
      ]},
      { opener: 'Then, with a crashing roar,', slots: [
        { role: 'Subject', options: [
          { text: 'the wave', correct: true },
          { text: 'it', why: 'Pronoun — name the force.' },
          { text: 'water', why: 'Generic.' }
        ]},
        { role: 'Powerhouse verb', options: [
          { text: 'collapsed', correct: true },
          { text: 'fell',      why: 'Basic.' },
          { text: 'came down', why: 'Wordy + bland.' }
        ]},
        { role: 'Impact detail', options: [
          { text: 'onto him in a thunder of foam.', correct: true },
          { text: 'on his head.',                    why: 'No drama.' },
          { text: 'really loudly.',                  why: 'Telling — show the chaos.' }
        ]}
      ]},
      { opener: 'When he finally surfaced,', slots: [
        { role: 'Who', options: [
          { text: 'Kai', correct: true },
          { text: 'he', why: 'Name re-anchors after the chaos.' },
          { text: 'the boy', why: 'Vague.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'gasped', correct: true },
          { text: 'breathed', why: 'Bland.' },
          { text: 'said',     why: 'Wrong verb — he is not speaking.' }
        ]},
        { role: 'Closing image', options: [
          { text: 'salty laughter, already paddling back out.', correct: true },
          { text: 'because he was happy.', why: 'Telling — show the joy.' },
          { text: 'a lot.', why: 'Vague.' }
        ]}
      ]}
    ]
  },

  {
    id: 'tackle', topic: 'sport', level: 2,
    title: 'The Tackle',
    context: "The defender has one last chance to save the match.",
    sentences: [
      { opener: 'As the striker bore down on goal,', slots: [
        { role: 'Who', options: [
          { text: 'Jordan', correct: true },
          { text: 'the defender', why: 'Less personal — name him.' },
          { text: 'he',           why: 'Pronoun — needs grounding.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'launched', correct: true },
          { text: 'ran',      why: 'Basic.' },
          { text: 'started',  why: 'Vague — what did he actually do?' }
        ]},
        { role: 'Direction', options: [
          { text: 'into a full-stretch chase', correct: true },
          { text: 'over to him quickly',       why: "Vague + tell-adverb 'quickly'." },
          { text: 'toward the action',         why: 'Generic — be specific.' }
        ]},
        { role: 'Sensory detail', options: [
          { text: ', his boots ripping up the turf.', correct: true },
          { text: ' really fast.',                      why: 'Telling, no image.' },
          { text: '.',                                   why: 'No detail at all.' }
        ]}
      ]},
      { opener: 'Closing the gap with every stride,', slots: [
        { role: 'Who', options: [
          { text: 'he', correct: true },
          { text: 'Jordan', why: 'Repetition slows the pace.' },
          { text: 'the boy', why: 'Vague.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'felt', correct: true },
          { text: 'noticed', why: 'Filter — show it directly.' },
          { text: 'thought about', why: 'Filter phrase.' }
        ]},
        { role: 'Specific image', options: [
          { text: 'his lungs burning', correct: true },
          { text: 'tired',             why: 'Telling — show the body.' },
          { text: 'pain',              why: 'Vague.' }
        ]},
        { role: 'Closing detail', options: [
          { text: ' and the goal looming behind the striker.', correct: true },
          { text: ' a lot.',                                     why: 'Vague.' },
          { text: ' really hard.',                               why: 'Telling.' }
        ]}
      ]},
      { opener: 'At the last possible moment,', slots: [
        { role: 'Who', options: [
          { text: 'Jordan', correct: true },
          { text: 'he', why: 'Re-naming heightens the moment.' },
          { text: 'a boy', why: 'Vague.' }
        ]},
        { role: 'Decisive verb', options: [
          { text: 'lunged', correct: true },
          { text: 'jumped', why: 'Basic.' },
          { text: 'went',   why: 'Lazy verb.' }
        ]},
        { role: 'Body detail', options: [
          { text: 'sideways, leg stretched like a snapped wire', correct: true },
          { text: 'fast',                                          why: 'Tell-adverb, no image.' },
          { text: 'a long way',                                    why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and clipped the ball away from danger.', correct: true },
          { text: '.',                                          why: 'Anticlimactic — finish the action.' },
          { text: ' really well.',                              why: 'Telling.' }
        ]}
      ]},
      { opener: 'Skidding across the grass,', slots: [
        { role: 'Who', options: [
          { text: 'he', correct: true },
          { text: 'Jordan', why: 'Pronoun keeps it flowing.' },
          { text: 'the player', why: 'Distancing.' }
        ]},
        { role: 'Power verb', options: [
          { text: 'crashed', correct: true },
          { text: 'fell',    why: 'Basic.' },
          { text: 'landed',  why: 'Bland.' }
        ]},
        { role: 'Impact detail', options: [
          { text: 'into the post with a sickening thud', correct: true },
          { text: 'on the ground',                        why: 'Too obvious.' },
          { text: 'somewhere',                            why: 'Vague.' }
        ]},
        { role: 'Sensory closer', options: [
          { text: ', the breath punched from his chest.', correct: true },
          { text: ' really hard.',                         why: 'Telling.' },
          { text: ' and got hurt.',                         why: 'Tells, never shows.' }
        ]}
      ]},
      { opener: 'When the referee blew full-time,', slots: [
        { role: 'Subject', options: [
          { text: 'the stadium', correct: true },
          { text: 'everyone',    why: 'Vague.' },
          { text: 'people',      why: 'Generic.' }
        ]},
        { role: 'Explosive verb', options: [
          { text: 'shook', correct: true },
          { text: 'cheered', why: 'Basic — match the scale.' },
          { text: 'made noise', why: 'Wordy + bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'with the chant of his name', correct: true },
          { text: 'really loudly',               why: 'Telling.' },
          { text: 'a lot',                       why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and Jordan, mud-streaked, raised one shaking fist.', correct: true },
          { text: ', and he was happy.',                                    why: 'Telling — show the joy.' },
          { text: '.',                                                       why: 'Misses the emotional payoff.' }
        ]}
      ]}
    ]
  },

  {
    id: 'sprint', topic: 'sport', level: 2,
    title: 'The Sprint',
    context: 'A late comeback in the 100-metre final.',
    sentences: [
      { opener: 'Crouched in the starting blocks,', slots: [
        { role: 'Who', options: [
          { text: 'Tia', correct: true },
          { text: 'she', why: 'Pronoun — name her first.' },
          { text: 'the runner', why: 'Distancing.' }
        ]},
        { role: 'Body detail verb', options: [
          { text: 'pressed', correct: true },
          { text: 'put',     why: 'Lazy verb.' },
          { text: 'placed',  why: 'Bland.' }
        ]},
        { role: 'Specific detail', options: [
          { text: 'her fingertips into the rubber track', correct: true },
          { text: 'her hands down',                        why: 'Generic.' },
          { text: 'them there',                            why: 'Pronoun soup.' }
        ]},
        { role: 'Sensory closer', options: [
          { text: 'and waited for the gun.', correct: true },
          { text: 'really tightly.',          why: 'Tell-adverb.' },
          { text: 'for the race.',             why: 'Obvious.' }
        ]}
      ]},
      { opener: 'At the crack of the starter,', slots: [
        { role: 'Subject', options: [
          { text: 'she', correct: true },
          { text: 'Tia', why: 'Re-naming pushes the pace.' },
          { text: 'a girl', why: 'Generic + repetitive.' }
        ]},
        { role: 'Explosive verb', options: [
          { text: 'exploded', correct: true },
          { text: 'ran',      why: 'Basic — choose something violent.' },
          { text: 'went',     why: 'Lazy verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'from the blocks like a snapped trap', correct: true },
          { text: 'forward fast',                         why: 'Tell-adverb.' },
          { text: 'out',                                   why: 'Vague.' }
        ]},
        { role: 'Image closer', options: [
          { text: ', her ponytail whipping behind her.', correct: true },
          { text: ' really quickly.',                      why: 'Telling.' },
          { text: '.',                                      why: 'Misses the image.' }
        ]}
      ]},
      { opener: 'Halfway down the track,', slots: [
        { role: 'Who', options: [
          { text: 'Tia', correct: true },
          { text: 'she', why: 'Re-grounding her with name works here.' },
          { text: 'the girl', why: 'Vague.' }
        ]},
        { role: 'Filter-free verb', options: [
          { text: 'caught', correct: true },
          { text: 'saw',    why: "'Saw' is a filter — show the catching." },
          { text: 'looked at', why: 'Filter phrase.' }
        ]},
        { role: 'Specific image', options: [
          { text: 'a flash of red in her peripheral vision', correct: true },
          { text: 'someone next to her',                      why: 'Vague.' },
          { text: 'a person',                                  why: 'Generic.' }
        ]},
        { role: 'Closer', options: [
          { text: ' — the leader, drawing alongside.', correct: true },
          { text: ' and ran faster.',                    why: 'Telling, not showing.' },
          { text: '.',                                    why: 'Anticlimax.' }
        ]}
      ]},
      { opener: 'Driving her arms like pistons,', slots: [
        { role: 'Who', options: [
          { text: 'she', correct: true },
          { text: 'Tia', why: 'Pronoun keeps the rhythm of action.' },
          { text: 'the athlete', why: 'Clinical.' }
        ]},
        { role: 'Powerful verb', options: [
          { text: 'tore', correct: true },
          { text: 'ran',  why: 'Basic.' },
          { text: 'moved', why: 'Vague.' }
        ]},
        { role: 'Detail', options: [
          { text: 'past the leader in three savage strides', correct: true },
          { text: 'really fast',                              why: 'Tell-adverb.' },
          { text: 'a bit ahead',                              why: 'Vague.' }
        ]},
        { role: 'Sensory closer', options: [
          { text: ', the finish line burning toward her.', correct: true },
          { text: ' quickly.',                                why: 'Tell-adverb.' },
          { text: '.',                                         why: 'No payoff.' }
        ]}
      ]},
      { opener: 'When her chest broke the tape,', slots: [
        { role: 'Subject', options: [
          { text: 'the stand', correct: true },
          { text: 'everyone',  why: 'Vague.' },
          { text: 'people',    why: 'Generic.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'roared', correct: true },
          { text: 'cheered', why: 'Basic.' },
          { text: 'shouted', why: 'Bland.' }
        ]},
        { role: 'Image', options: [
          { text: 'into a single deafening wave', correct: true },
          { text: 'really loudly',                why: 'Telling.' },
          { text: 'a lot',                        why: 'Vague.' }
        ]},
        { role: 'Emotional closer', options: [
          { text: ', and Tia dropped to her knees, laughing through her tears.', correct: true },
          { text: ', and she was happy.', why: 'Tells the emotion.' },
          { text: '.', why: 'Misses the moment.' }
        ]}
      ]}
    ]
  },

  {
    id: 'last-wicket', topic: 'sport', level: 3,
    title: 'The Last Wicket',
    context: 'A cricket final — one ball, one wicket, to win.',
    sentences: [
      { opener: 'Polishing the cherry-red ball against his thigh,', slots: [
        { role: 'Who', options: [
          { text: 'Sam', correct: true },
          { text: 'he', why: 'Pronoun — name him for the opener.' },
          { text: 'the bowler', why: 'Clinical and distancing.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'studied', correct: true },
          { text: 'looked at', why: "'Looked at' — pure filter." },
          { text: 'watched',   why: 'Filter verb.' }
        ]},
        { role: 'Specific target', options: [
          { text: 'the cracked patch of pitch outside off stump', correct: true },
          { text: 'the pitch',                                     why: 'Generic.' },
          { text: 'down there',                                     why: 'Vague.' }
        ]},
        { role: 'Detail', options: [
          { text: ', planning exactly where it had to land.', correct: true },
          { text: ' carefully.',                                why: 'Tell-adverb.' },
          { text: ' really hard.',                              why: 'Telling.' }
        ]}
      ]},
      { opener: 'As he turned at the top of his mark,', slots: [
        { role: 'Subject', options: [
          { text: 'the crowd', correct: true },
          { text: 'everyone',  why: 'Vague.' },
          { text: 'people',    why: 'Generic.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'fell', correct: true },
          { text: 'got quiet', why: 'Wordy + bland.' },
          { text: 'stopped talking', why: 'Telling.' }
        ]},
        { role: 'Specific image', options: [
          { text: 'into a held breath', correct: true },
          { text: 'silent really fast', why: 'Tell-adverb chain.' },
          { text: 'quiet',              why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: ' — twenty thousand pairs of eyes locked on the strip.', correct: true },
          { text: ' and waited.',                                          why: 'Bland.' },
          { text: '.',                                                      why: 'Misses the picture.' }
        ]}
      ]},
      { opener: 'Pounding in over the cracked turf,', slots: [
        { role: 'Who', options: [
          { text: 'Sam', correct: true },
          { text: 'he', why: 'Re-naming at this beat lifts the moment.' },
          { text: 'the bowler', why: 'Distancing.' }
        ]},
        { role: 'Body verb', options: [
          { text: 'whipped', correct: true },
          { text: 'threw',   why: 'Basic.' },
          { text: 'bowled',  why: 'Functional and flat.' }
        ]},
        { role: 'Detail', options: [
          { text: 'his arm over in a blur of white sleeve', correct: true },
          { text: 'really fast',                              why: 'Tell-adverb.' },
          { text: 'quickly',                                   why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: 'and released the ball with a sharp grunt.', correct: true },
          { text: 'and let go.',                                why: 'Flat.' },
          { text: '.',                                           why: 'No payoff.' }
        ]}
      ]},
      { opener: 'Skidding off the seam,', slots: [
        { role: 'Subject', options: [
          { text: 'the ball', correct: true },
          { text: 'it',       why: 'Pronoun where clarity is needed.' },
          { text: 'the thing', why: 'Vague.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'jagged', correct: true },
          { text: 'moved',  why: 'Bland.' },
          { text: 'went',   why: 'Lazy.' }
        ]},
        { role: 'Direction', options: [
          { text: 'back at the batter at vicious speed', correct: true },
          { text: 'really fast',                          why: 'Tell-adverb.' },
          { text: 'at him',                                why: 'Vague.' }
        ]},
        { role: 'Climax detail', options: [
          { text: ', clipping the off-bail into the night air.', correct: true },
          { text: ' and hit the stumps.',                          why: 'Flat.' },
          { text: ' a lot.',                                        why: 'Vague.' }
        ]}
      ]},
      { opener: 'For one impossible second,', slots: [
        { role: 'Subject', options: [
          { text: 'silence', correct: true },
          { text: 'it',      why: 'Pronoun without antecedent.' },
          { text: 'everything', why: 'Vague.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'hung', correct: true },
          { text: 'stayed', why: 'Flat.' },
          { text: 'was', why: 'Filter — "to be" verb dulls the moment.' }
        ]},
        { role: 'Image', options: [
          { text: 'over the stadium', correct: true },
          { text: 'all around',       why: 'Vague.' },
          { text: 'there',            why: 'Empty word.' }
        ]},
        { role: 'Emotional closer', options: [
          { text: ' — then Sam vanished beneath a wave of his shouting teammates.', correct: true },
          { text: ' and he was happy.',                                                why: 'Tells the emotion.' },
          { text: ' before everyone cheered.',                                          why: 'Telling, no image.' }
        ]}
      ]}
    ]
  },

  {
    id: 'overtime-goal', topic: 'sport', level: 3,
    title: 'The Overtime Goal',
    context: 'Sudden-death overtime in the cup final.',
    sentences: [
      { opener: 'Trapping the ball on the half-turn,', slots: [
        { role: 'Who', options: [
          { text: 'Diego', correct: true },
          { text: 'he', why: 'Pronoun — name him to anchor the scene.' },
          { text: 'the striker', why: 'Distancing.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'felt', correct: true },
          { text: 'noticed', why: 'Filter verb.' },
          { text: 'realised', why: 'Filter — show the realisation.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the defender breathing on his shoulder', correct: true },
          { text: 'someone behind him',                       why: 'Vague.' },
          { text: 'a person',                                  why: 'Generic.' }
        ]},
        { role: 'Closer', options: [
          { text: ', a single heartbeat to decide.', correct: true },
          { text: ' really close.',                    why: 'Tell-adverb.' },
          { text: '.',                                  why: 'No tension.' }
        ]}
      ]},
      { opener: 'With one deft flick of his heel,', slots: [
        { role: 'Who', options: [
          { text: 'he', correct: true },
          { text: 'Diego', why: 'Repetition slows the rhythm here.' },
          { text: 'the boy', why: 'Vague.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'rolled', correct: true },
          { text: 'passed', why: 'Functional.' },
          { text: 'kicked', why: 'Basic.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the ball between the defender\u2019s legs', correct: true },
          { text: 'it past him',                                 why: 'Pronoun + vague.' },
          { text: 'it somewhere',                                 why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ' and burst onto the loose pass.', correct: true },
          { text: ' really fast.',                    why: 'Tell-adverb.' },
          { text: '.',                                 why: 'Anticlimactic.' }
        ]}
      ]},
      { opener: 'Sprinting through the open channel,', slots: [
        { role: 'Who', options: [
          { text: 'Diego', correct: true },
          { text: 'he', why: 'Name re-grounds at the key beat.' },
          { text: 'the striker', why: 'Clinical.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'tasted', correct: true },
          { text: 'felt',   why: 'Bland — pick a sharper sense.' },
          { text: 'had',    why: 'Filter verb.' }
        ]},
        { role: 'Image', options: [
          { text: 'the iron tang of effort on his tongue', correct: true },
          { text: 'tiredness',                              why: 'Vague.' },
          { text: 'pain',                                   why: 'Generic.' }
        ]},
        { role: 'Closer', options: [
          { text: ', the goalkeeper already racing off his line.', correct: true },
          { text: ' really hard.',                                   why: 'Telling.' },
          { text: '.',                                                why: 'No payoff.' }
        ]}
      ]},
      { opener: 'At the edge of the area,', slots: [
        { role: 'Who', options: [
          { text: 'he', correct: true },
          { text: 'Diego', why: 'Repetition.' },
          { text: 'a player', why: 'Vague.' }
        ]},
        { role: 'Decisive verb', options: [
          { text: 'lifted', correct: true },
          { text: 'kicked', why: 'Basic.' },
          { text: 'shot',   why: 'Bland here — show the craft.' }
        ]},
        { role: 'Specific image', options: [
          { text: 'the ball into a slow, perfect arc', correct: true },
          { text: 'it up there',                        why: 'Pronoun + vague.' },
          { text: 'it high quickly',                    why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ' over the keeper\u2019s outstretched fingertips.', correct: true },
          { text: '.',                                                 why: 'Misses the picture.' },
          { text: ' really high.',                                      why: 'Telling.' }
        ]}
      ]},
      { opener: 'When the ball kissed the inside of the net,', slots: [
        { role: 'Subject', options: [
          { text: 'the stadium', correct: true },
          { text: 'everyone',    why: 'Vague.' },
          { text: 'fans',        why: 'Generic.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'detonated', correct: true },
          { text: 'cheered',   why: 'Basic.' },
          { text: 'made noise', why: 'Wordy + bland.' }
        ]},
        { role: 'Image', options: [
          { text: 'in a riot of scarves and song', correct: true },
          { text: 'really loudly',                  why: 'Telling.' },
          { text: 'somewhere',                      why: 'Vague.' }
        ]},
        { role: 'Emotional closer', options: [
          { text: ', and Diego, shirt over his face, sank to his knees.', correct: true },
          { text: ', and he was happy.',                                    why: 'Tells the emotion.' },
          { text: '.',                                                       why: 'Misses the moment.' }
        ]}
      ]}
    ]
  },

  /* ============ ADVENTURE ============ */
  {
    id: 'hidden-chamber', topic: 'adventure', level: 1,
    title: 'The Hidden Chamber',
    context: 'An explorer finds a sealed chamber deep in a desert cave.',
    sentences: [
      { opener: 'After unfolding the fragile parchment,', slots: [
        { role: 'Who', options: [
          { text: 'the explorer', correct: true },
          { text: 'she',           why: 'Pronoun — needs grounding.' },
          { text: 'a person',      why: 'Generic.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'traced', correct: true },
          { text: 'looked at', why: 'Filter phrase.' },
          { text: 'saw',        why: 'Filter verb.' }
        ]},
        { role: 'Image', options: [
          { text: 'a faded ink path through the canyon.', correct: true },
          { text: 'something on it.',                       why: 'Vague.' },
          { text: 'the map quickly.',                       why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Edging deeper into the cave,', slots: [
        { role: 'Who', options: [
          { text: 'she', correct: true },
          { text: 'the explorer', why: 'Repetition slows things.' },
          { text: 'a girl', why: 'Vague.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'lifted', correct: true },
          { text: 'put up',  why: 'Wordy + flat.' },
          { text: 'held',    why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the torch toward the painted walls.', correct: true },
          { text: 'her hand really high.',                why: 'Tell-adverb.' },
          { text: 'something up.',                         why: 'Vague.' }
        ]}
      ]},
      { opener: 'Carved into the stone,', slots: [
        { role: 'Subject', options: [
          { text: 'strange symbols', correct: true },
          { text: 'stuff',           why: 'Lazy.' },
          { text: 'things',          why: 'Generic.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'shimmered', correct: true },
          { text: 'were',      why: 'Filter verb of being.' },
          { text: 'looked nice', why: 'Telling.' }
        ]},
        { role: 'Sensory closer', options: [
          { text: 'in the trembling torchlight.', correct: true },
          { text: 'a lot.',                        why: 'Vague.' },
          { text: 'really brightly.',              why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Heart thudding against her ribs,', slots: [
        { role: 'Who', options: [
          { text: 'she', correct: true },
          { text: 'the explorer', why: 'Repetition.' },
          { text: 'a person', why: 'Vague.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'pressed', correct: true },
          { text: 'pushed',  why: 'Bland.' },
          { text: 'touched', why: 'Flat.' }
        ]},
        { role: 'Detail', options: [
          { text: 'her palm against the warm carving.', correct: true },
          { text: 'her hand on the wall.',               why: 'Generic.' },
          { text: 'it quickly.',                          why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'With a deep, grinding rumble,', slots: [
        { role: 'Subject', options: [
          { text: 'the wall', correct: true },
          { text: 'it',       why: 'Pronoun where we need the subject.' },
          { text: 'a thing',  why: 'Vague.' }
        ]},
        { role: 'Powerful verb', options: [
          { text: 'split', correct: true },
          { text: 'opened', why: 'Basic.' },
          { text: 'moved',  why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: 'apart to reveal a chamber heavy with gold.', correct: true },
          { text: 'because there was something inside.',         why: 'Telling.' },
          { text: 'really wide.',                                  why: 'Tell-adverb.' }
        ]}
      ]}
    ]
  },

  {
    id: 'jungle-crossing', topic: 'adventure', level: 1,
    title: 'The Jungle Crossing',
    context: 'A rope bridge over a misty jungle ravine.',
    sentences: [
      { opener: 'Stepping onto the swaying planks,', slots: [
        { role: 'Who', options: [
          { text: 'Mira', correct: true },
          { text: 'she', why: 'Pronoun — name her first.' },
          { text: 'a girl', why: 'Vague.' }
        ]},
        { role: 'Body verb', options: [
          { text: 'gripped', correct: true },
          { text: 'held',    why: 'Basic.' },
          { text: 'had',     why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the fraying ropes with white knuckles.', correct: true },
          { text: 'them tightly.',                            why: 'Tell-adverb.' },
          { text: 'the bridge.',                              why: 'Vague.' }
        ]}
      ]},
      { opener: 'Far below,', slots: [
        { role: 'Subject', options: [
          { text: 'a foaming river', correct: true },
          { text: 'water',           why: 'Generic.' },
          { text: 'something',       why: 'Vague.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'roared', correct: true },
          { text: 'was',    why: 'Filter verb.' },
          { text: 'made noise', why: 'Wordy.' }
        ]},
        { role: 'Sensory closer', options: [
          { text: 'through the green-black gorge.', correct: true },
          { text: 'really loudly.',                  why: 'Telling.' },
          { text: 'a lot.',                           why: 'Vague.' }
        ]}
      ]},
      { opener: 'Without looking down,', slots: [
        { role: 'Who', options: [
          { text: 'she', correct: true },
          { text: 'Mira', why: 'Repetition.' },
          { text: 'a girl', why: 'Vague.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'slid', correct: true },
          { text: 'moved', why: 'Vague.' },
          { text: 'went',  why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'one cautious foot in front of the other.', correct: true },
          { text: 'forward slowly.',                            why: 'Tell-adverb.' },
          { text: 'across.',                                     why: 'Bland.' }
        ]}
      ]},
      { opener: 'Halfway across,', slots: [
        { role: 'Subject', options: [
          { text: 'a plank', correct: true },
          { text: 'it',      why: 'Pronoun where we need clarity.' },
          { text: 'something', why: 'Vague.' }
        ]},
        { role: 'Sound verb', options: [
          { text: 'cracked', correct: true },
          { text: 'broke',   why: 'Bland.' },
          { text: 'snapped',  why: 'Close, but cracked carries warning.' }
        ]},
        { role: 'Closer', options: [
          { text: 'beneath her left boot.', correct: true },
          { text: 'really loudly.',          why: 'Telling.' },
          { text: 'somewhere.',              why: 'Vague.' }
        ]}
      ]},
      { opener: 'Heart hammering,', slots: [
        { role: 'Who', options: [
          { text: 'Mira', correct: true },
          { text: 'she', why: 'Pronoun — naming her grounds the climax.' },
          { text: 'a girl', why: 'Vague.' }
        ]},
        { role: 'Decisive verb', options: [
          { text: 'lunged', correct: true },
          { text: 'jumped', why: 'Basic.' },
          { text: 'went',   why: 'Lazy.' }
        ]},
        { role: 'Closer', options: [
          { text: 'for solid ground and rolled into the ferns, laughing in shaky relief.', correct: true },
          { text: 'across and was happy.', why: 'Tells.' },
          { text: 'really fast.',           why: 'Tell-adverb.' }
        ]}
      ]}
    ]
  },

  {
    id: 'mountain-pass', topic: 'adventure', level: 2,
    title: 'The Mountain Pass',
    context: 'Caught in a blizzard on a narrow cliff trail.',
    sentences: [
      { opener: 'As the storm closed around the peak,', slots: [
        { role: 'Who', options: [
          { text: 'Theo', correct: true },
          { text: 'he', why: 'Pronoun — name him at the start.' },
          { text: 'a hiker', why: 'Generic.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'tasted', correct: true },
          { text: 'felt',   why: 'Bland — pick a sharper sense.' },
          { text: 'noticed', why: 'Filter verb.' }
        ]},
        { role: 'Specific image', options: [
          { text: 'iron-cold snow on his cracked lips', correct: true },
          { text: 'the weather',                         why: 'Vague.' },
          { text: 'something cold',                       why: 'Generic.' }
        ]},
        { role: 'Closer', options: [
          { text: ' and pressed deeper into his hood.', correct: true },
          { text: ' a lot.',                              why: 'Vague.' },
          { text: ' really hard.',                        why: 'Telling.' }
        ]}
      ]},
      { opener: 'Below the narrow ledge,', slots: [
        { role: 'Subject', options: [
          { text: 'a white nothing', correct: true },
          { text: 'the drop',         why: 'Functional — push for atmosphere.' },
          { text: 'air',              why: 'Bland.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'churned', correct: true },
          { text: 'moved',   why: 'Vague.' },
          { text: 'was',     why: 'Filter verb of being.' }
        ]},
        { role: 'Detail', options: [
          { text: 'where the valley should have been', correct: true },
          { text: 'really far down',                    why: 'Tell-adverb.' },
          { text: 'somewhere below',                     why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', swallowing every landmark.', correct: true },
          { text: ' a lot.',                       why: 'Vague.' },
          { text: '.',                              why: 'Misses image.' }
        ]}
      ]},
      { opener: 'Pinned against the wall of stone,', slots: [
        { role: 'Who', options: [
          { text: 'he', correct: true },
          { text: 'Theo', why: 'Pronoun keeps the rhythm.' },
          { text: 'the boy', why: 'Vague.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'inched', correct: true },
          { text: 'walked', why: 'Basic.' },
          { text: 'went',   why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'sideways along the icy lip', correct: true },
          { text: 'slowly forward',              why: 'Tell-adverb.' },
          { text: 'along the side',              why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', breath roaring in his ears.', correct: true },
          { text: ' really carefully.',             why: 'Tell-adverb.' },
          { text: '.',                               why: 'No image.' }
        ]}
      ]},
      { opener: 'Without warning,', slots: [
        { role: 'Subject', options: [
          { text: 'a slab of ice', correct: true },
          { text: 'something',     why: 'Vague.' },
          { text: 'it',            why: 'Pronoun without antecedent.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'cracked', correct: true },
          { text: 'broke',   why: 'Basic.' },
          { text: 'moved',   why: 'Vague.' }
        ]},
        { role: 'Sensory detail', options: [
          { text: 'free above him with a gunshot snap', correct: true },
          { text: 'really loudly',                       why: 'Telling.' },
          { text: 'somewhere',                           why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ' and tumbled past his shoulder.', correct: true },
          { text: '.',                                why: 'Misses payoff.' },
          { text: ' really fast.',                    why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'When the pass finally widened,', slots: [
        { role: 'Who', options: [
          { text: 'Theo', correct: true },
          { text: 'he', why: 'Re-name him at the resolution.' },
          { text: 'a hiker', why: 'Distancing.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'sagged', correct: true },
          { text: 'sat down', why: 'Wordy + flat.' },
          { text: 'fell',     why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'against the rock and let out a single ragged laugh', correct: true },
          { text: 'because he was happy',                                why: 'Tells the emotion.' },
          { text: 'and was glad',                                         why: 'Telling.' }
        ]},
        { role: 'Closer', options: [
          { text: ', the storm still howling at his back.', correct: true },
          { text: '.',                                       why: 'Misses the lingering atmosphere.' },
          { text: ' a lot.',                                  why: 'Vague.' }
        ]}
      ]}
    ]
  },

  {
    id: 'sunken-wreck', topic: 'adventure', level: 2,
    title: 'The Sunken Wreck',
    context: 'A young diver explores the wreck of a 17th-century galleon.',
    sentences: [
      { opener: 'Sinking through the cold green water,', slots: [
        { role: 'Who', options: [
          { text: 'Eli', correct: true },
          { text: 'he', why: 'Pronoun — name him to start.' },
          { text: 'a diver', why: 'Generic.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'watched', correct: true },
          { text: 'looked at', why: 'Filter phrase.' },
          { text: 'saw',        why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the bones of the galleon rise from the gloom', correct: true },
          { text: 'something below him',                          why: 'Vague.' },
          { text: 'the ship really clearly',                      why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', her ribs draped in pale weed.', correct: true },
          { text: ' a lot.',                          why: 'Vague.' },
          { text: '.',                                 why: 'Misses the image.' }
        ]}
      ]},
      { opener: 'Slipping through the broken hull,', slots: [
        { role: 'Who', options: [
          { text: 'he', correct: true },
          { text: 'Eli', why: 'Repetition.' },
          { text: 'the diver', why: 'Clinical.' }
        ]},
        { role: 'Body verb', options: [
          { text: 'brushed', correct: true },
          { text: 'touched', why: 'Bland.' },
          { text: 'felt',    why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'past a curtain of silver-bellied fish', correct: true },
          { text: 'past some fish',                        why: 'Generic.' },
          { text: 'past stuff',                             why: 'Lazy.' }
        ]},
        { role: 'Closer', options: [
          { text: ', their eyes catching his torchlight.', correct: true },
          { text: ' really fast.',                          why: 'Tell-adverb.' },
          { text: '.',                                       why: 'Flat.' }
        ]}
      ]},
      { opener: 'Deep inside the captain\u2019s cabin,', slots: [
        { role: 'Subject', options: [
          { text: 'a battered chest', correct: true },
          { text: 'something',         why: 'Vague.' },
          { text: 'a thing',           why: 'Lazy.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'leaned', correct: true },
          { text: 'was',    why: 'Filter verb of being.' },
          { text: 'sat',    why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'against the splintered timbers', correct: true },
          { text: 'somewhere in the room',           why: 'Vague.' },
          { text: 'in the back',                      why: 'Generic.' }
        ]},
        { role: 'Closer', options: [
          { text: ', its lock half-eaten by the sea.', correct: true },
          { text: '.',                                  why: 'Misses the image.' },
          { text: ' really old.',                       why: 'Telling.' }
        ]}
      ]},
      { opener: 'With trembling gloves,', slots: [
        { role: 'Who', options: [
          { text: 'Eli', correct: true },
          { text: 'he', why: 'Pronoun keeps it flowing, but his name lifts the moment.' },
          { text: 'a diver', why: 'Clinical.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'prised', correct: true },
          { text: 'opened', why: 'Basic.' },
          { text: 'got',    why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the rusted lid up an inch', correct: true },
          { text: 'it slowly',                  why: 'Tell-adverb.' },
          { text: 'the chest',                  why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ' — and froze, breath stopping in his throat.', correct: true },
          { text: ' and was scared.',                              why: 'Tells the emotion.' },
          { text: ' really carefully.',                            why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Pouring from the chest in a slow river,', slots: [
        { role: 'Subject', options: [
          { text: 'coins', correct: true },
          { text: 'stuff', why: 'Lazy.' },
          { text: 'things', why: 'Generic.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'caught', correct: true },
          { text: 'shone',  why: 'Close, but caught implies action with the light.' },
          { text: 'were',   why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the torchlight in soft yellow flashes', correct: true },
          { text: 'the light a lot',                        why: 'Vague.' },
          { text: 'really brightly',                         why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and Eli laughed silver bubbles into the dark.', correct: true },
          { text: ', and he was happy.', why: 'Tells.' },
          { text: '.',                    why: 'Misses the joy.' }
        ]}
      ]}
    ]
  },

  {
    id: 'lost-city', topic: 'adventure', level: 3,
    title: 'The Lost City',
    context: 'After weeks in the jungle, an archaeologist breaks through the canopy.',
    sentences: [
      { opener: 'Hacking the last vines from her path,', slots: [
        { role: 'Who', options: [
          { text: 'Dr. Hale', correct: true },
          { text: 'she',       why: 'Pronoun — name her first.' },
          { text: 'a woman',   why: 'Generic.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'stumbled', correct: true },
          { text: 'walked',   why: 'Basic.' },
          { text: 'went',     why: 'Lazy.' }
        ]},
        { role: 'Specific image', options: [
          { text: 'into a clearing flooded with gold light', correct: true },
          { text: 'into a place',                              why: 'Vague.' },
          { text: 'somewhere bright',                          why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and her machete fell from her hand.', correct: true },
          { text: ' really suddenly.',                       why: 'Tell-adverb.' },
          { text: '.',                                        why: 'Misses image.' }
        ]}
      ]},
      { opener: 'Towering across the valley,', slots: [
        { role: 'Subject', options: [
          { text: 'stone pyramids', correct: true },
          { text: 'buildings',       why: 'Generic.' },
          { text: 'things',          why: 'Lazy.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'pierced', correct: true },
          { text: 'were',    why: 'Filter verb.' },
          { text: 'stood',   why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the canopy in a jagged crown', correct: true },
          { text: 'really high up',                why: 'Tell-adverb.' },
          { text: 'over the trees',                why: 'Generic.' }
        ]},
        { role: 'Closer', options: [
          { text: ', their stairways choked with creepers.', correct: true },
          { text: '.',                                        why: 'Misses image.' },
          { text: ' a lot.',                                   why: 'Vague.' }
        ]}
      ]},
      { opener: 'For the first time in a thousand years,', slots: [
        { role: 'Subject', options: [
          { text: 'human boots', correct: true },
          { text: 'shoes',        why: 'Bland.' },
          { text: 'someone',      why: 'Vague.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'crunched', correct: true },
          { text: 'walked',   why: 'Basic.' },
          { text: 'were',     why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'across the lichen-furred steps', correct: true },
          { text: 'on the stairs',                   why: 'Generic.' },
          { text: 'somewhere up',                    why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', echoing into the quiet stones.', correct: true },
          { text: ' really loudly.',                    why: 'Telling.' },
          { text: '.',                                   why: 'Misses sound.' }
        ]}
      ]},
      { opener: 'Bowing under the lintel of the temple,', slots: [
        { role: 'Who', options: [
          { text: 'Dr. Hale', correct: true },
          { text: 'she', why: 'Pronoun — naming heightens the moment.' },
          { text: 'a woman', why: 'Vague.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'lifted', correct: true },
          { text: 'put up', why: 'Wordy + bland.' },
          { text: 'had',    why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'her torch toward a wall of carved jaguars', correct: true },
          { text: 'her light up',                                why: 'Vague.' },
          { text: 'her arm high',                                 why: 'Generic.' }
        ]},
        { role: 'Closer', options: [
          { text: ', their obsidian eyes glittering back.', correct: true },
          { text: ' really brightly.',                       why: 'Tell-adverb.' },
          { text: '.',                                        why: 'Misses image.' }
        ]}
      ]},
      { opener: 'When at last she dared to speak,', slots: [
        { role: 'Subject', options: [
          { text: 'her voice', correct: true },
          { text: 'she',       why: 'Repetition with the opener.' },
          { text: 'sound',     why: 'Vague.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'cracked', correct: true },
          { text: 'came out', why: 'Wordy + flat.' },
          { text: 'was',     why: 'Filter verb of being.' }
        ]},
        { role: 'Detail', options: [
          { text: 'into a single dry whisper', correct: true },
          { text: 'really quietly',             why: 'Tell-adverb.' },
          { text: 'softly',                     why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ' — and the lost city answered with the rustle of a thousand wings.', correct: true },
          { text: '.',                                                                    why: 'Misses payoff.' },
          { text: ' because she was scared.',                                              why: 'Telling.' }
        ]}
      ]}
    ]
  },

  {
    id: 'storm-at-sea', topic: 'adventure', level: 3,
    title: 'The Storm at Sea',
    context: 'A teenage sailor steers a small yacht through a brewing storm.',
    sentences: [
      { opener: 'As the first wave broke over the bow,', slots: [
        { role: 'Who', options: [
          { text: 'Lina', correct: true },
          { text: 'she',  why: 'Pronoun — name her first.' },
          { text: 'a sailor', why: 'Generic.' }
        ]},
        { role: 'Body verb', options: [
          { text: 'planted', correct: true },
          { text: 'put',     why: 'Lazy.' },
          { text: 'placed',  why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'her boots wide on the heaving deck', correct: true },
          { text: 'her feet down',                       why: 'Vague.' },
          { text: 'herself there',                       why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ' and locked both hands onto the wheel.', correct: true },
          { text: ' really tightly.',                        why: 'Tell-adverb.' },
          { text: '.',                                        why: 'Misses payoff.' }
        ]}
      ]},
      { opener: 'Above the masts,', slots: [
        { role: 'Subject', options: [
          { text: 'lightning', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'it',        why: 'Pronoun without antecedent.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'split', correct: true },
          { text: 'was',   why: 'Filter verb.' },
          { text: 'came',  why: 'Lazy.' }
        ]},
        { role: 'Image', options: [
          { text: 'the bruised sky in two', correct: true },
          { text: 'really brightly',         why: 'Tell-adverb.' },
          { text: 'a lot',                   why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', searing white across the rain.', correct: true },
          { text: '.',                                  why: 'Misses sensory image.' },
          { text: ' really fast.',                       why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Just as the yacht crested the next swell,', slots: [
        { role: 'Subject', options: [
          { text: 'the mainsail', correct: true },
          { text: 'something',    why: 'Vague.' },
          { text: 'a thing',      why: 'Lazy.' }
        ]},
        { role: 'Powerful verb', options: [
          { text: 'snapped', correct: true },
          { text: 'broke',   why: 'Bland.' },
          { text: 'tore',    why: 'Close, but snapped carries the sound.' }
        ]},
        { role: 'Detail', options: [
          { text: 'taut and shrieked in the wind', correct: true },
          { text: 'really loudly',                  why: 'Telling.' },
          { text: 'a lot',                          why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', a rope whipping past her face.', correct: true },
          { text: '.',                                  why: 'Misses image.' },
          { text: ' really hard.',                       why: 'Telling.' }
        ]}
      ]},
      { opener: 'Refusing to look away,', slots: [
        { role: 'Who', options: [
          { text: 'Lina', correct: true },
          { text: 'she', why: 'Pronoun — naming her drives the climax.' },
          { text: 'a girl', why: 'Vague.' }
        ]},
        { role: 'Decisive verb', options: [
          { text: 'wrenched', correct: true },
          { text: 'turned',   why: 'Basic.' },
          { text: 'moved',    why: 'Vague.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the wheel into the teeth of the wave', correct: true },
          { text: 'the wheel a lot',                       why: 'Vague.' },
          { text: 'really hard',                            why: 'Telling.' }
        ]},
        { role: 'Closer', options: [
          { text: ', spray salting her bared teeth.', correct: true },
          { text: '.',                                  why: 'Misses image.' },
          { text: ' really fast.',                       why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'When dawn finally cracked the horizon,', slots: [
        { role: 'Subject', options: [
          { text: 'a thin gold line', correct: true },
          { text: 'light',             why: 'Bland.' },
          { text: 'the sun',           why: 'Generic.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'crept', correct: true },
          { text: 'came',  why: 'Lazy.' },
          { text: 'was',   why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'over the broken sea', correct: true },
          { text: 'really slowly',         why: 'Tell-adverb.' },
          { text: 'somewhere far',         why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and Lina, soaked to the bone, allowed herself a single, shaking smile.', correct: true },
          { text: ', and she was happy.',                                                       why: 'Tells the emotion.' },
          { text: '.',                                                                            why: 'Misses payoff.' }
        ]}
      ]}
    ]
  },

  /* ============ MYSTERY ============ */
  {
    id: 'empty-house', topic: 'mystery', level: 1,
    title: 'The Empty House',
    context: 'A strange noise from the abandoned house on the corner.',
    sentences: [
      { opener: 'Late one Tuesday evening,', slots: [
        { role: 'Who', options: [
          { text: 'Noah', correct: true },
          { text: 'he', why: 'Pronoun — name him first.' },
          { text: 'a boy', why: 'Generic.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'heard', correct: true },
          { text: 'noticed', why: 'Filter verb.' },
          { text: 'thought he heard', why: 'Filter phrase.' }
        ]},
        { role: 'Closer', options: [
          { text: 'a slow, scraping noise from across the street.', correct: true },
          { text: 'something weird.',                                why: 'Vague.' },
          { text: 'a sound really loudly.',                          why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Tiptoeing across the road,', slots: [
        { role: 'Who', options: [
          { text: 'he', correct: true },
          { text: 'Noah', why: 'Repetition.' },
          { text: 'a kid', why: 'Vague.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'pressed', correct: true },
          { text: 'put',     why: 'Lazy.' },
          { text: 'held',    why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'his nose against the dusty window.', correct: true },
          { text: 'his face on the glass.',              why: 'Bland.' },
          { text: 'his head close.',                      why: 'Vague.' }
        ]}
      ]},
      { opener: 'Inside the dark front room,', slots: [
        { role: 'Subject', options: [
          { text: 'a single candle', correct: true },
          { text: 'something',        why: 'Vague.' },
          { text: 'a thing',          why: 'Lazy.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'flickered', correct: true },
          { text: 'was',       why: 'Filter verb.' },
          { text: 'glowed',    why: 'Close, but flickered creates suspense.' }
        ]},
        { role: 'Closer', options: [
          { text: 'on top of a tipped-over piano.', correct: true },
          { text: 'in the room.',                    why: 'Generic.' },
          { text: 'really brightly.',                why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Without thinking,', slots: [
        { role: 'Who', options: [
          { text: 'Noah', correct: true },
          { text: 'he', why: 'Re-naming heightens the moment.' },
          { text: 'a boy', why: 'Vague.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'pushed', correct: true },
          { text: 'tried',  why: 'Bland.' },
          { text: 'went to', why: 'Lazy.' }
        ]},
        { role: 'Closer', options: [
          { text: 'the front door, and it groaned open.', correct: true },
          { text: 'the door really hard.',                 why: 'Tell-adverb.' },
          { text: 'it.',                                    why: 'Vague.' }
        ]}
      ]},
      { opener: 'From the top of the stairs,', slots: [
        { role: 'Subject', options: [
          { text: 'a voice', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'noise',     why: 'Generic.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'whispered', correct: true },
          { text: 'said',      why: 'Filter verb.' },
          { text: 'made noise', why: 'Wordy + bland.' }
        ]},
        { role: 'Closer', options: [
          { text: 'his name, slow and patient.', correct: true },
          { text: 'really quietly.',              why: 'Tell-adverb.' },
          { text: 'something to him.',             why: 'Vague.' }
        ]}
      ]}
    ]
  },

  {
    id: 'missing-bike', topic: 'mystery', level: 1,
    title: 'The Missing Bike',
    context: 'A new bike vanishes from the backyard overnight.',
    sentences: [
      { opener: 'On Saturday morning,', slots: [
        { role: 'Who', options: [
          { text: 'Ava', correct: true },
          { text: 'she', why: 'Pronoun — name her.' },
          { text: 'a girl', why: 'Generic.' }
        ]},
        { role: 'Filter-free verb', options: [
          { text: 'opened', correct: true },
          { text: 'looked at', why: 'Filter phrase.' },
          { text: 'saw',        why: 'Filter verb.' }
        ]},
        { role: 'Closer', options: [
          { text: 'the back gate and froze.', correct: true },
          { text: 'the door.',                 why: 'Bland.' },
          { text: 'it quickly.',                why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'In the middle of the lawn,', slots: [
        { role: 'Subject', options: [
          { text: 'a perfect tyre track', correct: true },
          { text: 'something',             why: 'Vague.' },
          { text: 'a thing',               why: 'Lazy.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'curled', correct: true },
          { text: 'was',    why: 'Filter verb.' },
          { text: 'showed', why: 'Bland.' }
        ]},
        { role: 'Closer', options: [
          { text: 'through the dew toward the fence.', correct: true },
          { text: 'on the ground.',                      why: 'Generic.' },
          { text: 'really clearly.',                      why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Crouching by the muddy gap,', slots: [
        { role: 'Who', options: [
          { text: 'Ava', correct: true },
          { text: 'she', why: 'Repetition.' },
          { text: 'a girl', why: 'Vague.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'spotted', correct: true },
          { text: 'saw',     why: 'Filter verb.' },
          { text: 'looked at', why: 'Filter phrase.' }
        ]},
        { role: 'Closer', options: [
          { text: 'a single blue thread caught on the wire.', correct: true },
          { text: 'something on the fence.',                    why: 'Vague.' },
          { text: 'a thing.',                                    why: 'Lazy.' }
        ]}
      ]},
      { opener: 'Three doors down,', slots: [
        { role: 'Subject', options: [
          { text: 'a familiar bike', correct: true },
          { text: 'something',        why: 'Vague.' },
          { text: 'it',               why: 'Pronoun without antecedent.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'leaned', correct: true },
          { text: 'was',    why: 'Filter verb.' },
          { text: 'sat',    why: 'Bland.' }
        ]},
        { role: 'Closer', options: [
          { text: 'against a garage with chipped purple paint.', correct: true },
          { text: 'somewhere.',                                    why: 'Vague.' },
          { text: 'really nicely.',                                 why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'With a slow smile,', slots: [
        { role: 'Who', options: [
          { text: 'Ava', correct: true },
          { text: 'she', why: 'Pronoun — naming her closes the loop.' },
          { text: 'a girl', why: 'Vague.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'pulled', correct: true },
          { text: 'got',    why: 'Lazy.' },
          { text: 'took out', why: 'Wordy + flat.' }
        ]},
        { role: 'Closer', options: [
          { text: 'out her phone and rang the police.', correct: true },
          { text: 'something out and was happy.',        why: 'Tells.' },
          { text: 'it out.',                              why: 'Vague.' }
        ]}
      ]}
    ]
  },

  {
    id: 'locked-room', topic: 'mystery', level: 2,
    title: 'The Locked Room',
    context: 'A teacher\u2019s classroom is locked from the inside — but nobody is there.',
    sentences: [
      { opener: 'When the bell rang for first period,', slots: [
        { role: 'Who', options: [
          { text: 'Mr. Hardy', correct: true },
          { text: 'he', why: 'Pronoun — name him for grounding.' },
          { text: 'the teacher', why: 'Distancing.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'rattled', correct: true },
          { text: 'tried',   why: 'Bland.' },
          { text: 'used',    why: 'Vague.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the brass handle of room 14', correct: true },
          { text: 'the door',                     why: 'Generic.' },
          { text: 'something there',              why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', but it refused to budge.', correct: true },
          { text: ' really hard.',                why: 'Tell-adverb.' },
          { text: '.',                             why: 'Misses payoff.' }
        ]}
      ]},
      { opener: 'Pressing his ear to the wood,', slots: [
        { role: 'Who', options: [
          { text: 'he', correct: true },
          { text: 'Mr. Hardy', why: 'Repetition.' },
          { text: 'a teacher', why: 'Generic.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'caught', correct: true },
          { text: 'heard',  why: 'Functional — caught implies attention.' },
          { text: 'noticed', why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the soft scratch of chalk on slate', correct: true },
          { text: 'something inside',                    why: 'Vague.' },
          { text: 'a noise',                              why: 'Generic.' }
        ]},
        { role: 'Closer', options: [
          { text: ', steady and patient as a clock.', correct: true },
          { text: ' really quietly.',                   why: 'Tell-adverb.' },
          { text: '.',                                   why: 'Misses image.' }
        ]}
      ]},
      { opener: 'With the master key trembling in his fingers,', slots: [
        { role: 'Who', options: [
          { text: 'Mr. Hardy', correct: true },
          { text: 'he', why: 'Pronoun — his name lifts the moment.' },
          { text: 'a man', why: 'Vague.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'eased', correct: true },
          { text: 'opened', why: 'Basic.' },
          { text: 'used',   why: 'Vague.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the door wide enough to peer through', correct: true },
          { text: 'the door slowly',                       why: 'Tell-adverb.' },
          { text: 'it open',                                why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ' — and the scratching stopped.', correct: true },
          { text: '.',                                why: 'Misses payoff.' },
          { text: ' really suddenly.',                 why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'On the dusty board at the back of the room,', slots: [
        { role: 'Subject', options: [
          { text: 'a single chalked word', correct: true },
          { text: 'something',              why: 'Vague.' },
          { text: 'writing',                why: 'Bland.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'gleamed', correct: true },
          { text: 'was',     why: 'Filter verb.' },
          { text: 'showed',  why: 'Bland.' }
        ]},
        { role: 'Closer', options: [
          { text: 'in fresh white dust: HELLO.', correct: true },
          { text: ' really clearly.',             why: 'Tell-adverb.' },
          { text: '.',                             why: 'Misses image.' }
        ]}
      ]},
      { opener: 'Behind him,', slots: [
        { role: 'Subject', options: [
          { text: 'the door', correct: true },
          { text: 'it',       why: 'Pronoun without clear antecedent.' },
          { text: 'something', why: 'Vague.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'clicked', correct: true },
          { text: 'closed',  why: 'Bland.' },
          { text: 'shut',    why: 'Close, but clicked is precise.' }
        ]},
        { role: 'Detail', options: [
          { text: 'gently shut on its own', correct: true },
          { text: 'really fast',             why: 'Tell-adverb.' },
          { text: 'somewhere',               why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and the chalk began to scratch again.', correct: true },
          { text: '.',                                          why: 'Misses payoff.' },
          { text: ' really loudly.',                             why: 'Tell-adverb.' }
        ]}
      ]}
    ]
  },

  {
    id: 'shadow-window', topic: 'mystery', level: 2,
    title: 'The Shadow at the Window',
    context: 'A shape keeps appearing at the upstairs window of the house next door.',
    sentences: [
      { opener: 'Every night that week,', slots: [
        { role: 'Who', options: [
          { text: 'Iris', correct: true },
          { text: 'she', why: 'Pronoun — name her first.' },
          { text: 'a girl', why: 'Generic.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'caught', correct: true },
          { text: 'saw',    why: 'Filter verb.' },
          { text: 'looked at', why: 'Filter phrase.' }
        ]},
        { role: 'Detail', options: [
          { text: 'a tall shape standing at her neighbour\u2019s window', correct: true },
          { text: 'something next door',                                   why: 'Vague.' },
          { text: 'a thing',                                                why: 'Lazy.' }
        ]},
        { role: 'Closer', options: [
          { text: ', perfectly still behind the lace.', correct: true },
          { text: ' really quietly.',                     why: 'Tell-adverb.' },
          { text: '.',                                     why: 'Misses image.' }
        ]}
      ]},
      { opener: 'On the seventh evening,', slots: [
        { role: 'Who', options: [
          { text: 'she', correct: true },
          { text: 'Iris', why: 'Repetition slows things.' },
          { text: 'a girl', why: 'Generic.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'lifted', correct: true },
          { text: 'got',    why: 'Lazy.' },
          { text: 'picked up', why: 'Wordy + flat.' }
        ]},
        { role: 'Detail', options: [
          { text: 'her phone and snapped a photograph through the gap', correct: true },
          { text: 'her phone and took a picture',                        why: 'Bland.' },
          { text: 'it',                                                    why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ' in the curtains.', correct: true },
          { text: ' really fast.',      why: 'Tell-adverb.' },
          { text: '.',                   why: 'Misses image.' }
        ]}
      ]},
      { opener: 'When she zoomed in on the screen,', slots: [
        { role: 'Subject', options: [
          { text: 'the shape', correct: true },
          { text: 'it',         why: 'Pronoun — be specific.' },
          { text: 'something',  why: 'Vague.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'wore', correct: true },
          { text: 'had',  why: 'Filter verb.' },
          { text: 'was',  why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'her grandmother\u2019s missing coat', correct: true },
          { text: 'some clothes',                          why: 'Generic.' },
          { text: 'a thing',                                why: 'Lazy.' }
        ]},
        { role: 'Closer', options: [
          { text: ', the collar still creased the way Gran liked it.', correct: true },
          { text: '.',                                                    why: 'Misses image.' },
          { text: ' really clearly.',                                      why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Heart hammering against her ribs,', slots: [
        { role: 'Who', options: [
          { text: 'Iris', correct: true },
          { text: 'she', why: 'Pronoun — naming her drives the climax.' },
          { text: 'a girl', why: 'Vague.' }
        ]},
        { role: 'Decisive verb', options: [
          { text: 'crept', correct: true },
          { text: 'walked', why: 'Basic.' },
          { text: 'went',  why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'down the dark stairs in her bare feet', correct: true },
          { text: 'really quietly downstairs',               why: 'Tell-adverb.' },
          { text: 'down',                                     why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', the photograph still glowing in her fist.', correct: true },
          { text: '.',                                              why: 'Misses image.' },
          { text: ' really carefully.',                              why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'When she finally opened the front door,', slots: [
        { role: 'Subject', options: [
          { text: 'the coat', correct: true },
          { text: 'it',        why: 'Pronoun without antecedent.' },
          { text: 'something', why: 'Vague.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'lay', correct: true },
          { text: 'was', why: 'Filter verb.' },
          { text: 'sat', why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'folded neatly on the doormat', correct: true },
          { text: 'on the ground',                why: 'Generic.' },
          { text: 'there',                         why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', still warm to the touch.', correct: true },
          { text: '.',                            why: 'Misses image.' },
          { text: ' really nicely.',               why: 'Tell-adverb.' }
        ]}
      ]}
    ]
  },

  {
    id: 'cipher', topic: 'mystery', level: 3,
    title: 'The Cipher',
    context: 'A young codebreaker decodes a message slipped under the library door.',
    sentences: [
      { opener: 'Slipping the folded paper into the lamplight,', slots: [
        { role: 'Who', options: [
          { text: 'Jude', correct: true },
          { text: 'he', why: 'Pronoun — name him first.' },
          { text: 'a boy', why: 'Generic.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'studied', correct: true },
          { text: 'looked at', why: 'Filter phrase.' },
          { text: 'saw',        why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the strange rows of inked symbols', correct: true },
          { text: 'the writing',                        why: 'Bland.' },
          { text: 'the stuff on it',                    why: 'Lazy.' }
        ]},
        { role: 'Closer', options: [
          { text: ', heart picking up its pace.', correct: true },
          { text: ' really carefully.',             why: 'Tell-adverb.' },
          { text: '.',                               why: 'Misses image.' }
        ]}
      ]},
      { opener: 'Hunched over his battered notebook,', slots: [
        { role: 'Who', options: [
          { text: 'he', correct: true },
          { text: 'Jude', why: 'Repetition.' },
          { text: 'a kid', why: 'Vague.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'scratched', correct: true },
          { text: 'wrote',     why: 'Basic.' },
          { text: 'put',       why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'frantic columns of letters and numbers', correct: true },
          { text: 'stuff down',                             why: 'Lazy.' },
          { text: 'things in his book',                     why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', testing one substitution after another.', correct: true },
          { text: ' really fast.',                              why: 'Tell-adverb.' },
          { text: '.',                                           why: 'Misses image.' }
        ]}
      ]},
      { opener: 'Just past midnight,', slots: [
        { role: 'Subject', options: [
          { text: 'a single word', correct: true },
          { text: 'something',      why: 'Vague.' },
          { text: 'it',             why: 'Pronoun without antecedent.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'surfaced', correct: true },
          { text: 'appeared', why: 'Bland.' },
          { text: 'came',     why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'from the mess of symbols', correct: true },
          { text: 'on his page',               why: 'Vague.' },
          { text: 'somewhere',                 why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ': MEET ME WHERE THE CLOCKS LIE.', correct: true },
          { text: ', really clearly.',                why: 'Tell-adverb.' },
          { text: '.',                                 why: 'Misses payoff.' }
        ]}
      ]},
      { opener: 'Without taking his eyes off the paper,', slots: [
        { role: 'Who', options: [
          { text: 'Jude', correct: true },
          { text: 'he', why: 'Naming heightens the discovery.' },
          { text: 'a boy', why: 'Vague.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'reached', correct: true },
          { text: 'put',     why: 'Lazy.' },
          { text: 'used',    why: 'Vague.' }
        ]},
        { role: 'Detail', options: [
          { text: 'for the city map under his bed', correct: true },
          { text: 'for a map',                       why: 'Generic.' },
          { text: 'for it',                          why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', breath fogging the dust on its corners.', correct: true },
          { text: ' really carefully.',                          why: 'Tell-adverb.' },
          { text: '.',                                            why: 'Misses image.' }
        ]}
      ]},
      { opener: 'In the cracked centre of the old town,', slots: [
        { role: 'Subject', options: [
          { text: 'a clocktower', correct: true },
          { text: 'something',    why: 'Vague.' },
          { text: 'a thing',      why: 'Lazy.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'leaned', correct: true },
          { text: 'was',    why: 'Filter verb.' },
          { text: 'stood',  why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'over a graveyard of fallen hands and gears', correct: true },
          { text: 'over a place',                                why: 'Vague.' },
          { text: 'really high',                                  why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and a tall figure was already waiting in its shadow.', correct: true },
          { text: '.',                                                       why: 'Misses payoff.' },
          { text: ' really quietly.',                                         why: 'Tell-adverb.' }
        ]}
      ]}
    ]
  },

  {
    id: 'vanishing', topic: 'mystery', level: 3,
    title: 'The Vanishing',
    context: 'A best friend disappears from a school assembly without anyone noticing.',
    sentences: [
      { opener: 'During the principal\u2019s long announcement,', slots: [
        { role: 'Who', options: [
          { text: 'Hana', correct: true },
          { text: 'she', why: 'Pronoun — name her first.' },
          { text: 'a girl', why: 'Generic.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'felt', correct: true },
          { text: 'noticed', why: 'Filter verb.' },
          { text: 'thought about', why: 'Filter phrase.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the empty seat beside her grow cold', correct: true },
          { text: 'something was off',                    why: 'Telling.' },
          { text: 'her friend was gone',                  why: 'Tells.' }
        ]},
        { role: 'Closer', options: [
          { text: ', as if Mia had never been there at all.', correct: true },
          { text: '.',                                          why: 'Misses image.' },
          { text: ' really suddenly.',                           why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Scanning the rows around her,', slots: [
        { role: 'Who', options: [
          { text: 'she', correct: true },
          { text: 'Hana', why: 'Repetition.' },
          { text: 'a girl', why: 'Vague.' }
        ]},
        { role: 'Filter-free verb', options: [
          { text: 'caught', correct: true },
          { text: 'saw',    why: 'Filter verb.' },
          { text: 'looked at', why: 'Filter phrase.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the gaze of every classmate sliding past her', correct: true },
          { text: 'no one looking at her',                          why: 'Bland.' },
          { text: 'something weird',                                 why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', as though Mia\u2019s name had been wiped from their tongues.', correct: true },
          { text: '.',                                                                why: 'Misses image.' },
          { text: ' really creepily.',                                                 why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'After the bell,', slots: [
        { role: 'Who', options: [
          { text: 'Hana', correct: true },
          { text: 'she', why: 'Naming re-anchors the scene.' },
          { text: 'a girl', why: 'Vague.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'tore', correct: true },
          { text: 'ran',  why: 'Basic.' },
          { text: 'went', why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'through the locker bay to Mia\u2019s locker', correct: true },
          { text: 'really fast to the lockers',                   why: 'Tell-adverb.' },
          { text: 'somewhere quickly',                             why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', breath ripping in her chest.', correct: true },
          { text: '.',                                why: 'Misses image.' },
          { text: ' really fast.',                     why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Hanging from the metal door,', slots: [
        { role: 'Subject', options: [
          { text: 'a clean white padlock', correct: true },
          { text: 'something',              why: 'Vague.' },
          { text: 'a thing',                why: 'Lazy.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'shone', correct: true },
          { text: 'was',   why: 'Filter verb.' },
          { text: 'showed', why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'where Mia\u2019s sticker-covered lock had been that morning', correct: true },
          { text: 'on the locker',                                                  why: 'Generic.' },
          { text: 'really new',                                                     why: 'Telling.' }
        ]},
        { role: 'Closer', options: [
          { text: ', not a trace of glue or paper left.', correct: true },
          { text: '.',                                     why: 'Misses image.' },
          { text: ' really cleanly.',                       why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'When she finally whispered her friend\u2019s name,', slots: [
        { role: 'Subject', options: [
          { text: 'the corridor', correct: true },
          { text: 'everywhere',   why: 'Vague.' },
          { text: 'it',            why: 'Pronoun without antecedent.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'swallowed', correct: true },
          { text: 'took',      why: 'Lazy.' },
          { text: 'made it disappear', why: 'Wordy + telling.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the sound the way water swallows a stone', correct: true },
          { text: 'her voice quickly',                          why: 'Tell-adverb.' },
          { text: 'the noise really fast',                       why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ' — and somewhere, behind a closed locker, something whispered back.', correct: true },
          { text: '.',                                                                     why: 'Misses payoff.' },
          { text: ' really creepily.',                                                      why: 'Tell-adverb.' }
        ]}
      ]}
    ]
  },

  /* ============ SCI-FI ============ */
  {
    id: 'signal', topic: 'scifi', level: 1,
    title: 'The Signal',
    context: 'A kid picks up a strange radio transmission in their garage.',
    sentences: [
      { opener: 'Late one stormy night,', slots: [
        { role: 'Who', options: [
          { text: 'Sasha', correct: true },
          { text: 'she',   why: 'Pronoun — name her first.' },
          { text: 'a girl', why: 'Generic.' }
        ]},
        { role: 'Filter-free verb', options: [
          { text: 'twisted', correct: true },
          { text: 'used',    why: 'Vague.' },
          { text: 'turned',  why: 'Basic.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the old radio dial through a wash of static.', correct: true },
          { text: 'it.',                                            why: 'Vague.' },
          { text: 'the radio quickly.',                              why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Through the hiss and crackle,', slots: [
        { role: 'Subject', options: [
          { text: 'a voice', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'noise',     why: 'Generic.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'whispered', correct: true },
          { text: 'said',      why: 'Filter verb.' },
          { text: 'was',       why: 'Filter verb of being.' }
        ]},
        { role: 'Closer', options: [
          { text: 'numbers in a slow, careful pattern.', correct: true },
          { text: 'something to her.',                    why: 'Vague.' },
          { text: 'really quietly.',                      why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Grabbing a pencil,', slots: [
        { role: 'Who', options: [
          { text: 'Sasha', correct: true },
          { text: 'she', why: 'Repetition.' },
          { text: 'a girl', why: 'Vague.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'scratched', correct: true },
          { text: 'wrote',     why: 'Basic.' },
          { text: 'put',       why: 'Lazy.' }
        ]},
        { role: 'Closer', options: [
          { text: 'every number across her arm.', correct: true },
          { text: 'stuff down.',                    why: 'Lazy.' },
          { text: 'them somewhere.',                why: 'Vague.' }
        ]}
      ]},
      { opener: 'When the voice finally stopped,', slots: [
        { role: 'Who', options: [
          { text: 'she', correct: true },
          { text: 'Sasha', why: 'Repetition.' },
          { text: 'a person', why: 'Vague.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'noticed', correct: true },
          { text: 'realized', why: 'Filter verb.' },
          { text: 'thought',  why: 'Filter verb.' }
        ]},
        { role: 'Closer', options: [
          { text: 'the digits spelled her own home address.', correct: true },
          { text: 'something weird.',                          why: 'Vague.' },
          { text: 'something really bad.',                      why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Outside the window,', slots: [
        { role: 'Subject', options: [
          { text: 'a single light', correct: true },
          { text: 'something',       why: 'Vague.' },
          { text: 'a thing',         why: 'Lazy.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'flicked', correct: true },
          { text: 'came on', why: 'Wordy + flat.' },
          { text: 'was',     why: 'Filter verb.' }
        ]},
        { role: 'Closer', options: [
          { text: 'on at the end of her driveway.', correct: true },
          { text: 'outside really brightly.',        why: 'Tell-adverb.' },
          { text: 'on somewhere.',                    why: 'Vague.' }
        ]}
      ]}
    ]
  },

  {
    id: 'robot', topic: 'scifi', level: 1,
    title: 'The Robot',
    context: 'A boy discovers a still-working robot in his grandfather\u2019s garage.',
    sentences: [
      { opener: 'Beneath an old grey sheet,', slots: [
        { role: 'Who', options: [
          { text: 'Leo', correct: true },
          { text: 'he', why: 'Pronoun — name him first.' },
          { text: 'a kid', why: 'Generic.' }
        ]},
        { role: 'Filter-free verb', options: [
          { text: 'uncovered', correct: true },
          { text: 'found',     why: 'Basic.' },
          { text: 'saw',       why: 'Filter verb.' }
        ]},
        { role: 'Closer', options: [
          { text: 'a metal figure the size of a large dog.', correct: true },
          { text: 'a robot.',                                  why: 'Generic.' },
          { text: 'something cool.',                            why: 'Telling.' }
        ]}
      ]},
      { opener: 'When he brushed the dust from its chest,', slots: [
        { role: 'Subject', options: [
          { text: 'a small green light', correct: true },
          { text: 'something',            why: 'Vague.' },
          { text: 'a thing',              why: 'Lazy.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'blinked', correct: true },
          { text: 'came on', why: 'Wordy + flat.' },
          { text: 'was',     why: 'Filter verb.' }
        ]},
        { role: 'Closer', options: [
          { text: 'awake under the grime.', correct: true },
          { text: 'really brightly.',        why: 'Tell-adverb.' },
          { text: 'on.',                      why: 'Bland.' }
        ]}
      ]},
      { opener: 'With a faint hum,', slots: [
        { role: 'Subject', options: [
          { text: 'the robot', correct: true },
          { text: 'it',        why: 'Pronoun — be specific.' },
          { text: 'a thing',   why: 'Lazy.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'tilted', correct: true },
          { text: 'moved',  why: 'Vague.' },
          { text: 'did',    why: 'Filter verb.' }
        ]},
        { role: 'Closer', options: [
          { text: 'its dented head and watched him.', correct: true },
          { text: 'somewhere.',                        why: 'Vague.' },
          { text: 'really slowly.',                     why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Without quite meaning to,', slots: [
        { role: 'Who', options: [
          { text: 'Leo', correct: true },
          { text: 'he', why: 'Naming him grounds the moment.' },
          { text: 'a boy', why: 'Vague.' }
        ]},
        { role: 'Filter-free verb', options: [
          { text: 'whispered', correct: true },
          { text: 'said',      why: 'Filter verb.' },
          { text: 'talked',    why: 'Basic.' }
        ]},
        { role: 'Closer', options: [
          { text: 'his own name into the quiet garage.', correct: true },
          { text: 'something to it.',                     why: 'Vague.' },
          { text: 'really quietly.',                      why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'After a long, careful pause,', slots: [
        { role: 'Subject', options: [
          { text: 'the robot', correct: true },
          { text: 'it',        why: 'Pronoun where we need clarity.' },
          { text: 'something', why: 'Vague.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'answered', correct: true },
          { text: 'said',     why: 'Filter verb.' },
          { text: 'did',      why: 'Filter verb.' }
        ]},
        { role: 'Closer', options: [
          { text: 'in his grandfather\u2019s voice.', correct: true },
          { text: 'really clearly.',                    why: 'Tell-adverb.' },
          { text: 'something back.',                    why: 'Vague.' }
        ]}
      ]}
    ]
  },

  {
    id: 'wormhole', topic: 'scifi', level: 2,
    title: 'The Wormhole',
    context: 'A pilot\u2019s test flight goes badly wrong.',
    sentences: [
      { opener: 'As the engines screamed past safe speed,', slots: [
        { role: 'Who', options: [
          { text: 'Cadet Rin', correct: true },
          { text: 'she',        why: 'Pronoun — name her first.' },
          { text: 'a pilot',    why: 'Generic.' }
        ]},
        { role: 'Body verb', options: [
          { text: 'clamped', correct: true },
          { text: 'held',    why: 'Basic.' },
          { text: 'put',     why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'both gloved hands around the throttle', correct: true },
          { text: 'her hands on it',                        why: 'Vague.' },
          { text: 'something tightly',                       why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', knuckles white inside the visor light.', correct: true },
          { text: ' really hard.',                             why: 'Tell-adverb.' },
          { text: '.',                                          why: 'Misses image.' }
        ]}
      ]},
      { opener: 'Outside the cockpit glass,', slots: [
        { role: 'Subject', options: [
          { text: 'the stars', correct: true },
          { text: 'everything', why: 'Vague.' },
          { text: 'it',         why: 'Pronoun without antecedent.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'smeared', correct: true },
          { text: 'moved',   why: 'Vague.' },
          { text: 'went',    why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'into long, screaming lines of white', correct: true },
          { text: 'really fast past her',                   why: 'Tell-adverb.' },
          { text: 'somewhere',                              why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and the cockpit began to shudder.', correct: true },
          { text: '.',                                     why: 'Misses payoff.' },
          { text: ' really hard.',                          why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Without thinking,', slots: [
        { role: 'Who', options: [
          { text: 'Rin', correct: true },
          { text: 'she', why: 'Re-naming heightens the moment.' },
          { text: 'a pilot', why: 'Generic.' }
        ]},
        { role: 'Decisive verb', options: [
          { text: 'slammed', correct: true },
          { text: 'pushed',  why: 'Basic.' },
          { text: 'used',    why: 'Vague.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the throttle wide open', correct: true },
          { text: 'it',                      why: 'Vague.' },
          { text: 'the thing fast',           why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ' and lunged the ship into the bright knot of light.', correct: true },
          { text: ' really fast.',                                         why: 'Tell-adverb.' },
          { text: '.',                                                      why: 'Misses image.' }
        ]}
      ]},
      { opener: 'For one weightless heartbeat,', slots: [
        { role: 'Subject', options: [
          { text: 'the universe', correct: true },
          { text: 'everything',    why: 'Vague.' },
          { text: 'it',            why: 'Pronoun without antecedent.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'folded', correct: true },
          { text: 'moved',  why: 'Vague.' },
          { text: 'changed', why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'in half around her ship', correct: true },
          { text: 'really fast',              why: 'Tell-adverb.' },
          { text: 'somewhere',                why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and every console screamed at once.', correct: true },
          { text: '.',                                       why: 'Misses payoff.' },
          { text: ' really loudly.',                          why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'When the noise finally stopped,', slots: [
        { role: 'Who', options: [
          { text: 'Rin', correct: true },
          { text: 'she', why: 'Naming her closes the loop.' },
          { text: 'a pilot', why: 'Generic.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'stared', correct: true },
          { text: 'looked at', why: 'Filter phrase.' },
          { text: 'saw',        why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'at a sky filled with two pale moons', correct: true },
          { text: 'at something new',                      why: 'Vague.' },
          { text: 'somewhere',                              why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and a planet she had never been taught to name.', correct: true },
          { text: '.',                                                   why: 'Misses payoff.' },
          { text: ' really far away.',                                    why: 'Tell-adverb.' }
        ]}
      ]}
    ]
  },

  {
    id: 'lab-escape', topic: 'scifi', level: 2,
    title: 'The Lab Escape',
    context: 'A kid breaks out of a secret testing facility.',
    sentences: [
      { opener: 'As the corridor lights flickered red,', slots: [
        { role: 'Who', options: [
          { text: 'Vera', correct: true },
          { text: 'she', why: 'Pronoun — name her first.' },
          { text: 'a girl', why: 'Generic.' }
        ]},
        { role: 'Body verb', options: [
          { text: 'tore', correct: true },
          { text: 'ran',  why: 'Basic.' },
          { text: 'went', why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the patient ID from her thin paper wrist', correct: true },
          { text: 'something off her arm',                     why: 'Vague.' },
          { text: 'her tag really fast',                        why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', breath quick and silent.', correct: true },
          { text: '.',                            why: 'Misses image.' },
          { text: ' really fast.',                 why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Above her,', slots: [
        { role: 'Subject', options: [
          { text: 'a voice', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'it',        why: 'Pronoun without antecedent.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'crackled', correct: true },
          { text: 'said',     why: 'Filter verb.' },
          { text: 'made noise', why: 'Wordy + bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'her name through every speaker', correct: true },
          { text: 'something everywhere',            why: 'Vague.' },
          { text: 'really loudly',                    why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', smooth as oil.', correct: true },
          { text: '.',                  why: 'Misses image.' },
          { text: ' really clearly.',    why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Sliding around the next corner,', slots: [
        { role: 'Who', options: [
          { text: 'she', correct: true },
          { text: 'Vera', why: 'Repetition.' },
          { text: 'a kid', why: 'Vague.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'pressed', correct: true },
          { text: 'put',     why: 'Lazy.' },
          { text: 'held',    why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'her stolen keycard against the reader', correct: true },
          { text: 'something on the wall',                  why: 'Vague.' },
          { text: 'it there',                                why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', willing the green light to blink.', correct: true },
          { text: ' really hard.',                         why: 'Tell-adverb.' },
          { text: '.',                                      why: 'Misses image.' }
        ]}
      ]},
      { opener: 'When the door slid open,', slots: [
        { role: 'Subject', options: [
          { text: 'cold night air', correct: true },
          { text: 'something',      why: 'Vague.' },
          { text: 'air',            why: 'Bland.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'punched', correct: true },
          { text: 'came',    why: 'Lazy.' },
          { text: 'was',     why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'into her lungs', correct: true },
          { text: 'on her face',     why: 'Bland.' },
          { text: 'a lot',           why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', tasting of pine and freedom.', correct: true },
          { text: '.',                                why: 'Misses image.' },
          { text: ' really nicely.',                   why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Behind her,', slots: [
        { role: 'Subject', options: [
          { text: 'sirens', correct: true },
          { text: 'something', why: 'Vague.' },
          { text: 'a thing',   why: 'Lazy.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'rose', correct: true },
          { text: 'were',  why: 'Filter verb.' },
          { text: 'started', why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'in a slow, climbing scream', correct: true },
          { text: 'really loudly',               why: 'Telling.' },
          { text: 'somewhere',                    why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', but Vera was already running for the trees.', correct: true },
          { text: ', but she was happy.',                            why: 'Tells the emotion.' },
          { text: '.',                                                why: 'Misses payoff.' }
        ]}
      ]}
    ]
  },

  {
    id: 'first-contact', topic: 'scifi', level: 3,
    title: 'The First Contact',
    context: 'A young xeno-linguist meets an alien at the edge of a forest crater.',
    sentences: [
      { opener: 'At the lip of the smoking crater,', slots: [
        { role: 'Who', options: [
          { text: 'Yuna', correct: true },
          { text: 'she', why: 'Pronoun — name her first.' },
          { text: 'a girl', why: 'Generic.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'stilled', correct: true },
          { text: 'stopped', why: 'Basic.' },
          { text: 'was',     why: 'Filter verb.' }
        ]},
        { role: 'Detail', options: [
          { text: 'every muscle in her body', correct: true },
          { text: 'herself a lot',             why: 'Vague.' },
          { text: 'her body really tight',     why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', her recorder shaking in one hand.', correct: true },
          { text: '.',                                    why: 'Misses image.' },
          { text: ' really still.',                        why: 'Telling.' }
        ]}
      ]},
      { opener: 'Across the ashen ground,', slots: [
        { role: 'Subject', options: [
          { text: 'a tall, slender figure', correct: true },
          { text: 'someone',                why: 'Generic.' },
          { text: 'a thing',                why: 'Lazy.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'unfolded', correct: true },
          { text: 'stood up', why: 'Wordy + flat.' },
          { text: 'got up',   why: 'Lazy.' }
        ]},
        { role: 'Detail', options: [
          { text: 'from the wreckage in slow, careful sections', correct: true },
          { text: 'from somewhere',                                why: 'Vague.' },
          { text: 'really slowly',                                  why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', limbs the colour of moonlit pewter.', correct: true },
          { text: '.',                                      why: 'Misses image.' },
          { text: ' really weirdly.',                        why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Refusing to break eye contact,', slots: [
        { role: 'Who', options: [
          { text: 'Yuna', correct: true },
          { text: 'she', why: 'Naming her steadies the moment.' },
          { text: 'a girl', why: 'Generic.' }
        ]},
        { role: 'Strong verb', options: [
          { text: 'lowered', correct: true },
          { text: 'put',     why: 'Lazy.' },
          { text: 'set',     why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'one open palm flat against the ash', correct: true },
          { text: 'her hand down',                       why: 'Vague.' },
          { text: 'it there',                             why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', the same gesture she had used with frightened animals as a child.', correct: true },
          { text: '.',                                                                     why: 'Misses image.' },
          { text: ' really slowly.',                                                        why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'After what felt like an entire winter,', slots: [
        { role: 'Subject', options: [
          { text: 'the figure', correct: true },
          { text: 'it',         why: 'Pronoun — be specific.' },
          { text: 'someone',    why: 'Generic.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'pressed', correct: true },
          { text: 'put',     why: 'Lazy.' },
          { text: 'placed',  why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'a long, six-fingered hand against hers', correct: true },
          { text: 'a hand on her hand',                      why: 'Bland.' },
          { text: 'something on her',                         why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', cool as river stone.', correct: true },
          { text: ' really gently.',         why: 'Tell-adverb.' },
          { text: '.',                        why: 'Misses image.' }
        ]}
      ]},
      { opener: 'When the visitor finally spoke,', slots: [
        { role: 'Subject', options: [
          { text: 'a single word', correct: true },
          { text: 'something',      why: 'Vague.' },
          { text: 'noise',          why: 'Generic.' }
        ]},
        { role: 'Sensory verb', options: [
          { text: 'unfurled', correct: true },
          { text: 'came out', why: 'Wordy + flat.' },
          { text: 'was said', why: 'Filter passive.' }
        ]},
        { role: 'Detail', options: [
          { text: 'in her own language, in her grandmother\u2019s voice', correct: true },
          { text: 'somehow she understood it',                              why: 'Telling.' },
          { text: 'really clearly',                                          why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ': "We have been waiting a long time."', correct: true },
          { text: '.',                                       why: 'Misses payoff.' },
          { text: ' really weirdly.',                         why: 'Tell-adverb.' }
        ]}
      ]}
    ]
  },

  {
    id: 'reactor', topic: 'scifi', level: 3,
    title: 'The Reactor Meltdown',
    context: 'A young engineer races to save the orbital station from going critical.',
    sentences: [
      { opener: 'As red warning lights drowned the deck,', slots: [
        { role: 'Who', options: [
          { text: 'Engineer Tao', correct: true },
          { text: 'he',            why: 'Pronoun — name him for grounding.' },
          { text: 'an engineer',   why: 'Distancing.' }
        ]},
        { role: 'Body verb', options: [
          { text: 'wrenched', correct: true },
          { text: 'opened',   why: 'Bland.' },
          { text: 'pulled',   why: 'Basic.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the access panel from the reactor wall', correct: true },
          { text: 'something off the wall',                  why: 'Vague.' },
          { text: 'a thing fast',                             why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', sparks biting his cheek.', correct: true },
          { text: ' really hard.',                why: 'Tell-adverb.' },
          { text: '.',                             why: 'Misses image.' }
        ]}
      ]},
      { opener: 'Above the failing core,', slots: [
        { role: 'Subject', options: [
          { text: 'the station\u2019s voice', correct: true },
          { text: 'something',                  why: 'Vague.' },
          { text: 'it',                         why: 'Pronoun without antecedent.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'counted', correct: true },
          { text: 'said',    why: 'Filter verb.' },
          { text: 'spoke',   why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'down with the calm of a metronome', correct: true },
          { text: 'really slowly',                       why: 'Tell-adverb.' },
          { text: 'numbers',                             why: 'Generic.' }
        ]},
        { role: 'Closer', options: [
          { text: ': sixty, fifty-nine, fifty-eight.', correct: true },
          { text: '.',                                    why: 'Misses image.' },
          { text: ' really clearly.',                      why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'Forcing his fingers steady,', slots: [
        { role: 'Who', options: [
          { text: 'Tao', correct: true },
          { text: 'he', why: 'Pronoun — naming heightens the climax.' },
          { text: 'a man', why: 'Vague.' }
        ]},
        { role: 'Decisive verb', options: [
          { text: 'threaded', correct: true },
          { text: 'put',      why: 'Lazy.' },
          { text: 'used',     why: 'Vague.' }
        ]},
        { role: 'Detail', options: [
          { text: 'the bypass cable through the burning circuit', correct: true },
          { text: 'a wire somewhere',                                why: 'Vague.' },
          { text: 'it in really fast',                                why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ', sweat stinging his eyes.', correct: true },
          { text: ' really carefully.',           why: 'Tell-adverb.' },
          { text: '.',                             why: 'Misses image.' }
        ]}
      ]},
      { opener: 'With three seconds left on the clock,', slots: [
        { role: 'Who', options: [
          { text: 'he', correct: true },
          { text: 'Tao', why: 'Repetition slows the rhythm.' },
          { text: 'the engineer', why: 'Distancing.' }
        ]},
        { role: 'Powerful verb', options: [
          { text: 'slammed', correct: true },
          { text: 'pushed',  why: 'Basic.' },
          { text: 'pressed', why: 'Bland.' }
        ]},
        { role: 'Detail', options: [
          { text: 'his fist into the red emergency stud', correct: true },
          { text: 'a button somewhere',                    why: 'Vague.' },
          { text: 'it really hard',                         why: 'Tell-adverb.' }
        ]},
        { role: 'Closer', options: [
          { text: ' and held his breath.', correct: true },
          { text: '.',                      why: 'Misses payoff.' },
          { text: ' really tightly.',        why: 'Tell-adverb.' }
        ]}
      ]},
      { opener: 'For a moment that lasted forever,', slots: [
        { role: 'Subject', options: [
          { text: 'the alarms', correct: true },
          { text: 'everything', why: 'Vague.' },
          { text: 'it',         why: 'Pronoun without antecedent.' }
        ]},
        { role: 'Vivid verb', options: [
          { text: 'died', correct: true },
          { text: 'stopped', why: 'Bland.' },
          { text: 'went off', why: 'Wordy + flat.' }
        ]},
        { role: 'Detail', options: [
          { text: 'into a single, ringing silence', correct: true },
          { text: 'really quietly',                  why: 'Tell-adverb.' },
          { text: 'a lot',                           why: 'Vague.' }
        ]},
        { role: 'Closer', options: [
          { text: ', and Tao, dripping and laughing, slid down the cool metal wall.', correct: true },
          { text: ', and he was happy.',                                                why: 'Tells the emotion.' },
          { text: '.',                                                                   why: 'Misses payoff.' }
        ]}
      ]}
    ]
  }
];
