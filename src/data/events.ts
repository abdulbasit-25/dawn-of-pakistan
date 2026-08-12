import type { HistoricalEvent } from "@/types";

/** Core historical timeline milestones used by the interactive timeline page. */
export const events: HistoricalEvent[] = [
  {
    id: "1857-rebellion",
    year: 1857,
    title: "The Rebellion of 1857",
    description:
      "A widespread uprising against East India Company rule broke out among Indian soldiers and civilians. Its suppression ended Mughal authority and led the British Crown to take direct control of India, reshaping the political context for later Muslim political organization.",
    significance:
      "Marks the end of Mughal rule and the start of direct Crown governance, the backdrop against which Muslim political identity in South Asia evolved.",
    location: "Northern and Central India",
    verification: "verified",
    sources: [
      {
        label: "Britannica — Indian Rebellion of 1857",
        url: "https://www.britannica.com/event/Indian-Mutiny",
      },
    ],
  },
  {
    id: "1906-muslim-league",
    year: 1906,
    title: "All-India Muslim League founded",
    description:
      "Muslim leaders established the All-India Muslim League in Dhaka to represent Muslim political rights and to work within the British Indian constitutional framework while preserving Muslim identity.",
    significance:
      "Became the central political vehicle for the movement that would lead to Pakistan.",
    location: "Dhaka, British India",
    verification: "verified",
    sources: [
      {
        label: "Britannica — Muslim League",
        url: "https://www.britannica.com/topic/Muslim-League",
      },
    ],
  },
  {
    id: "1930-allahabad-address",
    year: 1930,
    title: "Iqbal's Allahabad Address",
    description:
      "Allama Muhammad Iqbal, then president of the Muslim League, called for Muslim-majority provinces in northwestern India to be grouped into a single autonomous unit, articulating an early vision of a separate political destiny for Muslims.",
    significance:
      "Often cited as the first substantial articulation of a separate Muslim homeland in northwestern South Asia.",
    location: "Allahabad, British India",
    people: ["Allama Muhammad Iqbal"],
    verification: "verified",
    sources: [
      {
        label: "Iqbal Academy Pakistan — Allahabad Address",
        url: "https://www.allamaiqbal.com/works/prose/englishprose/speeches/allahabad_address/index.htm",
      },
    ],
  },
  {
    id: "1940-lahore-resolution",
    year: 1940,
    date: "23 March",
    title: "The Lahore Resolution",
    description:
      "At the Muslim League session in Lahore, delegates adopted a resolution calling for Muslim-majority regions to be grouped into independent states. The language was deliberately broad, and historians still debate whether the League intended one state or several.",
    significance:
      "The foundational political text of the Pakistan Movement; 23 March is now observed in Pakistan as Republic Day.",
    location: "Minto Park (now Iqbal Park), Lahore",
    people: ["Muhammad Ali Jinnah", "A. K. Fazlul Huq", "Sir Sikandar Hayat Khan"],
    spotlight: true,
    image: "Placeholder: archival photograph of the Lahore Resolution session in 1940.",
    verification: "verified",
    sources: [
      {
        label: "Wikipedia — Lahore Resolution",
        url: "https://en.wikipedia.org/wiki/Lahore_Resolution",
      },
      {
        label: "Banglapedia — Lahore Resolution",
        url: "https://en.banglapedia.org/index.php/Lahore_Resolution",
      },
    ],
  },
  {
    id: "1946-direct-action",
    year: 1946,
    title: "Cabinet Mission, elections, and Direct Action Day",
    description:
      "The British Cabinet Mission proposed a federal settlement for India; its failure and the Muslim League's strong showing in Muslim constituencies led to a sharper push for partition. On 16 August, League-called protests escalated into communal violence in Calcutta and elsewhere.",
    significance: "Faded hopes for a united India, making partition politically inevitable.",
    location: "British India",
    verification: "verified",
    sources: [
      {
        label: "Britannica — Cabinet Mission",
        url: "https://www.britannica.com/topic/Cabinet-Mission",
      },
    ],
  },
  {
    id: "1947-independence",
    year: 1947,
    date: "14 August",
    title: "Independence and Partition",
    description:
      "On 14 August, Pakistan became independent under the Mountbatten Plan. The partition drew the Radcliffe Line through Punjab and Bengal, triggering one of the largest human migrations in history and widespread communal violence.",
    significance:
      "The founding moment of the Pakistani state and the opening of a new chapter for South Asia.",
    location: "Karachi; Punjab and Bengal border regions",
    people: ["Muhammad Ali Jinnah", "Lord Mountbatten"],
    spotlight: true,
    image: "Placeholder: archival photograph of 14 August 1947 celebrations in Karachi.",
    verification: "verified",
    sources: [
      {
        label: "Britannica — Partition of India",
        url: "https://www.britannica.com/event/Partition-of-India",
      },
    ],
  },
  {
    id: "1948-jinnah-kashmir",
    year: 1948,
    title: "Jinnah's death and the first Kashmir war",
    description:
      "Muhammad Ali Jinnah died on 11 September 1948, and Pakistan was engaged in its first war with India over the contested princely state of Jammu and Kashmir.",
    significance:
      "The new country lost its founding leader within a year while also entering a long-term conflict over Kashmir.",
    location: "Karachi; Jammu and Kashmir",
    people: ["Muhammad Ali Jinnah"],
    verification: "verified",
    sources: [
      {
        label: "Britannica — Muhammad Ali Jinnah",
        url: "https://www.britannica.com/biography/Mohammed-Ali-Jinnah",
      },
    ],
  },
  {
    id: "1956-constitution",
    year: 1956,
    title: "First constitution adopted",
    description:
      "Pakistan adopted its first constitution and declared itself the Islamic Republic of Pakistan, replacing the Governor-General arrangement inherited from the British dominion.",
    significance:
      "Marked the first attempt to establish a permanent constitutional framework for the new country.",
    verification: "verified",
    sources: [
      {
        label: "National Assembly of Pakistan — Constitutional history",
        url: "https://na.gov.pk/en/content.php?id=83",
      },
    ],
  },
  {
    id: "1965-war",
    year: 1965,
    title: "Second India–Pakistan war",
    description:
      "A second major war against India, fought mainly over Kashmir, ended in a ceasefire brokered at Tashkent after intense fighting along the ceasefire line.",
    significance:
      "Reinforced Kashmir as the central unresolved flashpoint between the two nations.",
    verification: "verified",
    sources: [
      {
        label: "Britannica — Indo-Pakistani War of 1965",
        url: "https://www.britannica.com/event/Indo-Pakistani-War-of-1965",
      },
    ],
  },
  {
    id: "1971-bangladesh",
    year: 1971,
    date: "16 December",
    title: "Bangladesh's independence",
    description:
      "After a civil war in East Pakistan and a subsequent Indian intervention, East Pakistan broke away and became the independent state of Bangladesh.",
    significance:
      "The most significant territorial rupture in Pakistan's history, ending the original two-wing state established in 1947.",
    location: "Dhaka",
    spotlight: true,
    verification: "verified",
    sources: [
      {
        label: "Britannica — Bangladesh Liberation War",
        url: "https://www.britannica.com/event/Bangladesh-Liberation-War",
      },
    ],
  },
  {
    id: "1973-constitution",
    year: 1973,
    title: "1973 Constitution adopted",
    description:
      "Pakistan adopted a new constitution establishing a parliamentary structure, which remains the basis of Pakistan's constitutional order despite later amendments and suspensions.",
    significance: "The current legal foundation of the federal state.",
    people: ["Zulfikar Ali Bhutto"],
    verification: "verified",
    sources: [
      {
        label: "National Assembly of Pakistan — Constitutional history",
        url: "https://na.gov.pk/en/content.php?id=83",
      },
    ],
  },
  {
    id: "1998-chagai",
    year: 1998,
    date: "28 May",
    title: "Chagai nuclear tests",
    description:
      "Pakistan conducted underground nuclear tests in Balochistan, declaring itself a nuclear weapons state shortly after India carried out its own tests.",
    significance: "Cemented the nuclear dimension of South Asian security dynamics.",
    location: "Chagai, Balochistan",
    verification: "verified",
    sources: [
      {
        label: "Britannica — Pakistan nuclear program",
        url: "https://www.britannica.com/place/Pakistan/Nuclear-weapons",
      },
    ],
  },
  {
    id: "2008-civilian-return",
    year: 2008,
    title: "Return to civilian rule",
    description:
      "General elections returned a civilian federal government after nearly a decade of military-backed rule, ending President Musharraf's direct hold on power.",
    significance:
      "Marked the restoration of an elected government after a long period of military influence.",
    people: ["Benazir Bhutto", "Pervez Musharraf"],
    verification: "verified",
    sources: [
      {
        label: "Britannica — Benazir Bhutto",
        url: "https://www.britannica.com/biography/Benazir-Bhutto",
      },
    ],
  },
  {
    id: "2024-election",
    year: 2024,
    date: "8 February",
    title: "2024 general election",
    description:
      "Pakistan held a general election marked by the removal of PTI's ballot symbol and allegations of irregularities, while a PML-N/PPP coalition formed government after contested results.",
    significance:
      "One of the most disputed recent elections, reflecting continuing political polarization and institutional tension.",
    people: ["Shehbaz Sharif", "Imran Khan", "Asif Ali Zardari"],
    verification: "verified",
    sources: [
      {
        label: "House of Commons Library — Pakistan: 2024 general election",
        url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10028/",
      },
      {
        label: "Wikipedia — 2024 Pakistani general election",
        url: "https://en.wikipedia.org/wiki/2024_Pakistani_general_election",
      },
    ],
  },
];
