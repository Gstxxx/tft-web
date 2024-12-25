import { Champion } from '../types/game';

export const SAMPLE_CHAMPIONS: Champion[] = [
  {
    id: 'amumu-1',
    name: 'Amumu',
    cost: 1,
    health: 500,
    maxHealth: 500,
    attackDamage: 50,
    attackSpeed: 0.7,
    mana: { current: 0, max: 0 },
    traits: {
      origin: ['Autômato'],
      class: ['Observador']
    },
    stars: 1,
    ability: {
      name: 'Obsolete Technology',
      description: 'Reduce all incoming damage. Every second, emit sparks that deal magic damage to adjacent enemies.',
      manaCost: { initial: 0, total: 0 },
      damage: [10, 15, 25],
      effects: ['Damage reduction: 12/15/25']
    }
  },
  {
    id: 'powder-1',
    name: 'Powder',
    cost: 1,
    health: 500,
    maxHealth: 500,
    attackDamage: 50,
    attackSpeed: 0.7,
    mana: { current: 40, max: 120 },
    traits: {
      origin: ['Família'],
      class: ['Sucateiro', 'Emboscador']
    },
    stars: 1,
    ability: {
      name: 'Misfit Toy',
      description: 'Send a monkey towards the largest group of enemies, causing a 2-hex radius explosion on impact. Enemies hit take magic damage, reduced by for each hex they are away from the epicenter. Wound and Burn applied for 5 seconds to all enemies hit.',
      manaCost: { initial: 40, total: 120 },
      damage: [350, 500, 700],
      effects: ['Wound: 1% Burn applied for 5 seconds']
    }
  },
  {
    id: 'darius-1',
    name: 'Darius',
    cost: 1,
    health: 500,
    maxHealth: 500,
    attackDamage: 50,
    attackSpeed: 0.7,
    mana: { current: 30, max: 70 },
    traits: {
      origin: ['Conquistador'],
      class: ['Observador']
    },
    stars: 1,
    ability: {
      name: 'Decimate',
      description: 'Spin, dealing physical damage to adjacent enemies and healing. Apply a physical damage bleed to target over 4 seconds.',
      manaCost: { initial: 30, total: 70 },
      damage: [132, 198, 297],
      effects: ['Healing: 150/175/200', 'Bleed: 110/165/248 over 4 seconds']
    }
  },
  {
    id: 'draven-1',
    name: 'Draven',
    cost: 1,
    health: 500,
    maxHealth: 500,
    attackDamage: 50,
    attackSpeed: 0.7,
    mana: { current: 30, max: 60 },
    traits: {
      origin: ['Conquistador'],
      class: ['Lutador Feroz']
    },
    stars: 1,
    ability: {
      name: 'Spinning Axes',
      description: 'Passive: If Draven has an empowered axe in hand, his next attack will throw it, dealing a total of physical damage. Empowered axes return to Draven after hitting an enemy. Active: Spin an empowered axe.',
      manaCost: { initial: 30, total: 60 },
      damage: [87, 130, 198],
      passive: 'Empowered axes return to Draven after hitting an enemy'
    }
  },
  {
    id: 'steb-1',
    name: 'Steb',
    cost: 1,
    health: 500,
    maxHealth: 500,
    attackDamage: 50,
    attackSpeed: 0.7,
    mana: { current: 30, max: 90 },
    traits: {
      origin: ['Defensor'],
      class: ['Brutamontes']
    },
    stars: 1,
    ability: {
      name: 'Field Medicine',
      description: 'Passive: On heal, heal the 2 closest allies for 25% of the amount. Active: Heal and strike target for magic damage.',
      manaCost: { initial: 30, total: 90 },
      damage: [270, 310, 360],
      effects: ['Heal: 270/310/360', 'Strike: 260/390/585']
    }
  },
  {
    id: 'irelia-1',
    name: 'Irelia',
    cost: 1,
    health: 500,
    maxHealth: 500,
    attackDamage: 50,
    attackSpeed: 0.7,
    mana: { current: 30, max: 70 },
    traits: {
      origin: ['Rebelde'],
      class: ['Sentinela']
    },
    stars: 1,
    ability: {
      name: 'Defiant Dance',
      description: 'Enter a defensive stance and gain Shield that rapidly decays over 3 seconds. When it expires, deal magic damage + of the damage absorbed to enemies around and in front of Irelia.',
      manaCost: { initial: 30, total: 70 },
      damage: [400, 475, 575],
      effects: ['Shield: 400/475/575', 'Damage: 70/100/150 + 30% of the damage absorbed']
    }
  },
  {
    id: 'lux-1',
    name: 'Lux',
    cost: 1,
    health: 500,
    maxHealth: 500,
    attackDamage: 50,
    attackSpeed: 0.7,
    mana: { current: 0, max: 50 },
    traits: {
      origin: ['Acadêmico'],
      class: ['Feiticeiro']
    },
    stars: 1,
    ability: {
      name: 'Prismatic Barrier',
      description: 'Grant Shield to the lowest current Health ally. Lux\'s next attack deals bonus magic damage.',
      manaCost: { initial: 0, total: 50 },
      damage: [360, 540, 900],
      effects: ['Shield: 160/180/240', 'Bonus Damage: 360/540/900']
    }
  },
  {
    id: 'morgana-1',
    name: 'Morgana',
    cost: 1,
    health: 500,
    maxHealth: 500,
    attackDamage: 50,
    attackSpeed: 0.7,
    mana: { current: 0, max: 40 },
    traits: {
      origin: ['Rosa Negra'],
      class: ['Visionário']
    },
    stars: 1,
    ability: {
      name: 'Tormented Soul',
      description: 'Curse the nearest non-cursed enemy, dealing magic damage over 10 seconds and reducing the effectiveness of shields used on them by 50%.',
      manaCost: { initial: 0, total: 40 },
      damage: [525, 780, 1300],
      effects: ['Curse: 525/780/1300', 'Shield Reduction: 50%']
    }
  },
  {
    id: 'violet-1',
    name: 'Violet',
    cost: 1,
    health: 500,
    maxHealth: 500,
    attackDamage: 50,
    attackSpeed: 0.7,
    mana: { current: 20, max: 65 },
    traits: {
      origin: ['Família'],
      class: ['Lutador Feroz']
    },
    stars: 1,
    ability: {
      name: '1-2-3 Combo',
      description: 'Jab target 2 times for physical damage each. Then uppercut them, dealing physical damage and briefly knocking them up.',
      manaCost: { initial: 20, total: 65 },
      damage: [68, 101, 152],
      effects: ['Jab Damage: 68/101/152', 'Uppercut Damage: 185/277/416']
    }
  },
  {
    id: 'maddie-1',
    name: 'Maddie',
    cost: 1,
    health: 500,
    maxHealth: 500,
    attackDamage: 50,
    attackSpeed: 0.7,
    mana: { current: 20, max: 120 },
    traits: {
      origin: ['Defensor'],
      class: ['Atirador de Elite']
    },
    stars: 1,
    ability: {
      name: 'Fan the Hammer',
      description: 'Fire 6 shots towards the farthest enemy that deal physical damage to the first enemy they hit.',
      manaCost: { initial: 20, total: 120 },
      damage: [73, 109, 182],
      effects: ['Shot Damage: 73/109/182', 'Ricochet Damage: 73/109/182']
    }
  },
  {
    id: 'singed-1',
    name: 'Singed',
    cost: 1,
    health: 500,
    maxHealth: 500,
    attackDamage: 50,
    attackSpeed: 0.7,
    mana: { current: 0, max: 50 },
    traits: {
      origin: ['Barão da Química'],
      class: ['Sentinela']
    },
    stars: 1,
    ability: {
      name: 'Dangerous Mutations',
      description: 'Gain Durability and grant the ally who has dealt the most damage this round Attack Speed, decaying over 4 seconds.',
      manaCost: { initial: 0, total: 50 },
      damage: [50, 50, 60],
      effects: ['Durability: 50/50/60%', 'Attack Speed: 100/120/160%']
    }
  },
  {
    id: 'trundle-1',
    name: 'Trundle',
    cost: 1,
    health: 500,
    maxHealth: 500,
    attackDamage: 50,
    attackSpeed: 0.7,
    mana: { current: 30, max: 90 },
    traits: {
      origin: ['Sucateiro'],
      class: ['Brutamontes']
    },
    stars: 1,
    ability: {
      name: 'Desperate Chomp',
      description: 'Heal and chomp target. Both effects are increased by up to based on Trundle\'s missing Health.',
      manaCost: { initial: 30, total: 90 },
      damage: [200, 220, 250],
      effects: ['Heal: 200/220/250', 'Chomp Damage: 140/210/315']
    }
  },
  {
    id: 'vex-1',
    name: 'Vex',
    cost: 1,
    health: 500,
    maxHealth: 500,
    attackDamage: 50,
    attackSpeed: 0.7,
    mana: { current: 0, max: 60 },
    traits: {
      origin: ['Rebelde'],
      class: ['Visionário']
    },
    stars: 1,
    ability: {
      name: 'Looming Darkness',
      description: 'Deal magic damage to target and create a one-hex radius zone of darkness around them. After a brief delay, deal magic damage to enemies still in the zone.',
      manaCost: { initial: 0, total: 60 },
      damage: [220, 330, 550],
      effects: ['Darkness Damage: 220/330/550', 'Zone Damage: 110/165/275']
    }
  },
  {
    id: 'zyra-1',
    name: 'Zyra',
    cost: 1,
    health: 500,
    maxHealth: 500,
    attackDamage: 50,
    attackSpeed: 0.7,
    mana: { current: 10, max: 60 },
    traits: {
      origin: ['Experimento'],
      class: ['Feiticeiro']
    },
    stars: 1,
    ability: {
      name: 'Grasping Roots',
      description: 'Send vines towards the current target, Stunning them and dealing magic damage. Then smaller vines seek out the 2 nearest enemies and deal magic damage to them.',
      manaCost: { initial: 10, total: 60 },
      damage: [260, 390, 585],
      effects: ['Stun Damage: 260/390/585', 'Vine Damage: 95/140/215']
    }
  },
  {
    id: 'akali-2',
    name: 'Akali',
    cost: 2,
    health: 750,
    maxHealth: 750,
    attackDamage: 60,
    attackSpeed: 0.8,
    mana: { current: 0, max: 60 },
    traits: {
      origin: ['Rebelde'],
      class: ['Célere']
    },
    stars: 2,
    ability: {
      name: 'Shuriken Flip',
      description: 'Throw a shuriken at target, dealing magic damage and marking them to take more damage for 4 seconds. Then dash away from target. After a brief delay, dash towards them and deal magic damage.',
      manaCost: { initial: 0, total: 60 },
      damage: [80, 120, 185],
      effects: ['Shuriken Damage: 80/120/185', 'Dash Damage: 240/360/550']
    }
  },
  {
    id: 'camille-2',
    name: 'Camille',
    cost: 2,
    health: 750,
    maxHealth: 750,
    attackDamage: 60,
    attackSpeed: 0.8,
    mana: { current: 0, max: 25 },
    traits: {
      origin: ['Defensor'],
      class: ['Emboscador']
    },
    stars: 2,
    ability: {
      name: 'Adaptive Strike',
      description: 'Kick the target, dealing Adaptive Damage. Heal for 33% of the damage dealt.',
      manaCost: { initial: 0, total: 25 },
      damage: [145, 217, 362],
      effects: ['Adaptive Damage: 145/217/362', 'Heal: 33% of damage dealt']
    }
  },
  {
    id: 'leona-2',
    name: 'Leona',
    cost: 2,
    health: 750,
    maxHealth: 750,
    attackDamage: 60,
    attackSpeed: 0.8,
    mana: { current: 50, max: 90 },
    traits: {
      origin: ['Acadêmico'],
      class: ['Sentinela']
    },
    stars: 2,
    ability: {
      name: 'Eclipse',
      description: 'Fortify for 3 seconds, gaining Durability. Afterwards, deal magic damage to adjacent enemies.',
      manaCost: { initial: 50, total: 90 },
      damage: [115, 175, 270],
      effects: ['Fortify: 0.5 Durability', 'Eclipse Damage: 115/175/270']
    }
  },
  {
    id: 'nocturne-2',
    name: 'Nocturne',
    cost: 2,
    health: 750,
    maxHealth: 750,
    attackDamage: 60,
    attackSpeed: 0.8,
    mana: { current: 0, max: 40 },
    traits: {
      origin: ['Autômato'],
      class: ['Célere']
    },
    stars: 2,
    ability: {
      name: 'Overdrive Blades',
      description: 'For 6 seconds, attacks also cause adjacent enemies to bleed for physical damage over 1 second.',
      manaCost: { initial: 0, total: 40 },
      damage: [93, 142, 245],
      effects: ['Bleed Damage: 93/142/245']
    }
  },
  {
    id: 'vander-2',
    name: 'Vander',
    cost: 2,
    health: 750,
    maxHealth: 750,
    attackDamage: 60,
    attackSpeed: 0.8,
    mana: { current: 0, max: 50 },
    traits: {
      origin: ['Família'],
      class: ['Observador']
    },
    stars: 2,
    ability: {
      name: 'Hound of the Underground',
      description: 'Stop attacking and brace for 2.5 seconds, gaining Armor and Magic Resist. Vander\'s next attack is replaced with a strike that deals physical damage, increased by physical damage for each 1 or 2 cost champion on your team.',
      manaCost: { initial: 0, total: 50 },
      damage: [200, 300, 450],
      effects: ['Brace: 100/125/150 Armor and Magic Resist', 'Strike Damage: 200/300/450 + 50/75/113 per 1 or 2 cost champion']
    }
  },
  {
    id: 'rell-2',
    name: 'Rell',
    cost: 2,
    health: 750,
    maxHealth: 750,
    attackDamage: 60,
    attackSpeed: 0.8,
    mana: { current: 40, max: 90 },
    traits: {
      origin: ['Conquistador'],
      class: ['Visionário', 'Sentinela']
    },
    stars: 2,
    ability: {
      name: 'Shattering Strike',
      description: 'Gain Shield for 4 seconds. Lance enemies in a line for magic damage and steal Armor and Magic Resist from enemies hit.',
      manaCost: { initial: 40, total: 90 },
      damage: [300, 350, 400],
      effects: ['Shield: 300/350/400', 'Lance Damage: 120/180/270', 'Steal: 10/12/15 Armor and Magic Resist']
    }
  },
  {
    id: 'renata-glasc-2',
    name: 'Renata Glasc',
    cost: 2,
    health: 750,
    maxHealth: 750,
    attackDamage: 60,
    attackSpeed: 0.8,
    mana: { current: 20, max: 80 },
    traits: {
      origin: ['Barão da Química'],
      class: ['Visionário']
    },
    stars: 2,
    ability: {
      name: 'Loyalty Program',
      description: 'Fire a pair of missiles at target. Allies they pass through gain 95 / 120 / 150 Shield for 3 seconds. When they collide, they deal 310 / 465 / 700 magic damage to target and 155 / 230 / 350 magic damage to adjacent enemies.',
      manaCost: { initial: 20, total: 80 },
      damage: [310, 465, 700],
      effects: ['Shield: 95/120/150', 'Missile Damage: 310/465/700', 'Adjacent Damage: 155/230/350']
    }
  },
  {
    id: 'sett-2',
    name: 'Sett',
    cost: 2,
    health: 800,
    maxHealth: 800,
    attackDamage: 65,
    attackSpeed: 0.75,
    mana: { current: 50, max: 100 },
    traits: {
      origin: ['Rebelde'],
      class: ['Brutamontes']
    },
    stars: 2,
    ability: {
      name: 'Facebreaker',
      description: 'Pull in an enemy on either side and slam them together, dealing 180 / 270 / 420 magic damage and Stunning them for 1.5 / 1.5 / 2 seconds. If only one enemy is grabbed, the damage and Stun duration are increased by 50%.',
      manaCost: { initial: 50, total: 100 },
      damage: [180, 270, 420],
      effects: ['Stun: 1.5/1.5/2 seconds', 'Increased Damage and Stun: 50%']
    }
  },
  {
    id: 'tristana-2',
    name: 'Tristana',
    cost: 2,
    health: 600,
    maxHealth: 600,
    attackDamage: 70,
    attackSpeed: 0.9,
    mana: { current: 20, max: 60 },
    traits: {
      origin: ['Emissário'],
      class: ['Artilharia']
    },
    stars: 2,
    ability: {
      name: 'Draw a Bead',
      description: 'Fire a cannonball at target, dealing 271 / 406 / 611 physical damage. If they die, the cannonball ricochets to the nearest enemy, dealing the overkill damage. When it does, permanently gain 1.0% Attack Damage.',
      manaCost: { initial: 20, total: 60 },
      damage: [271, 406, 611],
      effects: ['Ricochet Damage: Overkill Damage', 'Permanent Attack Damage: 1.0%']
    }
  },
  {
    id: 'urgot-2',
    name: 'Urgot',
    cost: 2,
    health: 700,
    maxHealth: 700,
    attackDamage: 65,
    attackSpeed: 0.75,
    mana: { current: 20, max: 70 },
    traits: {
      origin: ['Experimento'],
      class: ['Artilharia', 'Lutador Feroz']
    },
    stars: 2,
    ability: {
      name: 'Corrosive Charge',
      description: 'Fire an explosive charge, dealing 150 / 225 / 371 physical damage to target and 75 / 113 / 186 physical damage to adjacent enemies. 20% Sunder all enemies hit for 6 seconds.',
      manaCost: { initial: 20, total: 70 },
      damage: [150, 225, 371],
      effects: ['Adjacent Damage: 75/113/186', 'Sunder: 20% for 6 seconds']
    }
  },
  {
    id: 'vladimir-2',
    name: 'Vladimir',
    cost: 2,
    health: 650,
    maxHealth: 650,
    attackDamage: 55,
    attackSpeed: 0.7,
    mana: { current: 0, max: 65 },
    traits: {
      origin: ['Rosa Negra'],
      class: ['Feiticeiro', 'Observador']
    },
    stars: 2,
    ability: {
      name: 'Transfusion',
      description: 'Heal 200 / 240 / 300 and deal 140 / 210 / 325 magic damage to the target.',
      manaCost: { initial: 0, total: 65 },
      damage: [140, 210, 325],
      effects: ['Heal: 200/240/300']
    }
  },
  {
    id: 'zeri-2',
    name: 'Zeri',
    cost: 2,
    health: 600,
    maxHealth: 600,
    attackDamage: 70,
    attackSpeed: 0.85,
    mana: { current: 0, max: 3 },
    traits: {
      origin: ['Fogolume'],
      class: ['Atirador de Elite']
    },
    stars: 2,
    ability: {
      name: 'Living Battery',
      description: 'Passive: Every 3rd attack is replaced with a spark that deals 100 / 150 / 223 physical damage to target and 23 / 34 / 51 physical damage to 2 nearby enemies.',
      manaCost: { initial: 0, total: 3 },
      damage: [100, 150, 223],
      effects: ['Nearby Damage: 23/34/51']
    }
  },
  {
    id: 'ziggs-2',
    name: 'Ziggs',
    cost: 2,
    health: 550,
    maxHealth: 550,
    attackDamage: 50,
    attackSpeed: 0.75,
    mana: { current: 15, max: 60 },
    traits: {
      origin: ['Sucateiro'],
      class: ['Dominador']
    },
    stars: 2,
    ability: {
      name: 'Bomb Full of Bombs',
      description: 'Toss a bomb at target, dealing 180 / 270 / 450 magic damage. 3 mini-bombs fly out, dealing 90 / 135 / 200 magic damage to random enemies.',
      manaCost: { initial: 15, total: 60 },
      damage: [180, 270, 450],
      effects: ['Mini-bomb Damage: 90/135/200']
    }
  },
  {
    id: 'loris-3',
    name: 'Loris',
    cost: 3,
    health: 800,
    maxHealth: 800,
    attackDamage: 70,
    attackSpeed: 0.7,
    mana: { current: 50, max: 90 },
    traits: {
      origin: ['Defensor'],
      class: ['Sentinela']
    },
    stars: 3,
    ability: {
      name: 'Piltover Bulwark',
      description: 'Gain 525 / 600 / 700 Shield for 4 seconds. It redirects 50% of damage taken by adjacent allies. When it expires, deal 150 / 225 / 360 magic damage in a cone.',
      manaCost: { initial: 50, total: 90 },
      damage: [150, 225, 360],
      effects: ['Shield: 525/600/700', 'Damage Redirection: 50%']
    }
  },
  {
    id: 'blitzcrank-3',
    name: 'Blitzcrank',
    cost: 3,
    health: 900,
    maxHealth: 900,
    attackDamage: 60,
    attackSpeed: 0.6,
    mana: { current: 20, max: 70 },
    traits: {
      origin: ['Autômato'],
      class: ['Dominador']
    },
    stars: 3,
    ability: {
      name: 'Static Field',
      description: 'Passive: After surviving damage, deal 3% of the damage absorbed as magic damage to target. Active: Gain 470 / 500 / 550 Shield for 4 seconds. Shock the nearest 3 enemies for 40 / 60 / 100 magic damage and reduce their damage by 10% for 4 seconds.',
      manaCost: { initial: 20, total: 70 },
      damage: [40, 60, 100],
      effects: ['Shield: 470/500/550', 'Damage Reduction: 10% for 4 seconds']
    }
  },
  {
    id: 'cassiopeia-3',
    name: 'Cassiopeia',
    cost: 3,
    health: 700,
    maxHealth: 700,
    attackDamage: 55,
    attackSpeed: 0.65,
    mana: { current: 10, max: 40 },
    traits: {
      origin: ['Rosa Negra'],
      class: ['Dominador']
    },
    stars: 3,
    ability: {
      name: 'Thorned Miasma',
      description: 'Blast target for 230 / 345 / 550 magic damage. Every third cast, splash miasma to 2 enemies within 3 hexes, dealing 160 / 240 / 385 magic damage to each.',
      manaCost: { initial: 10, total: 40 },
      damage: [230, 345, 550],
      effects: ['Splash Damage: 160/240/385']
    }
  },
  {
    id: 'renni-3',
    name: 'Renni',
    cost: 3,
    health: 850,
    maxHealth: 850,
    attackDamage: 65,
    attackSpeed: 0.7,
    mana: { current: 40, max: 100 },
    traits: {
      origin: ['Barão da Química'],
      class: ['Brutamontes']
    },
    stars: 3,
    ability: {
      name: 'Sludgerunner\'s Smash',
      description: 'Heal 300 / 325 / 375 over 1.5 seconds. For the duration, raise target into the air, Stunning them, and dealing 275 / 413 / 619 physical damage. Afterwards, slam them down, dealing 110 / 165 / 248 physical damage to all adjacent enemies.',
      manaCost: { initial: 40, total: 100 },
      damage: [275, 413, 619],
      effects: ['Heal: 300/325/375', 'Adjacent Damage: 110/165/248']
    }
  },
  {
    id: 'ezreal-3',
    name: 'Ezreal',
    cost: 3,
    health: 700,
    maxHealth: 700,
    attackDamage: 60,
    attackSpeed: 0.75,
    mana: { current: 0, max: 60 },
    traits: {
      origin: ['Acadêmico'],
      class: ['Rebelde', 'Artilharia']
    },
    stars: 3,
    ability: {
      name: 'Essence Flux',
      description: 'Fire a shot towards current target that deals 101 / 152 / 232 physical damage to all enemies within 1 hex. Then, deal 182 / 273 / 415 physical damage to the unit in the center of the blast.',
      manaCost: { initial: 0, total: 60 },
      damage: [101, 152, 232],
      effects: ['Center Damage: 182/273/415']
    }
  },
  {
    id: 'scar-3',
    name: 'Scar',
    cost: 3,
    health: 750,
    maxHealth: 750,
    attackDamage: 65,
    attackSpeed: 0.7,
    mana: { current: 80, max: 170 },
    traits: {
      origin: ['Fogolume'],
      class: ['Observador']
    },
    stars: 3,
    ability: {
      name: 'Sumpsnipe Surprise',
      description: 'Lob bombs at the nearest 3 enemies, Stunning them for 1.5 / 1.5 / 1.75 seconds and dealing 80 / 120 / 180 magic damage to each. Heal 220 / 240 / 270.',
      manaCost: { initial: 80, total: 170 },
      damage: [80, 120, 180],
      effects: ['Stun: 1.5/1.5/1.75 seconds', 'Heal: 220/240/270']
    }
  },
  {
    id: 'gangplank-3',
    name: 'Gangplank',
    cost: 3,
    health: 800,
    maxHealth: 800,
    attackDamage: 70,
    attackSpeed: 0.75,
    mana: { current: 0, max: 10 },
    traits: {
      origin: ['Sucateiro'],
      class: ['Trocaformas', 'Lutador Feroz']
    },
    stars: 3,
    ability: {
      name: 'Harvest from Flames',
      description: 'Restore 100 / 125 / 150 Health. Then slash, dealing 170 / 255 / 383 physical damage to enemies in a line. If only one enemy is hit, the damage is doubled.',
      manaCost: { initial: 0, total: 10 },
      damage: [170, 255, 383],
      effects: ['Heal: 100/125/150', 'Double Damage: If only one enemy is hit']
    }
  },
  {
    id: 'smeech-3',
    name: 'Smeech',
    cost: 3,
    health: 750,
    maxHealth: 750,
    attackDamage: 65,
    attackSpeed: 0.8,
    mana: { current: 20, max: 80 },
    traits: {
      origin: ['Barão da Química'],
      class: ['Emboscador']
    },
    stars: 3,
    ability: {
      name: 'Scrap Hacker',
      description: 'Leap towards the enemy with the fewest items within 4 hexes. Slash 3 times, dealing a total of 420 / 630 / 958 physical damage. If they die, leap again, dealing 30% less damage.',
      manaCost: { initial: 20, total: 80 },
      damage: [420, 630, 958],
      effects: ['Reduced Damage: 30% less on leap']
    }
  },
  {
    id: 'kog\'maw-3',
    name: 'Kog\'Maw',
    cost: 3,
    health: 700,
    maxHealth: 700,
    attackDamage: 60,
    attackSpeed: 0.75,
    mana: { current: 0, max: 40 },
    traits: {
      origin: ['Autômato'],
      class: ['Atirador de Elite']
    },
    stars: 3,
    ability: {
      name: 'Upgrading Barrage Module',
      description: 'Passive: Attacks deal 48 / 72 / 120 bonus magic damage. Active: Gain 25% stacking Attack Speed for the rest of combat. After every 3 casts, gain +1 Range.',
      manaCost: { initial: 0, total: 40 },
      damage: [48, 72, 120],
      effects: ['Stacking Attack Speed: 25%', 'Range Increase: +1 after every 3 casts']
    }
  },
  {
    id: 'nami-3',
    name: 'Nami',
    cost: 3,
    health: 650,
    maxHealth: 650,
    attackDamage: 55,
    attackSpeed: 0.7,
    mana: { current: 0, max: 60 },
    traits: {
      origin: ['Emissário'],
      class: ['Feiticeiro']
    },
    stars: 3,
    ability: {
      name: 'Ocean\'s Ebb',
      description: 'Launch a wave at target that bounces 3 times to enemies within 3 hexes and deals 120 / 180 / 290 magic damage.',
      manaCost: { initial: 0, total: 60 },
      damage: [120, 180, 290],
      effects: ['Bounce: 3 times']
    }
  },
  {
    id: 'nunu-willump-3',
    name: 'Nunu & Willump',
    cost: 3,
    health: 900,
    maxHealth: 900,
    attackDamage: 70,
    attackSpeed: 0.65,
    mana: { current: 60, max: 125 },
    traits: {
      origin: ['Experimento'],
      class: ['Brutamontes', 'Visionário']
    },
    stars: 3,
    ability: {
      name: 'ZOMBIE POWER!!',
      description: 'For 3 seconds, gain 50 / 50 / 55% Durability and create a 2-hex cloud of noxious fumes that deals 30 / 45 / 65 magic damage to enemies within. Afterwards, detonate the cloud and deal 150 / 225 / 340 magic damage to all enemies within.',
      manaCost: { initial: 60, total: 125 },
      damage: [30, 45, 65],
      effects: ['Cloud Damage: 150/225/340', 'Durability: 50/50/55%']
    }
  },
  {
    id: 'swain-3',
    name: 'Swain',
    cost: 3,
    health: 800,
    maxHealth: 800,
    attackDamage: 65,
    attackSpeed: 0.7,
    mana: { current: 0, max: 10 },
    traits: {
      origin: ['Conquistador'],
      class: ['Trocaformas', 'Feiticeiro']
    },
    stars: 3,
    ability: {
      name: 'Demonic Ascension',
      description: 'Heal 240 / 300 / 380 () and ascend for 6 seconds. While ascended, heal 70 / 90 / 125 () and deal 40 / 60 / 95 () magic damage to adjacent enemies every second. On takedown, the ascension\'s duration is extended by 2 seconds.',
      manaCost: { initial: 0, total: 10 },
      damage: [40, 60, 95],
      effects: ['Heal: 240/300/380', 'Ascend Duration: 6s', 'Heal: 70/90/125', 'Damage: 40/60/95']
    }
  },
  {
    id: 'twisted-fate-3',
    name: 'Twisted Fate',
    cost: 3,
    health: 700,
    maxHealth: 700,
    attackDamage: 55,
    attackSpeed: 0.7,
    mana: { current: 0, max: 10 },
    traits: {
      origin: ['Defensor'],
      class: ['Célere']
    },
    stars: 3,
    ability: {
      name: 'Wild Cards',
      description: 'Throw 3 cards at different targets.',
      manaCost: { initial: 25, total: 75 },
      effects: ['Heal: 240/300/380', 'Damage: 40/60/95']
    }
  },
  {
    id: 'ambessa-3',
    name: 'Ambessa',
    cost: 4,
    health: 900,
    maxHealth: 900,
    attackDamage: 80,
    attackSpeed: 0.6,
    mana: { current: 0, max: 90 },
    traits: {
      origin: ['Emissário'],
      class: ['Conquistador', 'Célere']
    },
    stars: 3,
    ability: {
      name: 'Unrelenting Huntress',
      description: 'Ambessa switches between two stances on cast: Chains: Gain +1 Range. Attacks deal 98 / 146 / 512 physical damage. On cast, dash to target and strike in a half-circle, dealing 163 / 244 / 731 physical damage to enemies hit. Fists: Gain 25 / 25 / 45 Omnivamp and attack twice as fast. On cast, briefly Stun target before slamming them into the ground, dealing 325 / 488 / 1755 physical damage, then dash away.',
      manaCost: { initial: 40, total: 90 },
      effects: ['Chains Damage: 163/244/731', 'Fists Damage: 325/488/1755']
    }
  },
  {
    id: 'corki-3',
    name: 'Corki',
    cost: 4,
    health: 800,
    maxHealth: 800,
    attackDamage: 70,
    attackSpeed: 0.75,
    mana: { current: 0, max: 60 },
    traits: {
      origin: ['Sucateiro'],
      class: ['Artilharia']
    },
    stars: 3,
    ability: {
      name: 'Broadside Barrage',
      description: 'Lock onto target and strafe to a nearby position, unleashing 21 / 21 / 35 missiles split between the target and all enemies within two hexes. Each missile deals 29 / 43 / 124 physical damage and reduces Armor by 1. Every 7th missile deals 30 / 41 / 95 physical damage and reduces Armor by 1.',
      manaCost: { initial: 0, total: 60 },
      effects: ['Missile Damage: 29/43/124', '7th Missile Damage: 30/41/95']
    }
  },
  {
    id: 'dr-mundo-3',
    name: 'Dr. Mundo',
    cost: 4,
    health: 1000,
    maxHealth: 1000,
    attackDamage: 75,
    attackSpeed: 0.65,
    mana: { current: 30, max: 100 },
    traits: {
      origin: ['Experimento'],
      class: ['Dominador']
    },
    stars: 3,
    ability: {
      name: 'Maximum Dosage',
      description: 'Become energized and heal 848 / 1106 / 3142 over 2 seconds. While energized, deal 120 / 180 / 1000 magic damage to a nearby enemy each second. Afterwards, deal 77 / 139 / 1247 magic damage to all enemies within 2 hexes. Experiment Bonus: Gain 120 max Health. On each takedown, gain 60 more max Health.',
      manaCost: { initial: 30, total: 100 },
      effects: ['Heal: 848/1106/3142', 'Damage: 120/180/1000']
    }
  },
  {
    id: 'ekko-3',
    name: 'Ekko',
    cost: 4,
    health: 850,
    maxHealth: 850,
    attackDamage: 65,
    attackSpeed: 0.7,
    mana: { current: 0, max: 60 },
    traits: {
      origin: ['Fogolume'],
      class: ['Sucateiro', 'Emboscador']
    },
    stars: 3,
    ability: {
      name: 'Splitting Seconds',
      description: 'Summon an assault of afterimages that deals 290 / 435 / 1200 magic damage to the target and 145 / 215 / 450 magic damage to 2 / 2 / 4 other nearby enemies. Afterimages reduce their target\'s Magic Resist by 5 for the rest of combat.',
      manaCost: { initial: 0, total: 60 },
      effects: ['Damage: 290/435/1200', 'Secondary Damage: 145/215/450']
    }
  },
  {
    id: 'elise-3',
    name: 'Elise',
    cost: 4,
    health: 750,
    maxHealth: 750,
    attackDamage: 60,
    attackSpeed: 0.8,
    mana: { current: 0, max: 10 },
    traits: {
      origin: ['Rosa Negra'],
      class: ['Brutamontes', 'Trocaformas']
    },
    stars: 3,
    ability: {
      name: 'Cocoon',
      description: 'Jump to a nearby hex and web all enemies within 2 hexes, Stunning them for 1.75 / 2 / 8 seconds and dealing 120 / 180 / 1200 magic damage. Heal 400 / 450 / 2000.',
      manaCost: { initial: 0, total: 10 },
      effects: ['Stun Duration: 1.75/2/8', 'Damage: 120/180/1200']
    }
  },
  {
    id: 'garen-3',
    name: 'Garen',
    cost: 4,
    health: 950,
    maxHealth: 950,
    attackDamage: 80,
    attackSpeed: 0.6,
    mana: { current: 60, max: 125 },
    traits: {
      origin: ['Emissário'],
      class: ['Observador']
    },
    stars: 3,
    ability: {
      name: 'Demacian Justice',
      description: 'Passive: After dealing damage, heal 15 / 27 / 162. Active: Gain 215 / 235 / 1515 Shield for 4 seconds. Slam a massive sword on target, dealing 163 / 244 / 2194 physical damage to them and 81 / 122 / 1097 physical damage to enemies within 2 hexes.',
      manaCost: { initial: 60, total: 125 },
      effects: ['Heal: 15/27/162', 'Shield: 215/235/1515']
    }
  },
  {
    id: 'heimerdinger-3',
    name: 'Heimerdinger',
    cost: 4,
    health: 700,
    maxHealth: 700,
    attackDamage: 55,
    attackSpeed: 0.75,
    mana: { current: 0, max: 40 },
    traits: {
      origin: ['Acadêmico'],
      class: ['Visionário']
    },
    stars: 3,
    ability: {
      name: 'PROGRESSSSS!',
      description: 'Fire 5 / 5 / 7 missiles at random enemies that deal 50 / 75 / 225 magic damage. Each cast fires 1 more missile than the last.',
      manaCost: { initial: 0, total: 40 },
      effects: ['Missile Damage: 50/75/225']
    }
  },
  {
    id: 'illaoi-3',
    name: 'Illaoi',
    cost: 4,
    health: 900,
    maxHealth: 900,
    attackDamage: 70,
    attackSpeed: 0.65,
    mana: { current: 65, max: 125 },
    traits: {
      origin: ['Rebelde'],
      class: ['Sentinela']
    },
    stars: 3,
    ability: {
      name: 'Test of Spirit',
      description: 'Gain 50 / 50 / 90% Durability for 3 seconds. Over the duration, drain 50 / 75 / 225 Health from the nearest 4 / 4 / 10 enemies. Then slam down, dealing 72 / 194 / 2722 magic damage to all enemies within 2 hexes.',
      manaCost: { initial: 65, total: 125 },
      effects: ['Durability: 50/50/90%', 'Drain: 50/75/225']
    }
  },
  {
    id: 'silco-3',
    name: 'Silco',
    cost: 4,
    health: 800,
    maxHealth: 800,
    attackDamage: 60,
    attackSpeed: 0.7,
    mana: { current: 30, max: 80 },
    traits: {
      origin: ['Barão da Química'],
      class: ['Dominador']
    },
    stars: 3,
    ability: {
      name: 'Canned Monstrosity',
      description: 'Throw a canister at target, dealing 100 / 200 / 1000 magic damage to them and releasing 4 / 4 / 8 monstrosities. Monstrosities attack 5 times and deal 38 / 57 / 100 magic damage per attack.',
      manaCost: { initial: 30, total: 80 },
      effects: ['Damage: 100/200/1000', 'Monstrosity Damage: 38/57/100']
    }
  },
  {
    id: 'twitch-3',
    name: 'Twitch',
    cost: 4,
    health: 750,
    maxHealth: 750,
    attackDamage: 65,
    attackSpeed: 0.8,
    mana: { current: 0, max: 60 },
    traits: {
      origin: ['Experimento'],
      class: ['Atirador de Elite']
    },
    stars: 3,
    ability: {
      name: 'Spray and Pray',
      description: 'For the next 8 attacks, gain 85% Attack Speed, infinite range, and replace attacks with a piercing bolt that targets random enemies. Bolts deal 116 / 172 / 593 physical damage, reduced by 40 / 40 / 20% for each enemy they pass through. Experiment Bonus: After every 5 attacks, deal physical damage to the nearest enemy equal to 15.0% of their max Health.',
      manaCost: { initial: 0, total: 60 },
      effects: ['Bolt Damage: 116/172/593']
    }
  },
  {
    id: 'vi-3',
    name: 'Vi',
    cost: 4,
    health: 900,
    maxHealth: 900,
    attackDamage: 75,
    attackSpeed: 0.7,
    mana: { current: 40, max: 100 },
    traits: {
      origin: ['Defensor'],
      class: ['Lutador Feroz']
    },
    stars: 3,
    ability: {
      name: 'Wrecking Crew',
      description: 'Gain 280 / 325 / 1200 Shield for 3 seconds, then Stun target for 1.5 seconds. Slam them down, dealing 450 / 675 / 2025 physical damage to them and causing a shockwave in their row. Enemies hit take 135 / 202 / 844 physical damage and are briefly knocked up.',
      manaCost: { initial: 40, total: 100 },
      effects: ['Shield: 280/325/1200', 'Damage: 450/675/2025']
    }
  },
  {
    id: 'zoe-3',
    name: 'Zoe',
    cost: 4,
    health: 700,
    maxHealth: 700,
    attackDamage: 60,
    attackSpeed: 0.75,
    mana: { current: 20, max: 80 },
    traits: {
      origin: ['Rebelde'],
      class: ['Feiticeiro']
    },
    stars: 3,
    ability: {
      name: 'Paddle Star!',
      description: 'Launch a star at target that deals 140 / 210 / 450 magic damage. It bounces to the farthest enemy within 4 hexes, then bounces back to the target. This effect repeats 2 / 2 / 4 times, hitting a different enemy each time.',
      manaCost: { initial: 20, total: 80 },
      effects: ['Damage: 140/210/450']
    }
  },
  {
    id: 'caitlyn-5',
    name: 'Caitlyn',
    cost: 5,
    health: 800,
    maxHealth: 800,
    attackDamage: 70,
    attackSpeed: 0.75,
    mana: { current: 0, max: 50 },
    traits: {
      origin: ['Defensor'],
      class: ['Atirador de Elite']
    },
    stars: 3,
    ability: {
      name: 'Air Raid',
      description: 'Enter a sniper\'s stance and call in an airship that circles the battlefield for 5 seconds, dropping 4 / 4 / 20 bombs at a random cluster of enemies over the duration. Bombs deal 168 / 251 / 1484 physical damage in a one-hex circle. Whenever an enemy is caught in the epicenter of an Air Raid blast, reduce their Armor and Magic Resist by 20 and fire a shot towards them, dealing 230 / 344 / 2491 physical damage.',
      manaCost: { initial: 0, total: 50 },
      effects: ['Bomb Damage: 168/251/1484', 'Shot Damage: 230/344/2491']
    }
  },
  {
    id: 'jayce-5',
    name: 'Jayce',
    cost: 5,
    health: 900,
    maxHealth: 900,
    attackDamage: 80,
    attackSpeed: 0.7,
    mana: { current: 0, max: 10 },
    traits: {
      origin: ['Acadêmico'],
      class: ['Trocaformas']
    },
    stars: 3,
    ability: {
      name: 'Special Delivery',
      description: 'Passive: Summon a placeable Hextech Forge. On cast, the 3 allies closest to it gain 200 / 275 / 1800 Shield for 4 seconds. If it\'s dead, revive it with 100% Health. Active: Summon 2 Hexgates and knock target into one of them, dealing 250 / 375 / 2250 physical damage and sending them flying back to their original position. While flying, they deal 113 / 169 / 1688 physical damage to all other enemies in the path.',
      manaCost: { initial: 0, total: 10 },
      effects: ['Shield: 200/275/1800', 'Damage: 250/375/2250']
    }
  },
  {
    id: 'jinx-5',
    name: 'Jinx',
    cost: 5,
    health: 750,
    maxHealth: 750,
    attackDamage: 70,
    attackSpeed: 0.8,
    mana: { current: 0, max: 60 },
    traits: {
      origin: ['Rebelde'],
      class: ['Emboscador']
    },
    stars: 3,
    ability: {
      name: 'Ruin Everything',
      description: 'Jinx alternates between Zap, Flame Chompers, and Death Rocket for her ability. Zap: Deal 159 / 239 / 2700 physical damage to enemies in a line and Stun them for 1.25 / 1.5 / 10 seconds. Flame Chompers: Deal 159 / 239 / 2700 physical damage to 3 1-hex circles of enemies. Death Rocket: Fire a rocket at the center of the board that deals 480 / 720 / 12451 physical damage to ALL enemies, reduced by 10% for each hex they are away from the epicenter.',
      manaCost: { initial: 0, total: 60 },
      effects: ['Zap Damage: 159/239/2700', 'Flame Chompers Damage: 159/239/2700']
    }
  },
  {
    id: 'leblanc-5',
    name: 'LeBlanc',
    cost: 5,
    health: 700,
    maxHealth: 700,
    attackDamage: 60,
    attackSpeed: 0.75,
    mana: { current: 45, max: 90 },
    traits: {
      origin: ['Rosa Negra'],
      class: ['Feiticeiro']
    },
    stars: 3,
    ability: {
      name: 'The Chains of Fate',
      description: 'Chain together the nearest 4 / 4 / 20 enemies for 5 seconds, dealing 650 / 975 / 5000 magic damage split between them. When one takes damage, 18 / 25 / 100% of the amount is split as bonus true damage to the others. LeBlanc\'s next 3 attacks deal 160 / 240 / 900 bonus magic damage, increased by 50% for each enemy killed by the initial damage.',
      manaCost: { initial: 45, total: 90 },
      effects: ['Damage: 650/975/5000', 'Bonus Damage: 160/240/900']
    }
  },
  {
    id: 'sevika-5',
    name: 'Sevika',
    cost: 5,
    health: 800,
    maxHealth: 800,
    attackDamage: 70,
    attackSpeed: 0.7,
    mana: { current: 0, max: 60 },
    traits: {
      origin: ['Barão da Química'],
      class: ['Apostadora']
    },
    stars: 3,
    ability: {
      name: 'Beat the Odds',
      description: 'Randomly cast 1 of 3 spells, with a chance of a Jackpot! Flamethrower: Deal 192 / 288 / 2700 true damage to target every second until death. Enemies in a cone around them take 50% less as physical damage. Extendo-Punch: Deal 240 / 360 / 540 physical damage to target and knock them away. Then, dash to them and deal 104 / 156 / 234 physical damage in a 1 hex radius around them. Chomp: Deal 256 / 384 / 576 physical damage to target. If they are left with less than 15 / 15 / 100% Health, execute them and cast again on the lowest Health target within 2 / 2 / 10 hexes, dealing 80% damage.',
      manaCost: { initial: 0, total: 60 },
      effects: ['Flamethrower Damage: 192/288/2700', 'Extendo-Punch Damage: 240/360/540', 'Chomp Damage: 256/384/576']
    }
  },
  {
    id: 'malzahar-5',
    name: 'Malzahar',
    cost: 5,
    health: 700,
    maxHealth: 700,
    attackDamage: 60,
    attackSpeed: 0.75,
    mana: { current: 30, max: 95 },
    traits: {
      origin: ['Autômato'],
      class: ['Visionário']
    },
    stars: 3,
    ability: {
      name: 'Call of the Machine',
      description: 'Summon a gate in a 5-hex line across target. Enemies hit take 80 / 120 / 1000 () magic damage and are 20% Shredded for 4 seconds. Malzahar spreads 5 stacks of infection between enemies hit. Infection deals 14 / 21 / 400 () magic damage per second for the rest of combat. This effect can stack infinitely. When an infected target dies, they spread their stacks to nearby enemies.',
      manaCost: { initial: 30, total: 95 },
      effects: ['Damage: 80/120/1000', 'Infection Damage: 14/21/400']
    }   
  },
  {
    id: 'mordekaiser-5',
    name: 'Mordekaiser',
    cost: 5,
    health: 800,
    maxHealth: 800,
    attackDamage: 70,
    attackSpeed: 0.7,
    mana: { current: 25, max: 100 },
    traits: {
      origin: ['Conquistador'],
      class: ['Dominador']
    },
    stars: 3,
    ability: {
      name: 'Grasp of the Iron Revenant',
      description: 'Briefly gain 40% Durability and summon a massive claw, dealing 160 / 240 / 800 () magic damage to the most enemies in a line. The 4 closest enemies take 25% more damage and are pulled towards Mordekaiser. For the next 10 seconds, gain 30% Omnivamp, +1 Attack Range, and replace every attack with a slam that deals 330 / 500 / 3000 () magic damage to target and 85 / 125 / 1500 () magic damage to all other enemies within 2 hexes.',
      manaCost: { initial: 25, total: 100 },
      effects: ['Shield: 40% Durability', 'Damage: 160/240/800', 'Shield: 30% Omnivamp', 'Attack Range: +1', 'Damage: 330/500/3000']
    }
  },
  {
    id: 'rumble-5',
    name: 'Rumble',
    cost: 5,
    health: 800,
    maxHealth: 800,
    attackDamage: 70,
    attackSpeed: 0.7,
    mana: { current: 40, max: 120 },
    traits: {
      origin: ['Rei da Sucata'],
      class: ['Sucateiro']
    },
    stars: 3,
    ability: {
      name: 'The Equalizer',
      description: 'Call down a rain of 5 missiles on target\'s row that each deal 500 / 750 / 4000 () magic damage, Wound, and 1% Burn units hit for 5 seconds. For each missile that doesn\'t hit an enemy, restore 20 Mana.',
      manaCost: { initial: 40, total: 120 },
      effects: ['Damage: 500/750/4000', 'Wound: 1% Burn applied for 5 seconds']
    }
  }
];