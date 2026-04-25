/**
 * Optional `head`: JSON string of extra schema.org nodes (e.g. VideoObject); merged with Article JSON-LD on guide routes.
 *
 * @typedef {{
 *   id: number
 *   title: string
 *   iframeUrl?: string
 *   description: string
 *   tags: string[]
 *   publishDate: string
 *   imageUrl: string
 *   imageAlt: string
 *   seo: { title: string, description: string, keywords?: string }
 *   addressBar: string
 *   detailsHtml: string
 *   head?: string
 *   isHome?: boolean
 * }} GuideArticle
 */

/** @type {GuideArticle[]} */
export default [
  {
    id: 1,
    title: 'How to Play Windrose Online with Friends — Co-op, Invite Codes & Joining',
    description:
      'Windrose supports solo or with friends on the official site—here is the player workflow: who hosts, sharing invite codes, Connect to Server, passwords, version checks, firewalls/UPnP, and when a dedicated server helps.',
    tags: ['Multiplayer', 'Co-op', 'Online', 'Early Access'],
    publishDate: '2026-04-25',
    imageUrl: '/images/bg.webp',
    imageAlt: 'Nautical night atmosphere behind Windrose Compass guides',
    seo: {
      title: 'How to Play Windrose Online with Friends — Multiplayer & Co-op Guide | Windrose Compass',
      description:
        'Play Windrose online with friends: official solo-or-co-op pitch, invite codes, Play → Connect to Server, passwords, same-patch checks, UPnP and firewall tips, and when to use a dedicated server—all in plain language for crews.',
      keywords:
        'Windrose multiplayer, play Windrose online, Windrose co-op, Windrose with friends, invite code Windrose, connect to server Windrose, Windrose online guide, Early Access multiplayer, PvE co-op Windrose',
    },
    addressBar: 'play-windrose-online',
    isHome: true,
    detailsHtml: `
<p>
  Windrose is built as a <strong>survival adventure you can play solo or with friends</strong>—that is how the
  developers describe it on the
  <a href="https://playwindrose.com/" rel="noopener noreferrer" target="_blank">official Windrose site</a>
  (“Adventure alone or with friends”). This guide is for <em>players</em> who just want the crew online in the same
  world: what to expect, how joining works, and what to check when someone cannot get in. It is a fan summary; the game
  client and official pages stay the source of truth after patches.
</p>

<h2>What “playing online together” means in Windrose</h2>
<p>
  You share one persistent archipelago: quests, camps, ships, and world progress belong to that session’s world, not
  to each player’s separate offline copy. Everyone needs a normal copy of the game and a stable internet path to the
  matchmaking / connection services Windrose uses. Co-op is <strong>PvE-focused</strong>—you are sailing and fighting
  together against the world, not setting up player-versus-player arenas. When you are planning who brings which food or
  repair mats, the <a href="/wiki/resources">resources wiki</a> is a handy out-of-game checklist alongside voice chat.
</p>

<h2>The usual evening flow (no IT degree required)</h2>
<ol>
  <li>
    <strong>Pick a host world.</strong> One person is the “captain of the save”—their machine runs the world everyone
    joins, <em>unless</em> your group has already moved that world onto a dedicated server (see optional section below).
  </li>
  <li>
    <strong>Everyone launches Windrose</strong> on the same rough game version (same major patch / build). After a
    Steam or launcher update, wait until the whole crew has finished downloading before you try to connect.
  </li>
  <li>
    <strong>Host shares an invite code.</strong> Official documentation describes an <strong>invite code</strong> your
    friends paste in the client—short, shareable, and easier than trading raw IP addresses.
  </li>
  <li>
    <strong>Friends join from the main menu.</strong> Use <em>Play → Connect to Server</em> (wording may match your
    language), paste the invite code exactly, and add the password too if your host turned password protection on.
  </li>
  <li>
    <strong>Play like any other co-op session.</strong> Voice chat, map callouts, and our
    <a href="/map">interactive map</a> are optional—the game does not require this site. If you are comparing hull
    ideas or weapon tags between voyages, the <a href="/wiki">wiki hub</a> keeps the tables in one place so you do not
    have to tab out blind.
  </li>
</ol>
<p>
  Invite codes are <strong>case-sensitive</strong> and use letters and digits. Treat them like a private Discord
  invite—only share with people you trust. Official support will not ask you for passwords in DMs; ignore anyone who
  does.
</p>

<h2>If someone cannot connect</h2>
<p>Work through this list before you assume the save is broken:</p>
<ul>
  <li><strong>Same version everywhere.</strong> Mismatched client and world version is the most common “we see the code but nothing happens” culprit after a patch.</li>
  <li>
    <strong>Double-check the code and optional password.</strong> A single wrong character blocks the join; passwords
    are easy to mis-type in voice.
  </li>
  <li>
    <strong>Router and PC firewalls.</strong> Official dedicated-server documentation stresses <strong>UPnP</strong> on
    your router and allowing the game (and server executable, if you use one) through Windows Firewall / overzealous AV.
    Temporarily disable VPNs or proxies while testing a stubborn connection.
  </li>
  <li>
    <strong>Who is actually online?</strong> If the host closes the game or puts the PC to sleep, the world stops for
    everyone unless you have migrated to a 24/7 dedicated setup.
  </li>
</ul>

<h2>Optional: a world that stays up when the host is offline</h2>
<p>
  When your crew is in different time zones, it helps to run the world on a <strong>dedicated server</strong>—a
  separate install that keeps the archipelago running so people can drop in without the captain’s gaming PC being on.
  That path is more technical (install folder, JSON settings, updates). If you need it, follow the developers’
  <a href="https://playwindrose.com/dedicated-server-guide/" rel="noopener noreferrer" target="_blank">Dedicated Server Guide</a>
  step by step; this Windrose Compass article is intentionally about the normal “friends + invite code” loop first.
</p>

<h2>How many friends?</h2>
<p>
  Official server documentation discusses <strong>player caps</strong> you can configure and notes that very large
  groups stress performance more than tiny crews. For a smooth first co-op campaign, start with a small group, learn
  sailing and boarding together, then scale up if everyone’s machines and connections stay stable.
</p>

<h2>Where to get help</h2>
<p>
  For rules that change patch-to-patch, use the
  <a href="https://discord.gg/windrose" rel="noopener noreferrer" target="_blank">official Windrose Discord</a>
  and the game’s support channels. If you are experimenting with client-side tweaks, read author notes carefully on the
  <a href="/mods">mods list</a> here—never install anything you do not trust, especially on a shared world machine.
</p>

<h2>Fan disclaimer</h2>
<p>
  Windrose Compass is not affiliated with Windrose’s developers or publishers. Feature names and menu paths can shift in
  Early Access—if a label here no longer matches your build, trust what you see in game.
</p>
    `.trim(),
  },

  {
    id: 2,
    head: `{
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "How to Get and Use Quagmire Powder in Windrose",
    "description": "Hardcore SEO guide on how to get quagmire powder in windrose. Learn the fastest looting routes in the Cursed Swamps, chest drop rates, and how to use quagmire powder in windrose to smelt Mire Metal Ingots for late-game gear progression.",
    "thumbnailUrl": [
      "https://example.com/windrose-quagmire-powder-thumbnail.jpg"
    ],
    "uploadDate": "2024-05-20T08:00:00+08:00",
    "duration": "PT2M5S",
    "contentUrl": "https://www.youtube.com/watch?v=Fy8-mESI4L8",
    "embedUrl": "https://www.youtube.com/embed/Fy8-mESI4L8",
    "hasPart": [
      {
        "@type": "Clip",
        "name": "Unlock the Cursed Swamps Biome",
        "startOffset": 15,
        "endOffset": 33,
        "url": "https://example.com/windrose-quagmire-powder#video&t=15s"
      },
      {
        "@type": "Clip",
        "name": "Farm Plague Enemies and Swamp Chests",
        "startOffset": 33,
        "endOffset": 59,
        "url": "https://example.com/windrose-quagmire-powder#video&t=33s"
      },
      {
        "@type": "Clip",
        "name": "Smelt Mire Metal Ingots",
        "startOffset": 59,
        "endOffset": 125,
        "url": "https://example.com/windrose-quagmire-powder#video&t=59s"
      }
    ]
  }`,
    title: "Windrose Quagmire Powder Guide: How to Get & Use",
    description: "Discover exactly how to get quagmire powder in windrose and the best farming routes. Learn how to use quagmire powder in windrose to craft Mire Metal Ingots.",
    tags: ["windrose", "quagmire powder", "farming guide", "late-game resources", "mire metal ingot"],
    publishDate: "2026-04-25",
    imageUrl: "https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777105142/cms-uploads/cms-1777105142831-934087553.png",
    imageAlt: "Player opening an Ancient Chest in a Swamp Crypt Tablet House in Windrose, obtaining Quagmire Powder.",
    seo: {
      title: "Windrose Quagmire Powder Guide: Get & Use for Late-Game Progression",
      description: "Master Windrose's late-game with this Quagmire Powder guide. Learn efficient farming methods in Cursed Swamps and how to craft Mire Metal Ingots to unlock enchantments and advanced gear.",
      keywords: "windrose quagmire powder, windrose farming guide, get quagmire powder, use quagmire powder, mire metal ingot, cursed swamps, windrose late game, israel hands, ancient scraps"
    },
    addressBar: "windrose-quagmire-powder-guide-how-to-get-use",
    detailsHtml: `<h1>Windrose Quagmire Powder Guide
  </h1>
  <p>If you want to push your gear to the late-game level in Windrose, Quagmire Powder is the core resource you cannot bypass. Stop wasting time in low-tier zones. You need to push the main quest, defeat Israel Hands in the Foothills, and unlock the third biome: the Cursed Swamps. The most efficient farming method isn't bonking high-level Plague mobs one by one; it's straight-up looting Ancient Chests in Swamp Crypt Tablet Houses, which can pop up to 11 powders at once. Once you secure the powder, immediately head to a Large Smelting Furnace, combine it with Ancient Scraps, and smelt Mire Metal Ingots. This is your only bottleneck to unlocking the Enchanting Table and high-tier armor.
  </p>
  <iframe src="https://www.youtube.com/embed/Fy8-mESI4L8" class="ql-video" width="800" height="450" allowfullscreen="true" frameborder="0">
  </iframe>
  <p><br>
  
  </p>
  <p>Don't want to watch the full video? Jump straight to the key moments:
  </p>
  <ol>
  <li><a href="https://www.youtube.com/watch?v=Fy8-mESI4L8&amp;t=15s">00:15</a> - 🗺️ Prerequisites to defeat Israel Hands and unlock the Cursed Swamps area.
  </li>
  <li><a href="https://www.youtube.com/watch?v=Fy8-mESI4L8&amp;t=33s">00:33</a> - ⚔️ Real-test: Swamp crypt chest looting vs. Plague mob drop rates.
  </li>
  <li><a href="https://www.youtube.com/watch?v=Fy8-mESI4L8&amp;t=59s">00:59</a> - ⚒️ Core recipe: Smelting Mire Metal Ingots in the Large Smelting Furnace.
  </li>
  </ol>
  <h2>Get Quagmire Powder in Windrose: The Efficient Farm
  </h2>
  <p>A lot of rookies get hard-stuck on this resource because they are simply grinding in the wrong map. Quagmire Powder exclusively drops in the game's third biome: the Cursed Swamps.
  </p>
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777105662/cms-uploads/cms-1777105662173-881866006.webp" alt="the Cursed Swamps map entrance and surrounding environment" width="50%">
  </p>
  <p>The Unlock Requirement: You must first eliminate the local threat boss "Israel Hands" in the Foothills region. After taking him down, follow the system-assigned "The Forgotten Relics" quest to officially set foot in this mudland.
  </p>
  <p>Once inside the swamp, how do you actually get it? There are two playstyles, but I only recommend the first:
  </p>
  <p>Top Pick: The "Ultimate Looter" Route (Looting Focus)
  </p>
  <p> Don't sweat it out fighting those high-level swamp mobs. Beeline straight for Points of Interest (POIs) around the map, like Ruined Swamp Settlements, Priestess Huts, or Tablet Houses. Focus heavily on the Ancient Chests inside the Swamp Crypt Tablet Houses. These chests are the absolute jackpot right now. Opening just one guarantees a massive drop of up to 11 units of Quagmire Powder. This is dozens of times more efficient than grinding mobs manually.
  </p>
  <p>Backup Plan: Hardcore Clearing (Hunting Focus)
  </p>
  <p> If you're a combat junkie, or your chest routes are on cooldown, go hunt the Plague-series enemies. But pay attention: not all mobs have the same drop rates. Pick your targets wisely:
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-so77jl">Loot Source / Enemy Tier
  </td>
  <td data-row="row-so77jl">Quagmire Powder Drop Rate
  </td>
  <td data-row="row-so77jl">Yield Per Drop
  </td>
  </tr>
  <tr>
  <td data-row="row-qdpdgi">Swamp Crypt Ancient Chests
  </td>
  <td data-row="row-qdpdgi">100% Guaranteed
  </td>
  <td data-row="row-qdpdgi">Up to 11x
  </td>
  </tr>
  <tr>
  <td data-row="row-clybv8">Plague Hunters
  </td>
  <td data-row="row-clybv8">100% Guaranteed
  </td>
  <td data-row="row-clybv8">1x
  </td>
  </tr>
  <tr>
  <td data-row="row-ghmeso">Plague Thralls
  </td>
  <td data-row="row-ghmeso">100% Guaranteed
  </td>
  <td data-row="row-ghmeso">1x
  </td>
  </tr>
  <tr>
  <td data-row="row-euc76z">Plague Warriors
  </td>
  <td data-row="row-euc76z">75% Chance
  </td>
  <td data-row="row-euc76z">1x
  </td>
  </tr>
  <tr>
  <td data-row="row-uxn2ve">Plague Witches
  </td>
  <td data-row="row-uxn2ve">75% Chance
  </td>
  <td data-row="row-uxn2ve">1x
  </td>
  </tr>
  </tbody>
  </table>
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777105732/cms-uploads/cms-1777105732639-411539755.webp" alt="Ancient Chest in the swamp ruins to obtain powder" width="50%">
  </p>
  <h2>Use Quagmire Powder in Windrose: Advancing to Late-Game
  </h2>
  <p>Once you have the powder, don't just let it sit in your inventory. Quagmire Powder itself burns with an incredibly bright flame, and its sole core purpose in the game is acting as a catalyst for advanced smelting.
  </p>
  <p>[Insert image here: In-game screenshot of the Large Smelting Furnace crafting interface]
  </p>
  <p>You need to bring it back to your base and toss it into the Large Smelting Furnace.
  </p>
  <p> Core Recipe: 1x Quagmire Powder + 2x Ancient Scraps = 1x Mire Metal Ingot
  </p>
  <p>Why is the Mire Metal Ingot your lifeline?
  </p>
  <p> Without it, your tech tree is completely hard-locked. Only with Mire Metal Ingots can you unlock and build the following crucial mid-to-late game facilities:
  </p>
  <ol>
  <li>Enchanting Table: Mandatory for applying buffs to your weapons.
  </li>
  <li>Armor Upgrades: The qualitative leap required for mid-game defense.
  </li>
  <li>Jeweler's Workbench
  </li>
  <li>Distiller
  </li>
  <li>Ingot Arborum: Essential base material for the very late game.
  </li>
  </ol>
  <h3>FAQ: Hardcore Quagmire Powder Q&amp;A
  </h3>
  <p>Q: Can I farm Quagmire Powder at the spawn point or early-game islands?
  </p>
  <p> A: Absolutely not. This resource is strictly locked to the third biome (Cursed Swamps). You must first take down Israel Hands in the Foothills to even get the questline to enter that area.
  </p>
  <p>Q: Why didn't I get any powder drop after killing several swamp mobs?
  </p>
  <p> A: You probably picked the wrong targets. Only Plague Hunters and Plague Thralls have a 100% guaranteed drop. If you are fighting Plague Warriors or Plague Witches, they only have a 75% drop rate; you will inevitably get empty drops if RNG is against you. Looting crypt chests is the ultimate way to go.
  </p>
  <p>Q: I don't have enough Ancient Scraps. Can I craft anything using just the powder?
  </p>
  <p> A: Not under the current game mechanics. Quagmire Powder must be paired with Ancient Scraps to create a chemical reaction in the Large Smelting Furnace, producing the actually useful Mire Metal Ingot. These two items are bound together as upstream and downstream materials.
  </p>`,
  },

  {
    id: 3,
    head: `{
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Windrose Travelers Camp 1/2 Chest Location Guide",
    "description": "Stuck at 1/2 chests in Windrose's Traveler's Camp? This hardcore SEO guide shows you exactly how to find the hidden second chest in the Coastal Jungle. Learn to spot the red cloth tree, craft a shovel, and use the digging mechanic to unearth hidden loot.",
    "thumbnailUrl": [
      "https://example.com/windrose-travelers-camp-thumbnail.jpg"
    ],
    "uploadDate": "2024-05-20T10:00:00+08:00",
    "duration": "PT2M10S",
    "contentUrl": "https://www.youtube.com/watch?v=sx-PC9mzRwk",
    "embedUrl": "https://www.youtube.com/embed/sx-PC9mzRwk",
    "hasPart": [
      {
        "@type": "Clip",
        "name": "Looting the first tent chest",
        "startOffset": 10,
        "endOffset": 39,
        "url": "https://example.com/windrose-travelers-camp#video&t=10s"
      },
      {
        "@type": "Clip",
        "name": "Finding the red cloth tree",
        "startOffset": 39,
        "endOffset": 72,
        "url": "https://example.com/windrose-travelers-camp#video&t=39s"
      },
      {
        "@type": "Clip",
        "name": "Digging up the second chest",
        "startOffset": 72,
        "endOffset": 130,
        "url": "https://example.com/windrose-travelers-camp#video&t=72s"
      }
    ]
  }`,
    title: "Windrose Travelers Camp Guide: Find the Hidden Second Chest",
    iframeUrl: "https://www.youtube.com/embed/sx-PC9mzRwk",
    description: "Stuck at 1/2 unique chests in Windrose? Learn how to locate the hidden second chest at the Traveler's Camp in the Coastal Jungle using the shovel digging mechanic.",
    tags: ["Windrose","Travelers Camp","Hidden Chest","Exploration Guide","Survival Game"],
    publishDate: "2026-04-25",
    imageUrl: "https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777106865/cms-uploads/cms-1777106865199-859118164.png",
    imageAlt: "A map screenshot showing the Windrose Traveler's Camp icon with 1/2 unique chests looted progress, indicating a hidden second chest.",
    seo: {
      title: "Windrose Traveler's Camp: Find the Hidden Second Chest Guide",
      description: "Master Windrose's Traveler's Camp by uncovering the hidden second chest. This in-depth guide reveals how to use a Shovel to find the secret loot and gain +50 exploration XP, bypassing misleading old strategies.",
      keywords: "windrose, travelers camp, hidden chest, second chest, shovel, exploration guide, survival game, unique chests, twist of fancy, red cloth tree, sparkling particles"
    },
    addressBar: "windrose-travelers-camp-hidden-second-chest-guide",
    detailsHtml: `<h1>Windrose Travelers Camp Guide
  </h1>
  <p>If you are clearing your starting island and getting hard-stuck at the "Unique chests looted: 1/2" tracker for the Traveler's Camp, stop running aimlessly around the bushes. The first Decrepit Chest is a freebie inside the tent, but the second one is buried underground. A lot of outdated forums claim you must carefully read the "Twist of Fancy" note to trigger the spawn—that's false. Mechanically, all you need to do is equip a Shovel, look for a dead tree marked with a red cloth (usually guarded by a boar nearby), and spam the dig action around its base until you see white sparkling particles in the dirt to unearth the final chest and claim your +50 exploration XP.
  </p>
  <iframe src="https://www.youtube.com/embed/sx-PC9mzRwk" class="ql-video" width="800" height="450" allowfullscreen="true" frameborder="0">
  </iframe>
  <p>Skip the fluff? Jump straight to the key moments:</p>
  <ol>
  <li><a href="https://www.youtube.com/watch?v=sx-PC9mzRwk&amp;t=10s">00:10</a> - ⛺ Looting the obvious first chest and obtaining the lore note.
  </li>
  <li><a href="https://www.youtube.com/watch?v=sx-PC9mzRwk&amp;t=39s">00:39</a> - 🌳 Visual anchor: Spotting the tree with the red cloth and the boar spawn.
  </li>
  <li><a href="https://www.youtube.com/watch?v=sx-PC9mzRwk&amp;t=72s">01:12</a> - ⛏️ How the digging mechanic actually works (look for the sparkles).
  </li>
  </ol>
  <h2>Coastal Jungle Spawn &amp; Prep
  </h2>
  <p>Don't bother searching Reddit for exact X/Y map coordinates. Windrose utilizes a procedurally generated map, meaning everyone's Traveler's Camp is located in a different spot. However, it will always spawn within your starting biome, the Coastal Jungle.
  </p>
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777107374/cms-uploads/cms-1777107374896-953265952.webp" alt="Windrose  the Traveler's Camp map icon stuck at 02 progression" width="50%">
  </p>
  <p>Hard Requirement: Do not go to this POI empty-handed. Extracting the second chest strictly requires you to equip a Shovel. If you are fresh off the boat and don't have one, you need to farm Clay near water sources, build a basic Smelter, and set up your workbench first. Slashing the ground with your cutlass will do absolutely nothing.
  </p>
  <h2>Solving the 1/2 Progression
  </h2>
  <p>Upon arriving at the camp, you'll immediately spot a dilapidated tent. Inside sits the first Decrepit Chest. Looting it provides basic supplies and usually a lore note titled "Twist of Fancy" (which goes straight into the Curios tab in your inventory).
  </p>
  <p>Once looted, your UI tracker maliciously updates to 1/2. 
  </p>
  <p> The intended roleplay path is to read the note to decipher the pirate's hidden stash location. But as a min-maxer, here is the objective truth: you can completely ignore reading the note. The chest is already spawned in the world; you just need to know the visual cue.
  </p>
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777107405/cms-uploads/cms-1777107405083-362258592.webp" alt="Windrose  opening the Curios tab to view the Twist of Fancy note" width="50%">
  </p>
  <h2>Locating the Hidden Second Chest
  </h2>
  <p>Walk out of the tent and scan the perimeter within a 50-meter radius. You are looking for a very specific environmental landmark: a large, dead tree with a distinct piece of Red Cloth wrapped around its trunk.
  </p>
  <p>This spot is usually guarded by a Boar patrolling the base of the tree. Dispatch the boar quickly so you can work in peace.
  </p>
  <p>The Digging Mechanic Explained:
  </p>
  <ol>
  <li>Equip your Shovel.
  </li>
  <li>Aim at the ground near the tree roots and use your secondary action to enter "Dig" mode.
  </li>
  <li>Start digging a hole.
  </li>
  <li>Here is the trick: Don't keep digging in the exact same spot if nothing happens. Move slightly and dig multiple holes in a radius around the tree. You are looking for glowing white sparkling particles to appear inside the freshly dug dirt.
  </li>
  <li>Once you spot the sparkles, dig exactly on that spot one more time. The second "Decrepit Chest" will literally pop out of the ground.
  </li>
  </ol>
  <p><img src="https://res.cloudinary.com/dnxfdv3fs/image/upload/v1777107432/cms-uploads/cms-1777107432351-488767366.webp" alt="Windrose  the glowing  particles in the dirt right before the chest is unearthed" width="50%">
  </p>
  <p>Confirmed Loot Drops:
  </p>
  <p> While RNG plays a factor, cross-referencing multiple gameplay sessions reveals distinct loot pools for these two chests:
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-pauz6o">Chest Sequence
  </td>
  <td data-row="row-pauz6o">Typical Loot Pool
  </td>
  <td data-row="row-pauz6o">Confirmed High-Value Drops
  </td>
  </tr>
  <tr>
  <td data-row="row-kca2cl">Chest #1 (Inside Tent)
  </td>
  <td data-row="row-kca2cl">Quest Items, Low-tier Mats
  </td>
  <td data-row="row-kca2cl">"Twist of Fancy" (Lore Note)
  </td>
  </tr>
  <tr>
  <td data-row="row-8qub4w">Chest #2 (Buried underground)
  </td>
  <td data-row="row-8qub4w">Alchemy items, Consumables
  </td>
  <td data-row="row-8qub4w">10x Homemade Gunpowder, Great Healing Potion
  </td>
  </tr>
  </tbody>
  </table>
  <p>Looting this final chest will trigger the +50 Exploration XP reward, finally marking the Traveler's Camp as complete.
  </p>
  <h3>FAQ: Traveler's Camp Troubleshooting
  </h3>
  <p>Q: I searched for 10 minutes and cannot find the tree with the red cloth. Is my map bugged?
  </p>
  <p> A: It's extremely unlikely to be bugged; it's usually an elevation issue. Due to the procedural generation of the Coastal Jungle, the tree might spawn on a raised plateau slightly behind the tent or be obscured by dense foliage. Clear out the nearby enemies and widen your search radius slightly.
  </p>
  <p>Q: I dug up the entire area around the tree but didn't see any sparkles. What am I doing wrong?
  </p>
  <p> A: The hit detection radius for the buried chest is slightly larger than the immediate roots. Don't hug the trunk. Expand your digging circle to about 2 to 3 meters away from the tree base. If you found the red cloth, the chest is 100% there.
  </p>
  <p>Q: Is the loot from the second chest always the same?
  </p>
  <p> A: Not strictly fixed, but it heavily leans towards valuable mid-tier consumables. In documented gameplay (including German client tests), players consistently pulled stacks of Homemade Gunpowder (up to 10x) and high-tier healing potions, making this an excellent early-game boost for your combat reserves.
  </p>`,
  }


]
