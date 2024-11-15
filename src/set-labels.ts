import {
  setLabelerLabelDefinitions,
  type LoginCredentials,
} from "@skyware/labeler/scripts";
import { type ComAtprotoLabelDefs } from "@atproto/api";
import "dotenv/config";
import { BSKY_IDENTIFIER, BSKY_PASSWORD } from "./constants.js";

const LABELS = [
  // races
  {
    identifier: "bloodelf",
    enName: "Blood Elf",
    enDescription:
      "For thousands of years, the high elves of Quel'Thalas drew strength from the Sunwell, a magical font of arcane energies. An invasion by the undead Scourge decimated the kingdom's population and deprived them of the Sunwell's might. Taking the name blood elves – or sin’dorei in their own tongue –the people of Quel’Thalas sated their magical thirst for a time with demonic fel energies. Once the Sunwell was restored, the blood elves worked to rebuild their homeland and help lead the Horde into a bold future.",
  },
  {
    identifier: "darkirondwarf",
    enName: "Dark Iron Dwarf",
    enDescription:
      "Known for their fiery tempers and fierce determination, Dark Iron dwarves have a turbulent history with the other clans. A failed coup in Ironforge ignited the War of the Three Hammers, and many of the Dark Iron once fought in the service of Ragnaros the Firelord. Though one faction of the dwarves is pledged to Queen-Regent Moira Thaurissan, others refuse to stand alongside their kin. The Alliance seeks a united Dark Iron clan to harness the power of Azerite and aid their struggle against the Horde.",
  },
  {
    identifier: "dracthyr",
    enName: "Dracthyr",
    enDescription:
      "Created by Neltharion the Earth-Warder, the essence of dragons was combined with the adaptability of the mortal races to create an elite soldier capable of switching from a draconic form to humanoid form. Long in a magical stasis, they are now awakening to a new threat within the Dragon Isles. It is in the Forbidden Reach that the dracthyr will start their journey to reclaim their fractured memories and face a new reality.",
  },
  {
    identifier: "draenei",
    enName: "Draenei",
    enDescription:
      "Fleeing the ruined world of Outland—the shattered remains of the planet once known as Draenor—the mysterious draenei crash-landed on Azeroth, where they pledged their loyalty to the Alliance and vowed to destroy their bitter enemy—the demonic Burning Legion. In the wake of the Legion’s defeat, the draenei now seek a new destiny in the blessed Light.",
  },
  {
    identifier: "dwarf",
    enName: "Dwarf",
    enDescription:
      "The bold and courageous dwarves are an ancient race descended from the earthen—titan-forged beings of living stone created when the world was young. Hailing from the mighty city of Ironforge in the snowy peaks of Khaz Modan, dwarves are courageous defenders of the Alliance.",
  },
  {
    identifier: "earthen",
    enName: "Earthen",
    enDescription:
      "The Earthen are a titan-forged race made of living stone imbued with the essence of Azeroth's worldsoul. These ancient denizens are freshly freed from the edicts that have bound them and now venture forth with limitless curiosity to ally with the Alliance and Horde and explore the world.",
  },
  {
    identifier: "gnome",
    enName: "Gnome",
    enDescription:
      "The clever, spunky, and oftentimes eccentric gnomes present a unique paradox among the civilized races of Azeroth. Their remarkable optimism in the face of calamity symbolizes the truly unshakable spirit of the gnomes, and their boundless creativity and ingenuity is rivaled only by their commitment to the Alliance’s cause.",
  },
  {
    identifier: "goblin",
    enName: "Goblin",
    enDescription:
      "The goblins’ craftiness and greed make them masters of mercantilism. Reforging old pacts with their one-time allies, the goblins of the Bilgewater Cartel have been welcomed into the Horde. Honing their inherent cunning to a razor’s edge, the goblins hope to use their explosive inventions to rule the world – or at the very least own a profitable percentage of it.",
  },
  {
    identifier: "highmountaintauren",
    enName: "Highmountain Tauren",
    enDescription:
      "Descended from Huln, brave hero of the War of the Ancients, the Highmountain tauren honor the spirits of earth, river, and sky. Though the Legion invaded their lands and sowed seeds of distrust between them, the tribes of Highmountain stand united once more. At long last they are ready to venture beyond their sacred mountain and stand beside their kin from Kalimdor, lending their nobility and strength to the mighty Horde.",
  },
  {
    identifier: "human",
    enName: "Human",
    enDescription:
      "The human kingdom of Stormwind forms the backbone of the Alliance. Stormwind's willingness to work with others to find diplomatic solutions stands out as one of its true strengths. Its citizens hold fast to the principles of honor and justice as they defend their settlements, and the Alliance, against any aggressors.",
  },
  {
    identifier: "kultiran",
    enName: "Kul Tiran",
    enDescription:
      "Kul Tiras was founded by fearless explorers who sailed uncharted waters in search of adventure. As a key member of the Alliance of Lordaeron, the Kul Tiran navy dominated the seas of Azeroth with its legendary fleet. But after years of turmoil and hardship, the kingdom grew isolated and vulnerable to dark influences. Thanks to the help of brave heroes, House Proudmoore has been restored and Kul Tiras is poised to fight alongside the valiant Alliance once more.",
  },
  {
    identifier: "lightforgeddraenei",
    enName: "Lightforged Draenei",
    enDescription:
      "For untold millennia, the Army of the Light waged war against the Burning Legion throughout the Twisting Nether. The draenei most committed to their long crusade would undergo a ritual to become Lightforged, infusing their bodies with the very essence of the Holy Light. After finally achieving victory on Argus, the Lightforged draenei have undertaken a new mission: protecting Azeroth from rising threats and helping the Alliance push back against Horde aggression.",
  },
  {
    identifier: "magharorc",
    enName: "Mag'har Orc",
    enDescription:
      "For untold generations, the orc clans of Draenor battled one another in endless war. But when Gul'dan offered them the blood of his demonic masters, the disparate tribes of Mag'har—the orcish word for 'uncorrupted'—refused the dark bargain and banded together to drive out the Burning Legion. In the aftermath of the fall of Hellfire Citadel, the Mag'har pledged to one day repay Azeroth's heroes for aiding their cause. As war against the Alliance intensifies, the Horde must call upon the might of the Mag'har to seize victory.",
  },
  {
    identifier: "mechagnome",
    enName: "Mechagnome",
    enDescription:
      "Long ago, a faction of zealous gnomes set out on a quest to improve their bodies and minds. Settling on the isolated isle of Mechagon, they experimented with ancient technology to reverse the Curse of Flesh and become living machines. After facing the perils of full mechanization, they found the ideal balance between flesh and steel. Now reunited with their gnomish cousins, the mechagnomes bring both tenacity and ingenuity to the Alliance.",
  },
  {
    identifier: "nightborne",
    enName: "Nightborne",
    enDescription:
      "Isolated behind a protective barrier for 10,000 years, the elves of Suramar grew increasingly dependent upon the arcane magic of the Nightwell. To protect this font of power, the leaders of the Nightborne struck a bargain with the Burning Legion that plunged their kingdom into civil war. After fighting for freedom from their demonic masters, the Nightborne seek allies in the Horde to help reclaim their place in the world.",
  },
  {
    identifier: "nightelf",
    enName: "Night Elf",
    enDescription:
      "The ancient and reclusive Night elves—also known as kaldorei—have played a pivotal role in shaping Azeroth’s fate. Fighting for the Alliance, many Night elves today still remember events of the War of the Ancients over ten thousand years ago, when they halted the Burning Legion’s first invasion of Azeroth. These ferocious elves will fight tooth and nail to ensure their sacred lands are never again tainted by evil.",
  },
  {
    identifier: "orc",
    enName: "Orc",
    enDescription:
      "The orcs once lived as shamanic clans on the lush world of Draenor. Corrupted by Kil’jaeden, a demon lord of the Burning Legion, they invaded the world of Azeroth. Eventually able to free themselves from demonic influences, the orcs settled on Kalimdor, erecting their great capital Orgrimmar—from where they fight to find their place in the world they once came to conquer.",
  },
  {
    identifier: "pandaren",
    enName: "Pandaren",
    enDescription:
      "Couched in myth and legend, the enigmatic pandaren have long been a mystery to the other races of Azeroth. Pandaren who follow the Path of the Tushui believe that there is a moral certainty to the world: one correct path of right and wrong. This philosophy strongly aligns with the ideals the Alliance represents, and as such the Tushui have pledged their loyalty accordingly.",
  },
  {
    identifier: "tauren",
    enName: "Tauren",
    enDescription:
      "The peaceful tauren—known in their own tongue as the shu’halo—have long dwelled in Kalimdor, striving to preserve the balance of nature at the behest of their goddess, the Earth Mother. Once nomadic in nature, the wandering tauren tribes have since united and settled in their ancestral homeland of Mulgore.",
  },
  {
    identifier: "troll",
    enName: "Troll",
    enDescription:
      "The proud Darkspear exiles were once on the brink of extinction, when Warchief Thrall and his mighty Horde forces were driven to the trolls’ remote island home during a violent storm. These trolls were welcomed into the Horde, and found their place among other outcast races.",
  },
  {
    identifier: "undead",
    enName: "Undead",
    enDescription:
      "Death offered no escape for the scores of humans killed during the Lich King’s campaign to scour the living from Lordaeron. When his grasp over the Scourge faltered after the Third War, a contingent of undead broke free of their master’s iron will. Calling themselves Forsaken, they now struggle to thrive in a world that has come to despise their existence.",
  },
  {
    identifier: "voidelf",
    enName: "Void Elf",
    enDescription:
      "Many have sought to harness the corruptive magic of the Void. Most who tried have fallen into madness. Determined to use this power for the good of Azeroth, Alleria Windrunner is the first mortal to succeed at defying the shadow's whispers. Coming to the aid of a group of her kin who nearly gave in to the darkness, Alleria has vowed to train these Void elves to control the shadows within them and pledge their newfound powers to the Alliance.",
  },
  {
    identifier: "vulpera",
    enName: "Vulpera",
    enDescription:
      "Clever and resourceful, the vulpera have survived amidst the harsh desert of Vol'dun for generations. Traveling in close-knit caravans, they watch out for each other as they scavenge supplies from across the dunes. Despite their small stature, they are fierce and cunning in battle, bringing down any enemy foolish enough to underestimate them. Now full-fledged members of the Horde, their wagons have left the sands in search of adventure.",
  },
  {
    identifier: "worgen",
    enName: "Worgen",
    enDescription:
      "Behind the formidable Greymane Wall, a terrible curse transformed many of the stalwart citizens of the isolated kingdom of Gilneas into lupine beasts known as worgen. Unable to cure their affliction and besieged by the dreaded Forsaken, these worgen learned to control their ferocity thanks to the help of the night elves. The worgen now stand ready to unleash the beast within at a moment’s notice in defense of the Alliance.",
  },
  {
    identifier: "zandalaritroll",
    enName: "Zandarlari Troll",
    enDescription:
      "The Zandalari are a proud people whose origins date back to the early days of Azeroth's history. Their fierce warriors ride dinosaurs into battle, and they possess one of the most formidable naval fleets in the known world. But enemy attacks on their borders—as well as unrest within the king's council—have threatened the kingdom's foundations. By returning stability to Zandalar, the heroes of the Horde can gain a powerful new ally.",
  },

  // classes
  {
    identifier: "deathknight",
    enName: "Death Knight",
    enDescription:
      "When the Lich King’s control over his death knights was broken, his former champions found their new purpose as Knights of the Ebon Blade. After Bolvar Fordragon donned the helm to keep the undead Scourge contained, he called forth a new generation of death knights to join the Ebon Blade's cause.",
  },
  {
    identifier: "demonhunter",
    enName: "Demon Hunter",
    enDescription:
      "Demon hunters, disciples of Illidan Stormrage, uphold a dark legacy, one that frightens their allies and enemies alike. The Illidari embrace fel and chaotic magics—energies that have long threatened the world of Azeroth—believing them necessary to challenge the Burning Legion. Wielding the powers of demons they’ve slain, they develop demonic features that incite revulsion and dread in fellow elves.",
  },
  {
    identifier: "druid",
    enName: "Druid",
    enDescription:
      "Druids harness the vast powers of nature to preserve balance and protect life. With experience, druids can unleash nature’s raw energy against their enemies, raining celestial fury on them from a great distance, binding them with enchanted vines, or ensnaring them in unrelenting cyclones.",
  },
  {
    identifier: "evoker",
    enName: "Evoker",
    enDescription:
      "Dracthyr Evokers were created to wield the magic of all five dragonflights, and seek to forge their own path in Azeroth. They can empower their draconic abilities through magic, charging up their attacks and unleashing them at the right moment to devastating effect, and use their superior mobility to dart in and out of the fray as the situation demands.",
  },
  {
    identifier: "hunter",
    enName: "Hunter",
    enDescription:
      "From an early age, the call of the wild draws some adventurers from the comfort of their homes into the unforgiving primal world outside. Those who endure become hunters. Masters of their environment, they are able to slip like ghosts through the trees and lay traps in the paths of their enemies.",
  },
  {
    identifier: "mage",
    enName: "Mage",
    enDescription:
      "Students gifted with a keen intellect and unwavering discipline may walk the path of the mage. The arcane magic available to magi is both great and dangerous, and thus is revealed only to the most devoted practitioners. To avoid interference with their spellcasting, magi wear only cloth armor, but arcane shields and enchantments give them additional protection. To keep enemies at bay, magi can summon bursts of fire to incinerate distant targets and cause entire areas to erupt, setting groups of foes ablaze.",
  },
  {
    identifier: "monk",
    enName: "Monk",
    enDescription:
      "When the pandaren were subjugated by the mogu centuries ago, it was the monks that brought hope to a seemingly dim future. Restricted from using weapons by their slave masters, these pandaren instead focused on harnessing their chi and learning weaponless combat. When the opportunity for revolution struck, they were well-trained to throw off the yoke of oppression.",
  },
  {
    identifier: "paladin",
    enName: "Paladin",
    enDescription:
      "This is the call of the paladin: to protect the weak, to bring justice to the unjust, and to vanquish evil from the darkest corners of the world. These holy warriors are equipped with plate armor so they can confront the toughest of foes, and the blessing of the Light allows them to heal wounds and, in some cases, even restore life to the dead.",
  },
  {
    identifier: "priest",
    enName: "Priest",
    enDescription:
      "Priests are devoted to the spiritual, and express their unwavering faith by serving the people. For millennia they have left behind the confines of their temples and the comfort of their shrines so they can support their allies in war-torn lands. In the midst of terrible conflict, no hero questions the value of the priestly orders.",
  },
  {
    identifier: "rogue",
    enName: "Rogue",
    enDescription:
      "For rogues, the only code is the contract, and their honor is purchased in gold. Free from the constraints of a conscience, these mercenaries rely on brutal and efficient tactics. Lethal assassins and masters of stealth, they will approach their marks from behind, piercing a vital organ and vanishing into the shadows before the victim hits the ground.",
  },
  {
    identifier: "shaman",
    enName: "Shaman",
    enDescription:
      "Shaman are spiritual guides and practitioners, not of the divine, but of the very elements. Unlike some other mystics, shaman commune with forces that are not strictly benevolent. The elements are chaotic, and left to their own devices, they rage against one another in unending primal fury. It is the call of the shaman to bring balance to this chaos. Acting as moderators among earth, fire, water, and air, shaman summon totems that focus the elements to support the shaman’s allies or punish those who threaten them.",
  },
  {
    identifier: "warlock",
    enName: "Warlock",
    enDescription:
      "In the face of demonic power, most heroes see death. Warlocks see only opportunity. Dominance is their aim, and they have found a path to it in the dark arts. These voracious spellcasters summon demonic minions to fight beside them. At first, they command only the service of imps, but as a warlock’s knowledge grows, seductive succubi, loyal voidwalkers, and horrific felhunters join the dark sorcerer’s ranks to wreak havoc on anyone who stands in their master’s way.",
  },
  {
    identifier: "warrior",
    enName: "Warrior",
    enDescription:
      "For as long as war has raged, heroes from every race have aimed to master the art of battle. Warriors combine strength, leadership, and a vast knowledge of arms and armor to wreak havoc in glorious combat. Some protect from the front lines with shields, locking down enemies while allies support the warrior from behind with spell and bow. Others forgo the shield and unleash their rage at the closest threat with a variety of deadly weapons.",
  },
];

const loginCredentials: LoginCredentials = {
  pds: "https://pds.malpercio.dev",
  identifier: BSKY_IDENTIFIER,
  password: BSKY_PASSWORD,
};

const labelDefinitions: ComAtprotoLabelDefs.LabelValueDefinition[] = [];

for (const label of LABELS) {
  const labelValueDefinition: ComAtprotoLabelDefs.LabelValueDefinition = {
    identifier: label.identifier,
    severity: "inform",
    blurs: "none",
    defaultSetting: "warn",
    adultOnly: false,
    locales: [
      {
        lang: "en",
        name: label.enName,
        description: label.enDescription,
      },
    ],
  };

  labelDefinitions.push(labelValueDefinition);
}

await setLabelerLabelDefinitions(loginCredentials, labelDefinitions);
