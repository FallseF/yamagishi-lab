import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const client = createClient({
  projectId: '8kch9h5v',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Set this environment variable before running
  useCdn: false,
});

// Load dictionaries
const jaDict = JSON.parse(readFileSync(join(__dirname, '../src/dictionaries/ja.json'), 'utf-8'));
const enDict = JSON.parse(readFileSync(join(__dirname, '../src/dictionaries/en.json'), 'utf-8'));

async function importSiteSettings() {
  console.log('Importing Site Settings...');

  const doc = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    labName: {
      ja: jaDict.landing.labName,
      en: enDict.landing.labName,
    },
    university: {
      ja: jaDict.landing.university,
      en: enDict.landing.university,
    },
    catchphrase: {
      ja: jaDict.landing.catchphrase,
      en: enDict.landing.catchphrase,
    },
    description: {
      ja: jaDict.landing.description,
      en: enDict.landing.description,
    },
    contactEmail: jaDict.contact.email,
    address: {
      postal: jaDict.access.details.postal,
      ja: jaDict.access.details.addressLine,
      en: enDict.access.details.addressLine,
      building: jaDict.access.details.building,
      buildingEn: enDict.access.details.building,
      room: jaDict.access.details.room,
    },
    directions: {
      ja: jaDict.access.directions.items,
      en: enDict.access.directions.items,
    },
  };

  await client.createOrReplace(doc);
  console.log('✓ Site Settings imported');
}

async function importNews() {
  console.log('Importing News...');

  for (let i = 0; i < jaDict.news.items.length; i++) {
    const jaItem = jaDict.news.items[i];
    const enItem = enDict.news.items[i];

    // Parse date (e.g., "2026.02" -> "2026-02-01")
    const dateParts = jaItem.date.split('.');
    const dateStr = `${dateParts[0]}-${dateParts[1].padStart(2, '0')}-01`;

    const doc = {
      _id: `news-${i}`,
      _type: 'news',
      date: dateStr,
      title: {
        ja: jaItem.text,
        en: enItem.text,
      },
    };

    await client.createOrReplace(doc);
  }

  console.log(`✓ ${jaDict.news.items.length} News items imported`);
}

async function importTeamMembers() {
  console.log('Importing Team Members...');

  // Import PI
  const piDoc = {
    _id: 'team-pi',
    _type: 'teamMember',
    name: {
      ja: jaDict.members.pi.name,
      en: enDict.members.pi.name,
    },
    role: {
      ja: jaDict.members.pi.role,
      en: enDict.members.pi.role,
    },
    category: 'faculty',
    focus: {
      ja: jaDict.members.pi.focus,
      en: enDict.members.pi.focus,
    },
    order: 1,
  };

  await client.createOrReplace(piDoc);
  console.log('✓ Team Members imported');
}

async function importPublications() {
  console.log('Importing Publications...');

  const items = jaDict.achievements.publications.items;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // Extract year from journal string (e.g., "Adv. Mater., 33, 2008062 (2021)")
    const yearMatch = item.journal.match(/\((\d{4})\)/);
    const year = yearMatch ? parseInt(yearMatch[1]) : null;

    const doc = {
      _id: `publication-${i}`,
      _type: 'publication',
      authors: item.authors,
      title: item.title,
      journal: item.journal,
      year: year,
      doi: item.doi,
      note: item.note || null,
      order: i + 1,
    };

    await client.createOrReplace(doc);
  }

  console.log(`✓ ${items.length} Publications imported`);
}

async function importAwards() {
  console.log('Importing Awards...');

  const jaItems = jaDict.achievements.awards.items;
  const enItems = enDict.achievements.awards.items;

  for (let i = 0; i < jaItems.length; i++) {
    const jaItem = jaItems[i];
    const enItem = enItems[i];

    const doc = {
      _id: `award-${i}`,
      _type: 'award',
      date: jaItem.date,
      title: {
        ja: jaItem.title,
        en: enItem.title,
      },
      order: i + 1,
    };

    await client.createOrReplace(doc);
  }

  console.log(`✓ ${jaItems.length} Awards imported`);
}

async function importResearchAreas() {
  console.log('Importing Research Areas...');

  const jaAreas = jaDict.research.areas;
  const enAreas = enDict.research.areas;

  for (let i = 0; i < jaAreas.length; i++) {
    const jaArea = jaAreas[i];
    const enArea = enAreas[i];

    const doc = {
      _id: `research-${i}`,
      _type: 'researchArea',
      title: {
        ja: jaArea.title,
        en: enArea.title,
      },
      summary: {
        challenge: {
          ja: jaArea.summary.challenge,
          en: enArea.summary.challenge,
        },
        approach: {
          ja: jaArea.summary.approach,
          en: enArea.summary.approach,
        },
        outcome: {
          ja: jaArea.summary.outcome,
          en: enArea.summary.outcome,
        },
      },
      description: {
        ja: jaArea.description,
        en: enArea.description,
      },
      order: i + 1,
    };

    await client.createOrReplace(doc);
  }

  console.log(`✓ ${jaAreas.length} Research Areas imported`);
}

async function main() {
  console.log('Starting import to Sanity...\n');

  try {
    await importSiteSettings();
    await importNews();
    await importTeamMembers();
    await importPublications();
    await importAwards();
    await importResearchAreas();

    console.log('\n✅ All data imported successfully!');
  } catch (error) {
    console.error('Error during import:', error);
    process.exit(1);
  }
}

main();
