# Časová osa

- [Pokyny pro použití](TODO/components/timeline)
- [Náhled](https://msp-frontend.glitch.me/components/timeline)

## Argumenty

<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="col">Jméno</th>
      <th class="govuk-table__header" scope="col">Typ</th>
      <th class="govuk-table__header" scope="col">Povinné</th>
      <th class="govuk-table__header" scope="col">Popis</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">headingLevel</th>
      <td class="govuk-table__cell">Number</td>
      <td class="govuk-table__cell">ne</td>
      <td class="govuk-table__cell">Defines the heading level. Defaults to '2' so will generate an level 2 heading.</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">classes</th>
      <td class="govuk-table__cell">String</td>
      <td class="govuk-table__cell">ne</td>
      <td class="govuk-table__cell">Optional additional classes to add to timeline container</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">events</th>
      <td class="govuk-table__cell">Array</td>
      <td class="govuk-table__cell">Ano</td>
      <td class="govuk-table__cell">Array of event item objects</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.title</th>
      <td class="govuk-table__cell">String</td>
      <td class="govuk-table__cell">Ano</td>
      <td class="govuk-table__cell">Title of the event</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.by</th>
      <td class="govuk-table__cell">String</td>
      <td class="govuk-table__cell">Ano</td>
      <td class="govuk-table__cell">Byline of the event. Who or what caused the event</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.dateUtc</th>
      <td class="govuk-table__cell">String</td>
      <td class="govuk-table__cell">Ano</td>
      <td class="govuk-table__cell">Date of the event in UTC format</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.date</th>
      <td class="govuk-table__cell">String</td>
      <td class="govuk-table__cell">Ano</td>
      <td class="govuk-table__cell">Date of the event. Should match GOV.UK styles: 11 November 2018</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.time</th>
      <td class="govuk-table__cell">String</td>
      <td class="govuk-table__cell">Ne</td>
      <td class="govuk-table__cell">Time of the event. Should match GOV.UK styles: 9am</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.documents</th>
      <td class="govuk-table__cell">Array</td>
      <td class="govuk-table__cell">Ne</td>
      <td class="govuk-table__cell">Array of document objects relating to the event</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.documents.{}.href</th>
      <td class="govuk-table__cell">String</td>
      <td class="govuk-table__cell">Ano</td>
      <td class="govuk-table__cell">Url for document, either page or file download</td>
    </tr>
    <tr class="govuk-table__row">
      <th class="govuk-table__header" scope="row">items.{}.documents.{}.name</th>
      <td class="govuk-table__cell">String</td>
      <td class="govuk-table__cell">Ano</td>
      <td class="govuk-table__cell">Name of the document</td>
    </tr>
  </tbody>
</table>