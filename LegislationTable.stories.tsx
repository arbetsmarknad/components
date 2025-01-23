import React from "react";
import {
  LegislationTable,
  LegislationTableCell,
  LegislationTableRow,
} from "./LegislationTable";

export default {
  title: "LegislationTable",
};

export const Default = () => (
  <LegislationTable>
    <LegislationTableRow>
      <LegislationTableCell side="left" type="document_heading">
        Arbetsmiljölag (1977:1160)
      </LegislationTableCell>
      <LegislationTableCell side="right" type="document_heading">
        Work Environment Act (1977:1160)
      </LegislationTableCell>
    </LegislationTableRow>

    <LegislationTableRow>
      <LegislationTableCell side="left" type="chapter_heading">
        1 kap. Lagens ändamål och tillämpningsområde
      </LegislationTableCell>
      <LegislationTableCell side="right" type="chapter_heading">
        Chapter 1 Purpose and scope of the Act
      </LegislationTableCell>
    </LegislationTableRow>

    <LegislationTableRow>
      <LegislationTableCell side="left" type="section_heading">
        1 §
      </LegislationTableCell>
      <LegislationTableCell side="right" type="section_heading">
        Section 1
      </LegislationTableCell>
    </LegislationTableRow>

    <LegislationTableRow>
      <LegislationTableCell side="left" type="paragraph_text">
        <p>
          Lagens ändamål är att förebygga ohälsa och olycksfall i arbetet samt
          att även i övrigt uppnå en god arbetsmiljö. _Lag (1994:579)._
        </p>
      </LegislationTableCell>
      <LegislationTableCell side="right" type="paragraph_text">
        <p>
          The purpose of this Act is to prevent occupational illness and
          accidents and to otherwise ensure a good work environment. Act
          (1994:579).
        </p>
      </LegislationTableCell>
    </LegislationTableRow>

    <LegislationTableRow>
      <LegislationTableCell
        side="left"
        type="section_heading"
        href="https://example.org"
      >
        2 §
      </LegislationTableCell>
      <LegislationTableCell
        side="right"
        type="section_heading"
        href="https://example.org"
      >
        Section 2
      </LegislationTableCell>
    </LegislationTableRow>

    <LegislationTableRow>
      <LegislationTableCell side="left" type="paragraph_text">
        Denna lag gäller varje verksamhet i vilken arbetstagare utför arbete för
        en arbetsgivares räkning. I fråga om fartygsarbete gäller lagen även när
        svenska fartyg används till sjöfart utanför Sveriges sjöterritorium.
      </LegislationTableCell>
      <LegislationTableCell side="right" type="paragraph_text">
        This Act applies to every activity in which employees perform work on
        behalf of an employer. The Act also applies to work on ships even when a
        Swedish ship is used for maritime transport outside the territorial
        waters of Sweden.
      </LegislationTableCell>
    </LegislationTableRow>

    <LegislationTableRow>
      <LegislationTableCell side="left" type="paragraph_text">
        I fråga om fartyg och fartygsarbete ska vad som sägs i denna lag om
        Arbetsmiljöverket i stället gälla Transportstyrelsen. Vad som sägs om en
        arbetsgivare i denna lag ska såvitt avser fartyg också gälla en redare,
        även då fartygsarbete utförs av någon annan än den som är anställd av
        redaren. Med redare likställs i denna lag den som i redarens ställe
        utövar ett avgörande inflytande över fartygets drift.
      </LegislationTableCell>
      <LegislationTableCell side="right" type="paragraph_text">
        Regarding ships and work on ships, the provisions of this Act concerning
        the Swedish Work Environment Authority shall apply to the Swedish
        Transport Agency instead. The provisions of this Act concerning
        employers shall, as regards ships, also apply to shipowners, even when
        work on the ship is performed by someone other than a person employed by
        the shipowner. In this Act, a party who exercises decisive influence on
        the operation of the ship in the shipowner’s stead shall be equated with
        a shipowner.
      </LegislationTableCell>
    </LegislationTableRow>
  </LegislationTable>
);
