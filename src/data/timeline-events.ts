// src/data/timeline-events.ts
//
// Researched historical milestones for "The First Dawn" timeline.
// Every entry carries at least one source. Where a date or figure is
// disputed among historians, that is noted in `description` rather than
// presented as settled fact.

export interface TimelineSource {
  label: string;
  url?: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  /** Optional precise date, e.g. "23 March" — omit if only the year is well established */
  date?: string;
  title: string;
  description: string;
  significance: string;
  location?: string;
  people?: string[];
  /** Marks a "spotlight" entry that should render larger/more prominently on the timeline */
  spotlight?: boolean;
  sources: TimelineSource[];
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1857-rebellion",
    year: 1857,
    title: "The Rebellion of 1857",
    description:
      "A widespread uprising against East India Company rule broke out among Indian soldiers and spread across much of northern and central India. Its suppression ended Mughal rule and led the British Crown to take direct control of India the following year, reshaping the political landscape in which the later Muslim political movements would emerge.",
    significance:
      "Marks the end of Mughal authority and the beginning of direct British Crown rule, the backdrop against which Muslim political organizing in South Asia later developed.",
    location: "Northern and Central India",
    sources: [
      {
        label: "Britannica — Indian Rebellion of 1857",
        url: "https://www.britannica.com/event/Indian-Mutiny",
      },
    ],
  },
  {
    id: "1875-aligarh",
    year: 1875,
    title: "Aligarh College founded",
    description:
      "Sir Syed Ahmad Khan founded the Muhammadan Anglo-Oriental College at Aligarh, aiming to modernize Muslim education in South Asia by combining Western-style curricula with Islamic studies. The institution later became Aligarh Muslim University and trained a generation of Muslim political leaders.",
    significance:
      "Seeded the Muslim modernist and political leadership class that would later shape the Pakistan Movement.",
    location: "Aligarh, British India",
    people: ["Sir Syed Ahmad Khan"],
    sources: [
      {
        label: "Aligarh Muslim University — History",
        url: "https://www.amu.ac.in/about-amu/history",
      },
    ],
  },
  {
    id: "1906-muslim-league",
    year: 1906,
    title: "All-India Muslim League founded",
    description:
      "Muslim political leaders founded the All-India Muslim League in Dhaka to represent and advance Muslim political interests in British India, initially favoring cooperation with the Crown while safeguarding Muslim rights within a united India.",
    significance: "Became the primary political vehicle for the Pakistan Movement decades later.",
    location: "Dhaka, British India",
    sources: [
      {
        label: "Britannica — Muslim League",
        url: "https://www.britannica.com/topic/Muslim-League",
      },
    ],
  },
  {
    id: "1916-lucknow-pact",
    year: 1916,
    title: "The Lucknow Pact",
    description:
      "The Indian National Congress and the All-India Muslim League reached a rare agreement on constitutional reforms and separate electorates for Muslims, briefly aligning the two organizations against British rule.",
    significance:
      "A high point of Hindu–Muslim political cooperation before the two movements diverged in subsequent decades.",
    location: "Lucknow, British India",
    sources: [
      { label: "Britannica — Lucknow Pact", url: "https://www.britannica.com/event/Lucknow-Pact" },
    ],
  },
  {
    id: "1930-allahabad-address",
    year: 1930,
    title: "Iqbal's Allahabad Address",
    description:
      "In his presidential address to the Muslim League's annual session, the poet-philosopher Muhammad Iqbal proposed consolidating Muslim-majority provinces in northwestern India into a single autonomous state within (or apart from) a future Indian federation — an early articulation of what became the Pakistan idea.",
    significance:
      "Widely regarded as the first substantive articulation of a separate Muslim state in the northwest of the subcontinent.",
    location: "Allahabad, British India",
    people: ["Allama Muhammad Iqbal"],
    sources: [
      {
        label: "Iqbal Academy Pakistan — Allahabad Address",
        url: "https://www.allamaiqbal.com/works/prose/englishprose/speeches/allahabad_address/index.htm",
      },
    ],
  },
  {
    id: "1933-now-or-never",
    year: 1933,
    title: 'The word "Pakistan" is coined',
    description:
      'Chaudhry Rahmat Ali, a Cambridge-based activist, published the pamphlet "Now or Never," proposing the name "Pakistan" as an acronym-style label for a proposed Muslim homeland comprising Punjab, Afghania (NWFP), Kashmir, Sindh, and Baluchistan.',
    significance:
      "Gave the future nation its name, though the proposal itself had limited traction among mainstream Muslim League leadership at the time.",
    location: "Cambridge, England",
    people: ["Chaudhry Rahmat Ali"],
    sources: [
      {
        label: 'Columbia University — "Now or Never" pamphlet (digitized)',
        url: "http://www.columbia.edu/itc/mealac/pritchett/00islamlinks/txt_rahmatali_1933.html",
      },
    ],
  },
  {
    id: "1937-elections",
    year: 1937,
    title: "1937 provincial elections",
    description:
      "Under the Government of India Act 1935, provincial elections were held across British India. The Muslim League performed relatively poorly against the Indian National Congress in most Muslim-majority provinces, a result that sharpened League leaders' sense of the need for a distinct political and constitutional path for Muslims.",
    significance:
      "A turning point that pushed the Muslim League toward the more assertive separatist politics of the following decade.",
    location: "British India",
    sources: [
      {
        label: "Britannica — Government of India Act 1935",
        url: "https://www.britannica.com/topic/Government-of-India-Act",
      },
    ],
  },
  {
    id: "1940-lahore-resolution",
    year: 1940,
    date: "23 March",
    title: "The Lahore Resolution",
    description:
      'At its annual session at Minto Park in Lahore (22–24 March 1940), the All-India Muslim League adopted a resolution calling for Muslim-majority regions in the northwest and east of British India to be "grouped to constitute independent states." The resolution did not use the word "Pakistan" and was deliberately vague about whether it envisioned one state or several — a point historians still debate. Opposing newspapers dubbed it the "Pakistan Resolution," and the name stuck.',
    significance:
      "The foundational political document of the Pakistan Movement; 23 March is now marked in Pakistan as Republic Day.",
    location: "Minto Park (now Iqbal Park), Lahore",
    people: ["Muhammad Ali Jinnah", "A. K. Fazlul Huq", "Sir Sikandar Hayat Khan"],
    spotlight: true,
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
      'The British Cabinet Mission proposed a federal structure intended to keep India united; its failure, combined with provincial elections in which the Muslim League won the overwhelming majority of Muslim seats, hardened the push for partition. On 16 August 1946, League-called "Direct Action Day" protests were followed by severe communal violence in Calcutta and elsewhere.',
    significance:
      "The collapse of a unified constitutional settlement made partition politically unavoidable.",
    location: "British India",
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
      "Following the Mountbatten Plan announced in June 1947, British India was partitioned into the independent states of India and Pakistan. Pakistan came into existence on 14 August 1947 (India followed on 15 August), comprising West Pakistan and East Pakistan (formerly East Bengal), separated by more than 1,000 miles of Indian territory. The Radcliffe Line, drawn hastily to divide Punjab and Bengal, triggered one of the largest mass migrations in history and widespread communal violence, with death toll estimates varying widely among historians.",
    significance:
      "The founding moment of the Pakistani state, and the beginning of the Partition migration that reshaped the subcontinent.",
    location: "Karachi (first capital); Punjab and Bengal (Radcliffe Line)",
    people: ["Muhammad Ali Jinnah", "Lord Mountbatten"],
    spotlight: true,
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
      "Muhammad Ali Jinnah, Pakistan's founding Governor-General, died on 11 September 1948, less than 13 months after independence. That same period saw the first India–Pakistan war, fought over the contested former princely state of Jammu and Kashmir following its disputed accession to India.",
    significance:
      "The new state lost its founding leader within its first year while simultaneously fighting its first war, setting the tone for decades of India–Pakistan tension over Kashmir.",
    location: "Karachi; Jammu and Kashmir",
    people: ["Muhammad Ali Jinnah"],
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
    title: "First Constitution adopted",
    description:
      "Pakistan adopted its first constitution, declaring it an Islamic Republic and formally ending the status of Governor-General inherited from British dominion arrangements.",
    significance:
      "Pakistan's first attempt at a permanent constitutional framework, though it was suspended within two years.",
    sources: [
      {
        label: "National Assembly of Pakistan — Constitutional history",
        url: "https://na.gov.pk/en/content.php?id=83",
      },
    ],
  },
  {
    id: "1958-martial-law",
    year: 1958,
    title: "First martial law",
    description:
      "General Ayub Khan suspended the 1956 constitution and imposed Pakistan's first period of martial law, later assuming the presidency himself.",
    significance:
      "Began a recurring pattern of military intervention in Pakistani civilian government.",
    people: ["Ayub Khan"],
    sources: [
      { label: "Britannica — Ayub Khan", url: "https://www.britannica.com/biography/Ayub-Khan" },
    ],
  },
  {
    id: "1965-war",
    year: 1965,
    title: "Second India–Pakistan war",
    description:
      "A second major war between India and Pakistan, fought primarily over Kashmir, ended in a stalemate and a ceasefire brokered with Soviet mediation at Tashkent.",
    significance:
      "Reinforced Kashmir as the central, unresolved flashpoint between the two countries.",
    sources: [
      {
        label: "Britannica — Indo-Pakistani War of 1965",
        url: "https://www.britannica.com/event/Indo-Pakistani-War-of-1965",
      },
    ],
  },
  {
    id: "1970-elections",
    year: 1970,
    title: "First general elections on universal franchise",
    description:
      "Pakistan held its first general election under universal adult franchise. The Awami League, led by Sheikh Mujibur Rahman, won an overall majority based almost entirely on votes from East Pakistan, but was not permitted to form the government — a decision that precipitated the crisis leading to the following year's war.",
    significance:
      "The failure to honor the election result directly triggered the 1971 crisis and the breakup of Pakistan.",
    people: ["Sheikh Mujibur Rahman"],
    sources: [
      {
        label: "Britannica — Bangladesh Liberation War (background)",
        url: "https://www.britannica.com/event/Bangladesh-Liberation-War",
      },
    ],
  },
  {
    id: "1971-bangladesh",
    year: 1971,
    date: "16 December",
    title: "Bangladesh's independence",
    description:
      "Following months of civil war and a subsequent conflict with India, East Pakistan seceded and became the independent state of Bangladesh, with Pakistani forces surrendering in Dhaka on 16 December 1971. Casualty and atrocity figures from the conflict remain historically disputed.",
    significance:
      "The most significant rupture in Pakistan's history, ending the original two-wing state established in 1947.",
    location: "Dhaka",
    spotlight: true,
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
      "Pakistan adopted a new constitution establishing a parliamentary system, which — with numerous amendments and periods of suspension under later military rule — remains the country's constitutional framework today.",
    significance: "The current legal foundation of the Pakistani state.",
    people: ["Zulfikar Ali Bhutto"],
    sources: [
      {
        label: "National Assembly of Pakistan — Constitutional history",
        url: "https://na.gov.pk/en/content.php?id=83",
      },
    ],
  },
  {
    id: "1977-zia-coup",
    year: 1977,
    title: "General Zia-ul-Haq's coup",
    description:
      "General Muhammad Zia-ul-Haq deposed Prime Minister Zulfikar Ali Bhutto in a military coup and imposed martial law, later executing Bhutto in 1979 following a controversial trial.",
    significance:
      "Began an 11-year period of military rule and a program of state-led Islamization.",
    people: ["Muhammad Zia-ul-Haq", "Zulfikar Ali Bhutto"],
    sources: [
      { label: "Britannica — Zia-ul-Haq", url: "https://www.britannica.com/biography/Zia-ul-Haq" },
    ],
  },
  {
    id: "1988-benazir",
    year: 1988,
    title: "Benazir Bhutto becomes Prime Minister",
    description:
      "Following General Zia-ul-Haq's death in a plane crash, Benazir Bhutto led the Pakistan People's Party to victory in elections and became the first woman to head the government of a Muslim-majority country.",
    significance:
      "A return to civilian democratic government after over a decade of military rule.",
    people: ["Benazir Bhutto"],
    sources: [
      {
        label: "Britannica — Benazir Bhutto",
        url: "https://www.britannica.com/biography/Benazir-Bhutto",
      },
    ],
  },
  {
    id: "1998-chagai",
    year: 1998,
    date: "28 May",
    title: "Chagai nuclear tests",
    description:
      "Pakistan conducted a series of underground nuclear tests at the Chagai Hills in Balochistan, shortly after India's own tests earlier that month, formally announcing itself as a nuclear-armed state.",
    significance: "Cemented the nuclear dimension of the India–Pakistan rivalry.",
    location: "Chagai, Balochistan",
    sources: [
      {
        label: "Britannica — Pakistan nuclear program",
        url: "https://www.britannica.com/place/Pakistan/Nuclear-weapons",
      },
    ],
  },
  {
    id: "1999-musharraf",
    year: 1999,
    title: "Kargil conflict and Musharraf's coup",
    description:
      "A limited but intense conflict with India in the Kargil sector of Kashmir was followed, in October, by General Pervez Musharraf's bloodless military coup against Prime Minister Nawaz Sharif.",
    significance: "Began nearly a decade of military-led government under Musharraf.",
    people: ["Pervez Musharraf", "Nawaz Sharif"],
    sources: [
      {
        label: "Britannica — Kargil conflict",
        url: "https://www.britannica.com/event/Kargil-conflict",
      },
    ],
  },
  {
    id: "2008-civilian-return",
    year: 2008,
    title: "Return to civilian rule",
    description:
      "Following Benazir Bhutto's assassination in December 2007 during an election campaign, general elections in 2008 returned a civilian, PPP-led coalition government, and President Musharraf resigned later that year.",
    significance: "Ended nearly a decade of Musharraf-era military-backed rule.",
    people: ["Benazir Bhutto", "Pervez Musharraf"],
    sources: [
      {
        label: "Britannica — Benazir Bhutto",
        url: "https://www.britannica.com/biography/Benazir-Bhutto",
      },
    ],
  },
  {
    id: "2010-18th-amendment",
    year: 2010,
    title: "18th Constitutional Amendment",
    description:
      "Parliament passed the 18th Amendment, reversing many powers previous military rulers had concentrated in the presidency and devolving significant authority to Pakistan's provinces.",
    significance:
      "One of the most substantial rebalancings of federal versus provincial power in Pakistan's constitutional history.",
    sources: [
      {
        label: "National Assembly of Pakistan — 18th Amendment",
        url: "https://na.gov.pk/en/content.php?id=83",
      },
    ],
  },
  {
    id: "2018-imran-khan",
    year: 2018,
    title: "Imran Khan elected Prime Minister",
    description:
      "Former cricket captain Imran Khan's Pakistan Tehreek-e-Insaf (PTI) won the general election, and Khan became Prime Minister, ending decades of alternating PML-N and PPP-led governments.",
    significance: "Brought a new political force to power for the first time at the federal level.",
    people: ["Imran Khan"],
    sources: [
      { label: "Britannica — Imran Khan", url: "https://www.britannica.com/biography/Imran-Khan" },
    ],
  },
  {
    id: "2022-khan-ousted",
    year: 2022,
    title: "Imran Khan removed; historic floods",
    description:
      "Prime Minister Imran Khan was removed from office in April 2022 via a no-confidence vote, and Shehbaz Sharif formed a new coalition government. Later that year, catastrophic monsoon flooding submerged roughly a third of the country at points, displacing millions.",
    significance:
      "A period of acute political and economic instability compounded by a climate-linked humanitarian disaster.",
    people: ["Imran Khan", "Shehbaz Sharif"],
    sources: [
      {
        label: "Reuters — Imran Khan ousted",
        url: "https://www.reuters.com/world/asia-pacific/pakistans-imran-khan-ousted-no-confidence-vote-2022-04-10/",
      },
    ],
  },
  {
    id: "2024-election",
    year: 2024,
    date: "8 February",
    title: "2024 general election",
    description:
      "Pakistan held a general election marked by the PTI's removal from the ballot symbol and widespread allegations of rigging. PTI-backed independents nonetheless won the largest single bloc of directly-elected seats, but a PML-N/PPP-led coalition formed government, returning Shehbaz Sharif to the premiership while Asif Ali Zardari was elected President.",
    significance:
      "One of the most contested elections in Pakistan's recent history, with international observers raising concerns about its fairness.",
    people: ["Shehbaz Sharif", "Imran Khan", "Asif Ali Zardari"],
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
