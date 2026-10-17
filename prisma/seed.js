import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

// Laravel only accepts bcrypt hashes that start with $2y$
const laravelHash = (plain) =>
  bcrypt.hashSync(plain, 12).replace(/^\$2[ab]\$/, () => '$2y$')

async function main() {
  const now = new Date()

  const user = await prisma.user.upsert({
    where: { email: 'alex.rivera@liceo.edu.ph' },
    update: {},
    create: {
      firstName: 'Alex',
      lastName: 'Rivera',
      department: 'College of Information Technology',
      email: 'alex.rivera@liceo.edu.ph',
      phone: '+63 917 123 4567',
      password: laravelHash('Password123!'),
      createdAt: now,
      updatedAt: now,
    },
  })

  const existing = await prisma.mediaRequest.count({ where: { userId: user.id } })
  if (existing > 0) return

  const base = { userId: user.id, createdAt: now, updatedAt: now }

  await prisma.mediaRequest.createMany({
    data: [
      {
        ...base,
        eventTitle: 'CIT Days Opening Ceremony',
        requestedServices: ['photo', 'video', 'livestream'],
        eventDate: new Date('2026-10-22'),
        callTime: '08:30 AM - 12:00 PM',
        venue: 'Paseo del Rio Campus Grand Atrium',
        targetDeliveryDate: new Date('2026-10-29'),
        coverageDirectives: 'Deans entrance procession and ribbon cutting.',
        status: 'approved',
      },
      {
        ...base,
        eventTitle: 'Liceo Hackathon 2026: Pitch Night',
        requestedServices: ['video', 'livestream'],
        eventDate: new Date('2026-11-05'),
        callTime: '05:00 PM - 09:00 PM',
        venue: 'Engineering Complex Hall B',
        targetDeliveryDate: new Date('2026-11-12'),
        coverageDirectives: 'Multicam livestream and a highlight reel.',
        status: 'pending',
      },
      {
        ...base,
        eventTitle: 'Research Colloquium 2026',
        requestedServices: ['photo'],
        eventDate: new Date('2026-10-30'),
        callTime: '02:30 PM - 05:00 PM',
        venue: 'Science Hall A',
        targetDeliveryDate: new Date('2026-11-06'),
        coverageDirectives: null,
        status: 'denied',
      },
      {
        ...base,
        eventTitle: 'General Assembly 2026',
        requestedServices: ['photo', 'video'],
        eventDate: new Date('2026-09-28'),
        callTime: '09:00 AM - 04:00 PM',
        venue: 'Liceo Civic Gym',
        targetDeliveryDate: new Date('2026-10-05'),
        coverageDirectives: 'Full event coverage.',
        status: 'completed',
      },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())