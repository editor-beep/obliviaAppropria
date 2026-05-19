import type { StoryDocument } from "@/content/types";

export const narrative: StoryDocument = {
  sections: [
    {
      id: "chapter-one-elias-report-suppressed",
      title: "Chapter One: Elias's Report (Suppressed)",
      blocks: [
        {
          type: "heading",
          text: "The Case of the Pipe's Testimony",
        },
        {
          type: "paragraph",
          text: "The Missouri River in November was the color of cold iron, moving under a sky that matched it exactly. Elias Whitehorse had been standing on the east bank of the river for twenty minutes, in the specific cold that doesn't have an indoor equivalent—the cold that comes off water and carries in it the smell of wet clay and diesel and something else, something chemical and wrong—when he had filed his report. The report documented a 2.3-meter weld-seam failure in the pipeline's tunnel crossing, identified during routine inspection, with a calculated probability of full-section failure within ninety days under current operating pressure. He had sent it to North-Star Midstream Corp's pipeline integrity division at 14:47. He had confirmation of receipt at 14:51.",
        },
        {
          type: "paragraph",
          text: "The response had come four days later, from a project manager he had never communicated with before, who told him the weld assessment was 'within acceptable variance parameters under our modified integrity standard' and instructed him to close the ticket as resolved. Elias had read this three times. He was a pipeline integrity engineer with sixteen years of field experience and the specific precision that comes from working in a field where miscalculation has a physical consequence. He wrote back explaining why the variance parameters did not apply to this weld configuration. He received an out-of-office reply. He escalated to the division supervisor. He was transferred to a new project.",
        },
        {
          type: "paragraph",
          text: "The tunnel crossing failed on the morning of February 3rd. The section crews working the crossing access shaft at the time of the failure—two men, including Elias Whitehorse, who had been transferred to the same project he had flagged and had been down in the shaft on what was coded as a 'final inspection closure'—were in the access tunnel when the weld section gave way. The second worker, a contractor named Dennis Greenlake, was near the shaft entrance and made it out. Elias was forty meters in. The collapse was partial, then total, over approximately ninety seconds.",
        },
        {
          type: "paragraph",
          text: "The company filed Elias's death as a 'traumatic industrial accident of undetermined origin.' His integrity report was marked resolved and archived. His transfer to the failure site was documented as a 'standard resource allocation.' His body was recovered seventeen days later. He had a wife and two children. His wife, Mina Crow, had been a tribal council environmental coordinator for Standing Rock. She had seen this kind of documentation before—the way the paper trail tidied itself behind a death—and she did not accept it.",
        },
        {
          type: "casefile",
          label: "Case File OBA-D — Preliminary Notes, A. Harris",
          body: "North-Star Midstream Corp's pipeline integrity management system shows Elias Whitehorse's report entered and archived as resolved, with no record of the project manager's response or his escalations. The integrity system's audit log shows three separate modifications to the record's status field in the seventy-two hours after the collapse — modifications made from an IP address registered to North-Star's legal department. Joseph He Crow, Mina's brother and a Standing Rock tribal council member, obtained a partial copy of the integrity system records through a Freedom of Information request; the partial copy shows the timeline discrepancies. He needs the full audit log. The full audit log exists on North-Star's secure servers. It also, potentially, exists on the pipeline's physical acoustic monitoring system — a network of hydrophones installed along the crossing section for structural event recording. If those hydrophones were active during the collapse, they recorded what happened. Nobody has retrieved the hydrophone data. The pipeline operator doesn't want it retrieved.",
        },
        {
          type: "paragraph",
          text: "Oblivia arrived at Standing Rock in December, wearing a water protector t-shirt she had purchased from an online retailer and carrying a hand-painted sign she had made at home that said WATER IS LIFE in both English and a romanization of Lakota that she had found on the internet and that Mina, when she saw it, did not correct because there was too much else to correct and she had learned to allocate her corrections. Oblivia had come as an ally. She said this word often. She meant something by it, but not the right thing.",
        },
      ],
    },
    {
      id: "chapter-two-the-river-record",
      title: "Chapter Two: The River's Record",
      blocks: [
        {
          type: "paragraph",
          text: "The hydrophones were submerged in the crossing section under thirty meters of Missouri River water, encased in the pipeline's structural casing, designed to be accessed by the operator's maintenance team via a winch-and-cable retrieval system from the bank. The operator had not retrieved them. Joseph He Crow's attorneys had formally requested the hydrophone data in three separate filings; North-Star had responded each time that the retrieval would require a 'scheduled maintenance window' and that no such window was currently available.",
        },
        {
          type: "paragraph",
          text: "The hydrophones were still transmitting. They were designed to transmit continuously to a signal repeater on the east bank, which stored acoustic data in a rolling 90-day buffer. The repeater was accessible from the bank. The data in it covered the past ninety days, which included the morning of February 3rd.",
        },
        {
          type: "paragraph",
          text: "Oblivia went to the river alone on the fourth morning, before anyone else was up, carrying her Tibetan singing bowl and her phone. She had decided that the river required a ceremony: a direct communication, steel to stone, the industrial to the elemental. She walked to the pipeline's surface infrastructure at the east bank—the utility boxes, the repeater housing, the cable management structures—and put both hands on the repeater housing and stood there. She could feel the hum of the transmission through the metal casing. She interpreted this as 'the river speaking through the infrastructure, using the pipe as its instrument.' She pressed the bowl against the side of the repeater housing and struck it. She recorded the resulting sound on her phone.",
        },
        {
          type: "paragraph",
          text: "What she had recorded, in the first four seconds before the bowl's tone faded, was the repeater's own acoustic output—the transmitted hydrophone signal bleeding through the housing in the frequency range her phone's microphone could capture. What that signal contained, nested inside the pipeline's structural ambient noise at approximately 340 Hz in the audio spectrum, was a pattern. Alexandrei heard it when she played him the recording at breakfast.",
        },
        {
          type: "quote",
          text: `He took her phone and listened to the recording four times, then looked up. "Play it to Joseph," he said.`,
        },
        {
          type: "quote",
          text: `"It's the river's voice," Oblivia said. "The pipe is amplifying the river's testimony."`,
        },
        {
          type: "quote",
          text: `"There's a pattern in the 340-hertz range," Alexandrei said. "Three short, three long, three short. Repeating. Before the collapse, if Elias knew the hydrophones were transmitting and he had time—" He didn't finish this sentence. He called Joseph He Crow.`,
        },
        {
          type: "document",
          label: "Audio Analysis — A. Harris",
          body: "Recording from east-bank acoustic repeater housing, captured via microphone at close proximity. Within the ambient industrial noise floor, a repeating acoustic signature is present at 0:03-0:12 and repeats at irregular intervals consistent with manual tap transmission. Pattern: three short impacts, three long, three short. Standard Morse Code: S-O-S. Signal embedded in structural resonance of the hydrophone-to-repeater transmission line. The transmission date embedded in the repeater's signal header corresponds to the morning of February 3rd. Elias Whitehorse knew he was in an instrumented section. He used what was there.",
        },
      ],
    },
    {
      id: "chapter-three-joseph-he-crows-filing",
      title: "Chapter Three: Joseph He Crow's Filing",
      blocks: [
        {
          type: "paragraph",
          text: "The repeater data was subpoenaed the following week, based on Alexandrei's audio analysis submitted as supporting documentation to Joseph He Crow's attorneys' emergency court filing. North-Star's legal team filed a motion to suppress on the grounds that the data was proprietary operational information. The court denied the motion. The reason the court denied it was specific: the data had already been partially captured, independently, by a private party's phone recording—Oblivia's recording, which was now public on Instagram, where she had posted it under the caption *The river speaks through the pipe. The infrastructure carries its testimony. Listen.* The data was no longer exclusively within North-Star's control.",
        },
        {
          type: "paragraph",
          text: "The full hydrophone archive, when it was retrieved and analyzed, showed the morning of February 3rd in granular detail. It showed the structural anomalies that preceded the collapse—the sequence of metallic stress signatures that a sixteen-year pipeline integrity engineer would have recognized and known how to identify from inside an access tunnel. It showed, forty-three minutes before the tunnel collapse, the beginning of the tapping pattern. It continued for eleven minutes.",
        },
        {
          type: "paragraph",
          text: "The hydrophone data also showed, analyzed by North-Star's own acoustic engineering firm under subpoena, that the weld failure had been detectable by routine monitoring equipment forty-eight hours before the collapse. The integrity system records showed no alert had been flagged. The three modifications to Elias's report ticket, made from the legal department's IP address, had deleted the auto-alert that would have triggered a shutdown.",
        },
        {
          type: "casefile",
          label: "Field Notes, A. Harris — Final Disposition",
          body: "North-Star Midstream Corp facing federal criminal charges for evidence tampering, reckless endangerment, and wrongful death. Three company executives named in the DOJ filing; the project manager who responded to Elias's escalation is among them. The Department of Energy's pipeline safety office has opened an independent audit of North-Star's entire integrity management system. The pipeline crossing remains shut down pending physical inspection of the full tunnel section. Mina Crow has been designated a federal witness. Joseph He Crow's full civil claim is moving forward with the hydrophone data as primary evidence. Dennis Greenlake, who made it out of the shaft, is a co-plaintiff. Subject purchased a ninety-five-dollar hand-beaded water vessel from a craft seller at the tribal cultural center, logging it as 'a vessel for the river's continued testimony.' She described the pipe ceremony in her newsletter as 'the moment I became a receiver for the earth's buried voice.' This is not untrue in the way she means it. Elias Whitehorse's children are eight and eleven. They know their father left a message. Case closed.",
        },
        {
          type: "paragraph",
          text: "CASE CLOSED (SUBJECTIVE) / UNDER FEDERAL CRIMINAL PROCEEDINGS (MATERIAL)",
        },
      ],
    },
  ],
};
