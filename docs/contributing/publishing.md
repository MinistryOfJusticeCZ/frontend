# Publikování Frontendu Ministerstva spravedlnosti

Tyto pokyny popisují, jak publikovat novou verzi Frontendu na NPM.

1. Zpřístupněte (checkout) **master** a stáhněte (pull) nejnovější změny.

2. Spusťte `nvm use`. Zajistíte, že máte správnou verzi Node.js a npm.

3. Spusťte `npm install`. Zajistíte, že máte naistalovány nejnovější dependence.

4. Vytvořte a zpřístupněte novou větev: spusťte `git checkout -b release-x.x.x-phase`, například `git checkout -b release-0.0.34-alpha`.

5. V [`CHANGELOG.md`](../../CHANGELOG.md) aktualizujte nadpis "Šablona" s novým číslem verzí.
   Inkrementace je na základě [Semantického verzování](https://semver.org/).

6. (Nepovinné) Aktualizujte [`package/package.json`](../../package/package.json) aktualizujte s novým číslem verzí.
   Inkrementace je na základě [Semantického verzování](https://semver.org/).

7. Uložte změny. Nedělejte commit.

8. (Nepovinné) Testování TODO

9. Odeslání (push) do větve na GitHubu

10. Vytvořte pull request a zkopírujte text v changelogu.
   Při review PR, zkontrolujte, že čísla verze byly aktualizovány a že zkompilované assety používají tuto verzi.

11. Ve chvíli, kdy je pull request přijat, merge do **master**.

12. Vytvořte release na [Githubu](https://github.com/msp/frontend/releases/new)
  - vyberte nejnovější tag verzi
  - nastavte "Frontend MSp release v[version-number]" jako název
  - přidejte release notes z changelogu
  - označte release jako pre-release
  - publikujte release

Toto automaticky aktualizuje package folder s nejnovějším obsahem a bude publikováno na NPM.