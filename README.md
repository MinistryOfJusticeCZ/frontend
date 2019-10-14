# Frontend Ministerstva spravedlnosti

Frontend Ministerstva spravedlnosti obsahuje kód, který potřebujete pro budování uživatelských rozhraní webových stránek a služeb Ministerstva spravedlnosti.

Pro příklady Frontend komponent navštivte [Frontend Ministerstva spravedlnosti](https://msp-frontend.glitch.me/). Frontend Ministerstva spravedlnosti je postaven nad [GOV.UK Design System](https://github.com/alphagov/govuk-design-system), kde naleznete základní komponenty. 

## Kontakt na tým

Frontend Ministerstva spravedlnosti je udržován týmem na Ministerstvu spravedlnosti. Pokud se chcete o Frontendu dozvědět více, [kontakujte tým Ministerstva spravedlnosti](mailto:oi@msp.justice.cz).

## Jak nainstalovat Frontend Ministerstva spravedlnosti

Doporučejeme [instalovat Frontend Ministerstva spravedlnosti pomocí node package manageru
(npm)](docs/installation/instalace-pomoci-npm.md).

## Podpora prohlížečů a kompenzačních pomůcek

Frontend Ministerstva spravedlnosti vám umožní budovat služby, které splňují [pokyny v Service Manualu][service-manual-browsers].

Pokud vkládáte Frontend Ministerstva spravedlnosti jako část stylesheetu, který generujete v build pipelině vaší aplikace, musíte [kvůli podpoře Internetu Explorer 8 vygenerovat a vložit separátní stylesheet](docs/installation/supporting-internet-explorer-8.md).

[service-manual-browsers]: https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices#browsers-to-test-in

## Podpora kompenzačních pomůcek

Frontend Ministerstva spravedlnosti vám umožní budovat služby, které splňují [pokyny v Service Manualu][service-manual-assistive-technologies].

K tomu jěště navíc testujeme veškerý obsah pouze za pomoci klávesnice.

Cílíme na podporu [uživatelů, kteří si upravují nebo přepisují barvy stránek, které navštěvují.][how-users-change-colours-on-websites]. Toto testujeme [změnou barev ve Firefoxu][changing-colours-in-firefox], [zapnutím 'Módu Vysokého kontrastu' ve Windows][enabling-high-contrast-mode-in-windows] a za použití [High Contrast plugin pro Chrome][high-contrast-plugin-for-chrome].

[service-manual-assistive-technologies]: https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#what-to-test

[changing-colours-in-firefox]:
https://support.mozilla.org/en-US/kb/change-fonts-and-colors-websites-use

[enabling-high-contrast-mode-in-windows]:
https://support.microsoft.com/en-gb/help/13862/windows-use-high-contrast-mode

[high-contrast-plugin-for-chrome]: https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph?hl=en-US

[how-users-change-colours-on-websites]:
https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/

## Pokyny jak přispět

Podívejte se na naše [pokyny jak přispět](docs/installation/pokyny-jak-prispet.md), pokud chcete Frontendu Ministerstva spravedlnosti pomoci.