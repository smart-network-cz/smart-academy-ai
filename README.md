<p align="center"><img src=".github/banner.png" alt="Smart Academy: skill pro Claude Code od Smart Network" width="100%"></p>

# Smart Academy: AI v běžném provozu firmy

Skill pro Claude Code ze Smart Academy (Brno, 11. 11. 2026) a postup nastavení, se kterým odcházíš z večera.

Co skill dělá:
- Claude odpovídá stručně, bez omáčky.
- Volí nejjednodušší řešení, které funguje.
- „Hotovo“ píše jen po ověření.
- Hesla drží mimo kód.
- Po každém funkčním kroku navrhne commit.
- Nevymýšlí čísla.

Celá pravidla jsou v [skills/smart-academy/SKILL.md](skills/smart-academy/SKILL.md).

## Instalace skillu

V Claude Code (aplikace Claude Desktop, záložka Code, nebo terminál) napiš:

```
/plugin marketplace add smart-network-cz/smart-academy-ai
/plugin install smart-academy@smart-academy-ai
```

Při instalaci vyber User scope. Potom začni nové sezení. Pravidla se načtou při každém startu. Pro načtení je potřeba Node.js, který budeš mít po kroku 4 níže.

Jiná možnost je napsat Claudovi:

> Nainstaluj mi skill z https://github.com/smart-network-cz/smart-academy-ai do ~/.claude/skills

V aplikaci claude.ai (chat) nahraješ složku `skills/smart-academy` jako ZIP přes Customize > Skills. Je potřeba mít zapnuté spouštění kódu.

## Nastavení krok za krokem

Každý krok má kontrolu „hotovo, když“. Dokud ji nevidíš, nepokračuj.

1. **Účty.** Založ si tři účty a na všech zapni dvoufázové ověření:
   - claude.ai s plánem Pro, protože Free neobsahuje Claude Code,
   - github.com s plánem Free,
   - dash.cloudflare.com s plánem Free.

   *Hotovo, když* se do všech tří přihlásíš.
2. **Claude Desktop.** Stáhni ho z claude.com/download a přihlas se.
   *Hotovo, když* vidíš záložku Code.
3. **Tvoje složka.** V Dokumentech vytvoř `ai-projekty/moje-prvni` a v záložce Code ji vyber.
   *Hotovo, když* Claude odpoví na „Co je v této složce?“.
4. **Git a GitHub.** Napiš Claudovi: „Zkontroluj, jestli mám git, gh a Node.js. Co chybí, nainstaluj.“ Potom spusť `gh auth login`, přihlášení proběhne v prohlížeči.
   *Hotovo, když* `gh auth status` ukáže tvé jméno.
5. **První repozitář.** „Udělej z této složky git repozitář, přidej .gitignore a vytvoř soukromý repozitář na GitHubu.“
   *Hotovo, když* ho vidíš na github.com.
6. **První stránka online.** Zadej: „Udělej jednoduchou stránku o mé firmě a nasaď ji na Cloudflare Workers jako statickou stránku.“ Claude spustí `npx wrangler login` a `npx wrangler deploy`.
   *Hotovo, když* stránka běží na adrese `.workers.dev`.
7. **Skill.** Nainstaluj ho podle návodu výše.
   *Hotovo, když* Claude odpovídá krátce a k věci.

Bez aplikace, jen v terminálu, nainstaluješ Claude Code takto:
- macOS a Linux: `curl -fsSL https://claude.ai/install.sh | bash`
- Windows PowerShell: `irm https://claude.ai/install.ps1 | iex`

## Pravidla, která si vezmi domů

- Každé číslo od AI potřebuje zdroj. Počítá kód, ne model.
- Text ven je vždy návrh. Odesíláš ho ty, po přečtení.
- Hesla patří do `.env`, nikdy na GitHub.
- Automatizuj jen proces, který je sepsaný.
- Agentovi dávej jen přístupy, které potřebuje na jednu úlohu.

Smart Network · www.smart-network.cz
