import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import guideArticles from '@/data/guides/guideArticles.js'
import modArticles from '@/data/mods/modArticles.js'
import { seoConfig } from '@/seo/config.js'
import {
  applyDocumentSeo,
  buildArticleJsonLd,
  mergeArticleJsonLdWithHead,
  resolveCanonicalUrl,
} from '@/seo/documentMeta.js'
import { getByAddressBar } from '@/utils/contentLookup.js'
import { buildDocumentTitle } from '@/utils/pageSeo.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'auto', top: 96 }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      /* 同步首页：避免首屏 RouterView 空壳 + main 弹性占位导致页脚先贴视口底、chunk 到达后整块下移（CLS≈1） */
      component: HomeView,
      meta: {
        title: 'Windrose Wiki, Interactive Map, Guides & Mods',
        description:
          'Windrose Compass: fan wiki tables, interactive map with POI search, and guides for Early Access pirate survival—ships, camps, and sailing in one hub.',
        keywords:
          'Windrose, Windrose Early Access, Windrose wiki, Windrose interactive map, Windrose multiplayer, play Windrose online, pirate survival game, Windrose Compass, PvE co-op, open world sailing, ship combat, crafting guide',
      },
    },
    {
      path: '/beginner',
      redirect: '/getting-started',
    },
    {
      path: '/getting-started',
      name: 'getting-started',
      component: () => import('@/views/GettingStartedView.vue'),
      meta: {
        title: 'Windrose Beginner Guide — First 10 Hours, Talents & Shelter',
        description:
          'Windrose beginner guide: talents, first gathering, shelter, starter boat, and food buff planning for Early Access—fan hub with map and wiki links.',
        keywords:
          'Windrose beginner guide, first 10 hours Windrose, Windrose talents, Windrose shelter, Windrose boat, food buffs Windrose, Early Access tips, Windrose Compass',
      },
    },
    {
      path: '/advanced',
      name: 'advanced',
      component: () => import('@/views/AdvancedView.vue'),
      meta: {
        title: 'Windrose Advanced Guide — Combat, Ships, Forts & Endgame',
        description:
          'Windrose advanced guide: soulslite combat cadence, ship outfit choices, gunpowder routes, forts, dedicated server notes—pairs with wiki and map.',
        keywords:
          'Windrose advanced guide, Windrose combat tips, Windrose ship build, gunpowder farming Windrose, Windrose forts, dedicated server Windrose, Windrose Compass',
      },
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: () => import('@/views/wiki/WikiHubView.vue'),
      meta: {
        title: 'Windrose Wiki Hub — Resources, Weapons, Ship, Armor & Items',
        description:
          'Six Windrose wiki decks: resources, consumables, weapons, equipment, ship, misc—filterable fan tables for crafting, loadouts, and trade in Early Access.',
        keywords:
          'Windrose wiki, item database Windrose, resources table, weapons list, ship modules, consumables wiki, Windrose Early Access, Windrose Compass',
      },
    },
    {
      path: '/wiki/resources',
      name: 'wiki-resources',
      component: () => import('@/views/wiki/WikiResourcesPage.vue'),
      meta: {
        title: 'Windrose Resources Wiki — Ores, Fibers, Salvage & Biome Drops',
        description:
          'Windrose resources table: ores, fibers, salvage, biome drops—filter by name for crafting chains, camp upgrades, and trade planning in Early Access.',
        keywords:
          'Windrose resources, crafting materials, ore locations, fiber drops, salvage wiki, harvest nodes, Windrose Early Access, fan wiki',
      },
    },
    {
      path: '/wiki/consumables',
      name: 'wiki-consumables',
      component: () => import('@/views/wiki/WikiConsumablesPage.vue'),
      meta: {
        title: 'Windrose Consumables Wiki — Food, Buffs, Medicine & Survival',
        description:
          'Windrose consumables: food, tonics, buffs, expendables—search by name or effect to plan loadouts and survival rotations for PvE Early Access.',
        keywords:
          'Windrose consumables, food buffs, medicine Windrose, potions wiki, survival items, Windrose Early Access, Windrose wiki',
      },
    },
    {
      path: '/wiki/weapons',
      name: 'wiki-weapons',
      component: () => import('@/views/wiki/WikiWeaponsPage.vue'),
      meta: {
        title: 'Windrose Weapons Wiki — Melee, Ranged, Thrown & Builds',
        description:
          'Windrose weapons table: melee, ranged, and thrown—filter by category, stats, and rarity to compare DPS families, stamina costs, and Early Access builds.',
        keywords:
          'Windrose weapons, melee weapons, ranged weapons, thrown weapons, weapon stats Windrose, soulslike combat, Windrose wiki',
      },
    },
    {
      path: '/wiki/equipment',
      name: 'wiki-equipment',
      component: () => import('@/views/wiki/WikiEquipmentPage.vue'),
      meta: {
        title: 'Windrose Equipment Wiki — Armor, Tools, Trinkets & Loadouts',
        description:
          'Windrose equipment table: armor, tools, trinkets—plan resist stacks, harvesting kits, outfit swaps for camps and naval runs in Early Access.',
        keywords:
          'Windrose equipment, armor sets, tools Windrose, trinkets wiki, gear table, loadout planning, Windrose Early Access',
      },
    },
    {
      path: '/wiki/ship',
      name: 'wiki-ship',
      component: () => import('@/views/wiki/WikiShipPage.vue'),
      meta: {
        title: 'Windrose Ship Wiki — Hulls, Cannons, Gunports & Deck Modules',
        description:
          'Windrose ship parts: hulls, cannons, gunports, deck gear—stat snippets for naval builds; pair with our map when routes need firepower or cargo.',
        keywords:
          'Windrose ship, cannons Windrose, hull modules, naval combat, gunports, ship upgrades, Windrose wiki, Early Access',
      },
    },
    {
      path: '/wiki/misc',
      name: 'wiki-misc',
      component: () => import('@/views/wiki/WikiMiscPage.vue'),
      meta: {
        title: 'Windrose Misc Wiki — Quest Items, Currencies & Trophies',
        description:
          'Windrose misc items: quest keys, currencies, trophies, oddities—one filterable wiki list for trackers and completion routes in Early Access pirate survival.',
        keywords:
          'Windrose misc items, quest keys, currencies Windrose, trophies, collectible wiki, Windrose Early Access',
      },
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('@/views/MapView.vue'),
      meta: {
        title: 'Windrose Interactive Map — POIs, Camps & Coordinates',
        description:
          'Fan Windrose map: pan and zoom the archipelago, toggle camps and resources, search POIs by name or tag, read coordinates for wiki notes and callouts.',
        keywords:
          'Windrose map, interactive map Windrose, POI search, quest markers, archipelago map, camps map, coordinates Windrose, Windrose Early Access, Windrose Compass',
      },
    },
    {
      path: '/guides',
      name: 'guides',
      component: () => import('@/views/guides/GuidesListView.vue'),
      meta: {
        title: 'Windrose Guides — Co-op, Invite Codes, Map Tips & Early Access',
        description:
          'Windrose guides: play online with friends (invite codes, joining), interactive map how-tos, and practical Early Access notes for crews.',
        keywords:
          'Windrose guides, Windrose multiplayer, play Windrose online, Windrose co-op, invite code Windrose, map guide Windrose, Early Access, Windrose Compass',
      },
    },
    {
      path: '/guides/windrose-servers',
      redirect: '/guides/play-windrose-online',
    },
    {
      path: '/guides/interactive-map-guide',
      redirect: '/map',
    },
    {
      path: '/guides/:addressBar',
      name: 'guide-article',
      component: () => import('@/views/guides/GuideArticleView.vue'),
    },
    {
      path: '/mods',
      name: 'mods',
      component: () => import('@/views/mods/ModsListView.vue'),
      meta: {
        title: 'Windrose Mods — Nexus Spotlights, QoL, Gameplay & Install Notes',
        description:
          'Curated Windrose Early Access mods: QoL and gameplay spotlights, summaries, tags, version notes, author download links for solo, co-op, and servers.',
        keywords:
          'Windrose mod, Windrose mods, Nexus Mods Windrose, QoL mod, gameplay mod, Early Access mods, Windrose Compass, mod list',
      },
    },
    {
      path: '/mods/windrose-nexus-mod-167',
      redirect: '/mods/speedy-merchant-base-merchant-order-time',
    },
    {
      path: '/mods/windrose-nexus-mod-156',
      redirect: '/mods/windrose-nexus-extra-spotlight',
    },
    {
      path: '/mods/windrose-nexus-mod-152',
      redirect: '/mods/windrose-nexus-field-notes',
    },
    {
      path: '/mods/windrose-nexus-mod-153',
      redirect: '/mods/windrose-nexus-deck-briefing',
    },
    {
      path: '/mods/:addressBar',
      name: 'mod-article',
      component: () => import('@/views/mods/ModArticleView.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('@/views/legal/PrivacyPolicyView.vue'),
      meta: {
        title: 'Windrose Fan Site Privacy — Data, Cookies & Compass Practices',
        description:
          'Windrose Compass privacy: browsing data, cookies, embeds, and updates to this fan-run wiki and map site—no accounts required for most pages.',
        keywords:
          'Windrose Compass, privacy policy, cookies, fan site, Windrose wiki, data policy, site terms',
      },
    },
    {
      path: '/terms-of-use',
      name: 'terms-of-use',
      component: () => import('@/views/legal/TermsOfUseView.vue'),
      meta: {
        title: 'Windrose Fan Site Terms — Rules, Disclaimer & Trademark Notes',
        description:
          'Windrose Compass terms: acceptable use, trademark notices, fan disclaimer, liability limits—this site is independent from the Windrose game and publishers.',
        keywords:
          'Windrose Compass, terms of use, fan project, disclaimer, Windrose trademark, site rules',
      },
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: () => import('@/views/legal/CopyrightView.vue'),
      meta: {
        title: 'Windrose Fan Site Copyright — Notices, Fair Use & Takedowns',
        description:
          'Copyright on Windrose Compass: fair-use context, how rights holders may request changes, third-party links, and rules for any future user-submitted content.',
        keywords:
          'Windrose Compass, copyright, DMCA notice, fan wiki, intellectual property, takedown',
      },
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('@/views/legal/AboutUsView.vue'),
      meta: {
        title: 'About Windrose Compass — Fan Wiki, Map & How We Work',
        description:
          'About Windrose Compass: a volunteer-run companion for Windrose Early Access—wiki tables, guides, and map—not official support; how we think about accuracy and contributions.',
        keywords:
          'Windrose Compass, about, fan wiki, Early Access guide, volunteer project, Windrose community',
      },
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('@/views/legal/ContactUsView.vue'),
      meta: {
        title: 'Windrose Compass Contact — Site Feedback vs Official Support',
        description:
          'Contact: use Steam and official Windrose channels for game support; for this fan site, reach maintainers via the community or repo they publish—no form here.',
        keywords:
          'Windrose Compass, contact, game support, Steam Windrose, site feedback, fan project',
      },
    },
  ],
})

router.afterEach((to) => {
  if (to.name === 'guide-article') {
    const slug = to.params.addressBar
    const g = getByAddressBar(guideArticles, slug)
    const path = g ? `/guides/${g.addressBar}` : to.path
    if (!g) {
      applyDocumentSeo({
        path,
        title: buildDocumentTitle('Windrose Guide Not Found — Browse All Guides'),
        description: 'The requested Windrose guide is not available on Windrose Compass.',
        keywords: seoConfig.defaults.keywords,
      })
      return
    }
    const description = g.seo?.description || g.description || seoConfig.defaults.description
    const keywords = g.seo?.keywords || seoConfig.defaults.keywords
    applyDocumentSeo({
      path,
      title: buildDocumentTitle(g.seo?.title || g.title),
      description,
      keywords,
      ogImage: g.imageUrl,
      ogType: 'article',
      jsonLd: mergeArticleJsonLdWithHead(
        buildArticleJsonLd({
          headline: buildDocumentTitle(g.seo?.title || g.title),
          description,
          url: resolveCanonicalUrl(path),
          datePublished: g.publishDate,
          imageUrl: g.imageUrl,
        }),
        g.head,
      ),
    })
    return
  }

  if (to.name === 'mod-article') {
    const slug = to.params.addressBar
    const m = getByAddressBar(modArticles, slug)
    const path = m ? `/mods/${m.addressBar}` : to.path
    if (!m) {
      applyDocumentSeo({
        path,
        title: buildDocumentTitle('Windrose Mod Not Found — Browse All Mods'),
        description: 'The requested Windrose mod entry is not available on Windrose Compass.',
        keywords: seoConfig.defaults.keywords,
      })
      return
    }
    const description = m.seo?.description || m.description || seoConfig.defaults.description
    const keywords = m.seo?.keywords || seoConfig.defaults.keywords
    applyDocumentSeo({
      path,
      title: buildDocumentTitle(m.seo?.title || m.title),
      description,
      keywords,
      ogImage: m.imageUrl,
      ogType: 'article',
      jsonLd: buildArticleJsonLd({
        headline: buildDocumentTitle(m.seo?.title || m.title),
        description,
        url: resolveCanonicalUrl(path),
        datePublished: m.publishDate,
        imageUrl: m.imageUrl,
      }),
    })
    return
  }

  const title = buildDocumentTitle(to.meta?.title ?? seoConfig.defaults.title)
  const description = to.meta?.description || seoConfig.defaults.description
  const keywords = to.meta?.keywords || seoConfig.defaults.keywords
  applyDocumentSeo({
    path: to.path,
    title,
    description,
    keywords,
    ogImage: to.meta?.ogImage,
  })
})

export default router
