/**
 * 与 `guideArticles.js` 相同字段，另含 `downloadUrl`（模组包直链）与可选 `stars`（1–5，本站推荐指数，仅数据）。
 *
 * @typedef {{
 *   id: number
 *   title: string
 *   description: string
 *   tags: string[]
 *   publishDate: string
 *   imageUrl: string
 *   imageAlt: string
 *   seo: { title: string, description: string, keywords?: string }
 *   addressBar: string
 *   detailsHtml: string
 *   downloadUrl?: string
 *   stars?: number
 * }} ModArticle
 */

/** @type {ModArticle[]} */
export default [
  {
    id: 1,
    title: 'Windrose mod — Speedy merchant & order-time companion notes',
    description:
      'This Windrose mod listing on Nexus lines up with Compass’s “speedy merchant / base / order time” slug—think camp vendors, buy-sell loops, and UI cadence. We still keep changelog truth on the author page opened via Download mod; here is how we rehearse installs without surprising the crew.',
    tags: ['Nexus Mods', 'Early Access', 'Co-op', 'Economy'],
    publishDate: '2026-04-25',
    imageUrl: '/images/mods/mod01.webp',
    imageAlt: 'Windrose Compass — mod spotlight atmosphere',
    downloadUrl: 'https://www.nexusmods.com/windrose/mods/167',
    stars: 4,
    seo: {
      title: 'Windrose mod — Merchant & order timing companion | Windrose Compass',
      description:
        'Windrose mod spotlight for merchant and order-time QoL: Nexus facts via Download mod, Compass notes on backups, ~mods install, co-op economy parity, and wiki cross-checks.',
      keywords:
        'Windrose mod, Windrose mods, Windrose merchant mod, vendor UI Windrose, Windrose Compass, Windrose Nexus mods, Windrose mods install, ~mods Windrose, Windrose co-op mods, Nexus Mods Windrose, Early Access modding',
    },
    addressBar: 'speedy-merchant-base-merchant-order-time',
    detailsHtml: `
      <p>
        The <strong>Windrose mod</strong> you fetch from <strong>Download mod</strong> is the author’s economy-adjacent
        package—Compass keeps the internal slug <em>speedy merchant · base · merchant order time</em> because that is how
        we file it on deck. <strong>Exact perk wording, multipliers, and UI screenshots stay on Nexus</strong>; treat this
        article as the quartermaster checklist you read <em>after</em> you skim the sticky, not a substitute for it.
      </p>

      <h2>What to clip from the Nexus sticky before you unzip</h2>
      <p>Merchant-facing tweaks are easy to mis-describe in fleet chat. Screenshot or paste into your notes:</p>
      <ul>
        <li><strong>Anything mentioning orders, queues, vendors, or camp UI cadence</strong> — that is the sentence you read aloud at session zero.</li>
        <li><strong>Build compatibility</strong> — if the author caps support at a specific Early Access build, mirror that line in your Discord pin next to the invite code.</li>
        <li><strong>Host-only vs everyone-installs</strong> — economy mods sometimes ride only on the listen server; never assume parity without that capital-letter line from Nexus.</li>
      </ul>

      <h2>Solo rehearsal: re-learn your buy-sell muscle memory</h2>
      <p>
        Install to the author’s preferred <code>~mods</code> path (see Nexus readme), launch offline, and run through two
        vendor loops: buy food, sell junk, cancel an order if the mod exposes timers or batching. You are validating
        <em>feel</em>, not writing a review—note anything that also shifts stack sizes so you remember to cross-check
        <a href="/wiki/consumables">consumables</a> tables later.
      </p>

      <h2>Co-op: keep the economy story boring (in a good way)</h2>
      <p>
        When prices, timers, or stock refresh logic change, the bug reports often sound like “desync” but mean
        <strong>someone never installed the same pak</strong>. Pair this mod with the habits in our
        <a href="/guides/play-windrose-online">play-online guide</a>: same patch, same optional files, same host decision,
        plus a single shared screenshot of the Nexus <strong>Files</strong> tab so nobody grabs yesterday’s zip by mistake.
      </p>

      <h2>Where the files usually land (still follow the readme first)</h2>
      <p>
        Most Windrose <code>.pak</code> drops still expect <code>…\\Windrose\\R5\\Content\\Paks\\~mods</code> on clients and a
        sibling path under <code>WindowsServer\\…\\Paks</code> for bundled hosts. Dedicated rentals often mirror
        <code>Windrose Dedicated Server\\R5\\Content\\Paks\\~mods</code>. If the author draws a different map, their readme wins.
      </p>

      <h2>After it loads: sanity checks that do not require datamining</h2>
      <ul>
        <li>Does the merchant UI still feel responsive with your usual graphics settings? Note it for stream night.</li>
        <li>If the mod touches currencies or rare mats, peek <a href="/wiki/resources">resources</a> so callouts match the table everyone trusts.</li>
        <li>Planning a route after shopping? Drop a pin on the <a href="/map">interactive map</a> so the crew knows where you tested.</li>
      </ul>

      <h2>When the tide turns</h2>
      <p>
        Pull the pak out of <code>~mods</code>, verify vanilla merchants feel normal, then add mods back one at a time. If
        Nexus regulars already posted a load-order recipe, borrow it before you open a fresh bug thread—include the author’s
        version string, not just “latest”.
      </p>

      <h2>Elsewhere on Compass</h2>
      <p>
        Browse the <a href="/mods">mods shelf</a> for other Windrose mod spotlights, or wander the <a href="/wiki">wiki hub</a>
        when you need hard numbers after a balance pass.
      </p>

      <p>
        <em>Windrose Compass is fan-made: binaries stay on the mod network—use Download mod. If the listing URL moves, search by author and refresh your bookmark.</em>
      </p>
    `.trim(),
  },
  {
    id: 2,
    title: 'Windrose mod — Host parity & multiplayer manifest',
    description:
      'This Windrose mod’s gameplay scope lives on its Nexus page (open via Download mod). Compass focuses the multiplayer angle: who copies which pak, listen-server vs dedicated paths, and how to brief crews so “optional mod” does not become “optional chaos”.',
    tags: ['Nexus Mods', 'Early Access', 'Co-op', 'Multiplayer'],
    publishDate: '2026-04-26',
    imageUrl: '/images/mods/mod02.webp',
    imageAlt: 'Windrose Compass — mod spotlight atmosphere',
    downloadUrl: 'https://www.nexusmods.com/windrose/mods/156',
    stars: 4,
    seo: {
      title: 'Windrose mod — Host parity & multiplayer manifest | Windrose Compass',
      description:
        'Windrose mod co-op manifest: read Nexus via Download mod for features, then use Compass tips for host/client pak parity, WindowsServer paths, and invite-night rehearsal.',
      keywords:
        'Windrose mod, Windrose mods, Windrose dedicated server mod, listen server Windrose, Windrose Compass, Windrose Nexus mods, Windrose co-op mods, ~mods Windrose, Nexus Mods Windrose, Early Access modding',
    },
    addressBar: 'windrose-nexus-extra-spotlight',
    detailsHtml: `
      <p>
        Every <strong>Windrose mod</strong> thread eventually becomes a multiplayer thread. Nexus tells you <em>what</em> the
        files change; this note is the <strong>host manifest</strong> we wish more captains pinned beside their invite codes.
        Open the listing with <strong>Download mod</strong>, read the sticky for “server only / everyone installs / optional
        client QoL”, then come back here for the logistics rehearsal.
      </p>

      <h2>Manifest line 0: quote the author, not the hype</h2>
      <p>Copy/paste beats paraphrase when five people install at different speeds:</p>
      <ul>
        <li><strong>Exact archive name + version string</strong> from the Nexus <strong>Files</strong> tab.</li>
        <li><strong>Any “host only” or “dedicated only” sentence</strong> — screenshot it so nobody “remembers differently” at 1am.</li>
        <li><strong>Known conflicts</strong> — if the sticky mentions another Windrose mod by folder name, add that mod to the same manifest block.</li>
      </ul>

      <h2>Listen server captains: mirror both halves of the install</h2>
      <p>
        Bundled Windows builds often want the same <code>.pak</code> under <code>…\\R5\\Content\\Paks\\~mods</code> <em>and</em>
        under <code>…\\Builds\\WindowsServer\\R5\\Content\\Paks\\~mods</code> (or plain <code>Paks</code> if the readme says so).
        If Nexus only mentions one path, assume nothing—ask in the author’s posts before you drag friends into a broken
        session. Our <a href="/guides/play-windrose-online">play-online guide</a> still covers vanilla connectivity; mods add
        a second checklist afterward.
      </p>

      <h2>Dedicated rental hosts: prove you can upload custom paks</h2>
      <p>
        Some providers block arbitrary <code>.pak</code> drops. Before you promise the crew a modded weekend, confirm you can
        write to <code>Windrose Dedicated Server\\R5\\Content\\Paks\\~mods</code> (or whatever the panel exposes) and restart
        cleanly. Keep a vanilla backup folder on disk so rollback is a file copy, not a panic reinstall.
      </p>

      <h2>Clients: parity is more than “I subscribed on Steam”</h2>
      <ul>
        <li>Hash-check optional archives in Discord if your crew is nerdy enough—it beats arguing about who grabbed “the big zip”.</li>
        <li>If the mod touches combat drops, agree whether everyone runs identical loot mods before you compare <a href="/wiki/weapons">weapons</a> numbers mid-fight.</li>
        <li>If sailing routes change, share <a href="/map">map pins</a> so callouts still line up with what people see on screen.</li>
      </ul>

      <h2>When someone joins late</h2>
      <p>
        Send them the manifest block + link to <strong>Download mod</strong>—not a vague “get the mod”. Late joiners are how
        silent half-installs sneak in. If the session already feels cursed, wipe <code>~mods</code> on every rig once, verify
        vanilla stability, then re-add paks in the author’s recommended order.
      </p>

      <h2>Elsewhere on Compass</h2>
      <p>
        Need baseline numbers while you argue about loot tables? Hit <a href="/wiki/resources">resources</a> or the broader
        <a href="/wiki">wiki hub</a>. Other Windrose mod spotlights live on the <a href="/mods">mods shelf</a>.
      </p>

      <p>
        <em>Windrose Compass is fan-made; binaries stay on the mod network—use Download mod. If URLs shift, search by author name and refresh bookmarks.</em>
      </p>
    `.trim(),
  },
  {
    id: 3,
    title: 'Windrose mod — Save drills & rollback ladder',
    description:
      'Before you add this Windrose mod, treat saves like cargo: snapshot the profile, label the zip, and know the undo ladder. Nexus (via Download mod) still owns changelog truth—Compass only rehearses the backup choreography crews forget until it is too late.',
    tags: ['Nexus Mods', 'Early Access', 'Co-op', 'Saves'],
    publishDate: '2026-04-27',
    imageUrl: '/images/mods/mod03.webp',
    imageAlt: 'Windrose Compass — mod spotlight atmosphere',
    downloadUrl: 'https://www.nexusmods.com/windrose/mods/152',
    stars: 4,
    seo: {
      title: 'Windrose mod — Save backup & rollback drill | Windrose Compass',
      description:
        'Windrose mod install prep focused on saves: profile snapshots, rollback order, when to test on a throwaway pirate; feature facts stay on Nexus via Download mod.',
      keywords:
        'Windrose mod, Windrose mods, Windrose save backup, Windrose Early Access saves, Windrose Compass, Windrose Nexus mods, Windrose mods install, ~mods Windrose, Nexus Mods Windrose',
    },
    addressBar: 'windrose-nexus-field-notes',
    detailsHtml: `
      <p>
        Adding a <strong>Windrose mod</strong> without touching your saves is like leaving port with a leaking cask—you might
        make it one island. Nexus (through <strong>Download mod</strong>) explains whether this package touches progression,
        world state, or UI only. Compass cannot see your disk; we <em>can</em> nag you to snapshot <strong>before</strong> the
        first launch with the new <code>.pak</code>.
      </p>

      <h2>Step 1: freeze the story you care about</h2>
      <p>
        Copy the profile folder the readme mentions—authors sometimes paste the exact <code>%LOCALAPPDATA%</code> or launcher path.
        Zip it with a boring filename: <code>pre-modname-YYYYMMDD.zip</code>. Store it outside the game tree so an over-eager
        cleaner does not nuke it. If you are on Steam Cloud, still keep a manual copy; cloud sync and mod experiments are a
        spicy combo.
      </p>

      <h2>Step 2: run the mod on a throwaway pirate first</h2>
      <p>
        Launch solo, create or reuse a disposable character, and poke the systems the Nexus sticky highlights (combat, loot,
        stamina, sailing—whatever the author calls out). If something corrupts, you delete one folder, not a fleet’s shared
        legend. Once satisfied, repeat the same install steps on your “real” profile <em>without</em> skipping the backup.
      </p>

      <h2>Step 3: document the rollback ladder on paper</h2>
      <ol>
        <li><strong>Soft undo</strong> — remove the pak from <code>~mods</code>, relaunch, confirm vanilla behaviour.</li>
        <li><strong>Hard undo</strong> — restore the zip from Step 1 if soft undo still leaves weird world state.</li>
        <li><strong>Nuclear undo</strong> — reinstall client only if you truly mangled binaries; saves should still be in your backup.</li>
      </ol>

      <h2>Co-op captains: backups are a briefing item</h2>
      <p>
        Tell the crew <em>when</em> you took the snapshot and <em>which</em> optional mods were inside it. If someone joins
        mid-campaign, they inherit your risk unless they make their own backup first. Pair the habit with our
        <a href="/guides/play-windrose-online">play-online guide</a> so networking arguments do not drown out save hygiene.
      </p>

      <h2>After the mod ships: watch for silent drift</h2>
      <ul>
        <li>If loot or crafting feels off, compare against <a href="/wiki/resources">resources</a> and <a href="/wiki/consumables">consumables</a> tables before blaming “RNG”.</li>
        <li>If camps or routes feel wrong, cross-check your <a href="/map">map pins</a> with what new players see—desync loves to hide inside old markers.</li>
        <li>If combat numbers wobble, glance <a href="/wiki/weapons">weapons</a> so Discord math stays anchored.</li>
      </ul>

      <h2>When rollback is not enough</h2>
      <p>
        If the author warns about one-way migrations, believe them. Early Access sometimes means “this save is now married
        to that mod version.” In that case, keep both the old zip <em>and</em> a fresh world for experiments—trying to thrash
        between incompatible eras on one save is how evenings die.
      </p>

      <h2>Elsewhere on Compass</h2>
      <p>
        Still hungry for reference data after you stabilise the install? Wander the <a href="/wiki">wiki hub</a> or browse
        other notes on the <a href="/mods">mods shelf</a>.
      </p>

      <p>
        <em>Windrose Compass is fan-made; binaries stay on the mod network—use Download mod. If URLs shift, search by author and refresh bookmarks.</em>
      </p>
    `.trim(),
  },
  {
    id: 4,
    title: 'Windrose mod — Load-order triage & clean-boot drill',
    description:
      'This Windrose mod’s feature list and compatibility notes belong on Nexus (Download mod). Compass handles the boring detective work: how to bisect conflicts, when to bypass Vortex, and how to prove a clean boot before you spam the author’s bug thread.',
    tags: ['Nexus Mods', 'Early Access', 'Co-op', 'Troubleshooting'],
    publishDate: '2026-04-28',
    imageUrl: '/images/mods/mod04.webp',
    imageAlt: 'Windrose Compass — mod spotlight atmosphere',
    downloadUrl: 'https://www.nexusmods.com/windrose/mods/153',
    stars: 4,
    seo: {
      title: 'Windrose mod — Load order & conflict triage | Windrose Compass',
      description:
        'Windrose mod troubleshooting playbook: bisect ~mods paks, Steam-clean boots, reading Nexus posts for conflicts—feature facts remain on the listing opened via Download mod.',
      keywords:
        'Windrose mod, Windrose mods, Windrose mod conflicts, Windrose manual install, Windrose Compass, Windrose Nexus mods, ~mods Windrose, Nexus Mods Windrose, Early Access modding',
    },
    addressBar: 'windrose-nexus-deck-briefing',
    detailsHtml: `
      <p>
        Some <strong>Windrose mod</strong> issues are gameplay bugs; more are <em>install archaeology</em>. Nexus (via
        <strong>Download mod</strong>) lists requirements, soft incompatibilities, and “read me first” warnings. This page is
        the triage ladder we run before we blame the ocean—or the wiki—for a bad night.
      </p>

      <h2>Triage 0: prove vanilla still launches</h2>
      <p>
        Empty <code>~mods</code>, verify the game boots to menu, load a disposable save. If vanilla is already unstable, no
        mod author can fix your install. Many Nexus authors beg players to <strong>launch from Steam after manual extracts</strong>
        because certain managers reorder paks oddly—mirror that advice if the sticky shouts it in all caps.
      </p>

      <h2>Triage 1: add only this Windrose mod</h2>
      <p>
        Drop the new <code>.pak</code> alone into <code>…\\Windrose\\R5\\Content\\Paks\\~mods</code>, relaunch, reproduce the
        behaviour. If the issue vanishes when paired with other mods, you have a <strong>conflict</strong>, not a solo bug.
        Note which other Windrose mod paks were in the folder—authors love repro steps that mention neighbours by filename.
      </p>

      <h2>Triage 2: bisect the rest like a binary search</h2>
      <ol>
        <li>Split your remaining paks into two halves; test each half.</li>
        <li>Keep halving until the smallest set still triggers the crash.</li>
        <li>Compare notes with Nexus <strong>Posts</strong>—someone may already name the two mods that hate each other.</li>
      </ol>

      <h2>Triage 3: read logs like a quartermaster, not a prosecutor</h2>
      <p>
        When you open a thread, paste <strong>game build + mod version + repro steps</strong>. Skip vague “it broke” unless
        you want sympathy instead of answers. If the mod touches combat or loot, mention whether you cross-checked
        <a href="/wiki/weapons">weapons</a> / <a href="/wiki/resources">resources</a> so readers know you ruled out “wiki lag”.
      </p>

      <h2>When co-op is involved</h2>
      <p>
        Symptom split across clients usually means mismatched paks, not “bad luck.” Run the same triage on every machine,
        then re-read the multiplayer section of our <a href="/guides/play-windrose-online">play-online guide</a> so networking
        noise does not cover up a half-installed archive.
      </p>

      <h2>After things stabilise</h2>
      <ul>
        <li>Document the final load order in your private notes—future-you will forget why that pak sits third.</li>
        <li>If sailing or camps felt wrong mid-debug, refresh <a href="/map">map pins</a> so the crew shares one truth again.</li>
        <li>If stamina or food loops were part of the symptom, glance <a href="/wiki/consumables">consumables</a> once sanity returns.</li>
      </ul>

      <h2>Elsewhere on Compass</h2>
      <p>
        Need reference tables while you wait for author replies? Try the <a href="/wiki">wiki hub</a> or another spotlight on
        the <a href="/mods">mods shelf</a>.
      </p>

      <p>
        <em>Windrose Compass is fan-made; binaries stay on the mod network—use Download mod. If URLs shift, search by author and refresh bookmarks.</em>
      </p>
    `.trim(),
  },
]
