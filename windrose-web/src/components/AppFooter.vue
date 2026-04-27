<template>
  <footer class="site-footer" role="contentinfo">
    <div class="footer-ink" aria-hidden="true" />
    <div class="container footer-shell">
      <div class="footer-left">
        <div class="footer-brand-block">
          <img
            class="footer-logo"
            src="/images/logo.png"
            width="40"
            height="40"
            alt=""
            loading="eager"
            decoding="async"
          />
          <div class="footer-brand-copy">
            <p class="footer-brand-name">Windrose Compass</p>
            <p class="footer-content">
              Fan-made strategy reference for Windrose Early Access—wiki tables, guides, and an interactive map. Not
              affiliated with the developers or publishers; trademarks belong to their owners.
            </p>
          </div>
        </div>

        <div class="footer-external-wrap">
          <p class="footer-external-label">Official Windrose</p>
          <ul class="footer-external" aria-label="Official Windrose links">
            <li v-for="item in outbound" :key="item.href">
              <a
                class="footer-external-link"
                :href="item.href"
                rel="noopener noreferrer"
                target="_blank"
                :title="item.label"
              >
                <span class="footer-external-icon" aria-hidden="true">
                  <svg v-if="item.icon === 'globe'" viewBox="0 0 24 24" width="22" height="22" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" />
                    <path
                      d="M3 12h18M12 3c2.5 3.2 2.5 14.8 0 18M12 3c-2.5 3.2-2.5 14.8 0 18"
                      stroke="currentColor"
                      stroke-width="1.25"
                    />
                  </svg>
                  <svg v-else-if="item.icon === 'steam'" viewBox="0 0 24 24" width="22" height="22" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" />
                    <path
                      d="M8.5 14.5c.8 1.5 2.6 2.3 4.3 1.9 1.7-.4 2.9-2 2.9-3.8 0-2.2-1.8-4-4-4-1.2 0-2.3.5-3 1.4"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                    />
                    <circle cx="10" cy="10" r="1.35" fill="currentColor" />
                  </svg>
                  <svg v-else viewBox="0 0 24 24" width="22" height="22" fill="none">
                    <path
                      d="M5 18L12 5l7 13H5z"
                      stroke="currentColor"
                      stroke-width="1.35"
                      stroke-linejoin="round"
                      fill="none"
                    />
                    <circle cx="12" cy="15" r="1.25" fill="currentColor" />
                  </svg>
                </span>
                <span class="footer-external-text">{{ item.shortLabel }}</span>
                <span class="sr-only">{{ item.label }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-right">
        <nav class="footer-nav-block" aria-label="Quick links">
          <p class="footer-nav-heading">Quick links</p>
          <ul class="footer-nav-list">
            <li v-for="link in quickLinks" :key="link.to">
              <RouterLink class="footer-nav-link" :to="link.to">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </nav>
        <nav class="footer-nav-block" aria-label="Legal">
          <p class="footer-nav-heading">Legal</p>
          <ul class="footer-nav-list">
            <li v-for="link in legalLinks" :key="link.to">
              <RouterLink class="footer-nav-link footer-nav-link--legal" :to="link.to">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </nav>
      </div>

      <p class="footer-meta">
        Game data may be incomplete or outdated after patches. Cross-check important decisions with the live client and
        official channels.
      </p>
      <p class="footer-copy">&copy; {{ year }} Windrose Compass</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { PRIMARY_NAV, LEGAL_NAV, OFFICIAL_OUTBOUND } from '@/data/siteNav.js'

const year = new Date().getFullYear()
const quickLinks = PRIMARY_NAV
const legalLinks = LEGAL_NAV

const outbound = computed(() =>
  OFFICIAL_OUTBOUND.map((o) => ({
    ...o,
    shortLabel: o.icon === 'globe' ? 'Site' : o.icon === 'steam' ? 'Steam' : 'Map',
  })),
)
</script>

<style scoped>
.site-footer {
  position: relative;
  padding: 2.75rem 0 2.25rem;
  border-top: 1px solid rgba(160, 188, 210, 0.2);
  background:
    linear-gradient(180deg, rgba(10, 14, 22, 0.92), rgba(6, 8, 12, 0.97)),
    repeating-linear-gradient(0deg, transparent 0, transparent 13px, rgba(160, 188, 210, 0.035) 13px, rgba(160, 188, 210, 0.035) 14px),
    repeating-linear-gradient(90deg, transparent 0, transparent 13px, rgba(160, 188, 210, 0.035) 13px, rgba(160, 188, 210, 0.035) 14px);
  box-shadow: 0 -20px 48px rgba(0, 0, 0, 0.28);
}

.footer-ink {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-sea), var(--color-brass), transparent);
  opacity: 0.88;
}

.footer-shell {
  display: grid;
  gap: 2rem 2.5rem;
  grid-template-columns: 1fr;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.footer-brand-block {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.footer-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid rgba(160, 188, 210, 0.25);
  background: rgba(8, 10, 16, 0.85);
}

.footer-brand-name {
  margin: 0 0 0.45rem;
  font-family: var(--font-heading);
  font-size: 1rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-parchment);
}

.footer-content {
  margin: 0;
  max-width: 52ch;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.footer-external-wrap {
  padding-top: 0.25rem;
}

.footer-external-label {
  margin: 0 0 0.65rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-text-muted) 88%, var(--color-parchment));
}

.footer-external {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-external-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.65rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(160, 188, 210, 0.18);
  background: rgba(6, 8, 12, 0.65);
  text-decoration: none;
  color: var(--color-text-muted);
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background 0.2s ease;
}

.footer-external-link:hover {
  border-color: rgba(201, 164, 92, 0.45);
  color: var(--color-brass);
  background: rgba(12, 14, 20, 0.9);
}

.footer-external-icon {
  display: flex;
  color: var(--color-sea);
}

.footer-external-link:hover .footer-external-icon {
  color: var(--color-brass);
}

.footer-external-text {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.footer-right {
  display: grid;
  gap: 1.5rem 2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.footer-nav-heading {
  margin: 0 0 0.65rem;
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-parchment);
}

.footer-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.footer-nav-link {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-decoration: none;
  color: var(--color-text-muted);
  transition: color 0.2s ease;
}

.footer-nav-link:hover {
  color: var(--color-sea);
}

.footer-nav-link.router-link-active {
  color: var(--color-brass);
}

.footer-nav-link--legal {
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.footer-meta {
  grid-column: 1 / -1;
  margin: 0;
  max-width: 72ch;
  font-size: 0.8rem;
  line-height: 1.55;
  color: color-mix(in srgb, var(--color-text-muted) 92%, transparent);
  padding-top: 0.5rem;
  border-top: 1px solid rgba(160, 188, 210, 0.12);
}

.footer-copy {
  grid-column: 1 / -1;
  margin: 0;
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

/* ≤1024：与全站平板档一致，整栏纵向堆叠、略收间距 */
@media (max-width: 1024px) {
  .site-footer {
    padding: 2.1rem 0 1.85rem;
  }

  .footer-shell {
    gap: 1.5rem 0;
  }

  .footer-left {
    gap: 1.35rem;
  }

  .footer-brand-name {
    font-size: 0.92rem;
    letter-spacing: 0.1em;
  }

  .footer-content {
    font-size: 0.86rem;
    line-height: 1.55;
  }

  .footer-nav-heading {
    font-size: 0.68rem;
    letter-spacing: 0.12em;
  }

  .footer-nav-link {
    font-size: 0.78rem;
  }

  .footer-meta {
    font-size: 0.76rem;
    padding-top: 0.45rem;
  }

  .footer-copy {
    font-size: 0.78rem;
  }
}

@media (max-width: 768px) {
  .site-footer {
    padding: 1.65rem 0 1.5rem;
  }

  .footer-shell {
    gap: 1.25rem 0;
  }

  .footer-left {
    gap: 1.1rem;
  }

  .footer-brand-block {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .footer-logo {
    width: 36px;
    height: 36px;
  }

  .footer-brand-name {
    font-size: 0.85rem;
    letter-spacing: 0.09em;
  }

  .footer-content {
    font-size: 0.82rem;
    max-width: none;
  }

  .footer-external {
    gap: 0.5rem 0.65rem;
  }

  .footer-external-link {
    padding: 0.5rem 0.7rem;
    min-height: 2.75rem;
    box-sizing: border-box;
  }

  .footer-right {
    grid-template-columns: 1fr;
    gap: 1.15rem;
  }

  .footer-nav-list {
    gap: 0.35rem;
  }

  .footer-nav-link {
    font-size: 0.76rem;
    padding: 0.2rem 0;
    display: inline-block;
  }

  .footer-nav-link--legal {
    font-size: 0.74rem;
  }

  .footer-meta {
    font-size: 0.72rem;
    line-height: 1.5;
  }

  .footer-copy {
    font-size: 0.74rem;
  }
}

@media (min-width: 1025px) {
  .site-footer {
    padding: 2.85rem 0 2.35rem;
  }

  .footer-shell {
    gap: 2rem 3rem;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
    align-items: start;
  }

  .footer-meta,
  .footer-copy {
    grid-column: 1 / -1;
  }

  .footer-right {
    justify-items: stretch;
  }
}
</style>
